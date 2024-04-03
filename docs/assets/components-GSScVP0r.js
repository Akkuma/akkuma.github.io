import{isServer as $,getRequestEvent as z,ssrElement as ce,mergeProps as ie}from"solid-js/web";import{getOwner as le,runWithOwner as J,createMemo as w,createContext as X,useContext as I,createSignal as O,createRenderEffect as ue,untrack as H,on as fe,startTransition as he,resetErrorBoundaries as K,createComponent as de,mergeProps as pe,splitProps as me}from"solid-js";function ge(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const c={to:r,options:o,defaultPrevented:!1,preventDefault:()=>c.defaultPrevented=!0};for(const i of e)i.listener({...c,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,{...o,resolve:!1})}});return!c.defaultPrevented}return{subscribe:t,confirm:s}}let k;function G(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),k=window.history.state._depth}$||G();function Ie(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Me(e,t){let n=!1;return()=>{const s=k;G();const r=s==null?null:k-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const ve=/^(?:[a-z0-9]+:)?\/\//i,we=/^\/+|(\/)\/+$/g,ye="http://sr";function b(e,t=!1){const n=e.replace(we,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function _(e,t,n){if(ve.test(t))return;const s=b(e),r=n&&b(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+b(t,!o)}function Pe(e,t){if(e==null)throw new Error(t);return e}function Re(e,t){return b(e).replace(/\/*(\*.*)?$/g,"")+b(t)}function Q(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function be(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),c=o.length;return i=>{const l=i.split("/").filter(Boolean),h=l.length-c;if(h<0||h>0&&r===void 0&&!t)return null;const u={path:c?"":"/",params:{}},m=d=>n===void 0?void 0:n[d];for(let d=0;d<c;d++){const p=o[d],y=l[d],C=p[0]===":",x=C?p.slice(1):p;if(C&&F(y,m(x)))u.params[x]=y;else if(C||!F(y,p))return null;u.path+=`/${y}`}if(r){const d=h?l.slice(-h).join("/"):"";if(F(d,m(r)))u.params[r]=d;else return null}return u}}function F(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ce(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function V(e){const t=new Map,n=le();return new Proxy({},{get(s,r){return t.has(r)||J(n,()=>t.set(r,w(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Y(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Y(s).reduce((o,c)=>[...o,...r.map(i=>i+c)],[])}const xe=100,Ee=X(),Z=X(),M=()=>Pe(I(Ee),"<A> and 'use' router primitives can be only used inside a Route."),Le=()=>I(Z)||M().base,Ae=e=>{const t=Le();return w(()=>t.resolvePath(e()))},Se=e=>{const t=M();return w(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Oe=()=>M().location;function _e(e,t=""){const{component:n,load:s,children:r,info:o}=e,c=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,info:o};return ee(e.path).reduce((l,h)=>{for(const u of Y(h)){const m=Re(t,u);let d=c?m:m.split("/*",1)[0];d=d.split("/").map(p=>p.startsWith(":")||p.startsWith("*")?p:encodeURIComponent(p)).join("/"),l.push({...i,originalPath:u,pattern:d,matcher:be(d,!c,e.matchFilters)})}return l},[])}function Be(e,t=0){return{routes:e,score:Ce(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],c=o.matcher(n);if(!c)return null;s.unshift({...c,route:o})}return s}}}function ee(e){return Array.isArray(e)?e:[e]}function je(e,t="",n=[],s=[]){const r=ee(e);for(let o=0,c=r.length;o<c;o++){const i=r[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=_e(i,t);for(const h of l){n.push(h);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)je(i.children,h.pattern,n,s);else{const m=Be([...n],s.length);s.push(m)}n.pop()}}}return n.length?s:s.sort((o,c)=>c.score-o.score)}function N(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Fe(e,t){const n=new URL(ye),s=w(l=>{const h=e();try{return new URL(h,n)}catch{return console.error(`Invalid path ${h}`),l}},n,{equals:(l,h)=>l.href===h.href}),r=w(()=>s().pathname),o=w(()=>s().search,!0),c=w(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return o()},get hash(){return c()},get state(){return t()},get key(){return i()},query:V(fe(o,()=>Q(s())))}}let P;function We(e,t,n,s={}){const{signal:[r,o],utils:c={}}=e,i=c.parsePath||(a=>a),l=c.renderPath||(a=>a),h=c.beforeLeave||ge(),u=_("",s.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&o({value:u,replace:!0,scroll:!1});const[m,d]=O(!1),p=async a=>{d(!0);try{await he(a)}finally{d(!1)}},[y,C]=O(r().value),[x,W]=O(r().state),q=Fe(y,x),L=[],B=O($?ae():[]),D=w(()=>N(t(),q.pathname)),te=V(()=>{const a=D(),f={};for(let g=0;g<a.length;g++)Object.assign(f,a[g].params);return f}),T={pattern:u,path:()=>u,outlet:()=>null,resolvePath(a){return _(u,a)}};return ue(()=>{const{value:a,state:f}=r();H(()=>{a!==y()&&p(()=>{P="native",C(a),W(f),K(),B[1]([])}).then(()=>{P=void 0})})}),{base:T,location:q,params:te,isRouting:m,renderPath:l,parsePath:i,navigatorFactory:re,matches:D,beforeLeave:h,preloadRoute:oe,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:B};function ne(a,f,g){H(()=>{if(typeof f=="number"){f&&(c.go?c.go(f):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:j,scroll:R,state:E}={replace:!1,resolve:!0,scroll:!0,...g},v=j?a.resolvePath(f):_("",f);if(v===void 0)throw new Error(`Path '${f}' is not a routable path`);if(L.length>=xe)throw new Error("Too many redirects");const U=y();if(v!==U||E!==x()){if($){const S=z();S&&(S.response={status:302,headers:new Headers({Location:v})}),o({value:v,replace:A,scroll:R,state:E})}else if(h.confirm(v,g)){const S=L.push({value:U,replace:A,scroll:R,state:x()});p(()=>{P="navigate",C(v),W(E),K(),B[1]([])}).then(()=>{L.length===S&&(P=void 0,se({value:v,state:E}))})}}})}function re(a){return a=a||I(Z)||T,(f,g)=>ne(a,f,g)}function se(a){const f=L[0];f&&((a.value!==f.value||a.state!==f.state)&&o({...a,replace:f.replace,scroll:f.scroll}),L.length=0)}function oe(a,f){const g=N(t(),a.pathname),A=P;P="preload";for(let j in g){const{route:R,params:E}=g[j];R.component&&R.component.preload&&R.component.preload();const{load:v}=R;f&&v&&J(n(),()=>v({params:E,location:{pathname:a.pathname,search:a.search,hash:a.hash,query:Q(a),state:null,key:""},intent:"preload"}))}P=A}function ae(){const a=z();return a&&a.router&&a.router.submission?[a.router.submission]:[]}}function qe(e,t,n,s){const{base:r,location:o,params:c}=e,{pattern:i,component:l,load:h}=s().route,u=w(()=>s().path);l&&l.preload&&l.preload();const m=h?h({params:c,location:o,intent:P||"initial"}):void 0;return{parent:t,pattern:i,path:u,outlet:()=>l?de(l,{params:c,location:o,data:m,get children(){return n()}}):n(),resolvePath(p){return _(r.path(),p,u())}}}function De(e){e=pe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=me(e,["href","state","class","activeClass","inactiveClass","end"]),n=Ae(()=>e.href),s=Se(n),r=Oe(),o=w(()=>{const c=n();if(c===void 0)return[!1,!1];const i=b(c.split(/[?#]/,1)[0]).toLowerCase(),l=b(r.pathname).toLowerCase();return[e.end?i===l:l.startsWith(i),i===l]});return ce("a",ie(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o()[0],[e.activeClass]:o()[0],...t.classList}},link:!0,get"aria-current"(){return o()[1]?"page":void 0}}),void 0,!0)}export{De as A,Ee as R,We as a,qe as b,je as c,Z as d,ge as e,N as g,Ie as k,ye as m,Me as n,G as s,Oe as u};