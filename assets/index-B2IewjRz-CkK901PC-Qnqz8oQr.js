import{N as ve,J as O,R as he,p as Ge,j as Y,a as A,k as H,_ as e,H as J,s as o,I as q,b as ee,o as t,t as s,v as Oe,U as ae,F as L,z as Q,c as ce,d as G,D as Ze,e as ne,L as te,f as pe,g as xe,h as fe,i as Se,P as Qe,S as Je,l as we,m as je,C as Ke,n as x,w as U,q as Me,r as ge,u as Ue,x as Xe,y as qe,V as N,A as ea,B as aa,E as ta,G as la,K as na,M as Ee,O as Le,Q as Te,T as oa,W as X,X as Ie,Y as ia,Z as sa,$ as ra}from"./index-DEiH0o32.js";import{C as ua,y as ca,g as da}from"./table-column-2I6Kgk97-CTnnEI44-CW3o5JKS.js";import{u as va,_ as ha}from"./button--E6Epakb-Do6yCWoH-8lm96rdx.js";import{C as Pe,m as pa}from"./_plugin-vue_export-helper-CCoWlXaG-BEg_a4_k-CmiiFfeu.js";import{t as fa}from"./EventsInfo-vJDubHs--xDn1kqBb-xDn1kqBb.js";import"./raf-CNtY2p3o-DrbpYkfE-jmlIg56D.js";var ga="Expected a function";function ke(l,u,c){var a=!0,r=!0;if(typeof l!="function")throw new TypeError(ga);return la(c)&&(a="leading"in c?!!c.leading:a,r="trailing"in c?!!c.trailing:r),ua(l,u,{leading:a,maxWait:u,trailing:r})}const ma=ve({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),ya={change:(l,u)=>[l,u].every(je)},He=Symbol("carouselContextKey"),de="ElCarouselItem",ba=(l,u,c)=>Ee(l.subTree).filter(a=>{var r;return Le(a)&&((r=a.type)==null?void 0:r.name)===u&&!!a.component}).map(a=>a.component.uid).map(a=>c[a]).filter(a=>!!a),Ca=(l,u)=>{const c={},a=Me([]);return{children:a,addChild:r=>{c[r.uid]=r,a.value=ba(l,u,c)},removeChild:r=>{delete c[r],a.value=a.value.filter(p=>p.uid!==r)}}},Ae=300,_a=(l,u,c)=>{const{children:a,addChild:r,removeChild:p}=Ca(Te(),de),C=Ke(),i=x(-1),_=x(null),v=x(!1),h=x(),I=x(0),y=x(!0),w=x(!0),d=x(!1),R=Y(()=>l.arrow!=="never"&&!e(D)),z=Y(()=>a.value.some(n=>n.props.label.toString().length>0)),F=Y(()=>l.type==="card"),D=Y(()=>l.direction==="vertical"),f=Y(()=>l.height!=="auto"?{height:l.height}:{height:`${I.value}px`,overflow:"hidden"}),g=ke(n=>{B(n)},Ae,{trailing:!0}),S=ke(n=>{V(n)},Ae),M=n=>y.value?i.value<=1?n<=1:n>1:!0;function E(){_.value&&(clearInterval(_.value),_.value=null)}function $(){l.interval<=0||!l.autoplay||_.value||(_.value=setInterval(()=>P(),l.interval))}const P=()=>{w.value||(d.value=!0),w.value=!1,i.value<a.value.length-1?i.value=i.value+1:l.loop?i.value=0:d.value=!1};function B(n){if(w.value||(d.value=!0),w.value=!1,na(n)){const W=a.value.filter(le=>le.props.name===n);W.length>0&&(n=a.value.indexOf(W[0]))}if(n=Number(n),Number.isNaN(n)||n!==Math.floor(n))return;const b=a.value.length,T=i.value;n<0?i.value=l.loop?b-1:0:n>=b?i.value=l.loop?0:b-1:i.value=n,T===i.value&&m(T),ye()}function m(n){a.value.forEach((b,T)=>{b.translateItem(T,i.value,n)})}function j(n,b){var T,W,le,be;const K=e(a),Ce=K.length;if(Ce===0||!n.states.inStage)return!1;const Fe=b+1,Re=b-1,_e=Ce-1,ze=K[_e].states.active,De=K[0].states.active,Ve=(W=(T=K[Fe])==null?void 0:T.states)==null?void 0:W.active,We=(be=(le=K[Re])==null?void 0:le.states)==null?void 0:be.active;return b===_e&&De||Ve?"left":b===0&&ze||We?"right":!1}function oe(){v.value=!0,l.pauseOnHover&&E()}function ie(){v.value=!1,$()}function se(){d.value=!1}function k(n){e(D)||a.value.forEach((b,T)=>{n===j(b,T)&&(b.states.hover=!0)})}function me(){e(D)||a.value.forEach(n=>{n.states.hover=!1})}function Z(n){n!==i.value&&(w.value||(d.value=!0)),i.value=n}function V(n){l.trigger==="hover"&&n!==i.value&&(i.value=n,w.value||(d.value=!0))}function re(){B(i.value-1)}function Be(){B(i.value+1)}function ye(){E(),l.pauseOnHover||$()}function Ne(n){l.height==="auto"&&(I.value=n)}function Ye(){var n;const b=(n=C.default)==null?void 0:n.call(C);if(!b)return null;const T=Ee(b).filter(W=>Le(W)&&W.type.name===de);return(T==null?void 0:T.length)===2&&l.loop&&!F.value?(y.value=!0,T):(y.value=!1,null)}U(()=>i.value,(n,b)=>{m(b),y.value&&(n=n%2,b=b%2),b>-1&&u("change",n,b)}),U(()=>l.autoplay,n=>{n?$():E()}),U(()=>l.loop,()=>{B(i.value)}),U(()=>l.interval,()=>{ye()});const ue=Me();return ge(()=>{U(()=>a.value,()=>{a.value.length>0&&B(l.initialIndex)},{immediate:!0}),ue.value=Ue(h.value,()=>{m()}),$()}),Xe(()=>{E(),h.value&&ue.value&&ue.value.stop()}),qe(He,{root:h,isCardType:F,isVertical:D,items:a,loop:l.loop,cardScale:l.cardScale,addItem:r,removeItem:p,setActiveItem:B,setContainerHeight:Ne}),{root:h,activeIndex:i,arrowDisplay:R,hasLabel:z,hover:v,isCardType:F,isTransitioning:d,items:a,isVertical:D,containerStyle:f,isItemsTwoLength:y,handleButtonEnter:k,handleTransitionEnd:se,handleButtonLeave:me,handleIndicatorClick:Z,handleMouseEnter:oe,handleMouseLeave:ie,setActiveItem:B,prev:re,next:Be,PlaceholderItem:Ye,isTwoLengthShow:M,throttledArrowClick:g,throttledIndicatorHover:S}},wa="ElCarousel",Ia=O({name:wa}),ka=O({...Ia,props:ma,emits:ya,setup(l,{expose:u,emit:c}){const a=l,{root:r,activeIndex:p,arrowDisplay:C,hasLabel:i,hover:_,isCardType:v,items:h,isVertical:I,containerStyle:y,handleButtonEnter:w,handleButtonLeave:d,isTransitioning:R,handleIndicatorClick:z,handleMouseEnter:F,handleMouseLeave:D,handleTransitionEnd:f,setActiveItem:g,prev:S,next:M,PlaceholderItem:E,isTwoLengthShow:$,throttledArrowClick:P,throttledIndicatorHover:B}=_a(a,c),m=he("carousel"),{t:j}=Ge(),oe=Y(()=>{const k=[m.b(),m.m(a.direction)];return e(v)&&k.push(m.m("card")),k}),ie=Y(()=>{const k=[m.e("container")];return a.motionBlur&&e(R)&&h.value.length>1&&k.push(e(I)?`${m.namespace.value}-transitioning-vertical`:`${m.namespace.value}-transitioning`),k}),se=Y(()=>{const k=[m.e("indicators"),m.em("indicators",a.direction)];return e(i)&&k.push(m.em("indicators","labels")),a.indicatorPosition==="outside"&&k.push(m.em("indicators","outside")),e(I)&&k.push(m.em("indicators","right")),k});return u({activeIndex:p,setActiveItem:g,prev:S,next:M}),(k,me)=>(A(),H("div",{ref_key:"root",ref:r,class:L(e(oe)),onMouseenter:Q(e(F),["stop"]),onMouseleave:Q(e(D),["stop"])},[e(C)?(A(),J(ce,{key:0,name:"carousel-arrow-left",persisted:""},{default:o(()=>[q(t("button",{type:"button",class:L([e(m).e("arrow"),e(m).em("arrow","left")]),"aria-label":e(j)("el.carousel.leftArrow"),onMouseenter:Z=>e(w)("left"),onMouseleave:e(d),onClick:Q(Z=>e(P)(e(p)-1),["stop"])},[s(e(ae),null,{default:o(()=>[s(e(Oe))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[ee,(k.arrow==="always"||e(_))&&(a.loop||e(p)>0)]])]),_:1})):G("v-if",!0),e(C)?(A(),J(ce,{key:1,name:"carousel-arrow-right",persisted:""},{default:o(()=>[q(t("button",{type:"button",class:L([e(m).e("arrow"),e(m).em("arrow","right")]),"aria-label":e(j)("el.carousel.rightArrow"),onMouseenter:Z=>e(w)("right"),onMouseleave:e(d),onClick:Q(Z=>e(P)(e(p)+1),["stop"])},[s(e(ae),null,{default:o(()=>[s(e(Ze))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[ee,(k.arrow==="always"||e(_))&&(a.loop||e(p)<e(h).length-1)]])]),_:1})):G("v-if",!0),t("div",{class:L(e(ie)),style:te(e(y)),onTransitionend:e(f)},[s(e(E)),ne(k.$slots,"default")],46,["onTransitionend"]),k.indicatorPosition!=="none"?(A(),H("ul",{key:2,class:L(e(se))},[(A(!0),H(pe,null,xe(e(h),(Z,V)=>q((A(),H("li",{key:V,class:L([e(m).e("indicator"),e(m).em("indicator",k.direction),e(m).is("active",V===e(p))]),onMouseenter:re=>e(B)(V),onClick:Q(re=>e(z)(V),["stop"])},[t("button",{class:L(e(m).e("button")),"aria-label":e(j)("el.carousel.indicator",{index:V+1})},[e(i)?(A(),H("span",{key:0},N(Z.props.label),1)):G("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[ee,e($)(V)]])),128))],2)):G("v-if",!0),a.motionBlur?(A(),H("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[t("defs",null,[t("filter",{id:"elCarouselHorizontal"},[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),t("filter",{id:"elCarouselVertical"},[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):G("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var Aa=fe(ka,[["__file","carousel.vue"]]);const xa=ve({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Sa=l=>{const u=ea(He),c=Te(),a=x(),r=x(!1),p=x(0),C=x(1),i=x(!1),_=x(!1),v=x(!1),h=x(!1),{isCardType:I,isVertical:y,cardScale:w}=u;function d(f,g,S){const M=S-1,E=g-1,$=g+1,P=S/2;return g===0&&f===M?-1:g===M&&f===0?S:f<E&&g-f>=P?S+1:f>$&&f-g>=P?-2:f}function R(f,g){var S,M;const E=e(y)?((S=u.root.value)==null?void 0:S.offsetHeight)||0:((M=u.root.value)==null?void 0:M.offsetWidth)||0;return v.value?E*((2-w)*(f-g)+1)/4:f<g?-(1+w)*E/4:(3+w)*E/4}function z(f,g,S){const M=u.root.value;return M?((S?M.offsetHeight:M.offsetWidth)||0)*(f-g):0}const F=(f,g,S)=>{var M;const E=e(I),$=(M=u.items.value.length)!=null?M:Number.NaN,P=f===g;!E&&!oa(S)&&(h.value=P||f===S),!P&&$>2&&u.loop&&(f=d(f,g,$));const B=e(y);i.value=P,E?(v.value=Math.round(Math.abs(f-g))<=1,p.value=R(f,g),C.value=e(i)?1:w):p.value=z(f,g,B),_.value=!0,P&&a.value&&u.setContainerHeight(a.value.offsetHeight)};function D(){if(u&&e(I)){const f=u.items.value.findIndex(({uid:g})=>g===c.uid);u.setActiveItem(f)}}return ge(()=>{u.addItem({props:l,states:aa({hover:r,translate:p,scale:C,active:i,ready:_,inStage:v,animating:h}),uid:c.uid,translateItem:F})}),ta(()=>{u.removeItem(c.uid)}),{carouselItemRef:a,active:i,animating:h,hover:r,inStage:v,isVertical:y,translate:p,isCardType:I,scale:C,ready:_,handleItemClick:D}},Ma=O({name:de}),Ea=O({...Ma,props:xa,setup(l){const u=l,c=he("carousel"),{carouselItemRef:a,active:r,animating:p,hover:C,inStage:i,isVertical:_,translate:v,isCardType:h,scale:I,ready:y,handleItemClick:w}=Sa(u),d=Y(()=>[c.e("item"),c.is("active",r.value),c.is("in-stage",i.value),c.is("hover",C.value),c.is("animating",p.value),{[c.em("item","card")]:h.value,[c.em("item","card-vertical")]:h.value&&_.value}]),R=Y(()=>{const z=`${`translate${e(_)?"Y":"X"}`}(${e(v)}px)`,F=`scale(${e(I)})`;return{transform:[z,F].join(" ")}});return(z,F)=>q((A(),H("div",{ref_key:"carouselItemRef",ref:a,class:L(e(d)),style:te(e(R)),onClick:e(w)},[e(h)?q((A(),H("div",{key:0,class:L(e(c).e("mask"))},null,2)),[[ee,!e(r)]]):G("v-if",!0),ne(z.$slots,"default")],14,["onClick"])),[[ee,e(y)]])}});var $e=fe(Ea,[["__file","carousel-item.vue"]]);const La=Se(Aa,{CarouselItem:$e}),Ta=Qe($e),Pa=ve({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:Je},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ha={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},$a=O({name:"ElTag"}),Ba=O({...$a,props:Pa,emits:Ha,setup(l,{emit:u}){const c=l,a=va(),r=he("tag"),p=Y(()=>{const{type:v,hit:h,effect:I,closable:y,round:w}=c;return[r.b(),r.is("closable",y),r.m(v||"primary"),r.m(a.value),r.m(I),r.is("hit",h),r.is("round",w)]}),C=v=>{u("close",v)},i=v=>{u("click",v)},_=v=>{var h,I,y;(y=(I=(h=v==null?void 0:v.component)==null?void 0:h.subTree)==null?void 0:I.component)!=null&&y.bum&&(v.component.subTree.component.bum=null)};return(v,h)=>v.disableTransitions?(A(),H("span",{key:0,class:L(e(p)),style:te({backgroundColor:v.color}),onClick:i},[t("span",{class:L(e(r).e("content"))},[ne(v.$slots,"default")],2),v.closable?(A(),J(e(ae),{key:0,class:L(e(r).e("close")),onClick:Q(C,["stop"])},{default:o(()=>[s(e(we))]),_:1},8,["class","onClick"])):G("v-if",!0)],6)):(A(),J(ce,{key:1,name:`${e(r).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:_},{default:o(()=>[t("span",{class:L(e(p)),style:te({backgroundColor:v.color}),onClick:i},[t("span",{class:L(e(r).e("content"))},[ne(v.$slots,"default")],2),v.closable?(A(),J(e(ae),{key:0,class:L(e(r).e("close")),onClick:Q(C,["stop"])},{default:o(()=>[s(e(we))]),_:1},8,["class","onClick"])):G("v-if",!0)],6)]),_:3},8,["name"]))}});var Na=fe(Ba,[["__file","tag.vue"]]);const Ya=Se(Na),Fa=[{url:"/src/assets/home_carousel/1.jpg",text:"中山大学深圳校区激光SLAM建图结果"},{url:"/src/assets/home_carousel/2.jpg",text:`左：高灵活度桌面抓取机器人
右：野外智能抓取机器人`},{url:"/src/assets/home_carousel/3.jpg",text:"大场景高精度建图的移动激光扫描车"}],Ra=["src"],za=O({__name:"Banner",setup(l){const u=x(),c=x("450");return ge(()=>{if(u.value){const a=u.value.offsetWidth;c.value=`${a*.45}`}}),(a,r)=>{const p=Ta,C=La;return A(),H("div",{class:"banner_container_custom",ref_key:"carouselDiv",ref:u},[s(C,{"indicator-position":"inside",width:"100%",height:c.value+"px",autoplay:!0},{default:o(()=>[(A(!0),H(pe,null,xe(e(Fa),i=>(A(),J(p,{key:i},{default:o(()=>[t("img",{src:i.url,width:"100%",height:"auto",style:{"object-fit":"cover"}},null,8,Ra),t("div",{class:"text_box",style:te({top:`${c.value-180}px`,whiteSpace:"pre-line"})},[t("h3",null,N(i.text),1)],4)]),_:2},1024))),128))]),_:1},8,["height"])],512)}}}),Da=Pe(za,[["__scopeId","data-v-a69c64bd"]]),Va=[{name:"ICML",level:"CCF A",date:"2025-01-31",url:"https://icml.cc/Conferences/2025"},{name:"IROS",level:"CCF A",date:"2025-03-01",url:"http://www.iros25.org/"},{name:"ICCV",level:"CCF A",date:"2025-03-15",url:"https://iccv2025.thecvf.com/"},{name:"ACM MM",level:"CCF A",date:"2025-04-11",url:"https://acmmm2025.org/"},{name:"NeurIPS",level:"CCF A",date:"TBD",url:"https://neurips.cc/Conferences/2024"},{name:"AAAI",level:"CCF A",date:"TBD",url:"https://aaai.org/conference/aaai/aaai-25/"},{name:"ICRA",level:"CCF A",date:"TBD",url:"https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"},{name:"ICLR",level:"CCF A",date:"2024-10-01",url:"https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"},{name:"CVPR",level:"CCF A",date:"2025-11-07",url:"https://cvpr.thecvf.com/"}],Wa=[{title:"You Only Train Once: Learning General and Distinctive 3D Local Descriptors",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2022, 45(3): 3949-3967.",author:"Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",url:"https://ieeexplore.ieee.org/document/9792207",code:"https://github.com/QingyongHu/SpinNet"},{title:"Parallax Attention for Unsupervised Stereo Correspondence Learning",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 44(4): 2108-2125.",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/document/9206116",code:"https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM"},{title:"Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021, 44(11): 8338-8354.",author:"Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",url:"https://ieeexplore.ieee.org/document/9440696",code:"https://github.com/QingyongHu/RandLA-Net"},{title:"Deep Learning for 3D Point Clouds: A Survey. IEEE Transactions on Pattern Analysis and Machine Intelligence",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 43(12): 4338-4364.",author:"Yulan Guo, Hanyun Wang, Qingyong Hu, Hao Liu, Li Liu, Mohammed Bennamoun",url:"https://ieeexplore.ieee.org/document/9127813",code:"https://github.com/QingyongHu/SoTA-Point-Cloud"},{title:"Stereo Matching Using Multi-level Cost Volume and Multi-scale Feature Constancy",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2019, 43(1): 300-315.",author:"Zhengfa Liang, Yulan Guo, Yiliu Feng, Wei Chen, Linbo Qiao, Li Zhou, Jianfeng Zhang, Hengzhu Liu",url:"https://ieeexplore.ieee.org/document/8765737",code:"https://github.com/leonzfa/iResNet"}],Ga={class:"main"},Oa={class:"card-header"},Za={style:{"margin-left":"10px"}},Qa={class:"title-style"},Ja={class:"author-style"},ja={class:"book-style"},Ka=O({__name:"index",setup(l){const u=c=>{window.open(c,"_blank")};return(c,a)=>{const r=Da,p=pa,C=ia,i=sa,_=ra,v=ha,h=ca,I=ae,y=da,w=Ya;return A(),H(pe,null,[s(r),t("div",Ga,[s(i,{style:{"margin-top":"20px"},gutter:"10"},{default:o(()=>[s(C,{span:24},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>a[0]||(a[0]=[t("div",{class:"card-header"},[t("div",{class:"title_bar"}),t("span",{class:"title_text"},"实验室简介 Introduction")],-1)])),default:o(()=>[a[1]||(a[1]=t("div",{class:"card-body",style:{"text-align":"justify"}},[t("p",null," 中山大学空间智能实验室（Spatial Artificial Intelligence Lab，SAIL）专注于三维空间感知、理解与生成基础理论与核心算法研究，及其在机器人等应用领域的关键技术研发。SAIL实验室隶属于中山大学电子与通信工程学院，坐落于深圳光明，是广东省先进智能感知技术重点实验室、广东省低空安全探测技术工程中心的核心组成团队。实验室共有教授1名，副教授4名，专职科研人员3名，博硕士研究生40余名。 实验室围绕深度估计与重建、图像视频超分辨、点云配准与制图、点云理解与压缩、三维内容生成、具身智能与机器人等方向开展研究， 主持国家自然科学基金联合重点/面上/青年项目、部委基金/预研项目等多项，发表学术论文200余篇（其中CCF A类论文100余篇）， 与航天科技集团、航空工业集团、华为、阿里巴巴、腾讯、大疆、三一重工等单位保持良好合作。团队成员获国家科技进步奖二等奖、 中国计算机学会自然科学一等奖、吴文俊人工智能优秀青年奖等奖励多项。 ")],-1))]),_:1})]),_:1})]),_:1}),s(i,{style:{"margin-top":"20px"},gutter:"10"},{default:o(()=>[s(C,{span:12},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>[t("div",Oa,[a[3]||(a[3]=t("div",{class:"title_bar"},null,-1)),a[4]||(a[4]=t("span",{class:"title_text"},"近期动态 Recent Events",-1)),s(v,{size:"small",class:"more-btn"},{default:o(()=>[s(_,{href:"/events"},{default:o(()=>a[2]||(a[2]=[X("更多 more")])),_:1})]),_:1})])]),default:o(()=>[t("div",null,[s(y,{style:{width:"auto"},data:e(fa).slice(0,5),height:"250px","show-header":!1},{default:o(()=>[s(h,{label:"标题","min-width":"70"},{default:o(d=>[t("div",null,[t("span",null,N(d.row.name),1)])]),_:1}),s(h,{label:"时间","min-width":"30"},{default:o(d=>[t("div",null,[s(I,null,{default:o(()=>[s(e(Ie))]),_:1}),t("span",Za,N(d.row.date),1)])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1}),s(C,{span:12},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>a[5]||(a[5]=[t("div",{class:"card-header"},[t("div",{class:"title_bar"}),t("span",{class:"title_text"},"会议截稿日 Conference DDLs")],-1)])),default:o(()=>[t("div",null,[s(y,{style:{width:"auto"},"max-height":"250",data:e(Va),"show-header":!0},{default:o(()=>[s(h,{label:"会议名称",width:"100"},{default:o(d=>[t("div",null,[t("span",null,N(d.row.name),1)])]),_:1}),s(h,null,{default:o(d=>[t("div",null,[s(w,null,{default:o(()=>[X(N(d.row.level),1)]),_:2},1024)])]),_:1}),s(h,{label:"截稿日期",width:"150"},{default:o(d=>[t("div",null,[s(I,null,{default:o(()=>[s(e(Ie))]),_:1}),t("span",null,N(d.row.date),1)])]),_:1}),s(h,{label:"会议官网",width:"350"},{default:o(d=>[t("div",null,[s(_,{href:d.row.url,target:"_blank"},{default:o(()=>[X(N(d.row.url),1)]),_:2},1032,["href"])])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1}),s(i,{style:{"margin-top":"20px"},gutter:"10"},{default:o(()=>[s(C,{span:24},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>a[6]||(a[6]=[t("div",{class:"card-header"},[t("div",{class:"title_bar"}),t("span",{class:"title_text"},"代表性论文 Representative Publications")],-1)])),default:o(()=>[t("div",null,[s(y,{style:{width:"auto"},data:e(Wa),"show-header":!1},{default:o(()=>[s(h,{label:"论文信息","min-width":"85"},{default:o(d=>[t("div",null,[t("span",Qa,N(d.row.title),1),a[7]||(a[7]=t("br",null,null,-1)),t("span",Ja,N(d.row.author),1),a[8]||(a[8]=t("br",null,null,-1)),t("span",ja,N(d.row.book),1)])]),_:1}),s(h,{label:"论文链接","min-width":"15"},{default:o(d=>[t("div",null,[s(v,{size:"default",class:"more-btn",type:"primary",plain:"",disabled:!d.row.url,onClick:R=>u(d.row.url)},{default:o(()=>a[9]||(a[9]=[X(" paper ")])),_:2},1032,["disabled","onClick"]),a[11]||(a[11]=t("br",null,null,-1)),s(v,{size:"default",class:"more-btn",type:"info",plain:"",disabled:!d.row.code,onClick:R=>u(d.row.code)},{default:o(()=>a[10]||(a[10]=[X(" code ")])),_:2},1032,["disabled","onClick"])])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1})])],64)}}}),lt=Pe(Ka,[["__scopeId","data-v-d0f57497"]]);export{lt as default};