"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1324],{31808:(B,f,a)=>{a.d(f,{j:()=>C});var e=a(68404),S=a(70356),E=a(37932);function C(){const{search:m}=(0,S.TH)(),i=(0,e.useMemo)(()=>new URLSearchParams(m),[m]),h=(0,e.useCallback)((P,u)=>{E.E1.partial(P,u)},[]);return[i,h]}},30097:(B,f,a)=>{a.r(f),a.d(f,{default:()=>q});var e=a(68404),S=a(22350),E=a(79396),C=a(86245),m=a(81168),i=a(9892),h=a(82897),P=a(70197),u=a(26418),U=a(72648),M=a(14747),x=a(53217),O=a(39904),p=a(72948),W=a(34807),$=a(78889),b=a(84952),F=a(99822),H=a(61627),j=a(25724),G=a(31808),D=a(72004),v=a(20194),N=a(45849),K=a(10505),J=(t=>(t.Ascending="alpha-asc",t.Descending="alpha-desc",t))(J||{});const V=[{label:"Alphabetically [A-Z]",value:"alpha-asc"},{label:"Alphabetically [Z-A]",value:"alpha-desc"}],z=({folder:t})=>{const l=(0,U.wW)(w),r=(0,m.useDispatch)(),g=n=>{const L=(0,v.Zh)(s),A=(0,v.tC)(n),la=(0,h.uniqWith)([...L,A],h.isEqual),ra=(0,v.oI)(la);Z(ra)};(0,e.useEffect)(()=>{r((0,D.y6)({rulesSourceName:N.GC})),r((0,D.UR)({rulesSourceName:N.GC}))},[r]);const o=(0,H.Zo)(N.GC),{nameFilter:d,labelFilter:s,sortOrder:c,setNameFilter:y,setLabelFilter:Z,setSortOrder:_}=X(),R=o.find(n=>n.name===t.title)?.groups.flatMap(n=>n.rules)??[],T=Y(R,d,s,c??"alpha-asc"),aa=R.length===0||T.length===0,{page:ea,numberOfPages:ta,onPageChange:sa,pageItems:na}=(0,j.h)(T,1,b.gN);return e.createElement("div",{className:l.container},e.createElement(u.Stack,{direction:"column",gap:3},e.createElement(M.H,{value:d,onChange:y,placeholder:"Search alert rules by name","data-testid":"name-filter"}),e.createElement(u.Stack,{direction:"row"},e.createElement(x.Ph,{value:c,onChange:({value:n})=>n&&_(n),options:V,width:25,"aria-label":"Sort",placeholder:"Sort (Default A-Z)",prefix:e.createElement(O.J,{name:c==="alpha-asc"?"sort-amount-up":"sort-amount-down"})}),e.createElement(M.H,{value:s,onChange:Z,placeholder:"Search alerts by labels",className:l.filterLabelsInput,"data-testid":"label-filter"})),e.createElement(u.Stack,{gap:1},na.map(n=>e.createElement(p.Z,{key:n.name,href:(0,K.V2)("grafana",n,""),className:l.card,"data-testid":"alert-card-row"},e.createElement(p.Z.Heading,null,n.name),e.createElement(p.Z.Tags,null,e.createElement(W.P,{onClick:g,tags:Object.entries(n.labels).map(([L,A])=>`${L}=${A}`)})),e.createElement(p.Z.Meta,null,e.createElement("div",null,e.createElement(O.J,{name:"folder"})," ",t.title))))),aa&&e.createElement("div",{className:l.noResults},"No alert rules found"),e.createElement("div",{className:l.pagination},e.createElement($.t,{currentPage:ea,numberOfPages:ta,onNavigate:sa,hideWhenSinglePage:!0}))))};var Q=(t=>(t.nameFilter="nameFilter",t.labelFilter="labelFilter",t.sortOrder="sort",t))(Q||{});function X(){const[t,l]=(0,G.j)(),[r,g]=(0,e.useState)(t.get("nameFilter")??""),[o,d]=(0,e.useState)(t.get("labelFilter")??""),s=t.get("sort"),[c,y]=(0,e.useState)(s==="alpha-asc"?"alpha-asc":s==="alpha-desc"?"alpha-desc":void 0);return(0,P.Z)(()=>l({nameFilter:(0,F.sB)(r),labelFilter:(0,F.sB)(o),sort:(0,F.sB)(c)},!0),400,[r,o,c]),{nameFilter:r,labelFilter:o,sortOrder:c,setNameFilter:g,setLabelFilter:d,setSortOrder:y}}function Y(t,l,r,g){const o=(0,v.Zh)(r);let d=t.filter(s=>s.name.toLowerCase().includes(l.toLowerCase())&&(0,v.eD)(s.labels,o));return(0,h.orderBy)(d,s=>s.name.toLowerCase(),[g==="alpha-asc"?"asc":"desc"])}const w=t=>({container:i.css`
    padding: ${t.spacing(1)};
  `,card:i.css`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,pagination:i.css`
    align-self: center;
  `,filterLabelsInput:i.css`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,noResults:i.css`
    padding: ${t.spacing(2)};
    background-color: ${t.colors.background.secondary};
    font-style: italic;
  `});var I=a(61986),k=a(60492);const q=({match:t})=>{const l=(0,m.useDispatch)(),r=(0,m.useSelector)(c=>c.navIndex),g=(0,m.useSelector)(c=>c.folder),o=t.params.uid,d=(0,C.ht)(r,`folder-alerting-${o}`,(0,k._)(1)),{loading:s}=(0,S.Z)(async()=>l((0,I.Pb)(o)),[I.Pb,o]);return e.createElement(E.T,{navId:"dashboards/browse",pageNav:d.main},e.createElement(E.T.Contents,{isLoading:s},e.createElement(z,{folder:g})))}}}]);

//# sourceMappingURL=FolderAlerting.b1c09841ed2415314732.js.map