import{H as h,a5 as p,X as i,M as u,a as r,O as d,F as t,E as e,w as l,R as n,B as y,o as c,s as w,e as $,I as b,_ as S}from"./index-DHDwx3UM.js";const _=h({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),g=i({name:"ElCard"}),E=i({...g,props:_,setup(o){const a=u("card");return(s,f)=>(r(),d("div",{class:t([e(a).b(),e(a).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(r(),d("div",{key:0,class:t(e(a).e("header"))},[l(s.$slots,"header",{},()=>[n(y(s.header),1)])],2)):c("v-if",!0),w("div",{class:t([e(a).e("body"),s.bodyClass]),style:$(s.bodyStyle)},[l(s.$slots,"default")],6),s.$slots.footer||s.footer?(r(),d("div",{key:1,class:t(e(a).e("footer"))},[l(s.$slots,"footer",{},()=>[n(y(s.footer),1)])],2)):c("v-if",!0)],2))}});var O=b(E,[["__file","card.vue"]]);const m=S(O),C=(o,a)=>{const s=o.__vccOpts||o;for(const[f,v]of a)s[f]=v;return s};export{m as E,C as N};