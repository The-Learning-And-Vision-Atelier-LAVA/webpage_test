import{l as f,q as _,v as y,x as e,C as t,z as s,M as m,X as E,Z as v,W as h,t as g,K as x,L as B,a0 as G,a1 as S}from"./index-CLaPtTmY.js";import{E as $,a as I}from"./anchor-link-D3vEMwpa.js";import{E as b}from"./card-B1N2gsgX.js";import{E as j}from"./button-qm69_eQw.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./raf-CWis4uXO.js";const D=[{name:"Amax RTXTitan4卡服务器",person:"李坤洪",img:"/src/assets/data/Resource/images/RTXTitan1.png",url:"",num:"1台",intro:"4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是深度估计与三位重建相关"},{name:"Amax RTXTitan4卡服务器",person:"王宇坤",img:"/src/assets/data/Resource/images/RTXTitan2.png",url:"",num:"1台",intro:"4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是点云处理相关"}],L=[{name:"大疆M300RTK无人机",person:"管玮珺",img:"/src/assets/data/Resource/images/DJI_M300_RTK.jpg",url:"https://www.dji.com/cn/support/product/matrice-300",num:"1台",intro:"可搭配禅思L1进行图像和点云获取，或者搭配法罗进行高精度点云获取"},{name:"别克GL8自动驾驶数据采集平台",person:"管玮珺",img:"/src/assets/data/Resource/images/GL8.jpg",url:"",num:"1台",intro:"配合数据采集平台，可以获取自动驾驶场景的图像、热成像、点云数据"}],A=[{name:"ContextCapture",person:"张勇健",img:"/src/assets/data/Resource/images/ContextCapture.jpg",url:"https://bentleybsy.wpengine.com/software/itwin-capture-modeler/",num:"1套",intro:"三维重建软件，支持导入图像序列进行稠密三维重建，可以加入GPS信息，新版本软件名为iTwin Capture"}],K=[{name:"KITTI2015-stereo",person:"李坤洪",img:"/src/assets/data/Resource/images/kitti15_stereo.jpg",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值"},{name:"CRE-stereo",person:"李坤洪",img:"/src/assets/data/Resource/images/cre_stereo.png",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"仿真双目立体匹配数据集，提供RGB格式的双目图像对、立体匹配真值，不带相机参数，数据内容与SceneFlow数据集类似，为随机物体在环境中漂浮，经过渲染后得到视差值"},{name:"KITTI2015-stereo",person:"李坤洪",img:"/src/assets/data/Resource/images/kitti15_stereo.jpg",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值"}],X={class:"info-image"},M=["src"],N={class:"info-content"},V={class:"info-name"},z={class:"info-person"},F={class:"info-num"},q={class:"info-intro"},H=f({__name:"ResourceItem",props:{img:String,person:String,name:String,url:String,num:String,intro:String},setup(a){const u=i=>{window.open(i,"_blank")};return(i,r)=>{const l=v,o=j,n=h,c=b;return _(),y(c,{style:{height:"100%"},class:"shadow"},{default:e(()=>[t(n,{gutter:"2"},{default:e(()=>[t(l,{span:8},{default:e(()=>[s("div",X,[s("img",{src:a.img,width:"100%",height:"80%",style:{"object-fit":"cover","max-height":"150px"}},null,8,M)])]),_:1}),t(l,{span:16},{default:e(()=>[s("div",N,[s("p",V,m(a.name),1),s("p",z,m(a.person),1),s("p",F,m(a.num),1),t(o,{size:"small",class:"more-btn",type:"primary",plain:"",disabled:!a.url,onClick:r[0]||(r[0]=d=>u(a.url))},{default:e(()=>r[1]||(r[1]=[E(" 相关链接 ")])),_:1},8,["disabled"])])]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{span:24},{default:e(()=>[s("div",q,[s("span",null,m(a.intro),1)])]),_:1})]),_:1})]),_:1})}}}),J=w(H,[["__scopeId","data-v-c9148404"]]),O={class:"resource-category"},P={class:"card-header"},W={class:"title_text"},Z={class:"card-body",style:{"margin-top":"15px"}},Q=f({__name:"ResourceCategory",props:{category:Object},setup(a){return(u,i)=>{const r=v,l=h;return _(),g("div",O,[s("div",P,[i[0]||(i[0]=s("div",{class:"title_bar"},null,-1)),s("span",W,m(a.category.title),1)]),s("div",Z,[t(l,{gutter:20},{default:e(()=>[(_(!0),g(x,null,B(a.category.data,o=>(_(),y(r,{span:6,style:{"margin-bottom":"20px"}},{default:e(()=>[t(J,{name:o.name,person:o.person,img:o.img,url:o.url,num:o.num,intro:o.intro},null,8,["name","person","img","url","num","intro"])]),_:2},1024))),256))]),_:1})])])}}}),p=w(Q,[["__scopeId","data-v-d065a970"]]),U={id:"server"},Y={id:"hardware"},tt={id:"software"},et={id:"dataset"},st=f({__name:"resources",setup(a){const u={title:"计算资源",data:D},i={title:"硬件资源",data:L},r={title:"软件资源",data:A},l={title:"数据资源",data:K};return(o,n)=>{const c=b,d=$,R=I,k=G,C=h,T=S;return _(),g(x,null,[t(k,{position:"fixed",style:{height:"100%","margin-top":"0px"}},{default:e(()=>[t(R,{offset:70,style:{height:"100%","text-align":"left","background-color":"#ffffff"}},{default:e(()=>[t(d,{href:"#server"},{default:e(()=>[t(c,{class:"shadow"},{default:e(()=>n[0]||(n[0]=[s("span",{class:"link-text"},"计算资源",-1)])),_:1})]),_:1}),t(d,{href:"#hardware"},{default:e(()=>[t(c,{class:"shadow"},{default:e(()=>n[1]||(n[1]=[s("span",{class:"link-text"},"硬件资源",-1)])),_:1})]),_:1}),t(d,{href:"#software"},{default:e(()=>[t(c,{class:"shadow"},{default:e(()=>n[2]||(n[2]=[s("span",{class:"link-text"},"软件资源",-1)])),_:1})]),_:1}),t(d,{href:"#dataset"},{default:e(()=>[t(c,{class:"shadow"},{default:e(()=>n[3]||(n[3]=[s("span",{class:"link-text"},"数据资源",-1)])),_:1})]),_:1})]),_:1})]),_:1}),t(T,{class:"main"},{default:e(()=>[t(C,{style:{"margin-top":"20px"},gutter:"10"},{default:e(()=>[t(c,{class:"info_card",shadow:"always"},{default:e(()=>[s("div",U,[t(p,{category:u})]),s("div",Y,[t(p,{category:i})]),s("div",tt,[t(p,{category:r})]),s("div",et,[t(p,{category:l})])]),_:1})]),_:1})]),_:1})],64)}}}),ct=w(st,[["__scopeId","data-v-7651738b"]]);export{ct as default};
