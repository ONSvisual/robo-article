//js
import{S as x,b as S,s as q,f,h as _,j,k as d,l as g,m as v,o as l,p as k,q as m,v as h,w as $,n as E,x as w}from"../chunks/index.242e231d.js";import{s as y}from"../chunks/singletons.a697a55c.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),o=_(r),n=j(),i=f("p"),u=_(p)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(l),n=k(e),i=d(e,"P",{});var c=g(i);u=v(c,p),c.forEach(l)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,u)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&$(u,p)},i:E,o:E,d(e){e&&l(t),e&&l(n),e&&l(i)}}}function z(s,t,r){let o;return w(s,H,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),S(this,t,z,P,q,{})}};export{D as default};