"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4253],{86218:(K,v,e)=>{e.d(v,{x:()=>G});var a=e(68404),c=e(14747),i=e(31403),E=e(2555),u=e(9892),r=e(24699),I=e(68183),T=e(72648),S=e(17784),B=e(56766),R=e(52081),A=e(51613),O=e(74509);function Q(){const l=(0,O.UQ)(),{isLoading:s}=(0,O.ZV)(),n=(0,T.wW)(H);return s||l.length===0?null:a.createElement(S.v,{"aria-label":I.wl.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/"},a.createElement("div",null,a.createElement("p",null,"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."),"The following plugins are disabled and not shown in the list below:",a.createElement(B.a,{items:l,className:n.list,renderItem:d=>a.createElement("div",{className:n.wrapper},a.createElement(R.Lh,{spacing:"sm",justify:"flex-start",align:"center"},a.createElement("strong",null,d.pluginId),a.createElement(A.o,{status:z(d.errorCode),className:n.badge})))})))}function z(l){switch(l){case r.w2.invalidSignature:return r.Xy.invalid;case r.w2.missingSignature:return r.Xy.missing;case r.w2.modifiedSignature:return r.Xy.modified;default:return r.Xy.missing}}function H(l){return{list:(0,u.css)({listStyleType:"circle"}),wrapper:(0,u.css)({marginTop:l.spacing(1)}),badge:(0,u.css)({marginTop:0})}}var M=e(81168),Z=e(35645),U=e(86475),h=e(72948);function C({onClick:l,dataSourcePlugin:s}){const n=s.module==="phantom",d=!n&&!s.unlicensed,g=s.info?.links?.length>0?s.info.links[0]:null,f=g?.target??"_blank",p=(0,T.wW)(L);return a.createElement(h.Z,{className:(0,u.cx)(p.card,"card-parent"),onClick:d?l:()=>{}},a.createElement(h.Z.Heading,{className:p.heading,"aria-label":I.wl.pages.AddDataSource.dataSourcePluginsV2(s.name)},s.name),a.createElement(h.Z.Figure,{align:"center",className:p.figure},a.createElement("img",{className:p.logo,src:s.info.logos.small,alt:""})),a.createElement(h.Z.Description,{className:p.description},s.info.description),!n&&a.createElement(h.Z.Meta,{className:p.meta},a.createElement(A.o,{status:s.signature})),a.createElement(h.Z.Actions,{className:p.actions},g&&a.createElement(i.Qj,{"aria-label":`${s.name}, learn more.`,href:`${g.url}?utm_source=grafana_add_ds`,onClick:D=>D.stopPropagation(),rel:"noopener",target:f,variant:"secondary"},g.name)))}function L(l){return{heading:(0,u.css)({fontSize:l.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,u.css)({width:"inherit",marginRight:"0px","> img":{width:l.spacing(7)}}),meta:(0,u.css)({marginTop:"6px",position:"relative"}),description:(0,u.css)({margin:"0px",fontSize:l.typography.size.sm}),actions:(0,u.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,u.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,u.css)({marginRight:l.v1.spacing.lg,marginLeft:l.v1.spacing.sm,width:l.spacing(7),maxHeight:l.spacing(7)})}}function W({dataSourcePlugins:l,onClickDataSourceType:s}){return!l||!l.length?null:a.createElement(B.a,{items:l,getItemKey:n=>n.id.toString(),renderItem:n=>a.createElement(C,{dataSourcePlugin:n,onClick:()=>s(n)}),className:u.css`
        > li {
          margin-bottom: 2px;
        }
      `})}function j({categories:l,onClickDataSourceType:s}){const n=Z.v.featureToggles.dataConnectionsConsole?`${U.Z.ConnectData}?cat=data-source`:"/plugins?filterBy=all&filterByType=datasource&utm_source=grafana_add_ds";return a.createElement(a.Fragment,null,l.map(({id:d,title:g,plugins:f})=>a.createElement("div",{className:"add-data-source-category",key:d},a.createElement("div",{className:"add-data-source-category__header",id:d},g),a.createElement(W,{dataSourcePlugins:f,onClickDataSourceType:s}))),a.createElement("div",{className:"add-data-source-more"},a.createElement(i.Qj,{variant:"secondary",href:n,target:"_self",rel:"noopener"},"Find more data source plugins")))}var y=e(25e3);function G(){(0,y.OU)();const l=(0,M.useDispatch)(),s=(0,M.useSelector)(D=>(0,y.I5)(D.dataSources)),n=(0,M.useSelector)(D=>D.dataSources.dataSourceTypeSearchQuery),d=(0,M.useSelector)(D=>D.dataSources.isLoadingDataSourcePlugins),g=(0,M.useSelector)(D=>D.dataSources.categories),f=(0,y.nH)(),p=D=>l((0,y.Ht)(D));return a.createElement(V,{dataSources:s,dataSourceCategories:g,searchQuery:n,isLoading:d,onAddDataSource:f,onSetSearchQuery:p})}function V({dataSources:l,dataSourceCategories:s,searchQuery:n,isLoading:d,onAddDataSource:g,onSetSearchQuery:f}){const p=(0,y.d7)();return d?a.createElement(E.Z,null):a.createElement(a.Fragment,null,a.createElement("div",{className:"page-action-bar"},a.createElement(c.H,{value:n,onChange:f,placeholder:"Filter by name or type"}),a.createElement("div",{className:"page-action-bar__spacer"}),a.createElement(i.Qj,{href:p.List,fill:"outline",variant:"secondary",icon:"arrow-left"},"Cancel")),!n&&a.createElement(Q,null),a.createElement("div",null,n&&a.createElement(W,{dataSourcePlugins:l,onClickDataSourceType:g}),!n&&a.createElement(j,{categories:s,onClickDataSourceType:g})))}},70594:(K,v,e)=>{e.r(v),e.d(v,{NewDataSourcePage:()=>u,default:()=>r});var a=e(68404),c=e(79396),i=e(86218),E=e(3597);function u(){const I={icon:"database",id:"datasource-new",text:"Add data source",url:E.n.New,subTitle:"Choose a data source type"};return a.createElement(c.T,{navId:"datasources",pageNav:I},a.createElement(c.T.Contents,null,a.createElement(i.x,null)))}const r=u},59332:(K,v,e)=>{e.d(v,{V:()=>i});var a=e(68404),c=e(3597);const i=(0,a.createContext)(c.n)},24231:(K,v,e)=>{e.d(v,{E:()=>Q,IA:()=>W,MF:()=>G,OU:()=>Z,Qs:()=>j,YY:()=>V,_l:()=>y,d7:()=>l,hw:()=>z,nH:()=>U,q6:()=>C,qj:()=>h,wi:()=>M,wl:()=>L,zJ:()=>H});var a=e(68404),c=e(70431),i=e(18271),E=e(77582),u=e(86245),r=e(81168),I=e(45984),T=e(85597),S=e(96488),B=e(59332),R=e(79508),A=e(41632),O=e(93769);const Q=s=>{const n=(0,r.useDispatch)();(0,a.useEffect)(()=>(n((0,S.M9)(s)),function(){n((0,c.e)({cleanupAction:g=>g.dataSourceSettings=A.fk}))}),[s,n])},z=s=>{const n=(0,r.useDispatch)(),d=l();return()=>n((0,S.kY)(s,d.Edit))},H=()=>{const s=(0,r.useDispatch)(),n=(0,r.useSelector)(g=>g.dataSources.isLoadingDataSources),d=(0,r.useSelector)(g=>g.dataSources.dataSources);return(0,a.useEffect)(()=>{s((0,S.bZ)())},[s]),{isLoading:n,dataSources:d}},M=s=>{const n=(0,r.useDispatch)();(0,a.useEffect)(()=>{n((0,S.gv)(s))},[n,s])},Z=()=>{const s=(0,r.useDispatch)();(0,a.useEffect)(()=>{s((0,S.Kj)())},[s])},U=()=>{const s=(0,r.useDispatch)(),n=l();return d=>{s((0,S.J_)(d,n.Edit))}},h=()=>{const s=(0,r.useDispatch)();return async n=>s((0,S.oe)(n))},C=()=>{const s=(0,r.useDispatch)(),{name:n}=(0,r.useSelector)(d=>d.dataSources.dataSource);return()=>{i.Z.publish(new I.VJ({title:"Delete",text:`Are you sure you want to delete the "${n}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>s((0,S.F5)())}))}},L=s=>(0,r.useSelector)(n=>(0,O.f6)(n.dataSources,s)),W=s=>{const n=L(s);return(0,T.iU)(n)},j=s=>(0,r.useSelector)(n=>(0,O.G4)(n.dataSources,s)),y=()=>(0,r.useSelector)(s=>s.dataSourceSettings),G=(s,n)=>{const d=L(s),{plugin:g,loadError:f,loading:p}=y(),D=(0,r.useSelector)(F=>F.navIndex),x=n?`datasource-${n}-${s}`:`datasource-settings-${s}`;if(f){const F={text:f,subTitle:"Data Source Error",icon:"exclamation-triangle"};return{node:F,main:F}}return p||!g?(0,u.ht)(D,x,(0,R.xG)("settings")):(0,u.ht)(D,x,(0,R.nI)((0,R.B1)(d,g),n||"settings"))},V=s=>{const n=L(s),d=n.readOnly===!0,g=E.Vt.hasPermissionInMetadata(r.AccessControlAction.DataSourcesWrite,n),f=E.Vt.hasPermissionInMetadata(r.AccessControlAction.DataSourcesDelete,n);return{readOnly:d,hasWriteRights:g,hasDeleteRights:f}},l=()=>(0,a.useContext)(B.V)},25e3:(K,v,e)=>{e.d(v,{BX:()=>u.BX,E:()=>i.E,Ht:()=>u.Ht,I5:()=>r.I5,IA:()=>r.IA,IO:()=>r.IO,J_:()=>a.J_,MF:()=>i.MF,Nu:()=>u.Nu,OU:()=>i.OU,Qs:()=>i.Qs,Rz:()=>i.IA,Vj:()=>c.V,YY:()=>i.YY,_l:()=>i._l,d7:()=>i.d7,hw:()=>i.hw,mt:()=>r.mt,nH:()=>i.nH,q6:()=>i.q6,qj:()=>i.qj,r7:()=>r.r7,rl:()=>u.rl,wi:()=>i.wi,wl:()=>i.wl,yr:()=>u.yr,zJ:()=>i.zJ,zT:()=>u.zT});var a=e(96488),c=e(59332),i=e(24231),E=e(79508),u=e(41632),r=e(93769)},74509:(K,v,e)=>{e.d(v,{iY:()=>X,bt:()=>f,ZV:()=>g,GE:()=>W,UQ:()=>V,bJ:()=>y,x3:()=>l,IS:()=>p,y9:()=>d,S1:()=>n,wq:()=>D,kH:()=>s});var a=e(68404),c=e(81168),i=e(59210),E=e(85805),u=e(66552),r=e(90158),I=e(29076),T=e(48996);const S=t=>t.plugins,B=(0,r.P1)(S,({items:t})=>t),R=(0,r.P1)(S,({settings:t})=>t.displayMode),{selectAll:A,selectById:O}=u.CD.getSelectors(B),Q=t=>(0,r.P1)(A,o=>o.filter(m=>t==="installed"?m.isInstalled:!m.isCore)),z=(t,o)=>(0,r.P1)(Q(t),m=>m.filter(P=>o==="all"||P.type===o)),H=t=>(0,r.P1)(A,o=>t===""?[]:o.filter(m=>{const P=[];return m.name&&P.push(m.name.toLowerCase()),m.orgName&&P.push(m.orgName.toLowerCase()),P.some(N=>N.includes((0,I.x6)(t).toLowerCase()))})),M=(t,o,m)=>(0,r.P1)(z(o,m),H(t),(P,N)=>t===""?P:N),Z=(0,r.P1)(A,t=>t?t.filter(o=>Boolean(o.error)).map(o=>({pluginId:o.id,errorCode:o.error})):[]),U=t=>(0,r.P1)(S,({requests:o={}})=>o[t]),h=t=>(0,r.P1)(U(t),o=>o?.status===T.eE.Pending),C=t=>(0,r.P1)(U(t),o=>o?.status===T.eE.Rejected?o?.error:null),L=t=>(0,r.P1)(U(t),o=>o===void 0),W=({query:t="",filterBy:o="installed",filterByType:m="all",sortBy:P=i.Nh.nameAsc})=>{x();const N=(0,c.useSelector)(M(t,o,m)),{isLoading:J,error:$}=g(),_=(0,i.AA)(N,P);return{isLoading:J,error:$,plugins:_}},j=()=>(x(),useSelector(selectAll)),y=t=>(x(),Y(t),(0,c.useSelector)(o=>O(o,t))),G=t=>(F(),useSelector(o=>selectById(o,t))),V=()=>(x(),(0,c.useSelector)(Z)),l=()=>{const t=(0,c.useDispatch)();return(o,m,P)=>t((0,E.N9)({id:o,version:m,isUpdating:P}))},s=()=>{const t=(0,c.useDispatch)();return()=>t((0,E.bQ)())},n=()=>{const t=(0,c.useDispatch)();return o=>t((0,E.Tz)(o))},d=()=>(0,c.useSelector)(C(E.tQ.typePrefix))===null,g=()=>{const t=(0,c.useSelector)(h(E.Qd.typePrefix)),o=(0,c.useSelector)(C(E.Qd.typePrefix));return{isLoading:t,error:o}},f=()=>{const t=(0,c.useSelector)(h(E.DD.typePrefix)),o=(0,c.useSelector)(C(E.DD.typePrefix));return{isLoading:t,error:o}},p=()=>{const t=(0,c.useSelector)(h(E.N9.typePrefix)),o=(0,c.useSelector)(C(E.N9.typePrefix));return{isInstalling:t,error:o}},D=()=>{const t=(0,c.useSelector)(h(E.Tz.typePrefix)),o=(0,c.useSelector)(C(E.Tz.typePrefix));return{isUninstalling:t,error:o}},x=()=>{const t=(0,c.useDispatch)(),o=(0,c.useSelector)(L(E.Qd.typePrefix));(0,a.useEffect)(()=>{o&&t((0,E.Qd)())},[])},F=()=>{const t=useDispatch(),o=useSelector(selectIsRequestNotFetched(fetchAllLocal.typePrefix));useEffect(()=>{o&&t(fetchAllLocal())},[])},Y=t=>{const o=(0,c.useDispatch)(),m=(0,c.useSelector)(J=>O(J,t)),N=!(0,c.useSelector)(h(E.DD.typePrefix))&&m&&!m.details;(0,a.useEffect)(()=>{N&&o((0,E.DD)(t))},[m])},X=()=>{const t=(0,c.useDispatch)();return{displayMode:(0,c.useSelector)(R),setDisplayMode:m=>t((0,u.UC)(m))}}}}]);

//# sourceMappingURL=NewDataSourcePage.2b1579bdca561bb71a38.js.map