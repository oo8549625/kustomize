#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

error(){
  local message="${1:?missing message}"
  echo "ERROR: ${message}"
  exit 1
}

retry_while() {
    local -r cmd="${1:?cmd is missing}"
    local -r retries="${2:-12}"
    local -r sleep_time="${3:-5}"
    local return_value=1

    read -r -a command <<< "$cmd"
    for ((i = 1 ; i <= retries ; i+=1 )); do
        "${command[@]}" && return_value=0 && break
        sleep "$sleep_time"
    done
    return $return_value
}

replace_in_file() {
    local filename="${1:?filename is required}"
    local match_regex="${2:?match regex is required}"
    local substitute_regex="${3:?substitute regex is required}"
    local posix_regex=${4:-true}

    local result

    # We should avoid using 'sed in-place' substitutions
    # 1) They are not compatible with files mounted from ConfigMap(s)
    # 2) We found incompatibility issues with Debian10 and "in-place" substitutions
    local -r del=$'\001' # Use a non-printable character as a 'sed' delimiter to avoid issues
    if [[ $posix_regex = true ]]; then
        result="$(sed -E "s${del}${match_regex}${del}${substitute_regex}${del}g" "$filename")"
    else
        result="$(sed "s${del}${match_regex}${del}${substitute_regex}${del}g" "$filename")"
    fi
    echo "$result" > "$filename"
}

kafka_conf_set() {
    local file="${1:?missing file}"
    local key="${2:?missing key}"
    local value="${3:?missing value}"

    # Check if the value was set before
    if grep -q "^[#\\s]*$key\s*=.*" "$file"; then
        # Update the existing key
        replace_in_file "$file" "^[#\\s]*${key}\s*=.*" "${key}=${value}" false
    else
        # Add a new key
        printf '\n%s=%s' "$key" "$value" >>"$file"
    fi
}

replace_placeholder() {
  local placeholder="${1:?missing placeholder value}"
  local password="${2:?missing password value}"
  sed -i "s/$placeholder/$password/g" "$KAFKA_CONFIG_FILE"
}

append_file_to_kafka_conf() {
    local file="${1:?missing source file}"
    local conf="${2:?missing kafka conf file}"

    cat "$1" >> "$2"
}

configure_external_access() {
  # Configure external hostname
  if [[ -f "/shared/external-host.txt" ]]; then
    host=$(cat "/shared/external-host.txt")
  elif [[ -n "${EXTERNAL_ACCESS_HOST:-}" ]]; then
    host="$EXTERNAL_ACCESS_HOST"
  elif [[ -n "${EXTERNAL_ACCESS_HOSTS_LIST:-}" ]]; then
    read -r -a hosts <<<"$(tr ',' ' ' <<<"${EXTERNAL_ACCESS_HOSTS_LIST}")"
    host="${hosts[$POD_ID]}"
  elif [[ "$EXTERNAL_ACCESS_HOST_USE_PUBLIC_IP" =~ ^(yes|true)$ ]]; then
    host=$(curl -s https://ipinfo.io/ip)
  else
    error "External access hostname not provided"
  fi

  # Configure external port
  if [[ -f "/shared/external-port.txt" ]]; then
    port=$(cat "/shared/external-port.txt")
  elif [[ -n "${EXTERNAL_ACCESS_PORT:-}" ]]; then
    if [[ "${EXTERNAL_ACCESS_PORT_AUTOINCREMENT:-}" =~ ^(yes|true)$ ]]; then
      port="$((EXTERNAL_ACCESS_PORT + POD_ID))"
    else
      port="$EXTERNAL_ACCESS_PORT"
    fi
  elif [[ -n "${EXTERNAL_ACCESS_PORTS_LIST:-}" ]]; then
    read -r -a ports <<<"$(tr ',' ' ' <<<"${EXTERNAL_ACCESS_PORTS_LIST}")"
    port="${ports[$POD_ID]}"
  else
    error "External access port not provided"
  fi
  # Configure Kafka advertised listeners
  sed -i -E "s|^(advertised\.listeners=\S+)$|\1,EXTERNAL://${host}:${port}|" "$KAFKA_CONFIG_FILE"
}

export KAFKA_CONFIG_FILE=/config/server.properties
cp /configmaps/server.properties $KAFKA_CONFIG_FILE

# Get pod ID and role, last and second last fields in the pod name respectively
POD_ID=$(echo "$MY_POD_NAME" | rev | cut -d'-' -f 1 | rev)
POD_ROLE=$(echo "$MY_POD_NAME" | rev | cut -d'-' -f 2 | rev)

# Configure node.id and/or broker.id
if [[ -f "/bitnami/kafka/data/meta.properties" ]]; then
    if grep -q "broker.id" /bitnami/kafka/data/meta.properties; then
      ID="$(grep "broker.id" /bitnami/kafka/data/meta.properties | awk -F '=' '{print $2}')"
      kafka_conf_set "$KAFKA_CONFIG_FILE" "node.id" "$ID"
    else
      ID="$(grep "node.id" /bitnami/kafka/data/meta.properties | awk -F '=' '{print $2}')"
      kafka_conf_set "$KAFKA_CONFIG_FILE" "node.id" "$ID"
    fi
else
    ID=$((POD_ID + KAFKA_MIN_ID))
    kafka_conf_set "$KAFKA_CONFIG_FILE" "node.id" "$ID"
fi
replace_placeholder "advertised-address-placeholder" "${MY_POD_NAME}.kafka-${POD_ROLE}-headless.kafka.svc.cluster.local"
if [[ "${EXTERNAL_ACCESS_ENABLED:-false}" =~ ^(yes|true)$ ]]; then
  configure_external_access
fi
if [ -f /secret-config/server-secret.properties ]; then
  append_file_to_kafka_conf /secret-config/server-secret.properties $KAFKA_CONFIG_FILE
fi