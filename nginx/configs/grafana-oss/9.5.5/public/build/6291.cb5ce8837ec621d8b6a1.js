"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6291],{62724:(g,d,s)=>{s.d(d,{Mo:()=>e});var n=s(82897),t=s.n(n),r=s(46519),i=s(14582);const e=(a,o=!1)=>{const p=a.values;switch(a.type){case i.fS.number:return B(p,o);case i.fS.string:return v(p,o);case i.fS.boolean:return M(p,o);case i.fS.time:return typeof a.values.get(0)=="number"?m(p,o):O(p,o);default:return w(o)}},c=(a,o)=>{if(!a||!o)return _(a,o);if((0,n.isNumber)(a)&&(0,n.isNumber)(o))return u(a,o);if((0,r.D2)(a)&&(0,r.D2)(o)){if((0,r.CQ)(a).isBefore(o))return-1;if((0,r.CQ)(o).isBefore(a))return 1}return 0},u=(a,o)=>a-o,l=(a,o)=>!a||!o?_(a,o):a.localeCompare(o),f=(a,o)=>_(a,o),_=(a,o)=>!a&&o?1:a&&!o?-1:0,m=(a,o)=>{let p=a.toArray(),E=o?-1:1;return(h,y)=>E*(p[h]-p[y])},O=(a,o)=>(p,E)=>{const h=a.get(p),y=a.get(E);return o?c(y,h):c(h,y)},M=(a,o)=>(p,E)=>{const h=a.get(p),y=a.get(E);return o?f(y,h):f(h,y)},B=(a,o)=>(p,E)=>{const h=a.get(p),y=a.get(E);return o?u(y,h):u(h,y)},v=(a,o)=>(p,E)=>{const h=a.get(p),y=a.get(E);return o?l(y,h):l(h,y)},w=a=>(o,p)=>a?u(p,o):u(o,p)},22586:(g,d,s)=>{s.d(d,{f:()=>t});var n=s(40538);function t(r,i,e){switch((r==null||e==null)&&(r==null&&(r="null"),e==null&&(e="null"),(i===n.Bd.GTE||i===n.Bd.LTE)&&(i=n.Bd.EQ)),i){case n.Bd.EQ:return`${r}`==`${e}`;case n.Bd.NEQ:return`${r}`!=`${e}`;case n.Bd.GT:return r>e;case n.Bd.GTE:return r>=e;case n.Bd.LT:return r<e;case n.Bd.LTE:return r<=e;default:return!1}}},82346:(g,d,s)=>{s.d(d,{N:()=>c});var n=s(14582),t=s(85854);const r={id:t.mi.byType,name:"Field Type",description:"match based on the field type",defaultOptions:n.fS.number,get:u=>(l,f,_)=>u===l.type,getOptionsDisplayText:u=>`Field type: ${u}`},i={id:t.mi.numeric,name:"Numeric Fields",description:"Fields with type number",get:()=>r.get(n.fS.number),getOptionsDisplayText:()=>"Numeric Fields"},e={id:t.mi.time,name:"Time Fields",description:"Fields with type time",get:()=>r.get(n.fS.time),getOptionsDisplayText:()=>"Time Fields"};function c(){return[r,i,e]}},23406:(g,d,s)=>{s.d(d,{b:()=>c});var n=s(40538),t=s(21760),r=s(22586),i=s(85854);function e(u){return u===t.gz.allIsNull||u===t.gz.allIsZero}const c={id:i.mi.byValue,name:"By value (reducer)",description:"Reduce a field to a single value and test for inclusion",defaultOptions:{reducer:t.gz.allIsZero,op:n.Bd.GTE,value:0},get:u=>{if(!u||!u.reducer)return()=>!1;let{reducer:l,op:f,value:_}=u;const m=e(l);return f||(f=n.Bd.EQ),(O,M,B)=>{const v=(0,t.Kx)({field:O,reducers:[l]})[l];return m?Boolean(v):(0,r.f)(v,f,_)}},getOptionsDisplayText:u=>`By value (${u.reducer})`}},85854:(g,d,s)=>{s.d(d,{E4:()=>r,Ff:()=>n,mE:()=>i,mi:()=>t});var n=(e=>(e.anyMatch="anyMatch",e.allMatch="allMatch",e.invertMatch="invertMatch",e.alwaysMatch="alwaysMatch",e.neverMatch="neverMatch",e))(n||{}),t=(e=>(e.numeric="numeric",e.time="time",e.first="first",e.firstTimeField="firstTimeField",e.byType="byType",e.byName="byName",e.byNames="byNames",e.byRegexp="byRegexp",e.byRegexpOrNames="byRegexpOrNames",e.byFrameRefID="byFrameRefID",e.byValue="byValue",e))(t||{}),r=(e=>(e.byName="byName",e.byRefId="byRefId",e.byIndex="byIndex",e))(r||{}),i=(e=>(e.regex="regex",e.isNull="isNull",e.isNotNull="isNotNull",e.greater="greater",e.greaterOrEqual="greaterOrEqual",e.lower="lower",e.lowerOrEqual="lowerOrEqual",e.equal="equal",e.notEqual="notEqual",e.between="between",e))(i||{})},95108:(g,d,s)=>{s.d(d,{n:()=>i});var n=s(29076),t=s(85854);const r={id:t.E4.byRefId,name:"Query refId",description:"match the refId",defaultOptions:"A",get:e=>{const c=(0,n.jO)(e);return u=>c.test(u.refId||"")},getOptionsDisplayText:e=>`RefID: ${e}`};function i(){return[r]}},98876:(g,d,s)=>{s.d(d,{z:()=>e});var n=s(14582),t=s(85854);const r={id:t.mi.first,name:"First Field",description:"The first field in the frame",get:c=>(u,l,f)=>u===l.fields[0],getOptionsDisplayText:()=>"First field"},i={id:t.mi.firstTimeField,name:"First time field",description:"The first field of type time in a frame",get:c=>(u,l,f)=>u.type===n.fS.time&&u===l.fields.find(_=>_.type===n.fS.time),getOptionsDisplayText:()=>"First time field"};function e(){return[r,i]}},29106:(g,d,s)=>{s.d(d,{T:()=>i});var n=s(85854);const t={id:n.mE.equal,name:"Is equal",description:"Match where value for given field is equal to options value.",get:e=>(c,u)=>u.values.get(c)==e.value,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},r={id:n.mE.notEqual,name:"Is not equal",description:"Match where value for given field is not equal to options value.",get:e=>(c,u)=>u.values.get(c)!=e.value,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},i=()=>[t,r]},1521:(g,d,s)=>{s.d(d,{a:()=>i});var n=s(85854);const t={id:n.mE.isNull,name:"Is null",description:"Match where value for given field is null.",get:()=>(e,c)=>c.values.get(e)==null,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},r={id:n.mE.isNotNull,name:"Is not null",description:"Match where value for given field is not null.",get:()=>(e,c)=>c.values.get(e)!=null,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},i=()=>[t,r]},95827:(g,d,s)=>{s.d(d,{H:()=>u});var n=s(14582),t=s(85854);const r={id:t.mE.greater,name:"Is greater",description:"Match when field value is greater than option.",get:l=>(f,_)=>{const m=_.values.get(f);return isNaN(m)?!1:m>l.value},getOptionsDisplayText:l=>`Matches all rows where field value is greater than: ${l.value}.`,isApplicable:l=>l.type===n.fS.number,getDefaultOptions:()=>({value:0})},i={id:t.mE.greaterOrEqual,name:"Is greater or equal",description:"Match when field value is greater than or equal to option.",get:l=>(f,_)=>{const m=_.values.get(f);return isNaN(m)?!1:m>=l.value},getOptionsDisplayText:l=>`Matches all rows where field value is greater than or equal to: ${l.value}.`,isApplicable:l=>l.type===n.fS.number,getDefaultOptions:()=>({value:0})},e={id:t.mE.lower,name:"Is lower",description:"Match when field value is lower than option.",get:l=>(f,_)=>{const m=_.values.get(f);return isNaN(m)?!1:m<l.value},getOptionsDisplayText:l=>`Matches all rows where field value is lower than: ${l.value}.`,isApplicable:l=>l.type===n.fS.number,getDefaultOptions:()=>({value:0})},c={id:t.mE.lowerOrEqual,name:"Is lower or equal",description:"Match when field value is lower or equal than option.",get:l=>(f,_)=>{const m=_.values.get(f);return isNaN(m)?!1:m<=l.value},getOptionsDisplayText:l=>`Matches all rows where field value is lower or equal than: ${l.value}.`,isApplicable:l=>l.type===n.fS.number,getDefaultOptions:()=>({value:0})},u=()=>[r,i,e,c]},4728:(g,d,s)=>{s.d(d,{G:()=>i});var n=s(14582),t=s(85854);const r={id:t.mE.between,name:"Is between",description:"Match when field value is between given option values.",get:e=>(c,u)=>{const l=u.values.get(c);return isNaN(l)?!1:l>e.from&&l<e.to},getOptionsDisplayText:e=>`Matches all rows where field value is between ${e.from} and ${e.to}.`,isApplicable:e=>e.type===n.fS.number,getDefaultOptions:()=>({from:0,to:100})},i=()=>[r]},85402:(g,d,s)=>{s.d(d,{G:()=>r});var n=s(85854);const t={id:n.mE.regex,name:"Regex",description:"Match when field value is matching regex.",get:i=>{const e=new RegExp(i.value);return(c,u)=>{const l=u.values.get(c);return e.test(l)}},getOptionsDisplayText:i=>`Matches all rows where field value is matching regex: ${i.value}`,isApplicable:()=>!0,getDefaultOptions:()=>({value:".*"})},r=()=>[t]},17130:(g,d,s)=>{s.d(d,{W:()=>n});var n=(t=>(t.append="append",t.reduce="reduce",t.order="order",t.organize="organize",t.rename="rename",t.calculateField="calculateField",t.seriesToColumns="seriesToColumns",t.seriesToRows="seriesToRows",t.merge="merge",t.concatenate="concatenate",t.labelsToFields="labelsToFields",t.filterFields="filterFields",t.filterFieldsByName="filterFieldsByName",t.filterFrames="filterFrames",t.filterByRefId="filterByRefId",t.renameByRegex="renameByRegex",t.filterByValue="filterByValue",t.noop="noop",t.ensureColumns="ensureColumns",t.groupBy="groupBy",t.sortBy="sortBy",t.histogram="histogram",t.configFromData="configFromData",t.rowsToFields="rowsToFields",t.prepareTimeSeries="prepareTimeSeries",t.convertFieldType="convertFieldType",t.fieldLookup="fieldLookup",t.heatmap="heatmap",t.spatial="spatial",t.joinByField="joinByField",t.joinByLabels="joinByLabels",t.extractFields="extractFields",t.groupingToMatrix="groupingToMatrix",t.limit="limit",t.partitionByValues="partitionByValues",t.timeSeriesTable="timeSeriesTable",t))(n||{})},64140:(g,d,s)=>{s.d(d,{B:()=>t});var n=s(24699);class t{constructor(i){this.init=i,this.ordered=[],this.byId=new Map,this.initialized=!1,this.setInit=e=>{if(this.initialized)throw new Error("Registry already initialized");this.init=e},this.init=i}getIfExists(i){if(this.initialized||this.initialize(),i)return this.byId.get(i)}initialize(){if(this.init)for(const i of this.init())this.register(i);this.sort(),this.initialized=!0}get(i){const e=this.getIfExists(i);if(!e)throw new Error(`"${i}" not found in: ${this.list().map(c=>c.id)}`);return e}selectOptions(i,e){this.initialized||this.initialize();const c={options:[],current:[]},u={};if(i)for(const l of i)u[l]={};for(const l of this.ordered){if(l.excludeFromPicker||e&&!e(l))continue;const f={value:l.id,label:l.name,description:l.description};l.state===n.BV.alpha&&(f.label+=" (alpha)"),c.options.push(f),u[l.id]&&(u[l.id]=f)}return i&&(c.current=Object.values(u)),c}list(i){if(this.initialized||this.initialize(),i){const e=[];for(const c of i){const u=this.getIfExists(c);u&&e.push(u)}return e}return this.ordered}isEmpty(){return this.initialized||this.initialize(),this.ordered.length===0}register(i){if(this.byId.has(i.id))throw new Error("Duplicate Key:"+i.id);if(this.byId.set(i.id,i),this.ordered.push(i),i.aliasIds)for(const e of i.aliasIds)this.byId.has(e)||this.byId.set(e,i);this.initialized&&this.sort()}sort(){}}},19695:(g,d,s)=>{s.d(d,{G:()=>t});var n=s(20411);class t extends n.G{constructor(i){super(),this.buffer=i||[]}get length(){return this.buffer.length}add(i){this.buffer.push(i)}get(i){return this.buffer[i]}set(i,e){this.buffer[i]=e}reverse(){this.buffer.reverse()}toArray(){return this.buffer}toJSON(){return this.buffer}}},12022:(g,d,s)=>{s.d(d,{o:()=>t});var n=s(49319);class t{constructor(i,e){this.source=i,this.order=e}get length(){return this.source.length}get(i){return this.source.get(this.order[i])}toArray(){return(0,n.n)(this)}toJSON(){return(0,n.n)(this)}getOrderArray(){return this.order}}},49319:(g,d,s)=>{s.d(d,{n:()=>n});function n(t){const r=Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.get(i);return r}},77599:(g,d,s)=>{s.d(d,{P:()=>n});function n(t){const r=t||{};if(!r.message){if(typeof t=="string")return{message:t};let i="Query error";r.message?i=r.message:r.data&&r.data.message&&r.data?.message!=="Query data error"?i=r.data.message:r?.data?.message==="Query data error"&&r?.data?.error||r.data&&r.data.error?i=r.data.error:r.status&&(i=`Query error: ${r.status} ${r.statusText}`),r.message=i}return r}},44332:(g,d,s)=>{s.d(d,{W:()=>n});function n(t,r){const i=/\{\{\s*(.+?)\s*\}\}/g;return t.replace(i,(e,c)=>r[c]?r[c]:c)}}}]);

//# sourceMappingURL=6291.cb5ce8837ec621d8b6a1.js.map