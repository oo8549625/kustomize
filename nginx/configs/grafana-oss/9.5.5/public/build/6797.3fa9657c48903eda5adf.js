"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6797],{55887:(I,u,e)=>{e.d(u,{e:()=>a});var a=(t=>(t.OpenSource="Open Source",t.Pro="Pro",t.Enterprise="Enterprise",t))(a||{})},30173:(I,u,e)=>{e.d(u,{h:()=>t});var a=e(29427);const t=a.C.injectEndpoints({endpoints:l=>({getAlertmanagerChoiceStatus:l.query({query:()=>({url:"/api/v1/ngalert"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagerConfig:l.query({query:()=>({url:"/api/v1/ngalert/admin_config"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagers:l.query({query:()=>({url:"/api/v1/ngalert/alertmanagers"}),transformResponse:s=>s.data}),saveExternalAlertmanagersConfig:l.mutation({query:s=>({url:"/api/v1/ngalert/admin_config",method:"POST",data:s}),invalidatesTags:["AlertmanagerChoice"]})})})},40106:(I,u,e)=>{e.d(u,{C0:()=>f,Uv:()=>s,Xq:()=>g});var a=e(68404),t=e(45253),l=e(19985),s=(o=>(o.ContactPoint="contact point",o.Template="template",o.MuteTiming="mute timing",o.AlertRule="alert rule",o.RootNotificationPolicy="root notification policy",o))(s||{});const g=({resource:o})=>a.createElement(t.b,{title:`This ${o} cannot be edited through the UI`,severity:"info"},"This ",o," has been provisioned, that means it was created by config. Please contact your server admin to update this ",o,"."),f=()=>a.createElement(l.C,{text:"Provisioned",color:"purple"})},30151:(I,u,e)=>{e.d(u,{F:()=>P});var a=e(9892),t=e(82897),l=e.n(t),s=e(68404),g=e(26418),f=e(54408),o=e(72648),r=e(39904),c=e(64353),m=e(6554),D=e(46967),v=e(41904);const P=({className:C,onFilterChange:h,defaultQueryString:E})=>{const p=(0,o.wW)(O),y=(0,s.useMemo)(()=>(0,t.debounce)(F=>{(0,f.PN)(v.z7.filterByLabel);const N=F.target;h(N.value)},600),[h]);(0,s.useEffect)(()=>y.cancel(),[y]);const T=s.createElement(r.J,{name:"search"});return s.createElement("div",{className:C},s.createElement(c._,null,s.createElement(g.Stack,{gap:.5},s.createElement("span",null,"Search by label"),s.createElement(m.u,{content:s.createElement("div",null,"Filter alerts using label querying, ex:",s.createElement("pre",null,'{severity="critical", instance=~"cluster-us-.+"}'))},s.createElement(r.J,{className:p.icon,name:"info-circle",size:"sm"})))),s.createElement(D.I,{placeholder:"Search",defaultValue:E,onChange:y,"data-testid":"search-query-input",prefix:T,className:p.inputWidth}))},O=C=>({icon:a.css`
    margin-right: ${C.spacing(.5)};
  `,inputWidth:a.css`
    width: 340px;
    flex-grow: 0;
  `})},41273:(I,u,e)=>{e.d(u,{E:()=>c});var a=e(9892),t=e(68404),l=e(37932),s=e(72648),g=e(31403),f=e(98102),o=e(60048),r=e(93411);const c=t.forwardRef(({text:D,ruleIdentifier:v,isProvisioned:P,className:O},C)=>{const[h,E]=(0,t.useState)(void 0),p=(0,s.wW)(m),y=(0,r.u)("/alerting/new",{copyFrom:o.$V(v)});return t.createElement(t.Fragment,null,t.createElement(g.Qj,{title:"Copy",className:O,size:"sm",key:"clone",variant:"secondary",icon:"copy",href:P?void 0:y,onClick:P?()=>E(y):void 0,ref:C},D),t.createElement(f.s,{isOpen:!!h,title:"Copy provisioned alert rule",body:t.createElement("div",null,t.createElement("p",null,"The new rule will ",t.createElement("span",{className:p.bold},"NOT")," be marked as a provisioned rule."),t.createElement("p",null,"You will need to set a new alert group for the copied rule because the original one has been provisioned and cannot be used for rules created in the UI.")),confirmText:"Copy",onConfirm:()=>h&&l.E1.push(h),onDismiss:()=>E(void 0)}))});c.displayName="CloneRuleButton";const m=D=>({bold:a.css`
    font-weight: ${D.typography.fontWeightBold};
  `})},49279:(I,u,e)=>{e.d(u,{f:()=>Ue});var a=e(9892),t=e(68404),l=e(70356),s=e(8928),g=e(27677),f=e(55887),o=e(35645),r=e(72648),c=e(31403),m=e(94599),D=e(52081),v=e(98102),P=e(60499),O=e(82002),C=e(39031),h=e(81168),E=e(46063),p=e(30173),y=e(44391),T=e(35029),F=e(82897),N=e(38849),ne=e(26418),x=e(61744),A=e(45253),U=e(24799),L=e(64353),B=e(6554),_=e(39904),H=e(46967),z=e(72004),ae=e(69945);function Z(n){const i=(0,h.useDispatch)(),d=(0,ae._)(R=>R.managedAlertStateHistory);return(0,t.useEffect)(()=>{i((0,z.Ms)(n))},[i,n]),d}var J=e(24782),M=e(53731),le=e(45608);const Y=({alertId:n})=>{const[i,d]=(0,t.useState)(""),R=(0,t.useCallback)(j=>{d(j.currentTarget.value)},[]),{loading:S,error:W,result:$=[]}=Z(n),Q=(0,r.wW)(De);if(S&&!W)return t.createElement(x.u,{text:"Loading history..."});if(W&&!S)return t.createElement(A.b,{title:"Failed to fetch alert state history"},W.message);const ge=[{id:"state",label:"State",size:"max-content",renderCell:ce},{id:"value",label:"",size:"auto",renderCell:ie},{id:"timestamp",label:"Time",size:"max-content",renderCell:me}],ve=Object.entries(X($)).sort().filter(([j])=>re(j,i)).map(([j,se])=>{const fe=se.map(b=>({id:b.id,data:b}));return t.createElement("div",{key:j},t.createElement("header",{className:Q.tableGroupKey},t.createElement("code",null,j)),t.createElement(M.t,{cols:ge,items:fe}))});return t.createElement("div",null,t.createElement("nav",null,t.createElement(U.g,{label:t.createElement(L._,null,t.createElement(ne.Stack,{gap:.5},t.createElement("span",null,"Filter group"),t.createElement(B.u,{content:t.createElement("div",null,"Filter each state history group either by exact match or a regular expression, ex:"," ",t.createElement("code",null,"region=eu-west-1")," or ",t.createElement("code",null,"/region=us-.+/"))},t.createElement(_.J,{name:"info-circle",size:"sm"}))))},t.createElement(H.I,{prefix:t.createElement(_.J,{name:"search"}),onChange:R,placeholder:"Search"}))),ve)};function X(n){const i=n.map(d=>{const R=/{.*?}/g,S=d.text.match(R)?.at(-1)??"";return{id:String(d.id),state:d.newState,text:d.text.replace(S,""),data:d.data,timestamp:d.updated,stringifiedLabels:S}});return(0,F.groupBy)(i,d=>d.stringifiedLabels)}function re(n,i){if(i==="")return!0;if(!(i.startsWith("/")&&i.endsWith("/")))return n.includes(i);try{return new RegExp(i.slice(1,-1)).test(n)}catch{return!1}}function ie(n){const i=n.data.data?.evalMatches??[];return t.createElement(t.Fragment,null,n.data.text,t.createElement(de,null,i.map(d=>t.createElement(J.i,{key:d.metric,labelKey:d.metric,value:String(d.value)}))))}function ce(n){return t.createElement(le.l,{state:n.data.state})}function me(n){return t.createElement("div",{className:w},n.data.timestamp&&t.createElement("span",null,(0,N.dq)(n.data.timestamp)))}const de=({children:n})=>{const{wrapper:i}=(0,r.wW)(De);return t.createElement("div",{className:i},n)},w=a.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,De=n=>({wrapper:a.css`
    & > * {
      margin-right: ${n.spacing(1)};
    }
  `,tableGroupKey:a.css`
    margin-top: ${n.spacing(2)};
    margin-bottom: ${n.spacing(2)};
  `});function Re(n){const[i,d]=(0,t.useState)(!1);return{StateHistoryModal:(0,t.useMemo)(()=>t.createElement(T.u,{isOpen:i,onDismiss:()=>d(!1),closeOnBackdropClick:!0,closeOnEscape:!0,title:"State history"},t.createElement(Y,{alertId:n})),[n,i]),showStateHistoryModal:()=>d(!0),hideStateHistoryModal:()=>d(!1)}}var Te=e(97953),xe=e(20194),k=e(37190),q=e(45849),ue=e(10505),Ee=e(60048),ee=e(79662),Ie=e(58509),Pe=e(2390);const He=({children:n,plugin:i,loadingComponent:d,notInstalledFallback:R})=>{const{loading:S,installed:W}=usePluginBridge(i);return S?d??null:W?React.createElement(React.Fragment,null,n):R??null};function Ae(n,i,d){const R=new URLSearchParams(d).toString();return`/a/${n}${i}`+(R?"?"+R:"")}const Le=({title:n="",severity:i="",url:d=""})=>{const R=Ae(Pe.W.Incident,"/incidents/declare",{title:n,severity:i,url:d}),{loading:S,installed:W,settings:$}=(0,Ie.n)(Pe.W.Incident);return t.createElement(t.Fragment,null,S===!0&&t.createElement(c.zx,{icon:"fire",size:"sm",type:"button",disabled:!0},"Declare Incident"),W===!1&&t.createElement(B.u,{content:"Grafana Incident is not installed or is not configured correctly"},t.createElement(c.zx,{icon:"fire",size:"sm",type:"button",disabled:!0},"Declare Incident")),$&&t.createElement(c.Qj,{icon:"fire",size:"sm",type:"button",href:R},"Declare Incident"))};var Se=e(41273);const Ue=({rule:n,rulesSource:i,isViewMode:d})=>{const R=(0,r.wW)(_e),{namespace:S,group:W,rulerRule:$}=n,Q=(0,ee.Pc)(n.rulerRule)?n.rulerRule.grafana_alert.id??"":"",{StateHistoryModal:ge,showStateHistoryModal:ve}=Re(Q),j=(0,h.useDispatch)(),se=(0,l.TH)(),fe=(0,P.iG)(),[b,pe]=(0,t.useState)(),Oe=(0,q.HY)(i)?i:(0,xe.Xy)(i.jsonData.alertmanagerUid)?.name,be=O.Vt.hasPermission(h.AccessControlAction.DataSourcesExplore),K=[],V=[],Ke=()=>{if(b&&b.rulerRule){const G=Ee.Zk((0,q.EG)(b.namespace.rulesSource),b.namespace.name,b.group.name,b.rulerRule);j((0,z.hS)(G,{navigateTo:d?"/alerting/list":void 0})),pe(void 0)}},oe=(0,ee.Jq)(W),Me=(0,q.EG)(i),he=(0,ee.Pc)(n.rulerRule)&&Boolean(n.rulerRule.grafana_alert.provenance),Fe=(0,ee.x_)(n.promRule)&&n.promRule.state===E.x_.Firing,Ne=(0,Te.Bz)(Me),$e=O.Vt.hasPermission(Ne.create),{isEditable:ze,isRemovable:je}=(0,y.M)(Me,$),Ve=We(n),Ce=()=>(0,ue.t6)(i,n),Ge=se.pathname+se.search;if((0,q.jq)(i)&&be&&!oe&&K.push(t.createElement(c.Qj,{size:"sm",key:"explore",variant:"primary",icon:"chart-line",target:"__blank",href:(0,ue.mH)(i.name,n.query)},"See graph")),n.annotations[k.q6.runbookURL]&&K.push(t.createElement(c.Qj,{size:"sm",key:"runbook",variant:"primary",icon:"book",target:"__blank",href:s.QX.sanitizeUrl(n.annotations[k.q6.runbookURL])},"View runbook")),n.annotations[k.q6.dashboardUID]){const G=n.annotations[k.q6.dashboardUID];if(G){K.push(t.createElement(c.Qj,{size:"sm",key:"dashboard",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(G)}`},"Go to dashboard"));const te=n.annotations[k.q6.panelID];te&&K.push(t.createElement(c.Qj,{size:"sm",key:"panel",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(G)}?viewPanel=${encodeURIComponent(te)}`},"Go to panel"))}}if(Ve&&Oe&&K.push(t.createElement(c.Qj,{size:"sm",key:"silence",icon:"bell-slash",target:"__blank",href:(0,ue.Vv)(Oe,n)},"Silence")),Q&&K.push(t.createElement(t.Fragment,{key:"history"},t.createElement(c.zx,{size:"sm",icon:"history",onClick:()=>ve()},"Show state history"),ge)),Fe&&Be()&&K.push(t.createElement(t.Fragment,{key:"declare-incident"},t.createElement(Le,{title:n.name,url:Ce()}))),d&&$){const G=(0,q.EG)(i),te=Ee.Zk(G,S.name,W.name,$);if(ze&&!oe&&(V.push(t.createElement(m.m,{key:"copy",icon:"copy",onClipboardError:ye=>{fe.error("Error while copying URL",ye)},size:"sm",getText:Ce},"Copy link to rule")),!he)){const ye=g.Cj.renderUrl(`${o.v.appSubUrl}/alerting/${encodeURIComponent(Ee.$V(te))}/edit`,{returnTo:Ge});V.push(t.createElement(c.Qj,{size:"sm",key:"edit",variant:"secondary",icon:"pen",href:ye},"Edit"))}$e&&!oe&&V.push(t.createElement(Se.E,{key:"clone",text:"Copy",ruleIdentifier:te,isProvisioned:he})),je&&!oe&&!he&&V.push(t.createElement(c.zx,{size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>pe(n)},"Delete"))}return K.length||V.length?t.createElement(t.Fragment,null,t.createElement("div",{className:R.wrapper},t.createElement(D.Lh,{width:"auto"},K.length?K:t.createElement("div",null)),t.createElement(D.Lh,{width:"auto"},V.length?V:t.createElement("div",null))),!!b&&t.createElement(v.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:Ke,onDismiss:()=>pe(void 0)})):null};function Be(){const n=o.v.buildInfo,i=n.edition===f.e.OpenSource,d=n.env==="development";return!i||d}function We(n){const i=(0,ee.Pc)(n.rulerRule),{useGetAlertmanagerChoiceStatusQuery:d}=p.h,{currentData:R,isLoading:S}=d(void 0,{skip:!i});if(!i||S)return!1;const W=O.Vt.hasAccess(h.AccessControlAction.AlertingInstanceCreate,O.Vt.isEditor),$=R?.alertmanagersChoice===C.TE.External,Q=R?.alertmanagersChoice===C.TE.All;return W&&(!$||Q)}const _e=n=>({wrapper:a.css`
    padding: ${n.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${n.colors.border.medium};
  `})},68854:(I,u,e)=>{e.d(u,{J:()=>f});var a=e(9892),t=e(68404),l=e(72648),s=e(99085),g=e(78543);function f(r){const c=(0,l.wW)(o),{annotations:m}=r,D=(0,s.XW)(m);return m.length===0?null:t.createElement("div",{className:c.annotations},m.map(([v,P])=>t.createElement(g.a,{key:v,annotationKey:v,value:P,valueLink:D.get(v)})))}const o=()=>({annotations:a.css`
    margin-top: 46px;
  `})},24990:(I,u,e)=>{e.d(u,{C:()=>c});var a=e(9892),t=e(68404),l=e(86647),s=e(72648),g=e(97573),f=e(45849),o=e(79662),r=e(80498);function c(D){const{rulesSource:v,rule:P}=D,O=(0,s.wW)(m),C=(0,t.useMemo)(()=>{if((0,f.jq)(v))return[{name:v.name,icon:v.meta.info.logos.small}];if((0,o.Pc)(P.rulerRule)){const{data:h}=P.rulerRule.grafana_alert,E=h.reduce((p,y)=>{const T=(0,l.F)().getInstanceSettings(y.datasourceUid);return!T||T.uid===g.Yq||(p[T.name]={name:T.name,icon:T.meta.info.logos.small}),p},{});return Object.values(E)}return[]},[P,v]);return C.length===0?null:t.createElement(r.C,{label:"Data source"},C.map(({name:h,icon:E},p)=>t.createElement("div",{key:h},E&&t.createElement(t.Fragment,null,t.createElement("img",{alt:`${h} datasource logo`,className:O.dataSourceIcon,src:E})," "),h)))}function m(D){const v=D.spacing(2);return{dataSourceIcon:a.css`
      width: ${v};
      height: ${v};
    `}}},8674:(I,u,e)=>{e.d(u,{C:()=>h});var a=e(9892),t=e(68404),l=e(45849),s=e(80498),g=e(57706),f=e(56747),o=e(67660),r=e(12724),c=e(72648),m=e(19370),D=e(21899),v=e(94884);const P=({language:p,expr:y})=>{const T=(0,t.useMemo)(()=>[(0,o.Z)({onlyIn:N=>N.type==="code_block",getSyntax:()=>p},{...g.languages,[p]:p==="logql"?m.ZP:D.ZP})],[p]),F=(0,t.useMemo)(()=>(0,r.l1)(y),[y]);return t.createElement(f.ML,{"data-testid":"expression-editor",plugins:T,value:F})},O=({expression:p,rulesSource:y})=>{const T=(0,c.wW)(C);return t.createElement(v.t,{className:(0,a.cx)(T.well,"slate-query-field")},(0,l.jq)(y)?t.createElement(P,{expr:p,language:y.type===l.ye.Loki?"logql":"promql"}):p)},C=p=>({well:a.css`
    font-family: ${p.typography.fontFamilyMonospace};
  `});function h(p){const{annotations:y,rulesSource:T,rule:F}=p,N=E();return(0,l.jq)(T)?t.createElement(s.C,{label:"Expression",horizontal:!0,className:(0,a.cx)({[N.exprRow]:!!y.length})},t.createElement(O,{expression:F.query,rulesSource:T})):null}const E=()=>({exprRow:a.css`
    margin-bottom: 46px;
  `})},78443:(I,u,e)=>{e.d(u,{M:()=>F});var a=e(9892),t=e(82897),l=e(68404),s=e(72648),g=e(31403),f=e(30151),o=e(34719),r=e(64353),c=e(2594),m=e(46063);const D=({className:x,onStateFilterChange:A,stateFilter:U,filterType:L,itemPerStateStats:B})=>{const _=(0,s.wW)(v),H=M=>function(){return B&&B[M]?l.createElement(o.V,{name:B[M].toFixed(0),colorIndex:9,className:_.tag}):null},z=Object.values(m.bj).map(M=>({label:M,value:M,component:H(M)})),Z=[m.x_.Firing,m.x_.Pending].map(M=>({label:(0,t.capitalize)(M),value:M,component:H(M)})),J=L==="grafana"?z:Z;return l.createElement("div",{className:x,"data-testid":"alert-instance-state-filter"},l.createElement(r._,null,"State"),l.createElement(c.S,{options:J,value:U,onChange:A,onClick:M=>{M===U&&A(void 0)}}))};function v(x){return{tag:a.css`
      font-size: 11px;
      font-weight: normal;
      padding: ${x.spacing(.25,.5)};
      vertical-align: middle;
      margin-left: ${x.spacing(.5)};
    `}}var P=e(20194),O=e(10505),C=e(40286),h=e(45849),E=e(79662),p=e(80498),y=e(48563);function T(x){const A=(0,s.wW)(ne),{ruleViewPageLink:U,stats:L}=x;return l.createElement("div",{className:A.footerRow},l.createElement("div",null,"Showing ",L.visibleItemsCount," out of ",L.totalItemsCount," instances"),U&&l.createElement(g.Qj,{href:U,size:"sm",variant:"secondary"},"Show all ",L.totalItemsCount," alert instances"))}function F(x){const{rule:{promRule:A,namespace:U},itemsDisplayLimit:L=Number.POSITIVE_INFINITY,pagination:B}=x,[_,H]=(0,l.useState)(),[z,ae]=(0,l.useState)(),[Z]=(0,l.useState)(Math.floor(Math.random()*100)),J=`queryString-${Z}`,M=(0,s.wW)(ne),le=(0,h.HY)(U.rulesSource)?h.GC:"prometheus",Y=(0,l.useMemo)(()=>(0,E.x_)(A)&&A.alerts?.length?N(_,z,(0,O.Zl)(C.As.Importance,A.alerts)):[],[A,z,_]);if(!(0,E.x_)(A))return null;const X=Y.slice(0,L),re=(0,t.countBy)(A.alerts,w=>(0,m.ED)(w.state)),ie=Y.length-X.length,ce={totalItemsCount:Y.length,visibleItemsCount:X.length},me=(0,O.V2)(U.rulesSource,x.rule,location.pathname+location.search),de=ie?l.createElement(T,{stats:ce,ruleViewPageLink:me}):void 0;return l.createElement(p.C,{label:"Matching instances",horizontal:!0},l.createElement("div",{className:(0,a.cx)(M.flexRow,M.spaceBetween)},l.createElement("div",{className:M.flexRow},l.createElement(f.F,{className:M.rowChild,key:J,defaultQueryString:_,onFilterChange:w=>H(w)}),l.createElement(D,{className:M.rowChild,filterType:le,stateFilter:z,onStateFilterChange:ae,itemPerStateStats:re}))),l.createElement(y.o,{instances:X,pagination:B,footerRow:de}))}function N(x,A,U){let L=[...U];if(x){const B=(0,P.Zh)(x||"");L=L.filter(({labels:_})=>(0,P.eD)(_,B))}return A&&(L=L.filter(B=>(0,m.ED)(B.state)===A)),L}const ne=x=>({flexRow:a.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${x.spacing(1)};
    `,spaceBetween:a.css`
      justify-content: space-between;
    `,rowChild:a.css`
      margin-right: ${x.spacing(1)};
    `,footerRow:a.css`
      display: flex;
      flex-direction: column;
      gap: ${x.spacing(1)};
      justify-content: space-between;
      align-items: center;
      width: 100%;
    `})},80399:(I,u,e)=>{e.d(u,{V:()=>f});var a=e(9892),t=e(68404),l=e(72648),s=e(6554),g=e(39904);const f=({rule:r})=>{const c=(0,l.wW)(o);return r.health==="err"||r.health==="error"?t.createElement(s.u,{theme:"error",content:r.lastError||"No error message provided."},t.createElement("div",{className:c.warn},t.createElement(g.J,{name:"exclamation-triangle"}),t.createElement("span",null,"error"))):t.createElement(t.Fragment,null,r.health)},o=r=>({warn:a.css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${r.spacing(1)};

    color: ${r.colors.warning.text};
  `})},48208:(I,u,e)=>{e.d(u,{p:()=>m});var a=e(9892),t=e(68404),l=e(37556),s=e(72648),g=e(52081),f=e(67487),o=e(46063),r=e(79662),c=e(45608);const m=({rule:v,isDeleting:P,isCreating:O,isPaused:C})=>{const h=(0,s.wW)(D),{promRule:E}=v,p=(0,t.useMemo)(()=>{if(E&&(0,r.x_)(E)&&E.alerts?.length&&E.state!==o.x_.Inactive){const y=(0,r.ub)(E);if(y)return t.createElement("span",{title:String(y),className:h.for},"for"," ",(0,l.vT)({start:y,end:new Date},!1))}return null},[E,h]);return P?t.createElement(g.Lh,{align:"flex-start"},t.createElement(f.$,null),"deleting"):O?t.createElement(g.Lh,{align:"flex-start"}," ",t.createElement(f.$,null),"creating"):E&&(0,r.x_)(E)?t.createElement(g.Lh,{align:"flex-start"},t.createElement(c.l,{state:E.state,isPaused:C}),p):E&&(0,r.OP)(E)?t.createElement(t.Fragment,null,"Recording rule"):t.createElement(t.Fragment,null,"n/a")},D=v=>({for:a.css`
    font-size: ${v.typography.bodySmall.fontSize};
    color: ${v.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},55485:(I,u,e)=>{e.d(u,{W:()=>f});var a=e(68404),t=e(81168),l=e(72004),s=e(46818),g=e(69945);function f(o){const r=(0,t.useDispatch)(),c=(0,g._)(m=>m.folders);if((0,a.useEffect)(()=>{o&&r((0,l.sw)(o))},[r,o]),o){const m=c[o]||s.oq;return{folder:m.result,loading:m.loading}}return{loading:!1}}},44391:(I,u,e)=>{e.d(u,{M:()=>f});var a=e(82002),t=e(97953),l=e(79662),s=e(55485),g=e(69945);function f(o,r){const c=(0,g._)(E=>E.dataSources),m=r&&(0,l.Pc)(r)?r.grafana_alert.namespace_uid:void 0,D=(0,t.Bz)(o),{folder:v,loading:P}=(0,s.W)(m);if(!r)return{isEditable:!1,isRemovable:!1,loading:!1};if((0,l.Pc)(r)){if(!m)throw new Error(`Rule ${r.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);if(!v)return{isEditable:!1,isRemovable:!1,loading:P};const E=v.canSave,p=a.Vt.hasAccessInMetadata(D.update,v,E),y=a.Vt.hasAccessInMetadata(D.delete,v,E);return{isEditable:p,isRemovable:y,loading:P}}const O=Boolean(c[o]?.result?.rulerConfig),C=a.Vt.hasAccess(D.update,a.Vt.isEditor),h=a.Vt.hasAccess(D.delete,a.Vt.isEditor);return{isEditable:C&&O,isRemovable:h&&O,loading:c[o]?.loading}}},58509:(I,u,e)=>{e.d(u,{n:()=>l});var a=e(22350),t=e(13011);function l(s){const{loading:g,error:f,value:o}=(0,a.Z)(()=>(0,t.a)(s,{showErrorAlert:!1})),r=o&&!f&&!g,c=o?.enabled;return g&&!o?{loading:!0}:!r||!c?{loading:!1,installed:!1}:{loading:g,installed:!0,settings:o}}},2390:(I,u,e)=>{e.d(u,{W:()=>a});var a=(t=>(t.Incident="grafana-incident-app",t.OnCall="grafana-oncall-app",t.MachineLearning="grafana-ml-app",t))(a||{})},19370:(I,u,e)=>{e.d(u,{$5:()=>a,EH:()=>s,Rd:()=>l,ZP:()=>c,md:()=>g,r8:()=>f,uR:()=>t,xY:()=>r});const a=[{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"}],t=[{label:"json",insertText:"json",documentation:"Extracting labels from the log line using json parser."},{label:"regexp",insertText:'regexp ""',documentation:"Extracting labels from the log line using regexp parser.",move:-1},{label:"logfmt",insertText:"logfmt",documentation:"Extracting labels from the log line using logfmt parser."},{label:"pattern",insertText:"pattern",documentation:"Extracting labels from the log line using pattern parser. Only available in Loki 2.3+."},{label:"unpack",insertText:"unpack",detail:"unpack identifier",documentation:'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.2+.'}],l=[{label:"unwrap",insertText:"unwrap",detail:"unwrap identifier",documentation:"Take labels and use the values as sample data for metric aggregations."},{label:"label_format",insertText:"label_format",documentation:"Use to rename, modify or add labels. For example, | label_format foo=bar ."},{label:"line_format",insertText:"line_format",documentation:'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" .'}],s=[{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average of all values in the specified interval."},{insertText:"bytes_over_time",label:"bytes_over_time",detail:"bytes_over_time(range-vector)",documentation:"Counts the amount of bytes used by each log stream for a given range"},{insertText:"bytes_rate",label:"bytes_rate",detail:"bytes_rate(range-vector)",documentation:"Calculates the number of bytes per second for each stream."},{insertText:"first_over_time",label:"first_over_time",detail:"first_over_time(range-vector)",documentation:"The first of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"last_over_time",label:"last_over_time",detail:"last_over_time(range-vector)",documentation:"The last of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum of all values in the specified interval."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum of all values in the specified interval."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The \u03C6-quantile (0 \u2264 \u03C6 \u2264 1) of the values in the specified interval."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the number of entries per second."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval."}],g=[{insertText:"vector",label:"vector",detail:"vector(scalar)",documentation:"Returns the scalar as a vector with no labels."}],f=[...a,...s,...g],o=[...f,...l,...t].map(m=>m.label),r={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((without|by)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},"context-pipe":{pattern:/\s\|[^=~]\s?\w*/i,inside:{"pipe-operator":{pattern:/\|/i,alias:"operator"},"pipe-operations":{pattern:new RegExp(`${[...t,...l].map(m=>m.label).join("|")}`,"i"),alias:"keyword"}}},function:new RegExp(`\\b(?:${f.map(m=>m.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=\])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],quote:{pattern:/"(?:\\.|[^\\"])*"/,alias:"string",greedy:!0},backticks:{pattern:/`(?:\\.|[^\\`])*`/,alias:"string",greedy:!0},number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:/\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,punctuation:/[{}(),.]/},c=r}}]);

//# sourceMappingURL=6797.3fa9657c48903eda5adf.js.map