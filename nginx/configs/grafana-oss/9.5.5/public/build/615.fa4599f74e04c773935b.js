"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[615],{40615:(P,o,a)=>{a.r(o),a.d(o,{SignupPage:()=>g,default:()=>v});var e=a(68404),E=a(54899),d=a(94270),l=a(24799),i=a(46967),O=a(52081),c=a(31403),s=a(47694),f=a(60499),M=a(77293),_=a(80472),u=a(20787);const g=p=>{const A=(0,f.iG)(),C=async n=>{n.name===""&&delete n.name,delete n.confirm,(await(0,E.i)().post("/api/user/signup/step2",{email:n.email,code:n.code,username:n.email,orgName:n.orgName,password:n.password,name:n.name}).catch(r=>{const m=r.data?.message||r;A.warning(m)})).code==="redirect-to-select-org"&&window.location.assign((0,s.iE)().appSubUrl+"/profile/select-org?signup=1"),window.location.assign((0,s.iE)().appSubUrl+"/")},D={email:p.queryParams.email,code:p.queryParams.code};return e.createElement(_.dd,null,e.createElement(_.$s,null,e.createElement(d.l,{defaultValues:D,onSubmit:C},({errors:n,register:t,getValues:r})=>e.createElement(e.Fragment,null,e.createElement(l.g,{label:"Your name"},e.createElement(i.I,{id:"user-name",...t("name"),placeholder:"(optional)"})),e.createElement(l.g,{label:"Email",invalid:!!n.email,error:n.email?.message},e.createElement(i.I,{id:"email",...t("email",{required:"Email is required",pattern:{value:M.Yb,message:"Email is invalid"}}),type:"email",placeholder:"Email"})),!(0,s.iE)().autoAssignOrg&&e.createElement(l.g,{label:"Org. name"},e.createElement(i.I,{id:"org-name",...t("orgName"),placeholder:"Org. name"})),(0,s.iE)().verifyEmailEnabled&&e.createElement(l.g,{label:"Email verification code (sent to your email)"},e.createElement(i.I,{id:"verification-code",...t("code"),placeholder:"Code"})),e.createElement(l.g,{label:"Password",invalid:!!n.password,error:n?.password?.message},e.createElement(u.Z,{id:"new-password",autoFocus:!0,autoComplete:"new-password",...t("password",{required:"Password is required"})})),e.createElement(l.g,{label:"Confirm password",invalid:!!n.confirm,error:n?.confirm?.message},e.createElement(u.Z,{id:"confirm-new-password",autoComplete:"new-password",...t("confirm",{required:"Confirmed password is required",validate:m=>m===r().password||"Passwords must match!"})})),e.createElement(O.Lh,null,e.createElement(c.zx,{type:"submit"},"Submit"),e.createElement(c.Qj,{fill:"text",href:(0,s.iE)().appSubUrl+"/login"},"Back to login"))))))},v=g},77293:(P,o,a)=>{a.d(o,{Yb:()=>E,d5:()=>l});var e=a(35645);const E=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function d(){const i=e.v.licenseInfo?.trialExpiry;return!!(i&&i>0)}const l=()=>d()&&e.v.featureToggles.featureHighlights}}]);

//# sourceMappingURL=615.fa4599f74e04c773935b.js.map