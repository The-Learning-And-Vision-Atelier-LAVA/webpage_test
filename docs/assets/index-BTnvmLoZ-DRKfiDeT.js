import{H as ve,X as $,M as he,l as Ge,$ as D,a as A,O as B,E as e,j as Q,i as o,b as q,J as ee,s as t,n as s,f as $e,V as ae,F as T,c as Z,k as ce,o as G,d as We,w as ne,e as te,g as pe,h as Me,I as fe,_ as Se,A as Ze,y as Qe,p as _e,S as Ke,x as Je,m as M,q as U,r as xe,t as me,u as Ue,v as Xe,z as qe,B as V,T as ea,C as aa,D as ta,G as la,K as na,L as Ee,N as Te,P as Le,Q as oa,R as X,U as Ie,W as ia,Y as sa,Z as ra}from"./index-vfCpJMGO.js";import{E as ua,w as ca,C as da}from"./table-column-B4nq7fZF-BhWU1kaZ.js";import{v as va,w as ha}from"./button-B9BwSh4--NYe_O3tl.js";import{N as Pe,E as pa}from"./_plugin-vue_export-helper-SfvOKyMZ-N6uoH2ZL.js";import{t as fa}from"./EventsInfo-vJDubHs--xDn1kqBb.js";import"./raf-DNOUc5rR-BGvIQPP6.js";var ma="Expected a function";function ke(l,u,c){var a=!0,r=!0;if(typeof l!="function")throw new TypeError(ma);return la(c)&&(a="leading"in c?!!c.leading:a,r="trailing"in c?!!c.trailing:r),ua(l,u,{leading:a,maxWait:u,trailing:r})}const ga=ve({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),ya={change:(l,u)=>[l,u].every(Ke)},Be=Symbol("carouselContextKey"),de="ElCarouselItem",wa=(l,u,c)=>Ee(l.subTree).filter(a=>{var r;return Te(a)&&((r=a.type)==null?void 0:r.name)===u&&!!a.component}).map(a=>a.component.uid).map(a=>c[a]).filter(a=>!!a),ba=(l,u)=>{const c={},a=xe([]);return{children:a,addChild:r=>{c[r.uid]=r,a.value=wa(l,u,c)},removeChild:r=>{delete c[r],a.value=a.value.filter(p=>p.uid!==r)}}},Ae=300,Ca=(l,u,c)=>{const{children:a,addChild:r,removeChild:p}=ba(Le(),de),b=Je(),i=M(-1),C=M(null),v=M(!1),h=M(),I=M(0),y=M(!0),_=M(!0),d=M(!1),Y=D(()=>l.arrow!=="never"&&!e(R)),z=D(()=>a.value.some(n=>n.props.label.toString().length>0)),N=D(()=>l.type==="card"),R=D(()=>l.direction==="vertical"),f=D(()=>l.height!=="auto"?{height:l.height}:{height:`${I.value}px`,overflow:"hidden"}),m=ke(n=>{F(n)},Ae,{trailing:!0}),S=ke(n=>{j(n)},Ae),x=n=>y.value?i.value<=1?n<=1:n>1:!0;function E(){C.value&&(clearInterval(C.value),C.value=null)}function H(){l.interval<=0||!l.autoplay||C.value||(C.value=setInterval(()=>P(),l.interval))}const P=()=>{_.value||(d.value=!0),_.value=!1,i.value<a.value.length-1?i.value=i.value+1:l.loop?i.value=0:d.value=!1};function F(n){if(_.value||(d.value=!0),_.value=!1,na(n)){const O=a.value.filter(le=>le.props.name===n);O.length>0&&(n=a.value.indexOf(O[0]))}if(n=Number(n),Number.isNaN(n)||n!==Math.floor(n))return;const w=a.value.length,L=i.value;n<0?i.value=l.loop?w-1:0:n>=w?i.value=l.loop?0:w-1:i.value=n,L===i.value&&g(L),ye()}function g(n){a.value.forEach((w,L)=>{w.translateItem(L,i.value,n)})}function K(n,w){var L,O,le,we;const J=e(a),be=J.length;if(be===0||!n.states.inStage)return!1;const Ne=w+1,Ye=w-1,Ce=be-1,ze=J[Ce].states.active,Re=J[0].states.active,je=(O=(L=J[Ne])==null?void 0:L.states)==null?void 0:O.active,Oe=(we=(le=J[Ye])==null?void 0:le.states)==null?void 0:we.active;return w===Ce&&Re||je?"left":w===0&&ze||Oe?"right":!1}function oe(){v.value=!0,l.pauseOnHover&&E()}function ie(){v.value=!1,H()}function se(){d.value=!1}function k(n){e(R)||a.value.forEach((w,L)=>{n===K(w,L)&&(w.states.hover=!0)})}function ge(){e(R)||a.value.forEach(n=>{n.states.hover=!1})}function W(n){n!==i.value&&(_.value||(d.value=!0)),i.value=n}function j(n){l.trigger==="hover"&&n!==i.value&&(i.value=n,_.value||(d.value=!0))}function re(){F(i.value-1)}function Fe(){F(i.value+1)}function ye(){E(),l.pauseOnHover||H()}function Ve(n){l.height==="auto"&&(I.value=n)}function De(){var n;const w=(n=b.default)==null?void 0:n.call(b);if(!w)return null;const L=Ee(w).filter(O=>Te(O)&&O.type.name===de);return(L==null?void 0:L.length)===2&&l.loop&&!N.value?(y.value=!0,L):(y.value=!1,null)}U(()=>i.value,(n,w)=>{g(w),y.value&&(n=n%2,w=w%2),w>-1&&u("change",n,w)}),U(()=>l.autoplay,n=>{n?H():E()}),U(()=>l.loop,()=>{F(i.value)}),U(()=>l.interval,()=>{ye()});const ue=xe();return me(()=>{U(()=>a.value,()=>{a.value.length>0&&F(l.initialIndex)},{immediate:!0}),ue.value=Ue(h.value,()=>{g()}),H()}),Xe(()=>{E(),h.value&&ue.value&&ue.value.stop()}),qe(Be,{root:h,isCardType:N,isVertical:R,items:a,loop:l.loop,cardScale:l.cardScale,addItem:r,removeItem:p,setActiveItem:F,setContainerHeight:Ve}),{root:h,activeIndex:i,arrowDisplay:Y,hasLabel:z,hover:v,isCardType:N,isTransitioning:d,items:a,isVertical:R,containerStyle:f,isItemsTwoLength:y,handleButtonEnter:k,handleTransitionEnd:se,handleButtonLeave:ge,handleIndicatorClick:W,handleMouseEnter:oe,handleMouseLeave:ie,setActiveItem:F,prev:re,next:Fe,PlaceholderItem:De,isTwoLengthShow:x,throttledArrowClick:m,throttledIndicatorHover:S}},_a="ElCarousel",Ia=$({name:_a}),ka=$({...Ia,props:ga,emits:ya,setup(l,{expose:u,emit:c}){const a=l,{root:r,activeIndex:p,arrowDisplay:b,hasLabel:i,hover:C,isCardType:v,items:h,isVertical:I,containerStyle:y,handleButtonEnter:_,handleButtonLeave:d,isTransitioning:Y,handleIndicatorClick:z,handleMouseEnter:N,handleMouseLeave:R,handleTransitionEnd:f,setActiveItem:m,prev:S,next:x,PlaceholderItem:E,isTwoLengthShow:H,throttledArrowClick:P,throttledIndicatorHover:F}=Ca(a,c),g=he("carousel"),{t:K}=Ge(),oe=D(()=>{const k=[g.b(),g.m(a.direction)];return e(v)&&k.push(g.m("card")),k}),ie=D(()=>{const k=[g.e("container")];return a.motionBlur&&e(Y)&&h.value.length>1&&k.push(e(I)?`${g.namespace.value}-transitioning-vertical`:`${g.namespace.value}-transitioning`),k}),se=D(()=>{const k=[g.e("indicators"),g.em("indicators",a.direction)];return e(i)&&k.push(g.em("indicators","labels")),a.indicatorPosition==="outside"&&k.push(g.em("indicators","outside")),e(I)&&k.push(g.em("indicators","right")),k});return u({activeIndex:p,setActiveItem:m,prev:S,next:x}),(k,ge)=>(A(),B("div",{ref_key:"root",ref:r,class:T(e(oe)),onMouseenter:Z(e(N),["stop"]),onMouseleave:Z(e(R),["stop"])},[e(b)?(A(),Q(ce,{key:0,name:"carousel-arrow-left",persisted:""},{default:o(()=>[q(t("button",{type:"button",class:T([e(g).e("arrow"),e(g).em("arrow","left")]),"aria-label":e(K)("el.carousel.leftArrow"),onMouseenter:W=>e(_)("left"),onMouseleave:e(d),onClick:Z(W=>e(P)(e(p)-1),["stop"])},[s(e(ae),null,{default:o(()=>[s(e($e))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[ee,(k.arrow==="always"||e(C))&&(a.loop||e(p)>0)]])]),_:1})):G("v-if",!0),e(b)?(A(),Q(ce,{key:1,name:"carousel-arrow-right",persisted:""},{default:o(()=>[q(t("button",{type:"button",class:T([e(g).e("arrow"),e(g).em("arrow","right")]),"aria-label":e(K)("el.carousel.rightArrow"),onMouseenter:W=>e(_)("right"),onMouseleave:e(d),onClick:Z(W=>e(P)(e(p)+1),["stop"])},[s(e(ae),null,{default:o(()=>[s(e(We))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[ee,(k.arrow==="always"||e(C))&&(a.loop||e(p)<e(h).length-1)]])]),_:1})):G("v-if",!0),t("div",{class:T(e(ie)),style:te(e(y)),onTransitionend:e(f)},[s(e(E)),ne(k.$slots,"default")],46,["onTransitionend"]),k.indicatorPosition!=="none"?(A(),B("ul",{key:2,class:T(e(se))},[(A(!0),B(pe,null,Me(e(h),(W,j)=>q((A(),B("li",{key:j,class:T([e(g).e("indicator"),e(g).em("indicator",k.direction),e(g).is("active",j===e(p))]),onMouseenter:re=>e(F)(j),onClick:Z(re=>e(z)(j),["stop"])},[t("button",{class:T(e(g).e("button")),"aria-label":e(K)("el.carousel.indicator",{index:j+1})},[e(i)?(A(),B("span",{key:0},V(W.props.label),1)):G("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[ee,e(H)(j)]])),128))],2)):G("v-if",!0),a.motionBlur?(A(),B("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[t("defs",null,[t("filter",{id:"elCarouselHorizontal"},[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),t("filter",{id:"elCarouselVertical"},[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):G("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var Aa=fe(ka,[["__file","carousel.vue"]]);const Ma=ve({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Sa=l=>{const u=ea(Be),c=Le(),a=M(),r=M(!1),p=M(0),b=M(1),i=M(!1),C=M(!1),v=M(!1),h=M(!1),{isCardType:I,isVertical:y,cardScale:_}=u;function d(f,m,S){const x=S-1,E=m-1,H=m+1,P=S/2;return m===0&&f===x?-1:m===x&&f===0?S:f<E&&m-f>=P?S+1:f>H&&f-m>=P?-2:f}function Y(f,m){var S,x;const E=e(y)?((S=u.root.value)==null?void 0:S.offsetHeight)||0:((x=u.root.value)==null?void 0:x.offsetWidth)||0;return v.value?E*((2-_)*(f-m)+1)/4:f<m?-(1+_)*E/4:(3+_)*E/4}function z(f,m,S){const x=u.root.value;return x?((S?x.offsetHeight:x.offsetWidth)||0)*(f-m):0}const N=(f,m,S)=>{var x;const E=e(I),H=(x=u.items.value.length)!=null?x:Number.NaN,P=f===m;!E&&!oa(S)&&(h.value=P||f===S),!P&&H>2&&u.loop&&(f=d(f,m,H));const F=e(y);i.value=P,E?(v.value=Math.round(Math.abs(f-m))<=1,p.value=Y(f,m),b.value=e(i)?1:_):p.value=z(f,m,F),C.value=!0,P&&a.value&&u.setContainerHeight(a.value.offsetHeight)};function R(){if(u&&e(I)){const f=u.items.value.findIndex(({uid:m})=>m===c.uid);u.setActiveItem(f)}}return me(()=>{u.addItem({props:l,states:aa({hover:r,translate:p,scale:b,active:i,ready:C,inStage:v,animating:h}),uid:c.uid,translateItem:N})}),ta(()=>{u.removeItem(c.uid)}),{carouselItemRef:a,active:i,animating:h,hover:r,inStage:v,isVertical:y,translate:p,isCardType:I,scale:b,ready:C,handleItemClick:R}},xa=$({name:de}),Ea=$({...xa,props:Ma,setup(l){const u=l,c=he("carousel"),{carouselItemRef:a,active:r,animating:p,hover:b,inStage:i,isVertical:C,translate:v,isCardType:h,scale:I,ready:y,handleItemClick:_}=Sa(u),d=D(()=>[c.e("item"),c.is("active",r.value),c.is("in-stage",i.value),c.is("hover",b.value),c.is("animating",p.value),{[c.em("item","card")]:h.value,[c.em("item","card-vertical")]:h.value&&C.value}]),Y=D(()=>{const z=`${`translate${e(C)?"Y":"X"}`}(${e(v)}px)`,N=`scale(${e(I)})`;return{transform:[z,N].join(" ")}});return(z,N)=>q((A(),B("div",{ref_key:"carouselItemRef",ref:a,class:T(e(d)),style:te(e(Y)),onClick:e(_)},[e(h)?q((A(),B("div",{key:0,class:T(e(c).e("mask"))},null,2)),[[ee,!e(r)]]):G("v-if",!0),ne(z.$slots,"default")],14,["onClick"])),[[ee,e(y)]])}});var He=fe(Ea,[["__file","carousel-item.vue"]]);const Ta=Se(Aa,{CarouselItem:He}),La=Ze(He),Pa=ve({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:Qe},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ba={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},Ha=$({name:"ElTag"}),Fa=$({...Ha,props:Pa,emits:Ba,setup(l,{emit:u}){const c=l,a=va(),r=he("tag"),p=D(()=>{const{type:v,hit:h,effect:I,closable:y,round:_}=c;return[r.b(),r.is("closable",y),r.m(v||"primary"),r.m(a.value),r.m(I),r.is("hit",h),r.is("round",_)]}),b=v=>{u("close",v)},i=v=>{u("click",v)},C=v=>{var h,I,y;(y=(I=(h=v==null?void 0:v.component)==null?void 0:h.subTree)==null?void 0:I.component)!=null&&y.bum&&(v.component.subTree.component.bum=null)};return(v,h)=>v.disableTransitions?(A(),B("span",{key:0,class:T(e(p)),style:te({backgroundColor:v.color}),onClick:i},[t("span",{class:T(e(r).e("content"))},[ne(v.$slots,"default")],2),v.closable?(A(),Q(e(ae),{key:0,class:T(e(r).e("close")),onClick:Z(b,["stop"])},{default:o(()=>[s(e(_e))]),_:1},8,["class","onClick"])):G("v-if",!0)],6)):(A(),Q(ce,{key:1,name:`${e(r).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:C},{default:o(()=>[t("span",{class:T(e(p)),style:te({backgroundColor:v.color}),onClick:i},[t("span",{class:T(e(r).e("content"))},[ne(v.$slots,"default")],2),v.closable?(A(),Q(e(ae),{key:0,class:T(e(r).e("close")),onClick:Z(b,["stop"])},{default:o(()=>[s(e(_e))]),_:1},8,["class","onClick"])):G("v-if",!0)],6)]),_:3},8,["name"]))}});var Va=fe(Fa,[["__file","tag.vue"]]);const Da=Se(Va),Na=[{url:"/src/assets/home_carousel/1.jpg",text:"中山大学深圳校区激光SLAM建图结果"},{url:"/src/assets/home_carousel/2.jpg",text:`左：高灵活度桌面抓取机器人
右：野外智能抓取机器人`},{url:"/src/assets/home_carousel/3.jpg",text:"大场景高精度建图的移动激光扫描车"}],Ya=["src"],za=$({__name:"Banner",setup(l){const u=M(),c=M("450");return me(()=>{if(u.value){const a=u.value.offsetWidth;c.value=`${a*.45}`}}),(a,r)=>{const p=La,b=Ta;return A(),B("div",{class:"banner_container_custom",ref_key:"carouselDiv",ref:u},[s(b,{"indicator-position":"inside",width:"100%",height:c.value+"px",autoplay:!0},{default:o(()=>[(A(!0),B(pe,null,Me(e(Na),i=>(A(),Q(p,{key:i},{default:o(()=>[t("img",{src:i.url,width:"100%",height:"auto",style:{"object-fit":"cover"}},null,8,Ya),t("div",{class:"text_box",style:te({top:`${c.value-180}px`,whiteSpace:"pre-line"})},[t("h3",null,V(i.text),1)],4)]),_:2},1024))),128))]),_:1},8,["height"])],512)}}}),Ra=Pe(za,[["__scopeId","data-v-a69c64bd"]]),ja=[{name:"ICML",level:"CCF A",date:"2025-01-31",url:"https://icml.cc/Conferences/2025"},{name:"IROS",level:"CCF A",date:"2025-03-01",url:"http://www.iros25.org/"},{name:"ICCV",level:"CCF A",date:"2025-03-15",url:"https://iccv2025.thecvf.com/"},{name:"ACM MM",level:"CCF A",date:"2025-04-11",url:"https://acmmm2025.org/"},{name:"NeurIPS",level:"CCF A",date:"TBD",url:"https://neurips.cc/Conferences/2024"},{name:"AAAI",level:"CCF A",date:"TBD",url:"https://aaai.org/conference/aaai/aaai-25/"},{name:"ICRA",level:"CCF A",date:"TBD",url:"https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"},{name:"ICLR",level:"CCF A",date:"2024-10-01",url:"https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"},{name:"CVPR",level:"CCF A",date:"2025-11-07",url:"https://cvpr.thecvf.com/"}],Oa=[{title:"You Only Train Once: Learning General and Distinctive 3D Local Descriptors",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2022, 45(3): 3949-3967.",author:"Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",url:"https://ieeexplore.ieee.org/document/9792207",code:"https://github.com/QingyongHu/SpinNet"},{title:"Parallax Attention for Unsupervised Stereo Correspondence Learning",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 44(4): 2108-2125.",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/document/9206116",code:"https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM"},{title:"Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021, 44(11): 8338-8354.",author:"Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",url:"https://ieeexplore.ieee.org/document/9440696",code:"https://github.com/QingyongHu/RandLA-Net"},{title:"Deep Learning for 3D Point Clouds: A Survey. IEEE Transactions on Pattern Analysis and Machine Intelligence",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 43(12): 4338-4364.",author:"Yulan Guo, Hanyun Wang, Qingyong Hu, Hao Liu, Li Liu, Mohammed Bennamoun",url:"https://ieeexplore.ieee.org/document/9127813",code:"https://github.com/QingyongHu/SoTA-Point-Cloud"},{title:"Stereo Matching Using Multi-level Cost Volume and Multi-scale Feature Constancy",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2019, 43(1): 300-315.",author:"Zhengfa Liang, Yulan Guo, Yiliu Feng, Wei Chen, Linbo Qiao, Li Zhou, Jianfeng Zhang, Hengzhu Liu",url:"https://ieeexplore.ieee.org/document/8765737",code:"https://github.com/leonzfa/iResNet"}],Ga={class:"main"},$a={class:"card-header"},Wa={style:{"margin-left":"10px"}},Za={class:"title-style"},Qa={class:"author-style"},Ka={class:"book-style"},Ja=$({__name:"index",setup(l){const u=c=>{window.open(c,"_blank")};return(c,a)=>{const r=Ra,p=pa,b=ia,i=sa,C=ra,v=ha,h=ca,I=ae,y=da,_=Da;return A(),B(pe,null,[s(r),t("div",Ga,[s(i,{style:{"margin-top":"20px"},gutter:"10"},{default:o(()=>[s(b,{span:24},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>a[0]||(a[0]=[t("div",{class:"card-header"},[t("div",{class:"title_bar"}),t("span",{class:"title_text"},"实验室简介 Introduction")],-1)])),default:o(()=>[a[1]||(a[1]=t("div",{class:"card-body",style:{"text-align":"justify"}},[t("p",null," 中山大学空间智能实验室（Spatial Artificial Intelligence Lab，SAIL）专注于三维空间感知、理解与生成基础理论与核心算法研究，及其在机器人等应用领域的关键技术研发。SAIL实验室隶属于中山大学电子与通信工程学院，坐落于深圳光明，是广东省先进智能感知技术重点实验室、广东省低空安全探测技术工程中心的核心组成团队。实验室共有教授1名，副教授4名，专职科研人员3名，博硕士研究生40余名。 实验室围绕深度估计与重建、图像视频超分辨、点云配准与制图、点云理解与压缩、三维内容生成、具身智能与机器人等方向开展研究， 主持国家自然科学基金联合重点/面上/青年项目、部委基金/预研项目等多项，发表学术论文200余篇（其中CCF A类论文100余篇）， 与航天科技集团、航空工业集团、华为、阿里巴巴、腾讯、大疆、三一重工等单位保持良好合作。团队成员获国家科技进步奖二等奖、 中国计算机学会自然科学一等奖、吴文俊人工智能优秀青年奖等奖励多项。 ")],-1))]),_:1})]),_:1})]),_:1}),s(i,{style:{"margin-top":"20px"},gutter:"10"},{default:o(()=>[s(b,{span:12},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>[t("div",$a,[a[3]||(a[3]=t("div",{class:"title_bar"},null,-1)),a[4]||(a[4]=t("span",{class:"title_text"},"近期动态 Recent Events",-1)),s(v,{size:"small",class:"more-btn"},{default:o(()=>[s(C,{href:"/events"},{default:o(()=>a[2]||(a[2]=[X("更多 more")])),_:1})]),_:1})])]),default:o(()=>[t("div",null,[s(y,{style:{width:"auto"},data:e(fa).slice(0,5),height:"250px","show-header":!1},{default:o(()=>[s(h,{label:"标题","min-width":"70"},{default:o(d=>[t("div",null,[t("span",null,V(d.row.name),1)])]),_:1}),s(h,{label:"时间","min-width":"30"},{default:o(d=>[t("div",null,[s(I,null,{default:o(()=>[s(e(Ie))]),_:1}),t("span",Wa,V(d.row.date),1)])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1}),s(b,{span:12},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>a[5]||(a[5]=[t("div",{class:"card-header"},[t("div",{class:"title_bar"}),t("span",{class:"title_text"},"会议截稿日 Conference DDLs")],-1)])),default:o(()=>[t("div",null,[s(y,{style:{width:"auto"},"max-height":"250",data:e(ja),"show-header":!0},{default:o(()=>[s(h,{label:"会议名称",width:"100"},{default:o(d=>[t("div",null,[t("span",null,V(d.row.name),1)])]),_:1}),s(h,null,{default:o(d=>[t("div",null,[s(_,null,{default:o(()=>[X(V(d.row.level),1)]),_:2},1024)])]),_:1}),s(h,{label:"截稿日期",width:"150"},{default:o(d=>[t("div",null,[s(I,null,{default:o(()=>[s(e(Ie))]),_:1}),t("span",null,V(d.row.date),1)])]),_:1}),s(h,{label:"会议官网",width:"350"},{default:o(d=>[t("div",null,[s(C,{href:d.row.url,target:"_blank"},{default:o(()=>[X(V(d.row.url),1)]),_:2},1032,["href"])])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1}),s(i,{style:{"margin-top":"20px"},gutter:"10"},{default:o(()=>[s(b,{span:24},{default:o(()=>[s(p,{class:"info_card",shadow:"always"},{header:o(()=>a[6]||(a[6]=[t("div",{class:"card-header"},[t("div",{class:"title_bar"}),t("span",{class:"title_text"},"代表性论文 Representative Publications")],-1)])),default:o(()=>[t("div",null,[s(y,{style:{width:"auto"},data:e(Oa),"show-header":!1},{default:o(()=>[s(h,{label:"论文信息","min-width":"85"},{default:o(d=>[t("div",null,[t("span",Za,V(d.row.title),1),a[7]||(a[7]=t("br",null,null,-1)),t("span",Qa,V(d.row.author),1),a[8]||(a[8]=t("br",null,null,-1)),t("span",Ka,V(d.row.book),1)])]),_:1}),s(h,{label:"论文链接","min-width":"15"},{default:o(d=>[t("div",null,[s(v,{size:"default",class:"more-btn",type:"primary",plain:"",disabled:!d.row.url,onClick:Y=>u(d.row.url)},{default:o(()=>a[9]||(a[9]=[X(" paper ")])),_:2},1032,["disabled","onClick"]),a[11]||(a[11]=t("br",null,null,-1)),s(v,{size:"default",class:"more-btn",type:"info",plain:"",disabled:!d.row.code,onClick:Y=>u(d.row.code)},{default:o(()=>a[10]||(a[10]=[X(" code ")])),_:2},1032,["disabled","onClick"])])]),_:1})]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1})])],64)}}}),lt=Pe(Ja,[["__scopeId","data-v-d0f57497"]]);export{lt as default};
