import{S as te,i as le,s as ne,e as v,a as E,c as y,h as ae,b as k,d as m,f as T,g as N,j as $,k as b,l as p,m as A,t as h,n as d,o as S,v as Z,w as x,K as G,u as w,L as re,r as B,M as oe,N as ie,y as z,x as H,z as D,A as I,C as ee}from"../chunks/index.f0445174.js";import{b as M}from"../chunks/paths.2940d2e6.js";import{A as se,a as fe,T as ce,S as ue,H as _e,b as me,r as q}from"../chunks/config.ac1a0f51.js";import{C as pe,G as $e}from"../chunks/Table.svelte_svelte_type_style_lang.00e69176.js";import{E as he}from"../chunks/Embed.ac650855.js";function R(s,t,a){const e=s.slice();return e[4]=t[a],e}function V(s,t,a){const e=s.slice();return e[7]=t[a],e}function j(s,t,a){const e=s.slice();return e[10]=t[a],e}function O(s,t,a){const e=s.slice();return e[13]=t[a],e}function de(s){let t,a;return t=new ue({props:{id:s[13].id,title:s[13].title,marginTop:!0,marginBottom:!1,$$slots:{default:[ve]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,l){A(t,e,l),a=!0},p(e,l){const r={};l&1&&(r.id=e[13].id),l&1&&(r.title=e[13].title),l&65537&&(r.$$scope={dirty:l,ctx:e}),t.$set(r)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){S(t,e)}}}function ge(s){let t,a,e,l,r;return l=new _e({props:{height:"auto",marginBottom:!1,$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){t=v("img"),e=E(),y(l.$$.fragment),this.h()},l(o){t=k(o,"IMG",{src:!0,alt:!0}),e=T(o),N(l.$$.fragment,o),this.h()},h(){re(t.src,a=M+"/img/header.png")||$(t,"src",a),$(t,"alt","")},m(o,n){p(o,t,n),p(o,e,n),A(l,o,n),r=!0},p(o,n){const f={};n&65537&&(f.$$scope={dirty:n,ctx:o}),l.$set(f)},i(o){r||(h(l.$$.fragment,o),r=!0)},o(o){d(l.$$.fragment,o),r=!1},d(o){o&&m(t),o&&m(e),S(l,o)}}}function be(s){return{c:B,l:B,m:B,p:B,i:B,o:B,d:B}}function ve(s){let t,a=(s[13].content||"")+"",e;return{c(){t=new oe(!1),e=w(),this.h()},l(l){t=ie(l,!1),e=w(),this.h()},h(){t.a=e},m(l,r){t.m(a,l,r),p(l,e,r)},p(l,r){r&1&&a!==(a=(l[13].content||"")+"")&&t.p(a)},d(l){l&&m(e),l&&t.d()}}}function F(s){let t,a=s[13].title+"",e;return{c(){t=v("h2"),e=z(a)},l(l){t=k(l,"H2",{});var r=H(t);e=D(r,a),r.forEach(m)},m(l,r){p(l,t,r),b(t,e)},p(l,r){r&1&&a!==(a=l[13].title+"")&&I(e,a)},d(l){l&&m(t)}}}function J(s){let t,a=s[13].label+"",e;return{c(){t=v("label"),e=z(a),this.h()},l(l){t=k(l,"LABEL",{for:!0});var r=H(t);e=D(r,a),r.forEach(m),this.h()},h(){$(t,"for","select"),ee(t,"font-size","1rem")},m(l,r){p(l,t,r),b(t,e)},p(l,r){r&1&&a!==(a=l[13].label+"")&&I(e,a)},d(l){l&&m(t)}}}function ke(s){let t,a,e,l,r=s[13].title&&F(s),o=s[13].label&&J(s);return e=new me({props:{id:"select",idKey:"areacd",labelKey:"areanm",options:s[0].places,mode:"search",placeholder:"Type an area name...",floatingConfig:{strategy:"fixed"}}}),e.$on("change",s[1]),{c(){r&&r.c(),t=E(),o&&o.c(),a=E(),y(e.$$.fragment)},l(n){r&&r.l(n),t=T(n),o&&o.l(n),a=T(n),N(e.$$.fragment,n)},m(n,f){r&&r.m(n,f),p(n,t,f),o&&o.m(n,f),p(n,a,f),A(e,n,f),l=!0},p(n,f){n[13].title?r?r.p(n,f):(r=F(n),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),n[13].label?o?o.p(n,f):(o=J(n),o.c(),o.m(a.parentNode,a)):o&&(o.d(1),o=null);const i={};f&1&&(i.options=n[0].places),e.$set(i)},i(n){l||(h(e.$$.fragment,n),l=!0)},o(n){d(e.$$.fragment,n),l=!1},d(n){r&&r.d(n),n&&m(t),o&&o.d(n),n&&m(a),S(e,n)}}}function Q(s){let t,a,e,l;const r=[be,ge,de],o=[];function n(f,i){return f[13].type==="Meta"?0:f[13].type==="Header"?1:2}return t=n(s),a=o[t]=r[t](s),{c(){a.c(),e=w()},l(f){a.l(f),e=w()},m(f,i){o[t].m(f,i),p(f,e,i),l=!0},p(f,i){let u=t;t=n(f),t===u?o[t].p(f,i):(Z(),d(o[u],1,1,()=>{o[u]=null}),x(),a=o[t],a?a.p(f,i):(a=o[t]=r[t](f),a.c()),h(a,1),a.m(e.parentNode,e))},i(f){l||(h(a),l=!0)},o(f){d(a),l=!1},d(f){o[t].d(f),f&&m(e)}}}function U(s){let t,a,e=s[4].nm+"",l,r,o,n,f=s[7],i=[];for(let u=0;u<f.length;u+=1)i[u]=W(j(s,f,u));return{c(){t=v("div"),a=v("strong"),l=z(e),r=E(),o=v("div");for(let u=0;u<i.length;u+=1)i[u].c();n=E(),this.h()},l(u){t=k(u,"DIV",{});var _=H(t);a=k(_,"STRONG",{});var c=H(a);l=D(c,e),c.forEach(m),r=T(_),o=k(_,"DIV",{});var g=H(o);for(let C=0;C<i.length;C+=1)i[C].l(g);g.forEach(m),n=T(_),_.forEach(m),this.h()},h(){ee(o,"font-size","smaller")},m(u,_){p(u,t,_),b(t,a),b(a,l),b(t,r),b(t,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,null);b(t,n)},p(u,_){if(_&1){f=u[7];let c;for(c=0;c<f.length;c+=1){const g=j(u,f,c);i[c]?i[c].p(g,_):(i[c]=W(g),i[c].c(),i[c].m(o,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=f.length}},d(u){u&&m(t),G(i,u)}}}function W(s){let t,a=s[10].areanm+"",e,l,r;return{c(){t=v("a"),e=z(a),r=v("br"),this.h()},l(o){t=k(o,"A",{href:!0,target:!0});var n=H(t);e=D(n,a),n.forEach(m),r=k(o,"BR",{}),this.h()},h(){$(t,"href",l=M+"/"+s[10].areacd+"/"),$(t,"target","_top")},m(o,n){p(o,t,n),b(t,e),p(o,r,n)},p(o,n){n&1&&a!==(a=o[10].areanm+"")&&I(e,a),n&1&&l!==(l=M+"/"+o[10].areacd+"/")&&$(t,"href",l)},d(o){o&&m(t),o&&m(r)}}}function X(s){let t,a=s[7][0]&&U(s);return{c(){a&&a.c(),t=w()},l(e){a&&a.l(e),t=w()},m(e,l){a&&a.m(e,l),p(e,t,l)},p(e,l){e[7][0]?a?a.p(e,l):(a=U(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&m(t)}}}function Y(s){let t;function a(...r){return s[3](s[4],...r)}let e=[s[0].places.filter(a)],l=[];for(let r=0;r<1;r+=1)l[r]=X(V(s,e,r));return{c(){for(let r=0;r<1;r+=1)l[r].c();t=w()},l(r){for(let o=0;o<1;o+=1)l[o].l(r);t=w()},m(r,o){for(let n=0;n<1;n+=1)l[n]&&l[n].m(r,o);p(r,t,o)},p(r,o){if(s=r,o&1){e=[s[0].places.filter(a)];let n;for(n=0;n<1;n+=1){const f=V(s,e,n);l[n]?l[n].p(f,o):(l[n]=X(f),l[n].c(),l[n].m(t.parentNode,t))}for(;n<1;n+=1)l[n].d(1)}},d(r){G(l,r),r&&m(t)}}}function we(s){let t,a=q,e=[];for(let l=0;l<a.length;l+=1)e[l]=Y(R(s,a,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=w()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);t=w()},m(l,r){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,r);p(l,t,r)},p(l,r){if(r&1){a=q;let o;for(o=0;o<a.length;o+=1){const n=R(l,a,o);e[o]?e[o].p(n,r):(e[o]=Y(n),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=a.length}},d(l){G(e,l),l&&m(t)}}}function Ee(s){let t,a;return t=new $e({props:{colwidth:"narrow",$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,l){A(t,e,l),a=!0},p(e,l){const r={};l&65537&&(r.$$scope={dirty:l,ctx:e}),t.$set(r)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){S(t,e)}}}function ye(s){let t,a;return t=new ce({props:{title:"All versions of this article",open:!0,$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,l){A(t,e,l),a=!0},p(e,l){const r={};l&65537&&(r.$$scope={dirty:l,ctx:e}),t.$set(r)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){S(t,e)}}}function Te(s){let t,a,e,l,r;t=new se({props:{analyticsProps:s[2],hideBanner:!0}});let o=s[0].place.sections,n=[];for(let i=0;i<o.length;i+=1)n[i]=Q(O(s,o,i));const f=i=>d(n[i],1,1,()=>{n[i]=null});return l=new pe({props:{marginTop:!0,marginBottom:!0,$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment),a=E();for(let i=0;i<n.length;i+=1)n[i].c();e=E(),y(l.$$.fragment)},l(i){N(t.$$.fragment,i),a=T(i);for(let u=0;u<n.length;u+=1)n[u].l(i);e=T(i),N(l.$$.fragment,i)},m(i,u){A(t,i,u),p(i,a,u);for(let _=0;_<n.length;_+=1)n[_]&&n[_].m(i,u);p(i,e,u),A(l,i,u),r=!0},p(i,u){if(u&3){o=i[0].place.sections;let c;for(c=0;c<o.length;c+=1){const g=O(i,o,c);n[c]?(n[c].p(g,u),h(n[c],1)):(n[c]=Q(g),n[c].c(),h(n[c],1),n[c].m(e.parentNode,e))}for(Z(),c=o.length;c<n.length;c+=1)f(c);x()}const _={};u&65537&&(_.$$scope={dirty:u,ctx:i}),l.$set(_)},i(i){if(!r){h(t.$$.fragment,i);for(let u=0;u<o.length;u+=1)h(n[u]);h(l.$$.fragment,i),r=!0}},o(i){d(t.$$.fragment,i),n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)d(n[u]);d(l.$$.fragment,i),r=!1},d(i){S(t,i),i&&m(a),G(n,i),i&&m(e),S(l,i)}}}function Ne(s){var i,u;let t,a,e,l,r,o,n,f;return document.title=t=((u=(i=s[0])==null?void 0:i.meta)==null?void 0:u.title)||"",n=new he({props:{$$slots:{default:[Te]},$$scope:{ctx:s}}}),{c(){a=v("meta"),l=v("meta"),r=v("meta"),o=E(),y(n.$$.fragment),this.h()},l(_){const c=ae("svelte-1k3ooo9",document.head);a=k(c,"META",{name:!0,content:!0}),l=k(c,"META",{name:!0,content:!0}),r=k(c,"META",{name:!0,content:!0}),c.forEach(m),o=T(_),N(n.$$.fragment,_),this.h()},h(){var _,c;$(a,"name","description"),$(a,"content",e=((c=(_=s[0])==null?void 0:_.meta)==null?void 0:c.description)||""),$(l,"name","robots"),$(l,"content","noindex"),$(r,"name","googlebot"),$(r,"content","indexifembedded")},m(_,c){b(document.head,a),b(document.head,l),b(document.head,r),p(_,o,c),A(n,_,c),f=!0},p(_,[c]){var C,K,L,P;(!f||c&1)&&t!==(t=((K=(C=_[0])==null?void 0:C.meta)==null?void 0:K.title)||"")&&(document.title=t),(!f||c&1&&e!==(e=((P=(L=_[0])==null?void 0:L.meta)==null?void 0:P.description)||""))&&$(a,"content",e);const g={};c&65537&&(g.$$scope={dirty:c,ctx:_}),n.$set(g)},i(_){f||(h(n.$$.fragment,_),f=!0)},o(_){d(n.$$.fragment,_),f=!1},d(_){m(a),m(l),m(r),_&&m(o),S(n,_)}}}function Ae(s,t,a){let{data:e}=t;async function l(n){var u;const f=typeof n=="string"?n:(u=n==null?void 0:n.detail)==null?void 0:u.areacd,i=e.places.find(_=>_.areacd===f);i&&(fe({event:"searchSelect",areaCode:i.areacd,areaName:i.areanm}),window.top.location.href=`${M}/${f}/`)}const r=(()=>{var f;const n={};for(const i in["contentTitle","releaseDate","outputSeries","contentType"])(f=e==null?void 0:e.meta)!=null&&f[i]&&(n[i]=e.meta[i]);return n})(),o=(n,f)=>f.parentcd===n.cd;return s.$$set=n=>{"data"in n&&a(0,e=n.data)},[e,l,r,o]}class Ge extends te{constructor(t){super(),le(this,t,Ae,Ne,ne,{data:0})}}export{Ge as default};
