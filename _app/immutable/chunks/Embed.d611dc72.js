import{S as f,i as u,s as h,C as m,k as _,l as p,m as g,h as r,n as y,p as b,b as C,D as v,E,F as D,g as M,d as S,W as U,o as k}from"./index.b4ad6b47.js";import{p as w}from"./Table.svelte_svelte_type_style_lang.57828de8.js";function H(i){let s,n;const o=i[3].default,t=m(o,i,i[2],null);return{c(){s=_("div"),t&&t.c(),this.h()},l(e){s=p(e,"DIV",{class:!0});var l=g(s);t&&t.l(l),l.forEach(r),this.h()},h(){y(s,"class","embed-container svelte-ubitk5"),b(s,"display","content")},m(e,l){C(e,s,l),t&&t.m(s,null),n=!0},p(e,[l]){t&&t.p&&(!n||l&4)&&v(t,o,e,e[2],n?D(o,e[2],l,null):E(e[2]),null)},i(e){n||(M(t,e),n=!0)},o(e){S(t,e),n=!1},d(e){e&&r(s),t&&t.d(e)}}}function I(i,s,n){let{$$slots:o={},$$scope:t}=s,{pymChild:e=null}=s,{polling:l=500}=s;const c=U();return k(()=>{n(0,e=new w.Child),l&&setInterval(()=>{e.sendMessage("height",Math.max(document.body.scrollHeight,document.body.offsetHeight))},l);const a=document.location.href,d=new URLSearchParams(document.location.search).get("parentUrl");c("load",{href:a,parentUrl:d,pymChild:e})}),i.$$set=a=>{"pymChild"in a&&n(0,e=a.pymChild),"polling"in a&&n(1,l=a.polling),"$$scope"in a&&n(2,t=a.$$scope)},[e,l,t,o]}class L extends f{constructor(s){super(),u(this,s,I,H,h,{pymChild:0,polling:1})}}export{L as E};