import{S as de,i as me,s as ge,u as R,a as V,h as je,d as k,f as D,k as W,l as C,v as _e,n as z,w as ve,t as S,T as Ge,ab as Oe,M as Ye,N as Je,B as j,D as G,E as Y,F as J,e as N,b as P,x as B,j as E,aa as Ie,c as ne,g as ie,m as se,o as le,U as T,ac as Ke,ad as Qe,C as Ee,y as Xe,z as Ze,A as xe}from"./index.f0445174.js";import{w as $e}from"./index.5a619cd9.js";const he={light:{text:"#222",muted:"#777",hinted:"#e2e2e3",pale:"#f0f0f0",background:"#fff"},dark:{text:"#fff",muted:"#bbb",hinted:"#444",pale:"#333",background:"#222",link:"#f5f5f6","link-hover":"#f5f5f6"},lightblue:{text:"#206095",muted:"#707070",pale:"#f0f0f0",background:"rgb(233, 239, 244)"}};function Te(t){let e,n=`<style>body{background:${t[3]}}</style>`,i;return{c(){e=new Ye(!1),i=R(),this.h()},l(s){e=Je(s,!1),i=R(),this.h()},h(){e.a=i},m(s,l){e.m(n,s,l),C(s,i,l)},p(s,l){l&8&&n!==(n=`<style>body{background:${s[3]}}</style>`)&&e.p(n)},d(s){s&&k(i),s&&e.d()}}}function et(t){let e;const n=t[8].default,i=j(n,t,t[7],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,l){i&&i.m(s,l),e=!0},p(s,l){i&&i.p&&(!e||l&128)&&G(i,n,s,s[7],e?J(n,s[7],l,null):Y(s[7]),null)},i(s){e||(S(i,s),e=!0)},o(s){z(i,s),e=!1},d(s){i&&i.d(s)}}}function tt(t){let e,n,i;const s=t[8].default,l=j(s,t,t[7],null);return{c(){e=N("div"),l&&l.c(),this.h()},l(a){e=P(a,"DIV",{id:!0,class:!0,style:!0});var o=B(e);l&&l.l(o),o.forEach(k),this.h()},h(){E(e,"id",t[0]),E(e,"class",n=Ie(t[1]?`theme-wrapper ${t[1]}`:"theme-wrapper")+" svelte-zhquzc"),E(e,"style",t[4])},m(a,o){C(a,e,o),l&&l.m(e,null),i=!0},p(a,o){l&&l.p&&(!i||o&128)&&G(l,s,a,a[7],i?J(s,a[7],o,null):Y(a[7]),null),(!i||o&1)&&E(e,"id",a[0]),(!i||o&2&&n!==(n=Ie(a[1]?`theme-wrapper ${a[1]}`:"theme-wrapper")+" svelte-zhquzc"))&&E(e,"class",n),(!i||o&16)&&E(e,"style",a[4])},i(a){i||(S(l,a),i=!0)},o(a){z(l,a),i=!1},d(a){a&&k(e),l&&l.d(a)}}}function nt(t){let e,n,i,s,l,a,o=t[2]&&t[3]&&Te(t);const h=[tt,et],u=[];function m(c,d){return c[4]?0:1}return i=m(t),s=u[i]=h[i](t),{c(){o&&o.c(),e=R(),n=V(),s.c(),l=R()},l(c){const d=je("svelte-1u68kmj",document.head);o&&o.l(d),e=R(),d.forEach(k),n=D(c),s.l(c),l=R()},m(c,d){o&&o.m(document.head,null),W(document.head,e),C(c,n,d),u[i].m(c,d),C(c,l,d),a=!0},p(c,[d]){c[2]&&c[3]?o?o.p(c,d):(o=Te(c),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null);let y=i;i=m(c),i===y?u[i].p(c,d):(_e(),z(u[y],1,1,()=>{u[y]=null}),ve(),s=u[i],s?s.p(c,d):(s=u[i]=h[i](c),s.c()),S(s,1),s.m(l.parentNode,l))},i(c){a||(S(s),a=!0)},o(c){z(s),a=!1},d(c){o&&o.d(c),k(e),c&&k(n),u[i].d(c),c&&k(l)}}}function it(t,e,n){var p;let i,{$$slots:s={},$$scope:l}=e,{id:a=null}=e,{cls:o=null}=e,{global:h=!1}=e,u=h?null:Ge("theme"),{theme:m=u||null}=e;u||Oe("theme",m);let{overrides:c=null}=e,{background:d=(c==null?void 0:c.background)||((p=he[m])==null?void 0:p.background)||null}=e;function y(w,f,_){if(w){const v=he[w]||he.light;return f&&Object.keys(f).forEach(M=>v[M]=f[M]),_&&(v.background=_),Object.keys(v).map(M=>`--${M}: ${v[M]};`).join("")}else if(_)return`--background:${_}`;return null}return t.$$set=w=>{"id"in w&&n(0,a=w.id),"cls"in w&&n(1,o=w.cls),"global"in w&&n(2,h=w.global),"theme"in w&&n(5,m=w.theme),"overrides"in w&&n(6,c=w.overrides),"background"in w&&n(3,d=w.background),"$$scope"in w&&n(7,l=w.$$scope)},t.$$.update=()=>{t.$$.dirty&104&&n(4,i=y(m,c,d))},[a,o,h,d,i,m,c,l,s]}class Re extends de{constructor(e){super(),me(this,e,it,nt,ge,{id:0,cls:1,global:2,theme:5,overrides:6,background:3})}}function st(t){let e,n;return e=new Re({props:{id:t[0],cls:t[1],theme:t[6],background:t[8],overrides:t[7],$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){ne(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),n=!0},p(i,s){const l={};s&1&&(l.id=i[0]),s&2&&(l.cls=i[1]),s&64&&(l.theme=i[6]),s&256&&(l.background=i[8]),s&128&&(l.overrides=i[7]),s&5692&&(l.$$scope={dirty:s,ctx:i}),e.$set(l)},i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){z(e.$$.fragment,i),n=!1},d(i){le(e,i)}}}function lt(t){let e,n;return e=new Re({props:{id:t[0],cls:t[1],theme:t[6],background:t[8],overrides:t[7],$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){ne(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),n=!0},p(i,s){const l={};s&1&&(l.id=i[0]),s&2&&(l.cls=i[1]),s&64&&(l.theme=i[6]),s&256&&(l.background=i[8]),s&128&&(l.overrides=i[7]),s&5692&&(l.$$scope={dirty:s,ctx:i}),e.$set(l)},i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){z(e.$$.fragment,i),n=!1},d(i){le(e,i)}}}function Ce(t){let e;return{c(){e=N("div"),this.h()},l(n){e=P(n,"DIV",{class:!0}),B(e).forEach(k),this.h()},h(){E(e,"class","ons-spacer")},m(n,i){C(n,e,i)},d(n){n&&k(e)}}}function Se(t){let e;return{c(){e=N("div"),this.h()},l(n){e=P(n,"DIV",{class:!0}),B(e).forEach(k),this.h()},h(){E(e,"class","ons-spacer")},m(n,i){C(n,e,i)},d(n){n&&k(e)}}}function rt(t){let e,n,i,s,l,a=t[4]&&Ce();const o=t[11].default,h=j(o,t,t[12],null);let u=t[5]&&Se();return{c(){e=N("div"),a&&a.c(),n=V(),h&&h.c(),i=V(),u&&u.c(),this.h()},l(m){e=P(m,"DIV",{id:!0,class:!0});var c=B(e);a&&a.l(c),n=D(c),h&&h.l(c),i=D(c),u&&u.l(c),c.forEach(k),this.h()},h(){E(e,"id",t[10]),E(e,"class",s="ons-page__container ons-container "+t[9]+" svelte-1i9f2l"),T(e,"ons-page__container--wider",t[2]==="wider"),T(e,"ons-page__container--full",t[2]==="full"),T(e,"ons-page__container--tall-height",t[3]==="tall"),T(e,"ons-page__container--full-height",t[3]==="full")},m(m,c){C(m,e,c),a&&a.m(e,null),W(e,n),h&&h.m(e,null),W(e,i),u&&u.m(e,null),l=!0},p(m,c){m[4]?a||(a=Ce(),a.c(),a.m(e,n)):a&&(a.d(1),a=null),h&&h.p&&(!l||c&4096)&&G(h,o,m,m[12],l?J(o,m[12],c,null):Y(m[12]),null),m[5]?u||(u=Se(),u.c(),u.m(e,null)):u&&(u.d(1),u=null),(!l||c&1024)&&E(e,"id",m[10]),(!l||c&512&&s!==(s="ons-page__container ons-container "+m[9]+" svelte-1i9f2l"))&&E(e,"class",s),(!l||c&516)&&T(e,"ons-page__container--wider",m[2]==="wider"),(!l||c&516)&&T(e,"ons-page__container--full",m[2]==="full"),(!l||c&520)&&T(e,"ons-page__container--tall-height",m[3]==="tall"),(!l||c&520)&&T(e,"ons-page__container--full-height",m[3]==="full")},i(m){l||(S(h,m),l=!0)},o(m){z(h,m),l=!1},d(m){m&&k(e),a&&a.d(),h&&h.d(m),u&&u.d()}}}function ze(t){let e;return{c(){e=N("div"),this.h()},l(n){e=P(n,"DIV",{class:!0}),B(e).forEach(k),this.h()},h(){E(e,"class","ons-spacer")},m(n,i){C(n,e,i)},d(n){n&&k(e)}}}function He(t){let e;return{c(){e=N("div"),this.h()},l(n){e=P(n,"DIV",{class:!0}),B(e).forEach(k),this.h()},h(){E(e,"class","ons-spacer")},m(n,i){C(n,e,i)},d(n){n&&k(e)}}}function at(t){let e,n,i,s,l,a,o=t[4]&&ze();const h=t[11].default,u=j(h,t,t[12],null);let m=t[5]&&He();return{c(){e=N("div"),o&&o.c(),n=V(),i=N("div"),u&&u.c(),s=V(),m&&m.c(),this.h()},l(c){e=P(c,"DIV",{id:!0,class:!0});var d=B(e);o&&o.l(d),n=D(d),i=P(d,"DIV",{class:!0});var y=B(i);u&&u.l(y),y.forEach(k),s=D(d),m&&m.l(d),d.forEach(k),this.h()},h(){E(i,"class","svelte-1i9f2l"),T(i,"ons-page__container--narrow",t[2]==="narrow"),T(i,"ons-page__container--medium",t[2]==="medium"),E(e,"id",t[10]),E(e,"class",l="ons-page__container ons-container "+t[9]+" svelte-1i9f2l"),T(e,"ons-page__container--tall-height",t[3]==="tall"),T(e,"ons-page__container--full-height",t[3]==="full")},m(c,d){C(c,e,d),o&&o.m(e,null),W(e,n),W(e,i),u&&u.m(i,null),W(e,s),m&&m.m(e,null),a=!0},p(c,d){c[4]?o||(o=ze(),o.c(),o.m(e,n)):o&&(o.d(1),o=null),u&&u.p&&(!a||d&4096)&&G(u,h,c,c[12],a?J(h,c[12],d,null):Y(c[12]),null),(!a||d&4)&&T(i,"ons-page__container--narrow",c[2]==="narrow"),(!a||d&4)&&T(i,"ons-page__container--medium",c[2]==="medium"),c[5]?m||(m=He(),m.c(),m.m(e,null)):m&&(m.d(1),m=null),(!a||d&1024)&&E(e,"id",c[10]),(!a||d&512&&l!==(l="ons-page__container ons-container "+c[9]+" svelte-1i9f2l"))&&E(e,"class",l),(!a||d&520)&&T(e,"ons-page__container--tall-height",c[3]==="tall"),(!a||d&520)&&T(e,"ons-page__container--full-height",c[3]==="full")},i(c){a||(S(u,c),a=!0)},o(c){z(u,c),a=!1},d(c){c&&k(e),o&&o.d(),u&&u.d(c),m&&m.d()}}}function ot(t){let e,n,i,s,l;const a=[lt,st],o=[];function h(u,m){return m&4&&(e=null),e==null&&(e=!!["narrow","medium"].includes(u[2])),e?0:1}return n=h(t,-1),i=o[n]=a[n](t),{c(){i.c(),s=R()},l(u){i.l(u),s=R()},m(u,m){o[n].m(u,m),C(u,s,m),l=!0},p(u,[m]){let c=n;n=h(u,m),n===c?o[n].p(u,m):(_e(),z(o[c],1,1,()=>{o[c]=null}),ve(),i=o[n],i?i.p(u,m):(i=o[n]=a[n](u),i.c()),S(i,1),i.m(s.parentNode,s))},i(u){l||(S(i),l=!0)},o(u){z(i),l=!1},d(u){o[n].d(u),u&&k(s)}}}function ht(t,e,n){let i,s,{$$slots:l={},$$scope:a}=e,{id:o=null}=e,{cls:h=null}=e,{width:u="wide"}=e,{height:m="auto"}=e,{marginTop:c=!1}=e,{marginBottom:d=!1}=e,{theme:y=null}=e,{themeOverrides:p=null}=e,{background:w=null}=e;return t.$$set=f=>{"id"in f&&n(0,o=f.id),"cls"in f&&n(1,h=f.cls),"width"in f&&n(2,u=f.width),"height"in f&&n(3,m=f.height),"marginTop"in f&&n(4,c=f.marginTop),"marginBottom"in f&&n(5,d=f.marginBottom),"theme"in f&&n(6,y=f.theme),"themeOverrides"in f&&n(7,p=f.themeOverrides),"background"in f&&n(8,w=f.background),"$$scope"in f&&n(12,a=f.$$scope)},t.$$.update=()=>{t.$$.dirty&321&&n(10,i=o&&!(y||w)?o:null),t.$$.dirty&322&&n(9,s=h&&!(y||w)?h:"")},[o,h,u,m,c,d,y,p,w,s,i,l,a]}class We extends de{constructor(e){super(),me(this,e,ht,ot,ge,{id:0,cls:1,width:2,height:3,marginTop:4,marginBottom:5,theme:6,themeOverrides:7,background:8})}}function ft(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ve={exports:{}};/*! pym.js - v1.3.2 - 2018-02-13 */(function(t){(function(e){t.exports?t.exports=e():window.pym=e.call(this)})(function(){var e="xPYMx",n={},i=function(d){var y=document.createEvent("Event");y.initEvent("pym:"+d,!0,!0),document.dispatchEvent(y)},s=function(d){var y=new RegExp("[\\?&]"+d.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)"),p=y.exec(location.search);return p===null?"":decodeURIComponent(p[1].replace(/\+/g," "))},l=function(d,y){if(!(y.xdomain!=="*"&&!d.origin.match(new RegExp(y.xdomain+"$")))&&typeof d.data=="string")return!0},a=function(d){var y=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;if(d.match(y))return!0},o=function(d,y,p){var w=["pym",d,y,p];return w.join(e)},h=function(d){var y=["pym",d,"(\\S+)","(.*)"];return new RegExp("^"+y.join(e)+"$")},u=Date.now||function(){return new Date().getTime()},m=function(d,y,p){var w,f,_,v=null,M=0;p||(p={});var H=function(){M=p.leading===!1?0:u(),v=null,_=d.apply(w,f),v||(w=f=null)};return function(){var O=u();!M&&p.leading===!1&&(M=O);var A=y-(O-M);return w=this,f=arguments,A<=0||A>y?(v&&(clearTimeout(v),v=null),M=O,_=d.apply(w,f),v||(w=f=null)):!v&&p.trailing!==!1&&(v=setTimeout(H,A)),_}},c=function(){for(var d=n.autoInitInstances.length,y=d-1;y>=0;y--){var p=n.autoInitInstances[y];p.el.getElementsByTagName("iframe").length&&p.el.getElementsByTagName("iframe")[0].contentWindow||n.autoInitInstances.splice(y,1)}};return n.autoInitInstances=[],n.autoInit=function(d){var y=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),p=y.length;c();for(var w=0;w<p;++w){var f=y[w];f.setAttribute("data-pym-auto-initialized",""),f.id===""&&(f.id="pym-"+w+"-"+Math.random().toString(36).substr(2,5));var _=f.getAttribute("data-pym-src"),v={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},M={};for(var H in v)if(f.getAttribute("data-pym-"+H)!==null)switch(v[H]){case"boolean":M[H]=f.getAttribute("data-pym-"+H)!=="false";break;case"string":M[H]=f.getAttribute("data-pym-"+H);break;case"number":var O=Number(f.getAttribute("data-pym-"+H));isNaN(O)||(M[H]=O);break;default:console.err("unrecognized attribute type")}var A=new n.Parent(f.id,_,M);n.autoInitInstances.push(A)}return d||i("pym-initialized"),n.autoInitInstances},n.Parent=function(d,y,p){this.id=d,this.url=y,this.el=document.getElementById(d),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=h(this.id),this.messageHandlers={},p=p||{},this._constructIframe=function(){var f=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var _="",v=this.url.indexOf("#");for(v>-1&&(_=this.url.substring(v,this.url.length),this.url=this.url.substring(0,v)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+f+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=_,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),this.settings.allowfullscreen!==void 0&&this.settings.allowfullscreen!==!1&&this.iframe.setAttribute("allowfullscreen",""),this.settings.sandbox!==void 0&&typeof this.settings.sandbox=="string"&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=(function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}).bind(this),this._onScroll=(function(){this.sendViewportAndIFramePosition()}).bind(this),this._fire=function(f,_){if(f in this.messageHandlers)for(var v=0;v<this.messageHandlers[f].length;v++)this.messageHandlers[f][v].call(this,_)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),c()},this._processMessage=(function(f){if(l(f,this.settings)&&typeof f.data=="string"){var _=f.data.match(this.messageRegex);if(!_||_.length!==3)return!1;var v=_[1],M=_[2];this._fire(v,M)}}).bind(this),this._onHeightMessage=function(f){var _=parseInt(f);this.iframe.setAttribute("height",_+"px")},this._onNavigateToMessage=function(f){a(f)&&(document.location.href=f)},this._onScrollToChildPosMessage=function(f){var _=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,v=_+parseInt(f);window.scrollTo(0,v)},this.onMessage=function(f,_){f in this.messageHandlers||(this.messageHandlers[f]=[]),this.messageHandlers[f].push(_)},this.sendMessage=function(f,_){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(o(this.id,f,_),"*"):this.remove())},this.sendWidth=function(){var f=this.el.offsetWidth.toString();this.sendMessage("width",f)},this.sendViewportAndIFramePosition=function(){var f=this.iframe.getBoundingClientRect(),_=window.innerWidth||document.documentElement.clientWidth,v=window.innerHeight||document.documentElement.clientHeight,M=_+" "+v;M+=" "+f.top+" "+f.left,M+=" "+f.bottom+" "+f.right,this.sendMessage("viewport-iframe-position",M)};for(var w in p)this.settings[w]=p[w];return this._throttleOnScroll=m(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},n.Child=function(d){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},d=d||{},this.onMessage=function(f,_){f in this.messageHandlers||(this.messageHandlers[f]=[]),this.messageHandlers[f].push(_)},this._fire=function(f,_){if(f in this.messageHandlers)for(var v=0;v<this.messageHandlers[f].length;v++)this.messageHandlers[f][v].call(this,_)},this._processMessage=(function(f){if(l(f,this.settings)&&typeof f.data=="string"){var _=f.data.match(this.messageRegex);if(!(!_||_.length!==3)){var v=_[1],M=_[2];this._fire(v,M)}}}).bind(this),this._onWidthMessage=function(f){var _=parseInt(f);_!==this.parentWidth&&(this.parentWidth=_,this.settings.renderCallback&&this.settings.renderCallback(_),this.sendHeight())},this.sendMessage=function(f,_){window.parent.postMessage(o(this.id,f,_),"*")},this.sendHeight=(function(){var f=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",f),f}).bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(f){this.sendMessage("navigateTo","#"+f)},this.navigateParentTo=function(f){this.sendMessage("navigateTo",f)},this.scrollParentToChildEl=function(f){var _=document.getElementById(f).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(_)},this.scrollParentToChildPos=function(f){this.sendMessage("scrollToChildPos",f.toString())};var y=function(f){var _=document.getElementsByTagName("html")[0],v,M=_.className;try{window.self!==window.top?v="embedded":v="not-embedded"}catch{v="embedded"}M.indexOf(v)<0&&(_.className=M?M+" "+v:v,f&&f(v),i("marked-embedded"))};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var p in d)this.settings[p]=d[p];this.id=s("childId")||d.id,this.messageRegex=new RegExp("^pym"+e+this.id+e+"(\\S+)"+e+"(.*)$");var w=parseInt(s("initialWidth"));return this.parentUrl=s(this.settings.parenturlparam),this.parentTitle=s("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(w),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),y(d.onMarkedEmbeddedStatus),this},typeof document<"u"&&n.autoInit(!0),n})})(Ve);var ut=Ve.exports;const Yt=ft(ut);function Ne(t){let e,n;return{c(){e=N("h2"),n=Xe(t[3]),this.h()},l(i){e=P(i,"H2",{class:!0});var s=B(e);n=Ze(s,t[3]),s.forEach(k),this.h()},h(){E(e,"class","section-title"),T(e,"ons-u-vh",t[4])},m(i,s){C(i,e,s),W(e,n)},p(i,s){s&8&&xe(n,i[3]),s&16&&T(e,"ons-u-vh",i[4])},d(i){i&&k(e)}}}function ct(t){let e,n,i,s=t[3]&&Ne(t);const l=t[18].default,a=j(l,t,t[20],null);return{c(){s&&s.c(),e=V(),n=N("div"),a&&a.c(),this.h()},l(o){s&&s.l(o),e=D(o),n=P(o,"DIV",{class:!0});var h=B(n);a&&a.l(h),h.forEach(k),this.h()},h(){E(n,"class","grid "+t[12]+" svelte-1og4gya"),Ee(n,"grid-gap",t[14]),Ee(n,"min-height",t[13])},m(o,h){s&&s.m(o,h),C(o,e,h),C(o,n,h),a&&a.m(n,null),i=!0},p(o,h){o[3]?s?s.p(o,h):(s=Ne(o),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),a&&a.p&&(!i||h&1048576)&&G(a,l,o,o[20],i?J(l,o[20],h,null):Y(o[20]),null)},i(o){i||(S(a,o),i=!0)},o(o){z(a,o),i=!1},d(o){s&&s.d(o),o&&k(e),o&&k(n),a&&a.d(o)}}}function Pe(t){let e,n,i;return n=new We({props:{cls:t[1],theme:t[5],themeOverrides:t[6],width:"narrow",marginBottom:t[8],$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){e=N("figcaption"),ne(n.$$.fragment),this.h()},l(s){e=P(s,"FIGCAPTION",{class:!0});var l=B(e);ie(n.$$.fragment,l),l.forEach(k),this.h()},h(){E(e,"class","svelte-1og4gya")},m(s,l){C(s,e,l),se(n,e,null),i=!0},p(s,l){const a={};l&2&&(a.cls=s[1]),l&32&&(a.theme=s[5]),l&64&&(a.themeOverrides=s[6]),l&256&&(a.marginBottom=s[8]),l&1049088&&(a.$$scope={dirty:l,ctx:s}),n.$set(a)},i(s){i||(S(n.$$.fragment,s),i=!0)},o(s){z(n.$$.fragment,s),i=!1},d(s){s&&k(e),le(n)}}}function dt(t){let e;return{c(){e=N("span"),this.h()},l(n){e=P(n,"SPAN",{class:!0});var i=B(e);i.forEach(k),this.h()},h(){E(e,"class","ons-figure__caption")},m(n,i){C(n,e,i),e.innerHTML=t[9]},p(n,i){i&512&&(e.innerHTML=n[9])},d(n){n&&k(e)}}}function mt(t){let e,n,i,s,l;n=new We({props:{id:t[0],cls:t[1],theme:t[5],themeOverrides:t[6],width:t[2],height:["tall","full"].includes(t[10])?t[10]:"auto",marginTop:t[7],marginBottom:t[9]?!1:t[8],$$slots:{default:[ct]},$$scope:{ctx:t}}});let a=t[9]&&Pe(t);return{c(){e=N("figure"),ne(n.$$.fragment),i=V(),a&&a.c(),this.h()},l(o){e=P(o,"FIGURE",{"aria-label":!0,class:!0});var h=B(e);ie(n.$$.fragment,h),i=D(h),a&&a.l(h),h.forEach(k),this.h()},h(){E(e,"aria-label",t[9]),E(e,"class","svelte-1og4gya"),Ke(()=>t[19].call(e))},m(o,h){C(o,e,h),se(n,e,null),W(e,i),a&&a.m(e,null),s=Qe(e,t[19].bind(e)),l=!0},p(o,[h]){const u={};h&1&&(u.id=o[0]),h&2&&(u.cls=o[1]),h&32&&(u.theme=o[5]),h&64&&(u.themeOverrides=o[6]),h&4&&(u.width=o[2]),h&1024&&(u.height=["tall","full"].includes(o[10])?o[10]:"auto"),h&128&&(u.marginTop=o[7]),h&768&&(u.marginBottom=o[9]?!1:o[8]),h&1048600&&(u.$$scope={dirty:h,ctx:o}),n.$set(u),o[9]?a?(a.p(o,h),h&512&&S(a,1)):(a=Pe(o),a.c(),S(a,1),a.m(e,null)):a&&(_e(),z(a,1,1,()=>{a=null}),ve()),(!l||h&512)&&E(e,"aria-label",o[9])},i(o){l||(S(n.$$.fragment,o),S(a),l=!0)},o(o){z(n.$$.fragment,o),z(a),l=!1},d(o){o&&k(e),le(n),a&&a.d(),s()}}}function gt(t,e,n){let i,{$$slots:s={},$$scope:l}=e,{id:a=null}=e,{cls:o=null}=e,{width:h="medium"}=e,{title:u=""}=e,{hideTitle:m=!1}=e,{theme:c=null}=e,{themeOverrides:d=null}=e,{marginTop:y=!1}=e,{marginBottom:p=!0}=e,{colwidth:w="medium"}=e,{caption:f=""}=e,{height:_=200}=e,{gap:v=12}=e,M=!w||w==="full"?"":`grid-${w}`,H=_==="full"?"100vh":Number.isNaN(_)?_:_+"px",O=Number.isNaN(v)?v:v+"px";const A={narrow:{w:180,c:4},medium:{w:280,c:3},wide:{w:400,c:2},full:{w:"100%",c:1}};let F;const Me=$e(A[w].c);Oe("cols",Me);function Ue(){F=this.clientWidth,n(11,F)}return t.$$set=I=>{"id"in I&&n(0,a=I.id),"cls"in I&&n(1,o=I.cls),"width"in I&&n(2,h=I.width),"title"in I&&n(3,u=I.title),"hideTitle"in I&&n(4,m=I.hideTitle),"theme"in I&&n(5,c=I.theme),"themeOverrides"in I&&n(6,d=I.themeOverrides),"marginTop"in I&&n(7,y=I.marginTop),"marginBottom"in I&&n(8,p=I.marginBottom),"colwidth"in I&&n(15,w=I.colwidth),"caption"in I&&n(9,f=I.caption),"height"in I&&n(10,_=I.height),"gap"in I&&n(16,v=I.gap),"$$scope"in I&&n(20,l=I.$$scope)},t.$$.update=()=>{t.$$.dirty&100352&&n(17,i=w=="full"?1:F?Math.floor((F+v)/(A[w].w+v)):A[w].c),t.$$.dirty&131072&&Me.set(i)},[a,o,h,u,m,c,d,y,p,f,_,F,M,H,O,w,v,i,s,Ue,l]}class Jt extends de{constructor(e){super(),me(this,e,gt,mt,ge,{id:0,cls:1,width:2,title:3,hideTitle:4,theme:5,themeOverrides:6,marginTop:7,marginBottom:8,colwidth:15,caption:9,height:10,gap:16})}}const te=[];if(typeof window<"u"){const t=()=>te.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map;new IntersectionObserver((e,n)=>{e.forEach(i=>{const s=t.get(i.target),l=te.indexOf(s);i.isIntersecting?l===-1&&te.push(s):(s(),l!==-1&&te.splice(l,1))})},{rootMargin:"400px 0px"})}var _t={rgb2hsl:K,rgb2hsv:re,rgb2hwb:Q,rgb2cmyk:X,rgb2keyword:Z,rgb2xyz:be,rgb2lab:we,rgb2lch:vt,hsl2rgb:ae,hsl2hsv:bt,hsl2hwb:wt,hsl2cmyk:yt,hsl2keyword:pt,hsv2rgb:oe,hsv2hsl:kt,hsv2hwb:Mt,hsv2cmyk:It,hsv2keyword:Et,hwb2rgb:x,hwb2hsl:Tt,hwb2hsv:Ct,hwb2cmyk:St,hwb2keyword:zt,cmyk2rgb:$,cmyk2hsl:Ht,cmyk2hsv:Nt,cmyk2hwb:Pt,cmyk2keyword:Bt,keyword2rgb:q,keyword2hsl:Wt,keyword2hsv:Vt,keyword2hwb:Dt,keyword2cmyk:qt,keyword2lab:Lt,keyword2xyz:Ft,xyz2rgb:De,xyz2lab:qe,xyz2lch:At,lab2xyz:ye,lab2rgb:Le,lab2lch:pe,lch2lab:ke,lch2xyz:Ot,lch2rgb:Rt};function K(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255,s=Math.min(e,n,i),l=Math.max(e,n,i),a=l-s,o,h,u;return l==s?o=0:e==l?o=(n-i)/a:n==l?o=2+(i-e)/a:i==l&&(o=4+(e-n)/a),o=Math.min(o*60,360),o<0&&(o+=360),u=(s+l)/2,l==s?h=0:u<=.5?h=a/(l+s):h=a/(2-l-s),[o,h*100,u*100]}function re(t){var e=t[0],n=t[1],i=t[2],s=Math.min(e,n,i),l=Math.max(e,n,i),a=l-s,o,h,u;return l==0?h=0:h=a/l*1e3/10,l==s?o=0:e==l?o=(n-i)/a:n==l?o=2+(i-e)/a:i==l&&(o=4+(e-n)/a),o=Math.min(o*60,360),o<0&&(o+=360),u=l/255*1e3/10,[o,h,u]}function Q(t){var e=t[0],n=t[1],l=t[2],i=K(t)[0],s=1/255*Math.min(e,Math.min(n,l)),l=1-1/255*Math.max(e,Math.max(n,l));return[i,s*100,l*100]}function X(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255,s,l,a,o;return o=Math.min(1-e,1-n,1-i),s=(1-e-o)/(1-o)||0,l=(1-n-o)/(1-o)||0,a=(1-i-o)/(1-o)||0,[s*100,l*100,a*100,o*100]}function Z(t){return Fe[JSON.stringify(t)]}function be(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var s=e*.4124+n*.3576+i*.1805,l=e*.2126+n*.7152+i*.0722,a=e*.0193+n*.1192+i*.9505;return[s*100,l*100,a*100]}function we(t){var e=be(t),n=e[0],i=e[1],s=e[2],l,a,o;return n/=95.047,i/=100,s/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,l=116*i-16,a=500*(n-i),o=200*(i-s),[l,a,o]}function vt(t){return pe(we(t))}function ae(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100,s,l,a,o,h;if(n==0)return h=i*255,[h,h,h];i<.5?l=i*(1+n):l=i+n-i*n,s=2*i-l,o=[0,0,0];for(var u=0;u<3;u++)a=e+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?h=s+(l-s)*6*a:2*a<1?h=l:3*a<2?h=s+(l-s)*(2/3-a)*6:h=s,o[u]=h*255;return o}function bt(t){var e=t[0],n=t[1]/100,i=t[2]/100,s,l;return i===0?[0,0,0]:(i*=2,n*=i<=1?i:2-i,l=(i+n)/2,s=2*n/(i+n),[e,s*100,l*100])}function wt(t){return Q(ae(t))}function yt(t){return X(ae(t))}function pt(t){return Z(ae(t))}function oe(t){var e=t[0]/60,n=t[1]/100,h=t[2]/100,i=Math.floor(e)%6,s=e-Math.floor(e),l=255*h*(1-n),a=255*h*(1-n*s),o=255*h*(1-n*(1-s)),h=255*h;switch(i){case 0:return[h,o,l];case 1:return[a,h,l];case 2:return[l,h,o];case 3:return[l,a,h];case 4:return[o,l,h];case 5:return[h,l,a]}}function kt(t){var e=t[0],n=t[1]/100,i=t[2]/100,s,l;return l=(2-n)*i,s=n*i,s/=l<=1?l:2-l,s=s||0,l/=2,[e,s*100,l*100]}function Mt(t){return Q(oe(t))}function It(t){return X(oe(t))}function Et(t){return Z(oe(t))}function x(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100,s=n+i,l,a,o,h;switch(s>1&&(n/=s,i/=s),l=Math.floor(6*e),a=1-i,o=6*e-l,l&1&&(o=1-o),h=n+o*(a-n),l){default:case 6:case 0:r=a,g=h,b=n;break;case 1:r=h,g=a,b=n;break;case 2:r=n,g=a,b=h;break;case 3:r=n,g=h,b=a;break;case 4:r=h,g=n,b=a;break;case 5:r=a,g=n,b=h;break}return[r*255,g*255,b*255]}function Tt(t){return K(x(t))}function Ct(t){return re(x(t))}function St(t){return X(x(t))}function zt(t){return Z(x(t))}function $(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,s=t[3]/100,l,a,o;return l=1-Math.min(1,e*(1-s)+s),a=1-Math.min(1,n*(1-s)+s),o=1-Math.min(1,i*(1-s)+s),[l*255,a*255,o*255]}function Ht(t){return K($(t))}function Nt(t){return re($(t))}function Pt(t){return Q($(t))}function Bt(t){return Z($(t))}function De(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,s,l,a;return s=e*3.2406+n*-1.5372+i*-.4986,l=e*-.9689+n*1.8758+i*.0415,a=e*.0557+n*-.204+i*1.057,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s=s*12.92,l=l>.0031308?1.055*Math.pow(l,1/2.4)-.055:l=l*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,s=Math.min(Math.max(0,s),1),l=Math.min(Math.max(0,l),1),a=Math.min(Math.max(0,a),1),[s*255,l*255,a*255]}function qe(t){var e=t[0],n=t[1],i=t[2],s,l,a;return e/=95.047,n/=100,i/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,s=116*n-16,l=500*(e-n),a=200*(n-i),[s,l,a]}function At(t){return pe(qe(t))}function ye(t){var e=t[0],n=t[1],i=t[2],s,l,a,o;return e<=8?(l=e*100/903.3,o=7.787*(l/100)+16/116):(l=100*Math.pow((e+16)/116,3),o=Math.pow(l/100,1/3)),s=s/95.047<=.008856?s=95.047*(n/500+o-16/116)/7.787:95.047*Math.pow(n/500+o,3),a=a/108.883<=.008859?a=108.883*(o-i/200-16/116)/7.787:108.883*Math.pow(o-i/200,3),[s,l,a]}function pe(t){var e=t[0],n=t[1],i=t[2],s,l,a;return s=Math.atan2(i,n),l=s*360/2/Math.PI,l<0&&(l+=360),a=Math.sqrt(n*n+i*i),[e,a,l]}function Le(t){return De(ye(t))}function ke(t){var e=t[0],n=t[1],i=t[2],s,l,a;return a=i/360*2*Math.PI,s=n*Math.cos(a),l=n*Math.sin(a),[e,s,l]}function Ot(t){return ye(ke(t))}function Rt(t){return Le(ke(t))}function q(t){return ce[t]}function Wt(t){return K(q(t))}function Vt(t){return re(q(t))}function Dt(t){return Q(q(t))}function qt(t){return X(q(t))}function Lt(t){return we(q(t))}function Ft(t){return be(q(t))}var ce={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Fe={};for(var Be in ce)Fe[JSON.stringify(ce[Be])]=Be;var fe=_t,L=function(){return new ee};for(var U in fe){L[U+"Raw"]=function(t){return function(e){return typeof e=="number"&&(e=Array.prototype.slice.call(arguments)),fe[t](e)}}(U);var Ae=/(\w+)2(\w+)/.exec(U),ue=Ae[1],Ut=Ae[2];L[ue]=L[ue]||{},L[ue][Ut]=L[U]=function(t){return function(e){typeof e=="number"&&(e=Array.prototype.slice.call(arguments));var n=fe[t](e);if(typeof n=="string"||n===void 0)return n;for(var i=0;i<n.length;i++)n[i]=Math.round(n[i]);return n}}(U)}var ee=function(){this.convs={}};ee.prototype.routeSpace=function(t,e){var n=e[0];return n===void 0?this.getValues(t):(typeof n=="number"&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))};ee.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this};ee.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=L[n][t](i),this.convs[t]=e}return e};["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){ee.prototype[t]=function(e){return this.routeSpace(t,arguments)}});export{We as C,Jt as G,Re as T,Yt as p};