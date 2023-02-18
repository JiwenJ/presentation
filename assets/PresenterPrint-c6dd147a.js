import{h as _,j as d,k as p,al as h,c as m,am as u,m as n,an as t,ao as o,A as s,F as f,ap as v,aq as g,ar as x,s as r,as as y,at as b,q as N,au as k,av as P,_ as w}from"./nav-ec9c0e6d.js";import{N as S}from"./NoteDisplay-0b2f8a96.js";import{u as V}from"./index-b1b6ff3c.js";import"./_commonjsHelpers-725317a4.js";const j={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},q=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(F){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:g(s(P))},[t("div",j,[t("div",D,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,v(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),q])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),$=w(A,[["__file","D:/slidev/1111/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{$ as default};
