import{i as Ge,b as fe,a as xe,s as Se,f as Te,c as Ae,u as je,r as E,d as R,e,w as J,o as ve,g as Ue,h as Ze,p as Qe,j as Ke,k as Me,l as x,m as me,n as Xe,q as S,t as N,v as Q,x as s,y as ee,z as a,A as L,B as Z,C as r,E as ae,D as Je,F as te,T as ce,G,H as qe,I as le,J as ne,K as he,L as Le,M as D,_ as pe,N as et,O as tt,P as at,Q as nt,R as Be,S as lt,U as ot,V as we,W as st,X as q,Y as Ie,Z as rt,$ as it}from"./index-3Qkq5cDK.js";import{d as ut,E as ct,a as dt}from"./table-column-BNcPyFHC.js";import{u as ft,E as vt}from"./button-DhRz_Dz2.js";import{E as mt}from"./card-DHrHV133.js";import{_ as Ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as ht}from"./EventsInfo-vJDubHs-.js";import"./raf-DFRkuCOj.js";var pt="Expected a function";function ke(n,i,u){var t=!0,v=!0;if(typeof n!="function")throw new TypeError(pt);return Ge(u)&&(t="leading"in u?!!u.leading:t,v="trailing"in u?!!u.trailing:v),ut(n,i,{leading:t,maxWait:i,trailing:v})}const gt=fe({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),_t={change:(n,i)=>[n,i].every(xe)},Pe=Symbol("carouselContextKey"),de="ElCarouselItem",yt=(n,i,u)=>Te(n.subTree).filter(c=>{var h;return Ae(c)&&((h=c.type)==null?void 0:h.name)===i&&!!c.component}).map(c=>c.component.uid).map(c=>u[c]).filter(c=>!!c),Ct=(n,i)=>{const u={},t=Se([]);return{children:t,addChild:h=>{u[h.uid]=h,t.value=yt(n,i,u)},removeChild:h=>{delete u[h],t.value=t.value.filter(o=>o.uid!==h)}}},Ee=300,bt=(n,i,u)=>{const{children:t,addChild:v,removeChild:c}=Ct(Me(),de),h=je(),o=E(-1),b=E(null),f=E(!1),m=E(),I=E(0),y=E(!0),w=E(!0),d=E(!1),F=R(()=>n.arrow!=="never"&&!e(P)),Y=R(()=>t.value.some(l=>l.props.label.toString().length>0)),z=R(()=>n.type==="card"),P=R(()=>n.direction==="vertical"),p=R(()=>n.height!=="auto"?{height:n.height}:{height:`${I.value}px`,overflow:"hidden"}),g=ke(l=>{H(l)},Ee,{trailing:!0}),T=ke(l=>{W(l)},Ee),A=l=>y.value?o.value<=1?l<=1:l>1:!0;function M(){b.value&&(clearInterval(b.value),b.value=null)}function $(){n.interval<=0||!n.autoplay||b.value||(b.value=setInterval(()=>B(),n.interval))}const B=()=>{w.value||(d.value=!0),w.value=!1,o.value<t.value.length-1?o.value=o.value+1:n.loop?o.value=0:d.value=!1};function H(l){if(w.value||(d.value=!0),w.value=!1,Ke(l)){const O=t.value.filter(U=>U.props.name===l);O.length>0&&(l=t.value.indexOf(O[0]))}if(l=Number(l),Number.isNaN(l)||l!==Math.floor(l))return;const C=t.value.length,V=o.value;l<0?o.value=n.loop?C-1:0:l>=C?o.value=n.loop?0:C-1:o.value=l,V===o.value&&_(V),_e()}function _(l){t.value.forEach((C,V)=>{C.translateItem(V,o.value,l)})}function K(l,C){var V,O,U,ye;const X=e(t),Ce=X.length;if(Ce===0||!l.states.inStage)return!1;const ze=C+1,Ve=C-1,be=Ce-1,Fe=X[be].states.active,Oe=X[0].states.active,Ye=(O=(V=X[ze])==null?void 0:V.states)==null?void 0:O.active,We=(ye=(U=X[Ve])==null?void 0:U.states)==null?void 0:ye.active;return C===be&&Oe||Ye?"left":C===0&&Fe||We?"right":!1}function oe(){f.value=!0,n.pauseOnHover&&M()}function se(){f.value=!1,$()}function re(){d.value=!1}function k(l){e(P)||t.value.forEach((C,V)=>{l===K(C,V)&&(C.states.hover=!0)})}function ge(){e(P)||t.value.forEach(l=>{l.states.hover=!1})}function j(l){l!==o.value&&(w.value||(d.value=!0)),o.value=l}function W(l){n.trigger==="hover"&&l!==o.value&&(o.value=l,w.value||(d.value=!0))}function ie(){H(o.value-1)}function He(){H(o.value+1)}function _e(){M(),n.pauseOnHover||$()}function De(l){n.height==="auto"&&(I.value=l)}function Re(){var l;const C=(l=h.default)==null?void 0:l.call(h);if(!C)return null;const O=Te(C).filter(U=>Ae(U)&&U.type.name===de);return(O==null?void 0:O.length)===2&&n.loop&&!z.value?(y.value=!0,O):(y.value=!1,null)}J(()=>o.value,(l,C)=>{_(C),y.value&&(l=l%2,C=C%2),C>-1&&i("change",l,C)}),J(()=>n.autoplay,l=>{l?$():M()}),J(()=>n.loop,()=>{H(o.value)}),J(()=>n.interval,()=>{_e()});const ue=Se();return ve(()=>{J(()=>t.value,()=>{t.value.length>0&&H(n.initialIndex)},{immediate:!0}),ue.value=Ue(m.value,()=>{_()}),$()}),Ze(()=>{M(),m.value&&ue.value&&ue.value.stop()}),Qe(Pe,{root:m,isCardType:z,isVertical:P,items:t,loop:n.loop,cardScale:n.cardScale,addItem:v,removeItem:c,setActiveItem:H,setContainerHeight:De}),{root:m,activeIndex:o,arrowDisplay:F,hasLabel:Y,hover:f,isCardType:z,isTransitioning:d,items:t,isVertical:P,containerStyle:p,isItemsTwoLength:y,handleButtonEnter:k,handleTransitionEnd:re,handleButtonLeave:ge,handleIndicatorClick:j,handleMouseEnter:oe,handleMouseLeave:se,setActiveItem:H,prev:ie,next:He,PlaceholderItem:Re,isTwoLengthShow:A,throttledArrowClick:g,throttledIndicatorHover:T}},wt="ElCarousel",It=x({name:wt}),kt=x({...It,props:gt,emits:_t,setup(n,{expose:i,emit:u}){const t=n,{root:v,activeIndex:c,arrowDisplay:h,hasLabel:o,hover:b,isCardType:f,items:m,isVertical:I,containerStyle:y,handleButtonEnter:w,handleButtonLeave:d,isTransitioning:F,handleIndicatorClick:Y,handleMouseEnter:z,handleMouseLeave:P,handleTransitionEnd:p,setActiveItem:g,prev:T,next:A,PlaceholderItem:M,isTwoLengthShow:$,throttledArrowClick:B,throttledIndicatorHover:H}=bt(t,u),_=me("carousel"),{t:K}=Xe(),oe=R(()=>{const k=[_.b(),_.m(t.direction)];return e(f)&&k.push(_.m("card")),k}),se=R(()=>{const k=[_.e("container")];return t.motionBlur&&e(F)&&m.value.length>1&&k.push(e(I)?`${_.namespace.value}-transitioning-vertical`:`${_.namespace.value}-transitioning`),k}),re=R(()=>{const k=[_.e("indicators"),_.em("indicators",t.direction)];return e(o)&&k.push(_.em("indicators","labels")),t.indicatorPosition==="outside"&&k.push(_.em("indicators","outside")),e(I)&&k.push(_.em("indicators","right")),k});return i({activeIndex:c,setActiveItem:g,prev:T,next:A}),(k,ge)=>(S(),N("div",{ref_key:"root",ref:v,class:L(e(oe)),onMouseenter:Z(e(z),["stop"]),onMouseleave:Z(e(P),["stop"])},[e(h)?(S(),Q(ce,{key:0,name:"carousel-arrow-left",persisted:""},{default:s(()=>[ee(a("button",{type:"button",class:L([e(_).e("arrow"),e(_).em("arrow","left")]),"aria-label":e(K)("el.carousel.leftArrow"),onMouseenter:j=>e(w)("left"),onMouseleave:e(d),onClick:Z(j=>e(B)(e(c)-1),["stop"])},[r(e(ae),null,{default:s(()=>[r(e(Je))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[te,(k.arrow==="always"||e(b))&&(t.loop||e(c)>0)]])]),_:1})):G("v-if",!0),e(h)?(S(),Q(ce,{key:1,name:"carousel-arrow-right",persisted:""},{default:s(()=>[ee(a("button",{type:"button",class:L([e(_).e("arrow"),e(_).em("arrow","right")]),"aria-label":e(K)("el.carousel.rightArrow"),onMouseenter:j=>e(w)("right"),onMouseleave:e(d),onClick:Z(j=>e(B)(e(c)+1),["stop"])},[r(e(ae),null,{default:s(()=>[r(e(qe))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[te,(k.arrow==="always"||e(b))&&(t.loop||e(c)<e(m).length-1)]])]),_:1})):G("v-if",!0),a("div",{class:L(e(se)),style:ne(e(y)),onTransitionend:e(p)},[r(e(M)),le(k.$slots,"default")],46,["onTransitionend"]),k.indicatorPosition!=="none"?(S(),N("ul",{key:2,class:L(e(re))},[(S(!0),N(he,null,Le(e(m),(j,W)=>ee((S(),N("li",{key:W,class:L([e(_).e("indicator"),e(_).em("indicator",k.direction),e(_).is("active",W===e(c))]),onMouseenter:ie=>e(H)(W),onClick:Z(ie=>e(Y)(W),["stop"])},[a("button",{class:L(e(_).e("button")),"aria-label":e(K)("el.carousel.indicator",{index:W+1})},[e(o)?(S(),N("span",{key:0},D(j.props.label),1)):G("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[te,e($)(W)]])),128))],2)):G("v-if",!0),t.motionBlur?(S(),N("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[a("defs",null,[a("filter",{id:"elCarouselHorizontal"},[a("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),a("filter",{id:"elCarouselVertical"},[a("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):G("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var Et=pe(kt,[["__file","carousel.vue"]]);const St=fe({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Tt=n=>{const i=et(Pe),u=Me(),t=E(),v=E(!1),c=E(0),h=E(1),o=E(!1),b=E(!1),f=E(!1),m=E(!1),{isCardType:I,isVertical:y,cardScale:w}=i;function d(p,g,T){const A=T-1,M=g-1,$=g+1,B=T/2;return g===0&&p===A?-1:g===A&&p===0?T:p<M&&g-p>=B?T+1:p>$&&p-g>=B?-2:p}function F(p,g){var T,A;const M=e(y)?((T=i.root.value)==null?void 0:T.offsetHeight)||0:((A=i.root.value)==null?void 0:A.offsetWidth)||0;return f.value?M*((2-w)*(p-g)+1)/4:p<g?-(1+w)*M/4:(3+w)*M/4}function Y(p,g,T){const A=i.root.value;return A?((T?A.offsetHeight:A.offsetWidth)||0)*(p-g):0}const z=(p,g,T)=>{var A;const M=e(I),$=(A=i.items.value.length)!=null?A:Number.NaN,B=p===g;!M&&!nt(T)&&(m.value=B||p===T),!B&&$>2&&i.loop&&(p=d(p,g,$));const H=e(y);o.value=B,M?(f.value=Math.round(Math.abs(p-g))<=1,c.value=F(p,g),h.value=e(o)?1:w):c.value=Y(p,g,H),b.value=!0,B&&t.value&&i.setContainerHeight(t.value.offsetHeight)};function P(){if(i&&e(I)){const p=i.items.value.findIndex(({uid:g})=>g===u.uid);i.setActiveItem(p)}}return ve(()=>{i.addItem({props:n,states:tt({hover:v,translate:c,scale:h,active:o,ready:b,inStage:f,animating:m}),uid:u.uid,translateItem:z})}),at(()=>{i.removeItem(u.uid)}),{carouselItemRef:t,active:o,animating:m,hover:v,inStage:f,isVertical:y,translate:c,isCardType:I,scale:h,ready:b,handleItemClick:P}},At=x({name:de}),Mt=x({...At,props:St,setup(n){const i=n,u=me("carousel"),{carouselItemRef:t,active:v,animating:c,hover:h,inStage:o,isVertical:b,translate:f,isCardType:m,scale:I,ready:y,handleItemClick:w}=Tt(i),d=R(()=>[u.e("item"),u.is("active",v.value),u.is("in-stage",o.value),u.is("hover",h.value),u.is("animating",c.value),{[u.em("item","card")]:m.value,[u.em("item","card-vertical")]:m.value&&b.value}]),F=R(()=>{const z=`${`translate${e(b)?"Y":"X"}`}(${e(f)}px)`,P=`scale(${e(I)})`;return{transform:[z,P].join(" ")}});return(Y,z)=>ee((S(),N("div",{ref_key:"carouselItemRef",ref:t,class:L(e(d)),style:ne(e(F)),onClick:e(w)},[e(m)?ee((S(),N("div",{key:0,class:L(e(u).e("mask"))},null,2)),[[te,!e(v)]]):G("v-if",!0),le(Y.$slots,"default")],14,["onClick"])),[[te,e(y)]])}});var $e=pe(Mt,[["__file","carousel-item.vue"]]);const Lt=Be(Et,{CarouselItem:$e}),Bt=lt($e),Nt=fe({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:ot},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Pt={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},$t=x({name:"ElTag"}),Ht=x({...$t,props:Nt,emits:Pt,setup(n,{emit:i}){const u=n,t=ft(),v=me("tag"),c=R(()=>{const{type:f,hit:m,effect:I,closable:y,round:w}=u;return[v.b(),v.is("closable",y),v.m(f||"primary"),v.m(t.value),v.m(I),v.is("hit",m),v.is("round",w)]}),h=f=>{i("close",f)},o=f=>{i("click",f)},b=f=>{var m,I,y;(y=(I=(m=f==null?void 0:f.component)==null?void 0:m.subTree)==null?void 0:I.component)!=null&&y.bum&&(f.component.subTree.component.bum=null)};return(f,m)=>f.disableTransitions?(S(),N("span",{key:0,class:L(e(c)),style:ne({backgroundColor:f.color}),onClick:o},[a("span",{class:L(e(v).e("content"))},[le(f.$slots,"default")],2),f.closable?(S(),Q(e(ae),{key:0,class:L(e(v).e("close")),onClick:Z(h,["stop"])},{default:s(()=>[r(e(we))]),_:1},8,["class","onClick"])):G("v-if",!0)],6)):(S(),Q(ce,{key:1,name:`${e(v).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:b},{default:s(()=>[a("span",{class:L(e(c)),style:ne({backgroundColor:f.color}),onClick:o},[a("span",{class:L(e(v).e("content"))},[le(f.$slots,"default")],2),f.closable?(S(),Q(e(ae),{key:0,class:L(e(v).e("close")),onClick:Z(h,["stop"])},{default:s(()=>[r(e(we))]),_:1},8,["class","onClick"])):G("v-if",!0)],6)]),_:3},8,["name"]))}});var Dt=pe(Ht,[["__file","tag.vue"]]);const Rt=Be(Dt),zt=[{url:"/src/assets/home_carousel/1.jpg",text:"中山大学深圳校区激光SLAM建图结果"},{url:"/src/assets/home_carousel/2.jpg",text:`左：高灵活度桌面抓取机器人
右：野外智能抓取机器人`},{url:"/src/assets/home_carousel/3.jpg",text:"大场景高精度建图的移动激光扫描车"}],Vt=["src"],Ft=x({__name:"Banner",setup(n){const i=E(),u=E("450");return ve(()=>{if(i.value){const t=i.value.offsetWidth;u.value=`${t*.45}`}}),(t,v)=>{const c=Bt,h=Lt;return S(),N("div",{class:"banner_container_custom",ref_key:"carouselDiv",ref:i},[r(h,{"indicator-position":"inside",width:"100%",height:u.value+"px",autoplay:!0},{default:s(()=>[(S(!0),N(he,null,Le(e(zt),o=>(S(),Q(c,{key:o},{default:s(()=>[a("img",{src:o.url,width:"100%",height:"auto",style:{"object-fit":"cover"}},null,8,Vt),a("div",{class:"text_box",style:ne({top:`${u.value-180}px`,whiteSpace:"pre-line"})},[a("h3",null,D(o.text),1)],4)]),_:2},1024))),128))]),_:1},8,["height"])],512)}}}),Ot=Ne(Ft,[["__scopeId","data-v-a69c64bd"]]),Yt=[{name:"ICML",level:"CCF A",date:"2025-01-31",url:"https://icml.cc/Conferences/2025"},{name:"IROS",level:"CCF A",date:"2025-03-01",url:"http://www.iros25.org/"},{name:"ICCV",level:"CCF A",date:"2025-03-15",url:"https://iccv2025.thecvf.com/"},{name:"ACM MM",level:"CCF A",date:"2025-04-11",url:"https://acmmm2025.org/"},{name:"NeurIPS",level:"CCF A",date:"TBD",url:"https://neurips.cc/Conferences/2024"},{name:"AAAI",level:"CCF A",date:"TBD",url:"https://aaai.org/conference/aaai/aaai-25/"},{name:"ICRA",level:"CCF A",date:"TBD",url:"https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"},{name:"ICLR",level:"CCF A",date:"2024-10-01",url:"https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"},{name:"CVPR",level:"CCF A",date:"2025-11-07",url:"https://cvpr.thecvf.com/"}],Wt=[{title:"You Only Train Once: Learning General and Distinctive 3D Local Descriptors",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2022, 45(3): 3949-3967.",author:"Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",url:"https://ieeexplore.ieee.org/document/9792207",code:"https://github.com/QingyongHu/SpinNet"},{title:"Parallax Attention for Unsupervised Stereo Correspondence Learning",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 44(4): 2108-2125.",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/document/9206116",code:"https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM"},{title:"Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021, 44(11): 8338-8354.",author:"Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",url:"https://ieeexplore.ieee.org/document/9440696",code:"https://github.com/QingyongHu/RandLA-Net"},{title:"Deep Learning for 3D Point Clouds: A Survey. IEEE Transactions on Pattern Analysis and Machine Intelligence",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 43(12): 4338-4364.",author:"Yulan Guo, Hanyun Wang, Qingyong Hu, Hao Liu, Li Liu, Mohammed Bennamoun",url:"https://ieeexplore.ieee.org/document/9127813",code:"https://github.com/QingyongHu/SoTA-Point-Cloud"},{title:"Stereo Matching Using Multi-level Cost Volume and Multi-scale Feature Constancy",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2019, 43(1): 300-315.",author:"Zhengfa Liang, Yulan Guo, Yiliu Feng, Wei Chen, Linbo Qiao, Li Zhou, Jianfeng Zhang, Hengzhu Liu",url:"https://ieeexplore.ieee.org/document/8765737",code:"https://github.com/leonzfa/iResNet"}],Gt={class:"main"},xt={class:"card-header"},jt={style:{"margin-left":"10px"}},Ut={class:"title-style"},Zt={class:"author-style"},Qt={class:"book-style"},Kt=x({__name:"index",setup(n){const i=u=>{window.open(u,"_blank")};return(u,t)=>{const v=Ot,c=mt,h=rt,o=st,b=it,f=vt,m=ct,I=ae,y=dt,w=Rt;return S(),N(he,null,[r(v),a("div",Gt,[r(o,{style:{"margin-top":"20px"},gutter:"10"},{default:s(()=>[r(h,{span:24},{default:s(()=>[r(c,{class:"info_card",shadow:"always"},{header:s(()=>t[0]||(t[0]=[a("div",{class:"card-header"},[a("div",{class:"title_bar"}),a("span",{class:"title_text"},"实验室简介 Introduction")],-1)])),default:s(()=>[t[1]||(t[1]=a("div",{class:"card-body",style:{"text-align":"justify"}},[a("p",null," 中山大学空间智能实验室（Spatial Artificial Intelligence Lab，SAIL）专注于三维空间感知、理解与生成基础理论与核心算法研究，及其在机器人等应用领域的关键技术研发。SAIL实验室隶属于中山大学电子与通信工程学院，坐落于深圳光明，是广东省先进智能感知技术重点实验室、广东省低空安全探测技术工程中心的核心组成团队。实验室共有教授1名，副教授4名，专职科研人员3名，博硕士研究生40余名。 实验室围绕深度估计与重建、图像视频超分辨、点云配准与制图、点云理解与压缩、三维内容生成、具身智能与机器人等方向开展研究， 主持国家自然科学基金联合重点/面上/青年项目、部委基金/预研项目等多项，发表学术论文200余篇（其中CCF A类论文100余篇）， 与航天科技集团、航空工业集团、华为、阿里巴巴、腾讯、大疆、三一重工等单位保持良好合作。团队成员获国家科技进步奖二等奖、 中国计算机学会自然科学一等奖、吴文俊人工智能优秀青年奖等奖励多项。 ")],-1))]),_:1})]),_:1})]),_:1}),r(o,{style:{"margin-top":"20px"},gutter:"10"},{default:s(()=>[r(h,{span:12},{default:s(()=>[r(c,{class:"info_card",shadow:"always"},{header:s(()=>[a("div",xt,[t[3]||(t[3]=a("div",{class:"title_bar"},null,-1)),t[4]||(t[4]=a("span",{class:"title_text"},"近期动态 Recent Events",-1)),r(f,{size:"small",class:"more-btn"},{default:s(()=>[r(b,{href:"/events"},{default:s(()=>t[2]||(t[2]=[q("更多 more")])),_:1})]),_:1})])]),default:s(()=>[a("div",null,[r(y,{style:{width:"auto"},data:e(ht).slice(0,5),height:"250px","show-header":!1},{default:s(()=>[r(m,{label:"标题","min-width":"70"},{default:s(d=>[a("div",null,[a("span",null,D(d.row.name),1)])]),_:1}),r(m,{label:"时间","min-width":"30"},{default:s(d=>[a("div",null,[r(I,null,{default:s(()=>[r(e(Ie))]),_:1}),a("span",jt,D(d.row.date),1)])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1}),r(h,{span:12},{default:s(()=>[r(c,{class:"info_card",shadow:"always"},{header:s(()=>t[5]||(t[5]=[a("div",{class:"card-header"},[a("div",{class:"title_bar"}),a("span",{class:"title_text"},"会议截稿日 Conference DDLs")],-1)])),default:s(()=>[a("div",null,[r(y,{style:{width:"auto"},"max-height":"250",data:e(Yt),"show-header":!0},{default:s(()=>[r(m,{label:"会议名称",width:"100"},{default:s(d=>[a("div",null,[a("span",null,D(d.row.name),1)])]),_:1}),r(m,null,{default:s(d=>[a("div",null,[r(w,null,{default:s(()=>[q(D(d.row.level),1)]),_:2},1024)])]),_:1}),r(m,{label:"截稿日期",width:"150"},{default:s(d=>[a("div",null,[r(I,null,{default:s(()=>[r(e(Ie))]),_:1}),a("span",null,D(d.row.date),1)])]),_:1}),r(m,{label:"会议官网",width:"350"},{default:s(d=>[a("div",null,[r(b,{href:d.row.url,target:"_blank"},{default:s(()=>[q(D(d.row.url),1)]),_:2},1032,["href"])])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1}),r(o,{style:{"margin-top":"20px"},gutter:"10"},{default:s(()=>[r(h,{span:24},{default:s(()=>[r(c,{class:"info_card",shadow:"always"},{header:s(()=>t[6]||(t[6]=[a("div",{class:"card-header"},[a("div",{class:"title_bar"}),a("span",{class:"title_text"},"代表性论文 Representative Publications")],-1)])),default:s(()=>[a("div",null,[r(y,{style:{width:"auto"},data:e(Wt),"show-header":!1},{default:s(()=>[r(m,{label:"论文信息","min-width":"85"},{default:s(d=>[a("div",null,[a("span",Ut,D(d.row.title),1),t[7]||(t[7]=a("br",null,null,-1)),a("span",Zt,D(d.row.author),1),t[8]||(t[8]=a("br",null,null,-1)),a("span",Qt,D(d.row.book),1)])]),_:1}),r(m,{label:"论文链接","min-width":"15"},{default:s(d=>[a("div",null,[r(f,{size:"default",class:"more-btn",type:"primary",plain:"",disabled:!d.row.url,onClick:F=>i(d.row.url)},{default:s(()=>t[9]||(t[9]=[q(" paper ")])),_:2},1032,["disabled","onClick"]),t[11]||(t[11]=a("br",null,null,-1)),r(f,{size:"default",class:"more-btn",type:"info",plain:"",disabled:!d.row.code,onClick:F=>i(d.row.code)},{default:s(()=>t[10]||(t[10]=[q(" code ")])),_:2},1032,["disabled","onClick"])])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1})])],64)}}}),la=Ne(Kt,[["__scopeId","data-v-d0f57497"]]);export{la as default};
