import{b as u,a5 as v,l as y,m as h,q as t,t as l,A as o,e as a,I as d,G as f,z as m,J as S,X as i,M as p,_ as b,R as C}from"./index-BRLM-eBG.js";const _=u({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:v([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),g=y({name:"ElCard"}),$=y({...g,props:_,setup(r){const s=h("card");return(e,n)=>(t(),l("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(t(),l("div",{key:0,class:o(a(s).e("header"))},[d(e.$slots,"header",{},()=>[i(p(e.header),1)])],2)):f("v-if",!0),m("div",{class:o([a(s).e("body"),e.bodyClass]),style:S(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(t(),l("div",{key:1,class:o(a(s).e("footer"))},[d(e.$slots,"footer",{},()=>[i(p(e.footer),1)])],2)):f("v-if",!0)],2))}});var w=b($,[["__file","card.vue"]]);const E=C(w),N=(r,s)=>{const e=r.__vccOpts||r;for(const[n,c]of s)e[n]=c;return e};export{E,N as _};
