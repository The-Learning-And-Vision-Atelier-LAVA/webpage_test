import{F as u,a5 as h,Y as c,T as p,a as r,C as d,$ as t,w as e,f as l,P as y,u as i,e as n,o as w,I as $,j as b,i as S}from"./index-BrdBUvI4.js";const g=u({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=c({name:"ElCard"}),m=c({...C,props:g,setup(o){const a=p("card");return(s,f)=>(r(),d("div",{class:t([e(a).b(),e(a).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(r(),d("div",{key:0,class:t(e(a).e("header"))},[l(s.$slots,"header",{},()=>[y(i(s.header),1)])],2)):n("v-if",!0),w("div",{class:t([e(a).e("body"),s.bodyClass]),style:$(s.bodyStyle)},[l(s.$slots,"default")],6),s.$slots.footer||s.footer?(r(),d("div",{key:1,class:t(e(a).e("footer"))},[l(s.$slots,"footer",{},()=>[y(i(s.footer),1)])],2)):n("v-if",!0)],2))}});var _=b(m,[["__file","card.vue"]]);const k=S(_),O=(o,a)=>{const s=o.__vccOpts||o;for(const[f,v]of a)s[f]=v;return s};export{O as E,k as O};
