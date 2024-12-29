import {Person} from "../Team/TeamInfo";

export interface Resourceitem {
    img: String  //资源的图片，硬件就是外观图片，软件就是截图，数据集给出一组样例
    person: String //资源的联系人，想要使用、获取，直接联系谁比较快
    name: String  //资源的名字，硬件最好是 品牌+系列+型号，让人能一眼明白最主要参数，比如 “Amax RTXTitan4卡服务器”、“速腾RubyPlus 128线激光雷达”、”大疆M300RTK无人机“
    url: String  //资源的链接，硬件给到官网该产品的页面或者指向产品说明文件下载页面，软件给到官网页面或者说明文档，数据集给到官方说明页面或者论文连接
    num: String  //资源的数量，硬件给台数/个数，软件可以空置，数据集给出我们已经下载的数据集大小（如45GB）
    intro: String  //资源的介绍
}

//服务器资源列表
export const ServertableData: Resourceitem[] =  [
    {
        name: 'Amax RTXTitan4卡服务器',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/RTXTitan1.png`,
        url: '',
        num: '1台',
        intro: '4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是深度估计与三位重建相关',
    },
    {
        name: 'Amax RTXTitan4卡服务器',
        person: '王宇坤',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/RTXTitan2.png`,
        url: '',
        num: '1台',
        intro: '4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是点云处理相关',
    }
]

//硬件资源列表，包括各类传感器、载具等
export const HardwawretableData: Resourceitem[] =  [
    {
        name: '大疆M300RTK无人机',
        person: '管玮珺',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/DJI_M300_RTK.jpg`,
        url: 'https://www.dji.com/cn/support/product/matrice-300',
        num: '1台',
        intro: '可搭配禅思L1进行图像和点云获取，或者搭配法罗进行高精度点云获取',
    },
    {
        name: '别克GL8自动驾驶数据采集平台',
        person: '管玮珺',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/GL8.jpg`,
        url: '',
        num: '1台',
        intro: '配合数据采集平台，可以获取自动驾驶场景的图像、热成像、点云数据',
    },
]

//软件资源列表，已购买的正版软件
export const SoftwawretableData: Resourceitem[] =  [
    {
        name: 'ContextCapture',
        person: '张勇健',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/ContextCapture.jpg`,
        url: 'https://bentleybsy.wpengine.com/software/itwin-capture-modeler/',
        num: '1套',
        intro: '三维重建软件，支持导入图像序列进行稠密三维重建，可以加入GPS信息，新版本软件名为iTwin Capture',
    },
]

//数据集资源列表，已经下载的或我们自行采集的数据集资源列表
export const DatasettableData: Resourceitem[] =  [
    {
        name: 'KITTI2015-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/kitti15_stereo.jpg`,
        url: 'https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo',
        num: '1.7GB',
        intro: '自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值',
    },
    {
        name: 'CRE-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/cre_stereo.png`,
        url: 'https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo',
        num: '1.7GB',
        intro: '仿真双目立体匹配数据集，提供RGB格式的双目图像对、立体匹配真值，不带相机参数，数据内容与SceneFlow数据集类似，为随机物体在环境中漂浮，经过渲染后得到视差值',
    },
    {
        name: 'KITTI2015-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/kitti15_stereo.jpg`,
        url: 'https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo',
        num: '1.7GB',
        intro: '自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值',
    },
]