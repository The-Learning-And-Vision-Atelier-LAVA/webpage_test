import{X as _,a as p,j as v,i as t,n as e,s,B as d,R as G,O as f,g as y,h as B,W as R,Y as h,a0 as C,a1 as I}from"./index-vfCpJMGO.js";import{B as S,L}from"./anchor-link-DNAtl-TE-BwJyP1m1.js";import{N as w,E as b}from"./_plugin-vue_export-helper-SfvOKyMZ-N6uoH2ZL.js";import{w as X}from"./button-B9BwSh4--NYe_O3tl.js";import"./raf-DNOUc5rR-BGvIQPP6.js";const K=[{name:"Amax RTXTitan4卡服务器",person:"李坤洪",img:"/src/assets/data/Resource/images/RTXTitan1.png",url:"",num:"1台",intro:"4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是深度估计与三位重建相关"},{name:"Amax RTXTitan4卡服务器",person:"王宇坤",img:"/src/assets/data/Resource/images/RTXTitan2.png",url:"",num:"1台",intro:"4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是点云处理相关"}],O=[{name:"大疆M300RTK无人机",person:"管玮珺",img:"/src/assets/data/Resource/images/DJI_M300_RTK.jpg",url:"https://www.dji.com/cn/support/product/matrice-300",num:"1台",intro:"可搭配禅思L1进行图像和点云获取，或者搭配法罗进行高精度点云获取"},{name:"别克GL8自动驾驶数据采集平台",person:"管玮珺",img:"/src/assets/data/Resource/images/GL8.jpg",url:"",num:"1台",intro:"配合数据采集平台，可以获取自动驾驶场景的图像、热成像、点云数据"}],A=[{name:"ContextCapture",person:"张勇健",img:"/src/assets/data/Resource/images/ContextCapture.jpg",url:"https://bentleybsy.wpengine.com/software/itwin-capture-modeler/",num:"1套",intro:"三维重建软件，支持导入图像序列进行稠密三维重建，可以加入GPS信息，新版本软件名为iTwin Capture"}],D=[{name:"KITTI2015-stereo",person:"李坤洪",img:"/src/assets/data/Resource/images/kitti15_stereo.jpg",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值"},{name:"CRE-stereo",person:"李坤洪",img:"/src/assets/data/Resource/images/cre_stereo.png",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"仿真双目立体匹配数据集，提供RGB格式的双目图像对、立体匹配真值，不带相机参数，数据内容与SceneFlow数据集类似，为随机物体在环境中漂浮，经过渲染后得到视差值"},{name:"KITTI2015-stereo",person:"李坤洪",img:"/src/assets/data/Resource/images/kitti15_stereo.jpg",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值"}],M={class:"info-image"},N=["src"],z={class:"info-content"},E={class:"info-name"},F={class:"info-person"},J={class:"info-num"},P={class:"info-intro"},V=_({__name:"ResourceItem",props:{img:String,person:String,name:String,url:String,num:String,intro:String},setup(a){const m=o=>{window.open(o,"_blank")};return(o,i)=>{const l=R,n=X,r=h,c=b;return p(),v(c,{style:{height:"100%"},class:"shadow"},{default:t(()=>[e(r,{gutter:"2"},{default:t(()=>[e(l,{span:8},{default:t(()=>[s("div",M,[s("img",{src:a.img,width:"100%",height:"80%",style:{"object-fit":"cover","max-height":"150px"}},null,8,N)])]),_:1}),e(l,{span:16},{default:t(()=>[s("div",z,[s("p",E,d(a.name),1),s("p",F,d(a.person),1),s("p",J,d(a.num),1),e(n,{size:"small",class:"more-btn",type:"primary",plain:"",disabled:!a.url,onClick:i[0]||(i[0]=u=>m(a.url))},{default:t(()=>i[1]||(i[1]=[G(" 相关链接 ")])),_:1},8,["disabled"])])]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{span:24},{default:t(()=>[s("div",P,[s("span",null,d(a.intro),1)])]),_:1})]),_:1})]),_:1})}}}),W=w(V,[["__scopeId","data-v-c9148404"]]),Y={class:"resource-category"},$={class:"card-header"},q={class:"title_text"},H={class:"card-body",style:{"margin-top":"15px"}},Q=_({__name:"ResourceCategory",props:{category:Object},setup(a){return(m,o)=>{const i=R,l=h;return p(),f("div",Y,[s("div",$,[o[0]||(o[0]=s("div",{class:"title_bar"},null,-1)),s("span",q,d(a.category.title),1)]),s("div",H,[e(l,{gutter:20},{default:t(()=>[(p(!0),f(y,null,B(a.category.data,n=>(p(),v(i,{span:6,style:{"margin-bottom":"20px"}},{default:t(()=>[e(W,{name:n.name,person:n.person,img:n.img,url:n.url,num:n.num,intro:n.intro},null,8,["name","person","img","url","num","intro"])]),_:2},1024))),256))]),_:1})])])}}}),g=w(Q,[["__scopeId","data-v-d065a970"]]),U={id:"server"},Z={id:"hardware"},ee={id:"software"},te={id:"dataset"},se=_({__name:"resources",setup(a){const m={title:"计算资源",data:K},o={title:"硬件资源",data:O},i={title:"软件资源",data:A},l={title:"数据资源",data:D};return(n,r)=>{const c=b,u=S,x=L,k=C,T=h,j=I;return p(),f(y,null,[e(k,{position:"fixed",style:{height:"100%","margin-top":"0px"}},{default:t(()=>[e(x,{offset:70,style:{height:"100%","text-align":"left","background-color":"#ffffff"}},{default:t(()=>[e(u,{href:"#server"},{default:t(()=>[e(c,{class:"shadow"},{default:t(()=>r[0]||(r[0]=[s("span",{class:"link-text"},"计算资源",-1)])),_:1})]),_:1}),e(u,{href:"#hardware"},{default:t(()=>[e(c,{class:"shadow"},{default:t(()=>r[1]||(r[1]=[s("span",{class:"link-text"},"硬件资源",-1)])),_:1})]),_:1}),e(u,{href:"#software"},{default:t(()=>[e(c,{class:"shadow"},{default:t(()=>r[2]||(r[2]=[s("span",{class:"link-text"},"软件资源",-1)])),_:1})]),_:1}),e(u,{href:"#dataset"},{default:t(()=>[e(c,{class:"shadow"},{default:t(()=>r[3]||(r[3]=[s("span",{class:"link-text"},"数据资源",-1)])),_:1})]),_:1})]),_:1})]),_:1}),e(j,{class:"main"},{default:t(()=>[e(T,{style:{"margin-top":"20px"},gutter:"10"},{default:t(()=>[e(c,{class:"info_card",shadow:"always"},{default:t(()=>[s("div",U,[e(g,{category:m})]),s("div",Z,[e(g,{category:o})]),s("div",ee,[e(g,{category:i})]),s("div",te,[e(g,{category:l})])]),_:1})]),_:1})]),_:1})],64)}}}),le=w(se,[["__scopeId","data-v-7651738b"]]);export{le as default};
