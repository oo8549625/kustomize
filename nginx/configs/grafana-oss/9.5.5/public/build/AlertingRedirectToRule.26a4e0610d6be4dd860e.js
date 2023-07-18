"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7918],{29309:(K,g,e)=>{e.r(g),e.d(g,{RedirectToRuleViewer:()=>M,default:()=>A});var c=e(9892),t=e(68404),R=e(70356),C=e(33332),v=e(35645),p=e(72648),f=e(45253),T=e(61744),i=e(72948),r=e(39904),o=e(53546),m=e(52694),d=e(28104),n=e(76277),s=e(45849),l=e(10505);const a="Find rule",P=v.v.appSubUrl;function E(){const L=(0,C.Z)().pathname?.replace(P,"").split("/")??[],D=decodeURIComponent(L[3]),U=decodeURIComponent(L[2]);return{name:D,sourceName:U}}function M(){const _=(0,p.wW)(u),{name:L,sourceName:D}=E(),{error:U,loading:h,result:I,dispatched:$}=(0,n.X)(L,D);if(U)return t.createElement(d.$,{title:a},t.createElement(f.b,{title:`Failed to load rules from ${D}`},t.createElement("details",{className:_.errorMessage},U.message,t.createElement("br",null),!!U?.stack&&U.stack)));if(h||!$||!Array.isArray(I))return t.createElement(d.$,{title:a},t.createElement(T.u,{text:"Loading rule..."}));if(!L||!D)return t.createElement(R.l_,{to:"/notfound"});const W=(0,s.o_)(D);if(!W)return t.createElement(d.$,{title:a},t.createElement(f.b,{title:"Could not view rule"},t.createElement("details",{className:_.errorMessage},`Could not find data source with name: ${D}.`)));if(I.length===1){const[O]=I,B=(0,l.V2)(W,O,"/alerting/list").replace(P,"");return t.createElement(R.l_,{to:B})}return t.createElement(d.$,{title:a},t.createElement("div",null,"Several rules in ",t.createElement("span",{className:_.param},D)," matched the name"," ",t.createElement("span",{className:_.param},L),", please select the rule you want to view."),t.createElement("div",{className:_.rules},I.map((O,B)=>t.createElement(i.Z,{key:`${O.name}-${B}`,href:(0,l.V2)(W,O,"/alerting/list")},t.createElement(i.Z.Heading,null,O.name),t.createElement(i.Z.Meta,{separator:""},t.createElement(r.J,{name:"folder"}),t.createElement("span",{className:_.namespace},`${O.namespace.name} / ${O.group.name}`)),t.createElement(i.Z.Tags,null,t.createElement(m.s,{labels:O.labels}))))))}function u(_){return{param:c.css`
      font-style: italic;
      color: ${_.colors.text.secondary};
    `,rules:c.css`
      margin-top: ${_.spacing(2)};
    `,namespace:c.css`
      margin-left: ${_.spacing(1)};
    `,errorMessage:c.css`
      white-space: pre-wrap;
    `}}const A=(0,o.Pf)(M,{style:"page"})},28104:(K,g,e)=>{e.d(g,{$:()=>p,l:()=>f});var c=e(9892),t=e(68404),R=e(72648),C=e(79396);const v={icon:"bell",id:"alert-rule-view",breadcrumbs:[{title:"Alert rules",url:"alerting/list"}]};function p(r){const{wrapInContent:o=!0,children:m,title:d}=r,n=(0,R.wW)(T);return t.createElement(C.T,{pageNav:{...v,text:d},navId:"alert-list"},t.createElement(C.T.Contents,null,t.createElement("div",{className:n.content},o?t.createElement(f,{...r}):m)))}function f({children:r,padding:o=2}){const m=(0,R.wW)(i(o));return t.createElement("div",{className:m.wrapper},r)}const T=r=>({content:c.css`
      max-width: ${r.breakpoints.values.xxl}px;
    `}),i=r=>o=>({wrapper:c.css`
      background: ${o.colors.background.primary};
      border: 1px solid ${o.colors.border.weak};
      border-radius: ${o.shape.borderRadius()};
      padding: ${o.spacing(r)};
    `})},76277:(K,g,e)=>{e.d(g,{H:()=>r,X:()=>o});var c=e(68404),t=e(22350),R=e(81168),C=e(72004),v=e(46818),p=e(60048),f=e(79662),T=e(61627),i=e(69945);function r(n,s){const l=m(s),a=(0,T.Zo)(s),P=(0,c.useMemo)(()=>{if(!(!n||!s||a.length===0))for(const E of a)for(const M of E.groups)for(const u of M.rules){const A=p.Yd(s,u);if(p.Dg(A,n))return u}},[n,s,a]);return{...l,result:P}}function o(n,s){const l=m(s),a=(0,T.Zo)(s),P=(0,c.useMemo)(()=>{if(!n||!s||a.length===0)return[];const E=[];for(const M of a)for(const u of M.groups)for(const A of u.rules)A.name===n&&E.push(A);return E},[n,s,a]);return{...l,result:P}}function m(n){const s=(0,R.useDispatch)(),l=(0,i._)(u=>u.promRules),a=d(n,l),P=(0,i._)(u=>u.rulerRules),E=d(n,P),{loading:M}=(0,t.Z)(async()=>{n&&await s((0,C.dn)({rulesSourceName:n}))},[s,n]);return{loading:M,error:a.error??(0,f.m$)(E)?void 0:E.error,dispatched:a.dispatched&&E.dispatched}}function d(n,s){if(!n)return v.oq;const l=s[n];return l||v.oq}}}]);

//# sourceMappingURL=AlertingRedirectToRule.26a4e0610d6be4dd860e.js.map