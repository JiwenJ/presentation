import{s as d,m as k,an as e,C as y,aD as H,y as h,h as T,j as D,k as P,aE as S,ay as v,aw as z,A as t,_ as B,aF as A,aG as I,c as b,M as R,t as q,aH as E,aI as F,w as L,q as u,ao as j,aq as x,aJ as $,aK as N,au as O,ak as U,aL as w,aM as W,F as G,d as V,aN as Z,aO as J,aP as K,az as Q,aQ as X,aR as Y,av as M,aS as ee,aT as te,aU as se,b as oe,as as ae,aV as ne,aW as le,aX as ie,aY as re}from"./nav-ec9c0e6d.js";import{N as ce}from"./NoteDisplay-0b2f8a96.js";import ue from"./DrawingControls-273830da.js";import{u as de}from"./index-b1b6ff3c.js";import"./_commonjsHelpers-725317a4.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(a,l){return d(),k("svg",_e,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(a,l){return d(),k("svg",fe,we)}const Se={name:"carbon-time",render:ye},ke="/test/assets/logo-title-horizontal-96c3c915.png";function Ce(){const a=y(Date.now()),l=H({interval:1e3}),_=h(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function m(){a.value=l.value}return{timer:_,resetTimer:m}}const be=T({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;D(P);const _=h(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),m=h(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.noteHTML});return(s,n)=>(d(),v(ce,{class:z(l.class),note:t(_),"note-html":t(m)},null,8,["class","note","note-html"]))}}),$e=B(be,[["__file","D:/slidev/1111/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Me={class:"grid-section top flex"},Te=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),De=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},ze=f(()=>e("div",{class:"context"}," current ",-1)),Be=f(()=>e("div",{class:"context"}," next ",-1)),He={class:"grid-section note overflow-auto"},Ae={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=T({__name:"Presenter",setup(a){D(P);const l=y();A(),I(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=Ce(),n=y([]),o=h(()=>V.value<Z.value?{route:S.value,clicks:V.value+1}:J.value?{route:K.value,clicks:0}:null);return R(()=>{const C=l.value.querySelector("#slide-content"),r=q(E()),g=F();L(()=>{if(!g.value||X.value||!Y.value)return;const c=C.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(i<0||i>100||p<0||p>100))return{x:i,y:p}},c=>{Q.cursor=c})}),(C,r)=>{const g=Se,c=he;return d(),k(G,null,[e("div",Ne,[e("div",Ve,[e("div",Me,[Te,De,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,j(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(M))},[u(N,{key:"main",class:"h-full w-full"},{default:$(()=>[u(ee,{context:"presenter"})]),_:1}),ze],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(M))},[t(o)?(d(),v(N,{key:"next",class:"h-full w-full"},{default:$(()=>{var i;return[u(t(se),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":n.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>n.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:z(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):O("v-if",!0),Be],4),e("div",He,[(d(),v($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ae,[u(ie,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(re),u(W,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>U(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const Oe=B(Re,[["__scopeId","data-v-574fd206"],["__file","D:/slidev/1111/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Oe as default};