"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2721],{29209:(x,D,t)=>{t.r(D),t.d(D,{default:()=>_});var e=t(68404),M=t(671),o=t(54899),p=t(45253),h=t(19825),C=t(94270),T=t(24799),i=t(46967),g=t(31403),A=t(52081),I=t(78889),v=t(79396),c=t(77582),U=t(95156),d=t(81168),E=t(68903);const P=30,L=async l=>await(0,o.i)().get(`/api/orgs/${l}`),y=async(l,s)=>c.Vt.hasPermission(d.AccessControlAction.OrgUsersRead)?(0,o.i)().get(`/api/orgs/${l}/users/search`,(0,U.y)({perpage:P,page:s})):{orgUsers:[]},a=(l,s)=>(0,o.i)().patch(`/api/orgs/${s}/users/${l.userId}`,l),m=(l,s)=>(0,o.i)().delete(`/api/orgs/${s}/users/${l.userId}`),_=({match:l})=>{const s=parseInt(l.params.id,10),W=c.Vt.hasPermission(d.AccessControlAction.OrgsWrite),B=c.Vt.hasPermission(d.AccessControlAction.OrgUsersRead),[K,S]=(0,e.useState)([]),[u,b]=(0,e.useState)(1),[$,V]=(0,e.useState)(1),[R,N]=(0,M.Z)(()=>L(s),[]),[,f]=(0,M.Z)(async n=>{const r=await y(s,n),G=r?.perPage!==0?Math.ceil(r.totalCount/r.perPage):0;return V(G),S(r.orgUsers),r.orgUsers},[]);(0,e.useEffect)(()=>{N(),f(u)},[N,f,u]);const z=async n=>await(0,o.i)().put(`/api/orgs/${s}`,{...R.value,name:n}),F=()=>e.createElement(p.b,{severity:"info",title:"Access denied"},"You do not have permission to see users in this organization. To update this organization, contact your server administrator."),Z=n=>{b(n)},j=async n=>{await m(n,s),f(u)},X=async(n,r)=>{await a({...r,role:n},s),f(u)},Y={text:R?.value?.name??"",icon:"shield",breadcrumbs:[{title:"Orgs",url:"admin/orgs"}],subTitle:"Manage settings and user roles for an organization."};return e.createElement(v.T,{navId:"global-orgs",pageNav:Y,subTitle:"Manage settings for this specific org."},e.createElement(v.T.Contents,null,e.createElement(e.Fragment,null,e.createElement(h.D,null,"Edit organization"),R.value&&e.createElement(C.l,{defaultValues:{orgName:R.value.name},onSubmit:n=>z(n.orgName)},({register:n,errors:r})=>e.createElement(e.Fragment,null,e.createElement(T.g,{label:"Name",invalid:!!r.orgName,error:"Name is required",disabled:!W},e.createElement(i.I,{...n("orgName",{required:!0}),id:"org-name-input"})),e.createElement(g.zx,{type:"submit",disabled:!W},"Update"))),e.createElement("div",{style:{marginTop:"20px"}},e.createElement(h.D,null,"Organization users"),!B&&F(),B&&!!K.length&&e.createElement(A.wc,{spacing:"md"},e.createElement(E.P,{users:K,orgId:s,onRoleChange:X,onRemoveUser:j}),e.createElement(A.Lh,{justify:"flex-end"},e.createElement(I.t,{onNavigate:Z,currentPage:u,numberOfPages:$,hideWhenSinglePage:!0})))))))}},68903:(x,D,t)=>{t.d(D,{P:()=>I});var e=t(68404),M=t(31403),o=t(98102),p=t(66226),h=t(11630),C=t(21731),T=t(47694),i=t(77582),g=t(81168),A=t(65135);const I=({users:v,orgId:c,onRoleChange:U,onRemoveUser:d})=>{const[E,P]=(0,e.useState)(null),[L,y]=(0,e.useState)([]);return(0,e.useEffect)(()=>{async function a(){try{if(i.Vt.hasPermission(g.AccessControlAction.ActionRolesList)){let m=await(0,h.ul)(c);y(m)}}catch{console.error("Error loading options")}}i.Vt.licensedAccessControlEnabled()&&a()},[c]),e.createElement(e.Fragment,null,e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Login"),e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null,"Seen"),e.createElement("th",null,"Role"),e.createElement("th",{style:{width:"34px"}}),e.createElement("th",null,"Origin"),e.createElement("th",null))),e.createElement("tbody",null,v.map((a,m)=>{let O=!i.Vt.hasPermissionInMetadata(g.AccessControlAction.OrgUsersWrite,a);return T.ZP.featureToggles.onlyExternalOrgRoleSync&&(O=a?.isExternallySynced||O),e.createElement("tr",{key:`${a.userId}-${m}`},e.createElement("td",{className:"width-2 text-center"},e.createElement("img",{className:"filter-table__avatar",src:a.avatarUrl,alt:"User avatar"})),e.createElement("td",{className:"max-width-6"},e.createElement("span",{className:"ellipsis",title:a.login},a.login)),e.createElement("td",{className:"max-width-5"},e.createElement("span",{className:"ellipsis",title:a.email},a.email)),e.createElement("td",{className:"max-width-5"},e.createElement("span",{className:"ellipsis",title:a.name},a.name)),e.createElement("td",{className:"width-1"},a.lastSeenAtAge),e.createElement("td",{className:"width-8"},i.Vt.licensedAccessControlEnabled()?e.createElement(p.R,{userId:a.userId,orgId:c,roleOptions:L,basicRole:a.role,onBasicRoleChange:_=>U(_,a),basicRoleDisabled:O}):e.createElement(A.A,{"aria-label":"Role",value:a.role,disabled:O,onChange:_=>U(_,a)})),e.createElement("td",{className:"width-1 text-center"},a.isDisabled&&e.createElement("span",{className:"label label-tag label-tag--gray"},"Disabled")),e.createElement("td",{className:"width-1"},Array.isArray(a.authLabels)&&a.authLabels.length>0&&e.createElement(C.e,{label:a.authLabels[0],removeIcon:!1,count:0})),i.Vt.hasPermissionInMetadata(g.AccessControlAction.OrgUsersRemove,a)&&e.createElement("td",{className:"text-right"},e.createElement(M.zx,{size:"sm",variant:"destructive",onClick:()=>{P(a)},icon:"times","aria-label":"Delete user"})))}))),Boolean(E)&&e.createElement(o.s,{body:`Are you sure you want to delete user ${E?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{P(null)},isOpen:!0,onConfirm:()=>{E&&(d(E),P(null))}}))}}}]);

//# sourceMappingURL=AdminEditOrgPage.662d396d1fc7583ad6ef.js.map