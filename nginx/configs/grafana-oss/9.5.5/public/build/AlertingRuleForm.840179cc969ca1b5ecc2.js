"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5372],{85670:(y,o,e)=>{e.r(o),e.d(o,{default:()=>J});var t=e(68404),i=e(22350),u=e(53546),d=e(81168),c=e(9892),r=e(45253),l=e(72648),s=e(31403);function f({title:a,children:E}){return t.createElement(r.b,{className:(0,l.wW)(m).warning,severity:"warning",title:a},t.createElement("p",null,E),t.createElement(s.Qj,{href:"alerting/list"},"To rule list"))}const m=a=>({warning:c.css`
    margin: ${a.spacing(4)};
  `});var C=e(82897),M=e(37932),I=e(61744),A=e(6887),L=e(72004),W=e(35918),h=e(21767),P=e(79662),T=e(93411);function x({sourceRuleId:a}){const E=(0,d.useDispatch)(),{loading:D,value:v,error:n}=(0,i.Z)(()=>E((0,L.on)(a)).unwrap(),[a]);if(D)return t.createElement(I.u,{text:"Loading the rule"});if(v){const g=(0,C.cloneDeep)(v);F(g.rule,(0,W.G)((0,P.PW)(g.rule),g.group.rules.map(P.PW)));const R=(0,h.DQ)(g);return(0,P.Pc)(v.rule)&&Boolean(v.rule.grafana_alert.provenance)&&(R.group=""),t.createElement(A.p,{prefill:R})}return n?t.createElement(r.b,{title:"Error",severity:"error"},n.message):t.createElement(r.b,{title:"Cannot copy the rule. The rule does not exist",buttonContent:"Go back to alert list",onRemove:()=>M.E1.replace((0,T.u)("/alerting/list"))})}function F(a,E){(0,P.Pc)(a)&&(a.grafana_alert.title=E),(0,P.cG)(a)&&(a.alert=E),(0,P.yF)(a)&&(a.record=E)}var G=e(40014),N=e(44391),V=e(69945),$=e(46818),p=e(60048);function j({identifier:a}){(0,G.x)(O=>O.unifiedAlerting.ruleForm.existingRule=$.oq);const{loading:E,result:D,error:v,dispatched:n}=(0,V._)(O=>O.ruleForm.existingRule),g=(0,d.useDispatch)(),{isEditable:R,loading:B}=(0,N.M)(p.s0(a),D?.rule),U=E||B;return(0,t.useEffect)(()=>{n||g((0,L.on)(a))},[n,g,a]),U||R===void 0?t.createElement(I.u,{text:"Loading rule..."}):v?t.createElement(r.b,{severity:"error",title:"Failed to load rule"},v.message):D?R===!1?t.createElement(f,{title:"Cannot edit rule"},"Sorry! You do not have permission to edit this rule."):t.createElement(A.p,{existing:D}):t.createElement(f,{title:"Rule not found"},"Sorry! This rule does not exist.")}var Y=e(45524),H=e(31808),Q=e(39910);const S={icon:"bell",id:"alert-rule-view",breadcrumbs:[{title:"Alert rules",url:"alerting/list"}]},Z=a=>{if(a==="edit")return{...S,id:"alert-rule-edit",text:"Edit rule"};if(a==="add")return{...S,id:"alert-rule-add",text:"Add rule"}},z=({match:a})=>{const E=(0,d.useDispatch)(),[D]=(0,H.j)(),{id:v}=a.params,n=p.OA(v,!0),g=D.get("copyFrom")??void 0,R=p.OA(g),{loading:B=!0}=(0,i.Z)(async()=>{n&&await E((0,L.nw)({rulesSourceName:n.ruleSourceName}))},[E]),{canCreateGrafanaRules:U,canCreateCloudRules:O,canEditRules:K}=(0,Q.B)(),X=(0,t.useCallback)(()=>{if(!B)return!n&&!U&&!O?t.createElement(f,{title:"Cannot create rules"},"Sorry! You are not allowed to create rules."):n&&!K(n.ruleSourceName)?t.createElement(f,{title:"Cannot edit rules"},"Sorry! You are not allowed to edit rules."):n?t.createElement(j,{key:v,identifier:n}):R?t.createElement(x,{sourceRuleId:R}):t.createElement(A.p,null)},[O,U,K,R,v,n,B]);return t.createElement(Y.J,{isLoading:B,pageId:"alert-list",pageNav:Z(n?"edit":"add")},X())},J=(0,u.Pf)(z,{style:"page"})},55485:(y,o,e)=>{e.d(o,{W:()=>r});var t=e(68404),i=e(81168),u=e(72004),d=e(46818),c=e(69945);function r(l){const s=(0,i.useDispatch)(),f=(0,c._)(m=>m.folders);if((0,t.useEffect)(()=>{l&&s((0,u.sw)(l))},[s,l]),l){const m=f[l]||d.oq;return{folder:m.result,loading:m.loading}}return{loading:!1}}},44391:(y,o,e)=>{e.d(o,{M:()=>r});var t=e(82002),i=e(97953),u=e(79662),d=e(55485),c=e(69945);function r(l,s){const f=(0,c._)(h=>h.dataSources),m=s&&(0,u.Pc)(s)?s.grafana_alert.namespace_uid:void 0,C=(0,i.Bz)(l),{folder:M,loading:I}=(0,d.W)(m);if(!s)return{isEditable:!1,isRemovable:!1,loading:!1};if((0,u.Pc)(s)){if(!m)throw new Error(`Rule ${s.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);if(!M)return{isEditable:!1,isRemovable:!1,loading:I};const h=M.canSave,P=t.Vt.hasAccessInMetadata(C.update,M,h),T=t.Vt.hasAccessInMetadata(C.delete,M,h);return{isEditable:P,isRemovable:T,loading:I}}const A=Boolean(f[l]?.result?.rulerConfig),L=t.Vt.hasAccess(C.update,t.Vt.isEditor),W=t.Vt.hasAccess(C.delete,t.Vt.isEditor);return{isEditable:L&&A,isRemovable:W&&A,loading:f[l]?.loading}}},31808:(y,o,e)=>{e.d(o,{j:()=>d});var t=e(68404),i=e(70356),u=e(37932);function d(){const{search:c}=(0,i.TH)(),r=(0,t.useMemo)(()=>new URLSearchParams(c),[c]),l=(0,t.useCallback)((s,f)=>{u.E1.partial(s,f)},[]);return[r,l]}},39910:(y,o,e)=>{e.d(o,{B:()=>u});var t=e(68404),i=e(97953);function u(){return(0,t.useMemo)(()=>(0,i.Rv)(),[])}},35918:(y,o,e)=>{e.d(o,{G:()=>t});function t(i,u){const d=i.replace(/\(copy( [0-9]+)?\)$/,"").trim();let c=`${d} (copy)`;for(let r=2;u.includes(c);r++)c=`${d} (copy ${r})`;return c}}}]);

//# sourceMappingURL=AlertingRuleForm.840179cc969ca1b5ecc2.js.map