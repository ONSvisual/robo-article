//js
import{b as s}from"./paths.32d39d85.js";import{a as l}from"./utils.15a1d3d3.js";async function d({fetch:e,parent:n,params:c}){const{places:o}=await n(),t=c.code.replace("/","");let a;return o.map(r=>r.areacd).includes(t)?a=await l(`${s}/data/json/${t}.json`,e):a=await l(`${s}/data/json/default.json`,e),{places:o,place:a}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:d},Symbol.toStringTag,{value:"Module"}));export{u as _,d as l};