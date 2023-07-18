"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[924],{9903:(T,d,c)=>{c.d(d,{O6:()=>e,Ql:()=>$,ZO:()=>g,f0:()=>h,qV:()=>E,we:()=>v,xu:()=>y,zj:()=>w});var _=c(31075),o=c(8373),m=c(19370),i=c(91720);function v(t,a){const n=[P()],s=["$__interval"];let l;return t===i.B5.QuantileOverTime&&(s.push("0.95"),n.push({name:"Quantile",type:"number"})),a&&(n.push({name:"By label",type:"string",restParam:!0,optional:!0}),l=(0,o.ZI)(`__${t}_by`)),{id:t,name:(0,o.t7)(t),params:n,defaultParams:s,alternativesKey:"range function",category:i.Ly.RangeFunctions,orderRank:i.jK.RangeVectorFunction,renderer:p,addOperationHandler:h,paramChangedHandler:l,explainHandler:(r,b)=>{let u=m.r8.find(f=>f.insertText===r.id)?.documentation??"";return r.params[0]==="$__interval"?`${u} \`$__interval\` is a variable that will be replaced with the [calculated interval](https://grafana.com/docs/grafana/latest/dashboards/variables/add-template-variables/#__interval) based on the time range and width of the graph. In Dashboards, you can affect the interval variable using **Max data points** and **Min interval**. You can find these options under **Query options** right of the data source select dropdown.`:`${u} The [range vector](https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation) is set to \`${r.params[0]}\`.`}}}function e(t){const a=v(t,!0),n=a.params.slice(0,-1);return[a,{id:`__${t}_by`,name:`${(0,o.t7)(t)} by`,params:[...n,{name:"Label",type:"string",restParam:!0,optional:!0,editor:_.g}],defaultParams:[...a.defaultParams,""],alternativesKey:"range function with grouping",category:i.Ly.RangeFunctions,renderer:x(t,"by"),paramChangedHandler:(0,o.j8)(t),explainHandler:(0,o.Sp)(t,"by"),addOperationHandler:h,hideFromList:!0},{id:`__${t}_without`,name:`${(0,o.t7)(t)} without`,params:[...n,{name:"Label",type:"string",restParam:!0,optional:!0,editor:_.g}],defaultParams:[...a.defaultParams,""],alternativesKey:"range function with grouping",category:i.Ly.RangeFunctions,renderer:x(t,"without"),paramChangedHandler:(0,o.j8)(t),explainHandler:(0,o.Sp)(t,"without"),addOperationHandler:h,hideFromList:!0}]}function x(t,a){return function(s,l,r){const b=l.params.findIndex(M=>M.restParam),u=s.params.slice(0,b),f=s.params.slice(b);return u.length===2&&t===i.B5.QuantileOverTime?`${t}(${u[1]}, ${r} [${u[0]}]) ${a} (${f.join(", ")})`:`${t}(${r} [${u[0]}]) ${a} (${f.join(", ")})`}}function p(t,a,n){const s=t.params??[],l=s[0]??"$__interval";if(s.length===2&&t.id===i.B5.QuantileOverTime){const r=s[1];return`${t.id}(${r}, ${n} [${l}])`}return`${t.id}(${n} [${s[0]??"$__interval"}])`}function y(t,a,n){return["<","<=",">",">="].includes(String(t.params[1]))?`${n} | ${t.params[0]} ${t.params[1]} ${t.params[2]}`:`${n} | ${t.params[0]} ${t.params[1]} \`${t.params[2]}\``}function g(t,a){const n=t.params[1].toString().startsWith("!");return a.filter(r=>r.id===i.B5.LabelFilter&&r.params[0]===t.params[0]&&r.params[2]===t.params[2]).some(r=>!!(n&&r.params[1].toString().startsWith("!")===!1||n===!1&&r.params[1].toString().startsWith("!")))}function $(t,a,n){return`${n} | ${t.id}`}function F(t){return t.category===i.Ly.RangeFunctions}function R(t,a,n){const s=t.findIndex(l=>{const r=a.getOperationDef(l.id);return r?n(r):!1});return s===-1?t.length:s}function h(t,a,n){const s={id:t.id,params:t.defaultParams},l=[...a.operations],r=l.find(b=>{const u=n.getOperationDef(b.id);return u?F(u):!1});switch(t.category){case i.Ly.Aggregations:case i.Ly.Functions:if(!r){const u=R(l,n,f=>f.category===i.Ly.Functions);l.splice(u,0,{id:i.B5.Rate,params:["$__interval"]})}l.push(s);break;case i.Ly.RangeFunctions:if(r){const u=l.indexOf(r);l[u]=s;break}default:const b=R(l,n,u=>(t.orderRank??100)<(u.orderRank??100));l.splice(b,0,s);break}return{...a,operations:l}}function E(t,a){return{...a,binaryQueries:[...a.binaryQueries??[],{operator:"/",query:a}]}}function w(t,a){return function(s,l,r){return a?`${r} ${t} \`(?i)${s.params[0]}\``:`${r} ${t} \`${s.params[0]}\``}}function P(){return{name:"Range",type:"string",options:["$__interval","$__range","1m","5m","10m","1h","24h"]}}},91720:(T,d,c)=>{c.d(d,{AI:()=>v,B5:()=>m,Hv:()=>_,Ly:()=>o,jK:()=>i});var _=(e=>(e.Log="log",e.Metric="metric",e))(_||{}),o=(e=>(e.Aggregations="Aggregations",e.RangeFunctions="Range functions",e.Functions="Functions",e.Formats="Formats",e.LineFilters="Line filters",e.LabelFilters="Label filters",e.BinaryOps="Binary operations",e))(o||{}),m=(e=>(e.Json="json",e.Logfmt="logfmt",e.Regexp="regexp",e.Pattern="pattern",e.Unpack="unpack",e.LineFormat="line_format",e.LabelFormat="label_format",e.Rate="rate",e.RateCounter="rate_counter",e.CountOverTime="count_over_time",e.SumOverTime="sum_over_time",e.AvgOverTime="avg_over_time",e.MaxOverTime="max_over_time",e.MinOverTime="min_over_time",e.FirstOverTime="first_over_time",e.LastOverTime="last_over_time",e.StdvarOverTime="stdvar_over_time",e.StddevOverTime="stddev_over_time",e.QuantileOverTime="quantile_over_time",e.BytesRate="bytes_rate",e.BytesOverTime="bytes_over_time",e.AbsentOverTime="absent_over_time",e.Sum="sum",e.Avg="avg",e.Min="min",e.Max="max",e.Stddev="stddev",e.Stdvar="stdvar",e.Count="count",e.TopK="topk",e.BottomK="bottomk",e.LineContains="__line_contains",e.LineContainsNot="__line_contains_not",e.LineContainsCaseInsensitive="__line_contains_case_insensitive",e.LineContainsNotCaseInsensitive="__line_contains_not_case_insensitive",e.LineMatchesRegex="__line_matches_regex",e.LineMatchesRegexNot="__line_matches_regex_not",e.LineFilterIpMatches="__line_filter_ip_matches",e.LabelFilter="__label_filter",e.LabelFilterNoErrors="__label_filter_no_errors",e.LabelFilterIpMatches="__label_filter_ip_marches",e.Unwrap="unwrap",e.SumBy="__sum_by",e.SumWithout="__sum_without",e.Addition="__addition",e.Subtraction="__subtraction",e.MultiplyBy="__multiply_by",e.DivideBy="__divide_by",e.Modulo="__modulo",e.Exponent="__exponent",e.NestedQuery="__nested_query",e.EqualTo="__equal_to",e.NotEqualTo="__not_equal_to",e.GreaterThan="__greater_than",e.LessThan="__less_than",e.GreaterOrEqual="__greater_or_equal",e.LessOrEqual="__less_or_equal",e))(m||{}),i=(e=>(e[e.LineFilters=1]="LineFilters",e[e.LineFormats=2]="LineFormats",e[e.LabelFilters=3]="LabelFilters",e[e.Unwrap=4]="Unwrap",e[e.NoErrors=5]="NoErrors",e[e.RangeVectorFunction=5]="RangeVectorFunction",e[e.Last=6]="Last",e))(i||{});const v={equals:{label:"=",value:"=",description:"Equals",isMultiValue:!1},doesNotEqual:{label:"!=",value:"!=",description:"Does not equal",isMultiValue:!1},matchesRegex:{label:"=~",value:"=~",description:"Matches regex",isMultiValue:!0},doesNotMatchRegex:{label:"!~",value:"!~",description:"Does not match regex",isMultiValue:!0},greaterThan:{label:">",value:">",description:"Greater than",isMultiValue:!1},greaterThanOrEqual:{label:">=",value:">=",description:"Greater than or equal to",isMultiValue:!1},lessThan:{label:"<",value:"<",description:"Less than",isMultiValue:!1},lessThanOrEqual:{label:"<=",value:"<=",description:"Less than or equal to",isMultiValue:!1},contains:{label:"|=",value:"|=",description:"Contains",isMultiValue:!1},doesNotContain:{label:"!=",value:"!=",description:"Does not contain",isMultiValue:!1}}},19370:(T,d,c)=>{c.d(d,{$5:()=>_,EH:()=>i,Rd:()=>m,ZP:()=>y,md:()=>v,r8:()=>e,uR:()=>o,xY:()=>p});const _=[{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"}],o=[{label:"json",insertText:"json",documentation:"Extracting labels from the log line using json parser."},{label:"regexp",insertText:'regexp ""',documentation:"Extracting labels from the log line using regexp parser.",move:-1},{label:"logfmt",insertText:"logfmt",documentation:"Extracting labels from the log line using logfmt parser."},{label:"pattern",insertText:"pattern",documentation:"Extracting labels from the log line using pattern parser. Only available in Loki 2.3+."},{label:"unpack",insertText:"unpack",detail:"unpack identifier",documentation:'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.2+.'}],m=[{label:"unwrap",insertText:"unwrap",detail:"unwrap identifier",documentation:"Take labels and use the values as sample data for metric aggregations."},{label:"label_format",insertText:"label_format",documentation:"Use to rename, modify or add labels. For example, | label_format foo=bar ."},{label:"line_format",insertText:"line_format",documentation:'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" .'}],i=[{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average of all values in the specified interval."},{insertText:"bytes_over_time",label:"bytes_over_time",detail:"bytes_over_time(range-vector)",documentation:"Counts the amount of bytes used by each log stream for a given range"},{insertText:"bytes_rate",label:"bytes_rate",detail:"bytes_rate(range-vector)",documentation:"Calculates the number of bytes per second for each stream."},{insertText:"first_over_time",label:"first_over_time",detail:"first_over_time(range-vector)",documentation:"The first of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"last_over_time",label:"last_over_time",detail:"last_over_time(range-vector)",documentation:"The last of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum of all values in the specified interval."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum of all values in the specified interval."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The \u03C6-quantile (0 \u2264 \u03C6 \u2264 1) of the values in the specified interval."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the number of entries per second."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval."}],v=[{insertText:"vector",label:"vector",detail:"vector(scalar)",documentation:"Returns the scalar as a vector with no labels."}],e=[..._,...i,...v],x=[...e,...m,...o].map(g=>g.label),p={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((without|by)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},"context-pipe":{pattern:/\s\|[^=~]\s?\w*/i,inside:{"pipe-operator":{pattern:/\|/i,alias:"operator"},"pipe-operations":{pattern:new RegExp(`${[...o,...m].map(g=>g.label).join("|")}`,"i"),alias:"keyword"}}},function:new RegExp(`\\b(?:${e.map(g=>g.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=\])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],quote:{pattern:/"(?:\\.|[^\\"])*"/,alias:"string",greedy:!0},backticks:{pattern:/`(?:\\.|[^\\`])*`/,alias:"string",greedy:!0},number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:/\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,punctuation:/[{}(),.]/},y=p},58079:(T,d,c)=>{c.d(d,{c:()=>_});var _=(o=>(o.Code="code",o.Builder="builder",o))(_||{})}}]);

//# sourceMappingURL=924.982c554d1b604b07b12b.js.map