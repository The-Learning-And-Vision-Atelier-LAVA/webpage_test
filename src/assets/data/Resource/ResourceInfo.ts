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
        img: '',
        url: '',
        num: '1台',
        intro: '4卡titan服务器，单卡24G显存，服务器上存放的数据集主要是深度估计与三位重建相关',
    },
    {
        name: 'Amax RTXTitan4卡服务器',
        person: '王宇坤',
        img: '',
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
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/hw_DJI_M300_RTK.jpg`,
        url: 'https://www.dji.com/cn/support/product/matrice-300',
        num: '1台',
        intro: '可搭配禅思L1进行图像和点云获取，或者搭配法罗进行高精度点云获取',
    },
    {
        name: '别克GL8自动驾驶数据采集平台',
        person: '管玮珺',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/hw_GL8.jpg`,
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
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/sw_ContextCapture.jpg`,
        url: 'https://bentleybsy.wpengine.com/software/itwin-capture-modeler/',
        num: '1套',
        intro: '三维重建软件，支持导入图像序列进行稠密三维重建，可以加入GPS信息，新版本软件名为iTwin Capture',
    },
]

//数据集资源列表，已经下载的或我们自行采集的数据集资源列表
export const DatasettableData: Resourceitem[] =  [
    {
        name: 'Aachen-Day-Night',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_Aachen_day_night.png`,
        url: 'https://arxiv.org/pdf/2005.05179',
        num: '12.5GB',
        intro: '室外真实场景匹配和定位数据集，提供RGB图像、相机内外参、colmap重建点云',
    },
    {
        name: 'Appolo-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_Appolo.jpg`,
        url: 'https://apolloscape.auto/stereo.html',
        num: '29GB',
        intro: '自动驾驶场景双目立体匹配数据集，提供RGB图像、相机内参、前背景mask',
    },
    {
        name: 'Argoverse-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_argoverse.jpg`,
        url: 'https://www.argoverse.org/av1.html',
        num: '15GB(压缩包)',
        intro: '自动驾驶场景双目立体匹配数据集，提供RGB图像、相机内参',
    },
    {
        name: 'Blended-MVS',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_blended_mvs.jpg`,
        url: 'https://github.com/YoYo000/BlendedMVS',
        num: '230GB',
        intro: '渲染的真实场景三维重建数据集，提供RGB图像、深度图和相机内外参',
    },
    {
        name: 'CRE-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_cre_stereo.jpg`,
        url: 'https://github.com/megvii-research/CREStereo',
        num: '383GB',
        intro: '仿真双目立体匹配数据集，提供RGB格式的双目图像对、立体匹配真值，不带相机参数，数据内容与SceneFlow数据集类似，为随机物体在环境中漂浮，经过渲染后得到视差值',
    },
    {
        name: 'ETH3D-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_eth3d.jpg`,
        url: 'https://www.eth3d.net/',
        num: '106MB',
        intro: '室内外真实场景双目立体匹配数据集，提供RGB双目图像对、半稠密立体匹配真值',
    },
    {
        name: 'FallingThings-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_falling_things.jpg`,
        url: 'https://research.nvidia.com/publication/2018-06_falling-things-synthetic-dataset-3d-object-detection-and-pose-estimation',
        num: '106MB',
        intro: '渲染的室内外场景数据集，仅下载了对应的RGB与深度图',
    },
    {
        name: 'HR_VS-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_HR_VS.jpg`,
        url: 'https://openaccess.thecvf.com/content_CVPR_2019/html/Yang_Hierarchical_Deep_Stereo_Matching_on_High-Resolution_Images_CVPR_2019_paper.html',
        num: '38GB',
        intro: '渲染的自动驾驶场景数据集',
    },
    {
        name: 'Hypersim',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_hypersim.jpg`,
        url: 'https://github.com/apple/ml-hypersim',
        num: '35GB',
        intro: '渲染的室内场景数据集，提供了包括深度、法向量等几何数据、相机参数，仅下载了RGB图像、相机参数和深度图',
    },
    {
        name: 'InLoc',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_InLoc.jpg`,
        url: 'https://github.com/HajimeTaira/InLoc_dataset',
        num: '449GB(压缩包)',
        intro: '室内真实场景数据集，提供了点云、高分辨率RGB图像和相机位姿',
    },
    {
        name: 'Instereo2K',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_kitti_12.jpg`,
        url: 'https://github.com/YuhuaXu/StereoDataset',
        num: '1.7GB',
        intro: '室内真实场景立体匹配数据集，提供RGB和视差值，不带相机参数',
    },
    {
        name: 'KITTI2012-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_kitti_12.jpg`,
        url: 'https://www.cvlibs.net/datasets/kitti/eval_stereo_flow.php?benchmark=stereo',
        num: '1.7GB',
        intro: '自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值',
    },
    {
        name: 'KITTI2015-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_kitti_15.jpg`,
        url: 'https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo',
        num: '1.7GB',
        intro: '自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值',
    },
    {
        name: 'MegaDepth',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_megadepth.png`,
        url: 'https://www.cs.cornell.edu/projects/megadepth/',
        num: '915GB',
        intro: '真实场景数据集，提供了RGB图像、colmap重建的点云、深度图、相机内外参',
    },
    {
        name: 'Middlebury-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_middlebury.jpg`,
        url: 'https://vision.middlebury.edu/stereo/data/',
        num: '7.1GB',
        intro: '室内真实场景立体匹配数据集，提供了RGB图像、视差真值、相机内外参，下载了Eval3、2014、2021mobile三个子集',
    },
    {
        name: 'MPISintel-stereo',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_MPI_sintel.jpg`,
        url: 'http://sintel.is.tue.mpg.de/',
        num: '2.5GB',
        intro: '渲染数据集，提供了RGB图像、视差真值、光流真值，下载了视差和图像部分',
    },
    {
        name: 'NYUDepth_v2',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_nyu_depth_v2.jpg`,
        url: 'https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html',
        num: '6GB',
        intro: '室内真实场景数据集，提供了RGB图像、深度真值和分割，下载了深度和图像部分',
    },
    {
        name: 'ScnaNet',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_scannet.jpg`,
        url: 'http://www.scan-net.org/',
        num: '1.2TB(压缩包)',
        intro: '室内真实场景数据集，提供了RGB图像、深度真值和点云分割，下载了scans1-1400',
    },
    {
        name: 'SceneFlow',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_scene_flow.jpg`,
        url: 'https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html',
        num: '272GB',
        intro: '仿真数据集，提供了RGB图像、视差真值',
    },
    {
        name: 'Spring',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_spring.jpg`,
        url: 'https://spring-benchmark.org/',
        num: '216GB(压缩包)',
        intro: '仿真数据集，提供了RGB图像、视差、光流、场景流真值和相机内外参',
    },
    {
        name: 'TartanAir',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_tartanair.jpg`,
        url: 'https://theairlab.org/tartanair-dataset/',
        num: '1.3TB',
        intro: '仿真数据集，提供了RGB图像、深度真值和相机内外参',
    },
    {
        name: 'Unreal4K',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_unreal4K.jpg`,
        url: 'https://github.com/CVLAB-Unibo/neural-disparity-refinement',
        num: '836GB',
        intro: '仿真数据集，提供了RGB图像、视差真值和相机内外参',
    },
    {
        name: 'VitualKITTI2',
        person: '李坤洪',
        img: `/${import.meta.env.VITE_BASE_PATH}/resources/dataset_vkitti2.jpg`,
        url: 'https://arxiv.org/pdf/2001.10773',
        num: '15GB',
        intro: '自动驾驶仿真数据集，提供了RGB图像、视差真值和相机内外参，每个场景都仿真了不同天气、相机视角变化的情况',
    },
]