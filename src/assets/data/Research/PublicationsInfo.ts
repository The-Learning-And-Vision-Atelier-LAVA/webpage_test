export interface PaperwithImg {
    title: string
    author: string
    book: string
    url: string
    code: string
    img: string
}

export interface YearwithPaper {
    id: string
    year: string
    papers: PaperwithImg[]
}

export const PublicationstableData: YearwithPaper[] = [
    {
    "id": "pub24",
    "year": "2024",
    "papers": [
        {
            "title": "Unsupervised Degradation Representation Learning for Unpaired Restoration of Images And Point Clouds",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Longguang Wang, Yulan Guo, Yingqian Wang, Xiaoyu Dong, Qingyu Xu, Jungang Yang, Wei An",
            "url": "https://ieeexplore.ieee.org/abstract/document/10738507",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_UDRL_for_restoration.png"
        },
        {
            "title": "MAC: Maximal Cliques for 3D Registration",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Jiaqi Yang, Xiyu Zhang, Peng Wang, Yulan Guo, Kun Sun, Qiao Wu, Shikun Zhang, Yanning Zhang",
            "url": "https://ieeexplore.ieee.org/abstract/document/10636064",
            "code": "https://github.com/zhangxy0517/3D-Registration-with-Maximal-Cliques/blob/main/README.md",
            "img": "/src/assets/data/Research/publications/2024_MAC.png"
        },
        {
            "title": "Deep Learning for Visual Speech Analysis: A Survey",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Changchong Sheng, Gangyao Kuang, Liang Bai, Chenping Hou, Yulan Guo, Xin Xu, Matti Pietikainen, Li Liu",
            "url": "https://ieeexplore.ieee.org/abstract/document/10472054",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_DL_for_VSA.png"
        },
        {
            "title": "WSSIC-Net: Weakly-Supervised Semantic Instance Completion of 3D Point Cloud Scenes",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Zhiheng Fu, Yulan Guo, Minglin Chen, Qingyong Hu, Hamid Laga, Farid Boussaid, Mohammed Bennamoun",
            "url": "",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_WSSIC.jpg"
        },
        {
            "title": "Cost Volume Aggregation in Stereo Matching Revisited: A Disparity Classification Perspective",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Yun Wang, Longguang Wang, Kunhong Li, Yongjian Zhang, Dapeng Oliver Wu, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/10750250",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_CVA_in_SMR.png"
        },
        {
            "title": "Beyond Appearance: Multi-Frame Spatio-Temporal Context Memory Networks for Efficient And Robust Video Object Segmentation",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Jisheng Dang, Huicheng Zheng, Xiaohao Xu, Xu Yan, Longguang Wang, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/10659365",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_multiframe_STCM.png"
        },
        {
            "title": "Learning Spherical Radiance Field for Efficient 360° Unbounded Novel View Synthesis",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Minglin Chen, Longguang Wang, Zilong Dong, Yinjie Lei, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/10552662",
            "code": "https://minglin-chen.github.io/SphericalRF",
            "img": "/src/assets/data/Research/publications/2024_LSRF.png"
        },
        // {
        //     "title": "X4D-SceneFormer: Enhanced Scene Understanding on 4D Point Cloud Videos through Cross-Modal Knowledge Transfer",
        //     "book": "AAAI Conference on Artificial Intelligence (AAAI)",
        //     "author": "Linglin Jing, Ying Xue, Xu Yan, Chaoda Zheng, Dong Wang, Ruimao Zhang, Zhigang Wang, Hui Fang, Bin Zhao, Zhen Li",
        //     "url": "https://ojs.aaai.org/index.php/AAAI/article/view/28045",
        //     "code": "https://github.com/jinglinglingling/X4D",
        //     "img": "/src/assets/data/Research/publications/2024_X4D.png"
        // },
        {
            "title": "ACRF: Compressing Explicit Neural Radiance Fields via Attribute Compression",
            "book": "The International Conference on Learning Representations (ICLR)",
            "author": "Guangchi Fang, Qingyong Hu, Longguang Wang, Yulan Guo",
            "url": "https://openreview.net/forum?id=POFrdKvpea",
            "code": "https://github.com/fatPeter/ACRF",
            "img": "/src/assets/data/Research/publications/2024_ACRF.png"
        },
        {
            "title": "KptLLM: Unveiling The Power of Large Language Model for Keypoint Comprehension",
            "book": "Advances in Neural Information Processing Systems (NIPS)",
            "author": "Jie Yang, Wang Zeng, Sheng Jin, Lumin Xu, Wentao Liu, Chen Qian, Ruimao Zhang",
            "url": "https://neurips.cc/virtual/2024/poster/94108",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_kptllm.png"
        },
        {
            "title": "Tangram-Splatting: Optimizing 3D Gaussian Splatting Through Tangram-inspired Shape Priors",
            "book": "ACM Multimedia (ACMMM)",
            "author": "Yi Wang, Ningze Zhong, Minglin Chen, Longguang Wang, Yulan Guo",
            "url": "https://dl.acm.org/doi/abs/10.1145/3664647.3680688",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_Tangram_Splatting.png"
        },
        {
            "title": "AEDNet: Adaptive Embedding and Disentanglement for Enhanced Point Cloud Completion",
            "book": "European Conference on Computer Vision (ECCV)",
            "author": "Zhiheng Fu, Longguang Wang, Lian Xu, Zhiyong Wang, Hamid Laga, Yulan Guo, Farid Boussaid, Mohammed Bennamoun",
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/1714_ECCV_2024_paper.php",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_AEDNet.png"
        },
        {
            "title": "Distractor-Free Novel View Synthesis via Exploiting Memorization Effect in Optimization",
            "book": "European Conference on Computer Vision (ECCV)",
            "author": "Yukun Wang, Kunhong Li, Longguang Wang, Minglin Chen, Shunbo Zhou, Kaiwen Xue, Yulan Guo",
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/7158_ECCV_2024_paper.php",
            "code": "https://github.com/Yukun66/MemE",
            "img": "/src/assets/data/Research/publications/2024_MemE.png"
        },
        {
            "title": "Heterogeneous Graph Learning for Scene Graph Prediction in 3D Point Clouds",
            "book": "European Conference on Computer Vision (ECCV)",
            "author": "Yanni Ma, Hao Liu, Yun Pei, Yulan Guo",
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/3785_ECCV_2024_paper.php",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_3D_HetSGP.png"
        },
        {
            "title": "Learning Representations from Foundation Models for Domain Generalized Stereo Matching",
            "book": "European Conference on Computer Vision (ECCV)",
            "author": "Yongjian Zhang, Longguang Wang, Kunhong Li, Yun Wang, Yulan Guo",
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/5841_ECCV_2024_paper.php",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_rep_from_founda.png"
        },
        {
            "title": "Learning Coupled Dictionaries from Unpaired Data for Image Super-Resolution",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Longguang Wang, Juncheng Li, Yingqian Wang, Qingyong Hu, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Wang_Learning_Coupled_Dictionaries_from_Unpaired_Data_for_Image_Super-Resolution_CVPR_2024_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_coupled_dict.png"
        },
        {
            "title": "LoS: Local Structure Guided Stereo Matching",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Kunhong Li, Longguang Wang, Ye Zhang, Kaiwen Xue, Shunbo Zhou, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Li_LoS_Local_Structure-Guided_Stereo_Matching_CVPR_2024_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_LoS_stereo_match.png"
        },
        {
            "title": "L4D-Track: Language-to-4D Modeling Towards 6-DoF Tracking And Shape Reconstruction in 3D Point Cloud Stream",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Jingtao Sun, Yaonan Wang, Mingtao Feng, Yulan Guo, Ajmal Saeed Mian, Mike Zheng Shou",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Sun_L4D-Track_Language-to-4D_Modeling_Towards_6-DoF_Tracking_and_Shape_Reconstruction_in_CVPR_2024_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_L4D_Track.png"
        },
        {
            "title": "DriveWorld: 4D Pre-trained Scene Understanding via World Models for Autonomous Driving",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Chen Min, Jian Zhao, Zheng Zhu, Xinli Xu, Lei Jin, Jianshu Li, Yulan Guo, Junliang Xing, Liping Jing, Yiming Nie, Liang Xiao, Dawei Zhao, Bin Dai",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Min_DriveWorld_4D_Pre-trained_Scene_Understanding_via_World_Models_for_Autonomous_CVPR_2024_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2024_DriveWorld.png"
        },
        {
            "title": " Density-guided Translator Boosts Synthetic-to-Real Unsupervised Domain Adaptive Segmentation of 3D Point Clouds",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Zhimin Yuan, Wankang Zeng, Yanfei Su, Weiquan Liu, Ming Cheng, Yulan Guo, Cheng Wang",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Yuan_Density-guided_Translator_Boosts_Synthetic-to-Real_Unsupervised_Domain_Adaptive_Segmentation_of_3D_CVPR_2024_paper.html",
            "code": "https://github.com/yuan-zm/DGT-ST",
            "img": "/src/assets/data/Research/publications/2024_DGT_ST.png"
        },
        {
            "title": "Open-World Human-Object Interaction Detection via Multi-modal Prompts",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Jie Yang, Bingliang Li, Ailing Zeng, Lei Zhang, Ruimao Zhang",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Open-World_Human-Object_Interaction_Detection_via_Multi-modal_Prompts_CVPR_2024_paper.html",
            "code": "https://MP-HOI.github.io/",
            "img": "/src/assets/data/Research/publications/2024_DiffHOI.png"
        },
        {
            "title": "MP5: A Multi-modal Open-ended Embodied System in Minecraft via Active Perception",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yiran Qin, Enshen Zhou, Qichang Liu, Zhenfei Yin, Lu Sheng, Ruimao Zhang, Yu Qiao, Jing Shao",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Qin_MP5_A_Multi-modal_Open-ended_Embodied_System_in_Minecraft_via_Active_CVPR_2024_paper.html",
            "code": "https://github.com/IranQin/MP5",
            "img": "/src/assets/data/Research/publications/2024_MP5_minecraft.png"
        },
        {
            "title": "FreeMan: Towards Benchmarking 3D Human Pose Estimation under Real-World Conditions",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Jiong Wang, Fengyu Yang, Bingliang Li, Wenbo Gou, Danqi Yan, Ailing Zeng, Yijun Gao, Junle Wang, Yanqing Jing, Ruimao Zhang",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Wang_FreeMan_Towards_Benchmarking_3D_Human_Pose_Estimation_under_Real-World_Conditions_CVPR_2024_paper.html",
            "code": "https://github.com/wangjiongw/FreeMan_API",
            "img": "/src/assets/data/Research/publications/2024_freeman.png"
        },
        {
            "title": "SEED-Bench: Benchmarking Multimodal Large Language Models",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Bohao Li, Yuying Ge, Yixiao Ge, Guangzhi Wang, Rui Wang, Ruimao Zhang, Ying Shan",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Li_SEED-Bench_Benchmarking_Multimodal_Large_Language_Models_CVPR_2024_paper.html",
            "code": "https://github.com/AILab-CVC/SEED-Bench",
            "img": "/src/assets/data/Research/publications/2024_SEED_bench.png"
        },
        {
            "title": "SmartEdit: Exploring Complex Instruction-based Image Editing with Multimodal Large Language Models",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yuzhou Huang, Liangbin Xie, Xintao Wang, Ziyang Yuan, Xiaodong Cun, Yixiao Ge, Jiantao Zhou, Chao Dong, Rui Huang, Ruimao Zhang, Ying Shan",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_SmartEdit_Exploring_Complex_Instruction-based_Image_Editing_with_Multimodal_Large_Language_CVPR_2024_paper.html",
            "code": "https://github.com/TencentARC/SmartEdit",
            "img": "/src/assets/data/Research/publications/2024_smart_edit.png"
        },
        {
            "title": "HumanTOMATO: Text-aligned Whole-body Motion Generation",
            "book": "International Conference on Machine Learning (ICML)",
            "author": "Shunlin Lu, Ling-Hao Chen, Ailing Zeng, Jing Lin, Ruimao Zhang, Lei Zhang, Heung-Yeung Shum",
            "url": "https://icml.cc/virtual/2024/poster/33167",
            "code": "https://github.com/IDEA-Research/HumanTOMATO",
            "img": "/src/assets/data/Research/publications/2024_humantomato.png"
        },
    ]
},
{
    "id": "pub23",
    "year": "2023",
    "papers": [
        {
            "title": "Exploring Fine-Grained Sparsity in Neural Networks for Efficient Inference",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Longguang Wang, Yulan Guo, Xiaoyu Dong, Yingqian Wang, Xinyi Ying, Zaiping Lin, Wei An",
            "url": "https://ieeexplore.ieee.org/abstract/document/9841044",
            "code": "",
            "img": "/src/assets/data/Research/publications/2023_fine_grain_sparsity.png"
        },
        {
            "title": "You Only Train Once: Learning General and Distinctive 3D Local Descriptors",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",
            "url": "https://ieeexplore.ieee.org/abstract/document/9792207",
            "code": "",
            "img": "/src/assets/data/Research/publications/2023_YOTO.png"
        },
        {
            "title": "Disentangling Light Fields for Super-Resolution and Disparity Estimation",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Yingqian Wang, Longguang Wang, Gaochang Wu, Jungang Yang, Wei An, Jingyi Yu, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/9716806",
            "code": "https://yingqianwang.github.io/DistgLF/",
            "img": "/src/assets/data/Research/publications/2023_disentangling.png"
        },
        {
            "title": "GeoTransformer: Fast and Robust Point Cloud Registration with Geometric Transformer",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Zheng Qin, Hao Yu, Changjian Wang, Yulan Guo, Yuxing Peng, Slobodan Ilic, Dewen Hu, Kai Xu",
            "url": "https://ieeexplore.ieee.org/abstract/document/10076895",
            "code": "",
            "img": "/src/assets/data/Research/publications/2023_GeoTransformer.png"
        },
        {
            "title": "RoReg: Pairwise Point Cloud Registration with Oriented Descriptors And Local Rotations",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Haiping Wang, Yuan Liu, Qingyong Hu, Bing Wang, Jianguo Chen, Zhen Dong, Yulan Guo, Wenping Wang, Bisheng Yang",
            "url": "https://ieeexplore.ieee.org/abstract/document/10044259",
            "code": "https://github.com/HpWang-whu/RoReg",
            "img": "/src/assets/data/Research/publications/2023_Roreg.png"
        },
        {
            "title": "Efficient And Robust Video Object Segmentation through Isogenous Memory Sampling And Frame Relation Mining",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Jisheng Dang, Huicheng Zheng, Jinming Lai, Xu Yan, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/10179254",
            "code": "",
            "img": "/src/assets/data/Research/publications/2023_VOS_isoMem.png"
        },
        {
            "title": "Dense Nested Attention Network for Infrared Small Target Detection",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Boyang Li, Miao Li, Chao Xiao, Ting Liu, Longguang Wang, Yingqian Wang, Zaiping Lin, Wei An, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/9864119",
            "code": "https://github.com/YeRen123455/Infrared-Small-Target-Detection",
            "img": "/src/assets/data/Research/publications/2023_DNA_Net.png"
        },
        {
            "title": "3D Face Recognition: Two Decades of Progress and Prospects",
            "book": "ACM Computing Surveys",
            "author": "Yulan Guo, Hanyun Wang, Longguang Wang, Yinjie Lei, Li Liu, Mohammed Bennamoun",
            "url": "https://dl.acm.org/doi/abs/10.1145/3615863",
            "code": "",
            "img": "/src/assets/data/Research/publications/2023_3D_face_recognition.png"
        },
        {
            "title": "Dance with You: The Diversity Controllable Dancer Generation via Diffusion Models",
            "book": "ACM Multimedia (ACMMM)",
            "author": "Siyue Yao, Mingjie Sun, Bingliang Li, Fengyu Yang, Junle Wang, Ruimao Zhang",
            "url": "https://dl.acm.org/doi/abs/10.1145/3581783.3612046",
            "code": "https://github.com/JJessicaYao/AIST-M-Dataset/",
            "img": "/src/assets/data/Research/publications/2023_dance_with_you.png"
        },
        {
            "title": "Discovering Intrinsic Spatial-Temporal Logic Rules to Explain Human Actions",
            "book": "Advances in Neural Information Processing Systems (NIPS)",
            "author": "Chengzhi Cao, Chao Yang, Ruimao Zhang, Shuang Li",
            "url": "https://neurips.cc/virtual/2023/poster/71178",
            "code": "",
            "img": "/src/assets/data/Research/publications/2023_STLR.png"
        },
        {
            "title": "Motion-X: A Large-scale 3D Expressive Whole-body Human Motion Dataset",
            "book": "Advances in Neural Information Processing Systems (NIPS)",
            "author": "Jing Lin, Ailing Zeng, Shunlin Lu, Yuanhao Cai, Ruimao Zhang, Haoqian Wang, Lei Zhang",
            "url": "https://neurips.cc/virtual/2023/poster/73564",
            "code": "https://github.com/IDEA-Research/Motion-X",
            "img": "/src/assets/data/Research/publications/2023_motion_x.png"
        },
        {
            "title": "VAPCNet: Viewpoint-Aware 3D Point Cloud Completion",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Zhiheng Fu, Longguang Wang, Lian Xu, Yulan Guo, Hamid Laga, Zhiyong Wang, Farid Boussaid, Mohammed Bennamoun",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Fu_VAPCNet_Viewpoint-Aware_3D_Point_Cloud_Completion_ICCV_2023_paper.html",
            "code": "https://github.com/FZH92128/VAPCNet",
            "img": "/src/assets/data/Research/publications/zhiheng2023VAPCNet.png"
        },
        {
            "title": "Masked Spatio-Temporal Structure Prediction for Self-supervised Learning on Point Cloud Videos",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Zhiqiang Shen, Xiaoxiao Sheng, Hehe Fan, Longguang Wang, Yulan Guo, Qiong Liu, Hao Wen, Xi Zhou",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Shen_Masked_Spatio-Temporal_Structure_Prediction_for_Self-supervised_Learning_on_Point_Cloud_ICCV_2023_paper.html",
            "code": "https://github.com/JohnsonSign/MaST-Pre.",
            "img": "/src/assets/data/Research/publications/shen2023MaST.jpg"
        },
        {
            "title": "Point Contrastive Prediction with Semantic Clustering for Self-Supervised Learning on Point Cloud Videos",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Xiaoxiao Sheng, Zhiqiang Shen, Gang Xiao, Longguang Wang, Yulan Guo, Hehe Fan",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Sheng_Point_Contrastive_Prediction_with_Semantic_Clustering_for_Self-Supervised_Learning_on_ICCV_2023_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/Sheng2023PointCPSC.jpg"
        },
        {
            "title": "Learning Non-Local Spatial-Angular Correlation for Light Field Image Super-Resolution",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Zhengyu Liang, Yingqian Wang, Longguang Wang, Jungang Yang, Shilin Zhou, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Liang_Learning_Non-Local_Spatial-Angular_Correlation_for_Light_Field_Image_Super-Resolution_ICCV_2023_paper.html",
            "code": "https://github.com/ZhengyuLiang24/EPIT",
            "img": "/src/assets/data/Research/publications/liang2023EPIT.jpg"
        },
        {
            "title": "Monte Carlo Linear Clustering with Single-Point Supervision is Enough for Infrared Small Target Detection",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Boyang Li, Yingqian Wang, Longguang Wang, Fei Zhang, Ting Liu, Zaiping Lin, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Li_Monte_Carlo_Linear_Clustering_with_Single-Point_Supervision_is_Enough_for_ICCV_2023_paper.html",
            "code": "https://github.com/YeRen123455/SIRST-Single-Point-Supervision",
            "img": "/src/assets/data/Research/publications/li2023SIRST.jpg"
        },
        {
            "title": "2D3D-MATR: 2D-3D Matching Transformer for Detection-free Registration between Images and Point Clouds",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Minhao Li, Zheng Qin, Renjiao Yi, Chenyang Zhu, Yulan Guo, Kai Xu",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Li_2D3D-MATR_2D-3D_Matching_Transformer_for_Detection-Free_Registration_Between_Images_and_ICCV_2023_paper.html",
            "code": "https://github.com/minhaolee/2D3DMATR",
            "img": "/src/assets/data/Research/publications/li20232D3DMATR.jpg"
        },
        {
            "title": "Neural Interactive Keypoint Detection",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Jie Yang, Ailing Zeng, Feng Li, Shilong Liu, Ruimao Zhang, Lei Zhang",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Yang_Neural_Interactive_Keypoint_Detection_ICCV_2023_paper.html",
            "code": "https://github.com/IDEA-Research/Click-Pose",
            "img": "/src/assets/data/Research/publications/2023_click_pose.png"
        },
        {
            "title": "SupFusion: Supervised LiDAR-Camera Fusion for 3D Object Detection",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Yiran Qin, Chaoqun Wang, Zijian Kang, Ningning Ma, Zhen Li, Ruimao Zhang",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Qin_SupFusion_Supervised_LiDAR-Camera_Fusion_for_3D_Object_Detection_ICCV_2023_paper.html",
            "code": "https://github.com/IranQin/SupFusion",
            "img": "/src/assets/data/Research/publications/2023_supfusion.png"
        },
        {
            "title": "BUFFER: Balancing Accuracy, Efficiency, and Generalizability in Point Cloud Registration",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Sheng Ao, Qingyong Hu, Hanyun Wang, Kai Xu, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Ao_BUFFER_Balancing_Accuracy_Efficiency_and_Generalizability_in_Point_Cloud_Registration_CVPR_2023_paper.html",
            "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/BUFFERao",
            "img": "/src/assets/data/Research/publications/ao2023buffer.jpg"
        },
        {
            "title": "PointCMP: Contrastive Mask Prediction for Self-supervised Learning on Point Cloud Videos",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Zhiqiang Shen, Xiaoxiao Sheng, Longguang Wang, Yulan Guo, Qiong Liu, Xi Zhou",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Shen_PointCMP_Contrastive_Mask_Prediction_for_Self-Supervised_Learning_on_Point_Cloud_CVPR_2023_paper.html",
            "code": "https://github.com/JohnsonSign/PointCMP",
            "img": "/src/assets/data/Research/publications/shen2023PointCMP.jpg"
        },
        {
            "title": "3D Spatial Multimodal Knowledge Accumulation for Scene Graph Prediction in Point Cloud",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Mingtao Feng, Haoran Hou, Liang Zhang, Zijie Wu, Yulan Guo, Ajmal Saeed Mian",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Feng_3D_Spatial_Multimodal_Knowledge_Accumulation_for_Scene_Graph_Prediction_in_CVPR_2023_paper.html",
            "code": "https://github.com/HHrEtvP/SMKA",
            "img": "/src/assets/data/Research/publications/feng2023SMKA.jpg"
        },
        {
            "title": "Context-aware Alignment and Mutual Masking for 3D-Language Pre-training",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Zhao Jin, Munawar Hayat, Yuwei Yang, Yulan Guo, Yinjie Lei",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Jin_Context-Aware_Alignment_and_Mutual_Masking_for_3D-Language_Pre-Training_CVPR_2023_paper.html",
            "code": "https://github.com/leolyj/3D-VLP",
            "img": "/src/assets/data/Research/publications/jin20233DVLP.jpg"
        },
        {
            "title": "Robust Multiview Point Cloud Registration with Reliable Pose Graph Initialization and History Reweighting",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Haiping Wang, Yuan Liu, Zhen Dong, Yulan Guo, Yu-Shen Liu, Wenping Wang, Bisheng Yang",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Wang_Robust_Multiview_Point_Cloud_Registration_With_Reliable_Pose_Graph_Initialization_CVPR_2023_paper.html",
            "code": "https://github.com/WHU-USI3DV/SGHR",
            "img": "/src/assets/data/Research/publications/wang2023SGHR.jpg"
        },
        {
            "title": "Semi-Weakly Supervised Object Kinematic Motion Prediction",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Gengxin Liu, Qian Sun, Haibin Huang, Chongyang Ma, Yulan Guo, Li Yi, Hui Huang, Ruizhen Hu",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Liu_Semi-Weakly_Supervised_Object_Kinematic_Motion_Prediction_CVPR_2023_paper.html",
            "code": "https://github.com/GengxinLiu/SWMP",
            "img": "/src/assets/data/Research/publications/liu2023SWMP.jpg"
        },
        {
            "title": "Semantic Human Parsing via Scalable Semantic Transfer Over Multiple Label Domains",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Jie Yang, Chaoqun Wang, Zhen Li, Junle Wang, Ruimao Zhang",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Yang_Semantic_Human_Parsing_via_Scalable_Semantic_Transfer_Over_Multiple_Label_CVPR_2023_paper.html",
            "code": "https://github.com/yangjie-cv/SST",
            "img": "/src/assets/data/Research/publications/2023_SST.png"
        },
    ]
},
{
    "id": "pub22",
    "year": "2022",
    "papers": [
        {
            "title": "Parallax Attention for Unsupervised Stereo Correspondence Learning",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",
            "url": "https://ieeexplore.ieee.org/document/9206116",
            "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM",
            "img": "/src/assets/data/Research/publications/wang2022PAM.jpg"
        },
        {
            "title": "Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",
            "url": "https://ieeexplore.ieee.org/document/9440696",
            "code": "https://github.com/QingyongHu/RandLA-Net",
            "img": "/src/assets/data/Research/publications/hu2022RandLANet.jpg"
        },
        {
            "title": "3DPointCaps++: Learning 3D Representations with Capsule Networks",
            "book": "International Journal of Computer Vision (IJCV)",
            "author": "Yongheng Zhao, Guangchi Fang, Yulan Guo, Leonidas Guibas, Federico Tombari, Tolga Birdal",
            "url": "https://link.springer.com/article/10.1007/s11263-022-01632-6",
            "code": "https://github.com/yongheng1991/3D-point-capsule-networks",
            "img": "/src/assets/data/Research/publications/zhao20223DPointCapspp.jpg"
        },
        {
            "title": "Soft Exemplar Highlighting for Cross-View Image-based Geo-localization",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Yulan Guo, Michael Choi, Kunhong Li, Farid Boussaid, Mohammed Bennamoun",
            "url": "https://ieeexplore.ieee.org/document/9720146",
            "code": "",
            "img": "/src/assets/data/Research/publications/guo2022SEH.jpg"
        },
        {
            "title": "A Practical Tutorial on Graph Neural Networks",
            "book": "ACM Computing Surveys",
            "author": "Issac Ronald Ward, Jack Joyner, Casey Lickfold, Yulan Guo, Mohammed Bennamoun",
            "url": "https://dl.acm.org/doi/10.1145/3503043",
            "code": "",
            "img": "/src/assets/data/Research/publications/isaac2022tutorial.jpg"
        },
        {
            "title": "AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation",
            "book": "Advances in Neural Information Processing Systems (NIPS)",
            "author": "Yuanfeng Ji, Haotian Bai, Jie Yang, Chongjian Ge, Ye Zhu, Ruimao Zhang, Zhen Li, Lingyan Zhanng, Wanling Ma, Xiang Wan, Ping Luo",
            "url": "https://neurips.cc/virtual/2022/poster/55771",
            "code": "https://jiyuanfeng.github.io/AMOS/",
            "img": "/src/assets/data/Research/publications/2022_AMOS.png"
        },
        {
            "title": "Let Images Give You More: Point Cloud Cross-Modal Training for Shape Analysis",
            "book": "Advances in Neural Information Processing Systems (NIPS)",
            "author": "Xu Yan, Heshen Zhan, Chaoda Zheng, Jiantao Gao, Ruimao Zhang, Shuguang Cui, Zhen Li",
            "url": "https://neurips.cc/virtual/2022/poster/55376",
            "code": "https://github.com/ZhanHeshen/PointCMT",
            "img": "/src/assets/data/Research/publications/2022_pointCMT.jpg"
        },
        {
            "title": "SQN: Weakly-Supervised Semantic Segmentation of Large-Scale 3D Point Clouds with 1000x Fewer Labels",
            "book": "European Conference on Computer Vision (ECCV)",
            "author": "Qingyong Hu, Bo Yang, Guangchi Fang, Yulan Guo, Ales Leonardis, Niki Trigoni, Andrew Markham",
            "url": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136870592.pdf",
            "code": "https://github.com/QingyongHu/SQN",
            "img": "/src/assets/data/Research/publications/hu2022SQN.jpg"
        },
        {
            "title": "IF-ConvTransformer: A General Framework for Human Activity Recognition Using IMU Fusion and ConvTransformer",
            "book": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (UbiCOMP/IMWUT)",
            "author": "Ye Zhang, Yi Hou, Kewei Ouyang, Shilin Zhou, Yulan Guo",
            "url": "https://dl.acm.org/doi/pdf/10.1145/3534584",
            "code": "https://github.com/crocodilegogogo/IF-ConvTransformer-UbiComp2022",
            "img": "/src/assets/data/Research/publications/zhang2022IFConvTransformer.jpg"
        },
        {
            "title": "Decoupling Makes Weakly Supervised Local Feature Better",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Kunhong Li, Longguang Wang, Li Liu, Qing Ran, Kai Xu, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Li_Decoupling_Makes_Weakly_Supervised_Local_Feature_Better_CVPR_2022_paper.html",
            "code": ": https://github.com/The-Learning-And-Vision-Atelier-LAVA/PoSFeat",
            "img": "/src/assets/data/Research/publications/li2022PoSFeat.jpg"
        },
        {
            "title": "3DAC: Learning Attribute Compression for Point Clouds",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Guangchi Fang, Qingyong Hu, Hanyun Wang, Yiling Xu, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Fang_3DAC_Learning_Attribute_Compression_for_Point_Clouds_CVPR_2022_paper.html",
            "code": "https://github.com/fatPeter/ThreeDAC",
            "img": "/src/assets/data/Research/publications/fang20223DAC.jpg"
        },
        {
            "title": "Learnable Lookup Table for Neural Network Quantization",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Longguang Wang, Yingqian Wang, Xiaoyu Dong, Li Liu, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Wang_Learnable_Lookup_Table_for_Neural_Network_Quantization_CVPR_2022_paper.html",
            "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/LLT",
            "img": "/src/assets/data/Research/publications/wang2022LUT.jpg"
        },
        {
            "title": "Occlusion-Aware Cost Constructor for Light Field Depth Estimation",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yingqian Wang, Longguang Wang, Zhenyu Liang, Jungang Yang, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Wang_Occlusion-Aware_Cost_Constructor_for_Light_Field_Depth_Estimation_CVPR_2022_paper.html",
            "code": "https://github.com/YingqianWang/OACC-Net",
            "img": "/src/assets/data/Research/publications/wang2022OACC.jpg"
        },
        {
            "title": "Depth Estimation by Combining Binocular Stereo and Monocular Structured-Light",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yuhua Xu, Xiaoli Yang, Yushan Yu, Wei Jia, Zhaobi Chu, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Xu_Depth_Estimation_by_Combining_Binocular_Stereo_and_Monocular_Structured-Light_CVPR_2022_paper.html",
            "code": "https://github.com/YuhuaXu/MonoStereoFusion",
            "img": "/src/assets/data/Research/publications/xu2022MonoStereoFusion.jpg"
        },
        {
            "title": "Not All Points Are Equal: Learning Highly Efficient Point-based Detectors for 3D LiDAR Point Clouds",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yifan Zhang, Qingyong Hu, Guoquan Xu, Yanxin Ma, Jianwei Wan, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Not_All_Points_Are_Equal_Learning_Highly_Efficient_Point-Based_Detectors_CVPR_2022_paper.html",
            "code": "https://github.com/yifanzhang713/IA-SSD",
            "img": "/src/assets/data/Research/publications/zhang2022IASSD.jpg"
        },
        {
            "title": "Semantic-Aware Domain Generalized Segmentation",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Duo Peng, Yinjie Lei, Munawar Hayat, Yulan Guo, Wen Li",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Peng_Semantic-Aware_Domain_Generalized_Segmentation_CVPR_2022_paper.html",
            "code": "https://github.com/leolyj/SAN-SAW",
            "img": "/src/assets/data/Research/publications/peng2022SANSAW.jpg"
        },
        {
            "title": "Geometric Transformer for Fast and Robust Point Cloud Registration",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Zheng Qin, Hao Yu, Changjian Wang, Yulan Guo, Yuxing Peng, Kai Xu",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Qin_Geometric_Transformer_for_Fast_and_Robust_Point_Cloud_Registration_CVPR_2022_paper.html",
            "code": "https://github.com/qinzheng93/GeoTransformer",
            "img": "/src/assets/data/Research/publications/qin2022GeoTransformer.jpg"
        },
        {
            "title": "RayMVSNet: Learning Ray-based 1D Implicit Fields for Accurate Multi-View Stereo",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Junhua Xi, Yifei Shi, Yijie Wang, Yulan Guo, Kai Xu",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Xi_RayMVSNet_Learning_Ray-Based_1D_Implicit_Fields_for_Accurate_Multi-View_Stereo_CVPR_2022_paper.html",
            "code": "https://github.com/Airobin329/RayMVSNet",
            "img": "/src/assets/data/Research/publications/xi2022RayMVSNet.jpg"
        }
    ]
},
{
    "id": "pub21",
    "year": "2021",
    "papers": [
        {
            "title": "Deep Learning for 3D Point Clouds: A Survey",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Yulan Guo, Hanyun Wang, Qingyong Hu, Hao Liu, Li Liu, Mohammed Bennamoun",
            "url": "https://ieeexplore.ieee.org/document/9127813",
            "code": "https://github.com/QingyongHu/SoTA-Point-Cloud",
            "img": "/src/assets/data/Research/publications/guo2021survey.jpg"
        },
        {
            "title": "Stereo Matching Using Multi-level Cost Volume and Multi-scale Feature Constancy",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Zhengfa Liang, Yulan Guo, Yiliu Feng, Wei Chen, Linbo Qiao, Li Zhou, Jianfeng Zhang, Hengzhu Liu",
            "url": "https://ieeexplore.ieee.org/document/8765737",
            "code": "",
            "img": "/src/assets/data/Research/publications/liang2021stereo.jpg"
        },
        {
            "title": "PolarMask++: Enhanced Polar Representation for Single-Shot Instance Segmentation And Beyond",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Enze Xie, Wenhai Wang, Mingyu Ding, Ruimao Zhang, Ping Luo",
            "url": "https://ieeexplore.ieee.org/abstract/document/9431650",
            "code": "https://github.com/xieenze/PolarMask",
            "img": "/src/assets/data/Research/publications/2021_polarmaskpp.png"
        },
        {
            "title": "Light Field Image Super-Resolution Using Deformable Convolution",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Yingqian Wang, Jungang Yang, Longguang Wang, Xinyi Ying, Tianhao Wu, Wei An, Yulan Guo",
            "url": "https://ieeexplore.ieee.org/abstract/document/9286855",
            "code": "https://github.com/YingqianWang/LF-DFnet",
            "img": "/src/assets/data/Research/publications/wang2021light.jpg"
        },
        {
            "title": "Learning A Single Network for Scale-Arbitrary Super-Resolution",
            "book": "International Conference on Computer Vision (ICCV)",
            "author": "Longguang Wang, Yingqian Wang, Zaiping Lin, Jungang Yang, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Wang_Learning_a_Single_Network_for_Scale-Arbitrary_Super-Resolution_ICCV_2021_paper.html",
            "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/ArbSR",
            "img": "/src/assets/data/Research/publications/wang2021ArbSR.jpg"
        },
        {
            "title": "Sparse-to-dense Feature Matching: Intra and Inter Domain Cross-modal Learning in Domain Adaptation for 3D Semantic Segmentation",
            "book": "International Conference on Computer Vision (ICCV)",
            "author": "Duo Peng, Yinjie Lei, Wen Li, Pingping Zhang, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Peng_Sparse-to-Dense_Feature_Matching_Intra_and_Inter_Domain_Cross-Modal_Learning_in_ICCV_2021_paper.html",
            "code": "https://github.com/leolyj/DsCML",
            "img": "/src/assets/data/Research/publications/peng2021DsCML.jpg"
        },
        {
            "title": "End-to-End Dense Video Captioning With Parallel Decoding",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Teng Wang, Ruimao Zhang, Zhichao Lu, Feng Zheng, Ran Cheng, Ping Luo",
            "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Wang_End-to-End_Dense_Video_Captioning_With_Parallel_Decoding_ICCV_2021_paper.html",
            "code": "https://github.com/ttengwang/PDVC",
            "img": "/src/assets/data/Research/publications/2021_video_caption.jpg"
        },
        {
            "title": "InstanceRefer: Cooperative Holistic Understanding for Visual Grounding on Point Clouds Through Instance Multi-Level Contextual Referring",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Zhihao Yuan, Xu Yan, Yinghong Liao, Ruimao Zhang, Sheng Wang, Zhen Li, Shuguang Cui",
            "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Yuan_InstanceRefer_Cooperative_Holistic_Understanding_for_Visual_Grounding_on_Point_Clouds_ICCV_2021_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2021_instancerefer.png"
        },
        {
            "title": "Fast and Accurate Lane Detection via Frequency Domain Learning",
            "book": "ACM Multimedia (ACMMM)",
            "author": "Yulin He, Wei Chen, Zhengfa Liang, Dan Chen, Yusong Tan, Xin Luo, Chen Li, Yulan Guo",
            "url": "https://dl.acm.org/doi/10.1145/3474085.3475267",
            "code": "https://github.com/harrylin-hyl/MSLD",
            "img": "/src/assets/data/Research/publications/he2021MSLD.jpg"
        },
        {
            "title": "SpinNet: Learning a General Surface Descriptor for 3D Point Cloud Registration",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Sheng Ao, Qingyong Hu, Bo Yang, Andrew Markham, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/html/Ao_SpinNet_Learning_a_General_Surface_Descriptor_for_3D_Point_Cloud_CVPR_2021_paper.html",
            "code": "https://github.com/QingyongHu/SpinNet",
            "img": "/src/assets/data/Research/publications/ao2021SpinNet.jpg"
        },
        {
            "title": "Exploring Sparsity in Image Super-Resolution for Efficient Inference",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Longguang Wang, Xiaoyu Dong, Yingqian Wang, Xinyi Ying, Zaiping Lin, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/html/Wang_Exploring_Sparsity_in_Image_Super-Resolution_for_Efficient_Inference_CVPR_2021_paper.html",
            "code": "https://github.com/LongguangWang/SMSR",
            "img": "/src/assets/data/Research/publications/wang2021SMSR.jpg"
        },
        {
            "title": "Unsupervised Degradation Representation Learning for Blind Super-Resolution",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Longguang Wang, Yingqian Wang, Xiaoyu Dong, Qingyu Xu, Jungang Yang, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/html/Wang_Unsupervised_Degradation_Representation_Learning_for_Blind_Super-Resolution_CVPR_2021_paper.html",
            "code": "https://github.com/LongguangWang/DASR",
            "img": "/src/assets/data/Research/publications/wang2021DASR.jpg"
        },
        {
            "title": "Bilateral Grid Learning for Stereo Matching Network",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Bin Xu, Yuhua Xu, Xiaoli Yang, Wei Jia, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/html/Xu_Bilateral_Grid_Learning_for_Stereo_Matching_Networks_CVPR_2021_paper.html",
            "code": "https://github.com/3DCVdeveloper/BGNet",
            "img": "/src/assets/data/Research/publications/xu2021BGNet.jpg"
        },
        // {
        //     "title": "PointLIE: Locally Invertible Embedding for Point Cloud Sampling And Recovery",
        //     "book": "International Joint Conferences on Artificial Intelligence (IJCAI)",
        //     "author": "Weibing Zhao, Xu Yan, Jiantao Gao, Ruimao Zhang, Jiayan Zhang, Zhen Li, Song Wu, Shuguang Cui",
        //     "url": "https://www.ijcai.org/proceedings/2021/186",
        //     "code": "",
        //     "img": "/src/assets/data/Research/publications/2021_pointLIE.png"
        // },
        {
            "title": "Parser-Free Virtual Try-On via Distilling Appearance Flows",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yuying Ge, Yibing Song, Ruimao Zhang, Congjian Ge, Wei Liu, Ping Luo",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/html/Ge_Parser-Free_Virtual_Try-On_via_Distilling_Appearance_Flows_CVPR_2021_paper.html",
            "code": "https://github.com/geyuying/PF-AFN",
            "img": "/src/assets/data/Research/publications/2021_PF_AFN.png"
        },
        // {
        //     "title": "Sparse Single Sweep LiDAR Point Cloud Segmentation via Learning Contextual Shape Priors from Scene Completion",
        //     "book": "AAAI Conference on Artificial Intelligence (AAAI)",
        //     "author": "Xu Yan, Jiantao Gao, Jie Li, Ruimao Zhang, Zhen Li, Rui Huang, Shuguang Cui",
        //     "url": "https://ojs.aaai.org/index.php/AAAI/article/view/16419",
        //     "code": "https://github.com/yanx27/JS3C-Net",
        //     "img": "/src/assets/data/Research/publications/2021_JS3CNet.png"
        // }
    ]
},
{
    "id": "pubbefore2020",
    "year": "2020及以前",
    "papers": [
        {
            "title": "3D Object Recognition in Cluttered Scenes with Local Surface Features: A Survey",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Yulan Guo, Mohammed Bennamoun, Ferdous Sohel, Min Lu, Jianwei Wan",
            "url": "https://ieeexplore.ieee.org/document/6787078",
            "code": "",
            "img": "/src/assets/data/Research/publications/guo2014survey.jpg"
        },
        {
            "title": "Switchable Normalization for Learning-to-Normalize Deep Representation",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Ping Luo, Ruimao Zhang, Jiamin Ren, Zhanglin Peng, Jingyu Li",
            "url": "https://ieeexplore.ieee.org/abstract/document/8781758",
            "code": "https://github.com/switchablenorms/Switchable-Normalization",
            "img": "/src/assets/data/Research/publications/2019_switch_norm.png"
        },
        {
            "title": "Hierarchical Scene Parsing by Weakly Supervised Learning with Image Descriptions",
            "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
            "author": "Ruimao Zhang, Liang Lin, Guangrun Wang, Meng Wang, Wangmeng Zuo",
            "url": "https://ieeexplore.ieee.org/abstract/document/8274992",
            "code": "",
            "img": "/src/assets/data/Research/publications/2019_hier_scene_parse.png"
        },
        {
            "title": "A Comprehensive Performance Evaluation of 3D Local Feature Descriptors",
            "book": "International Journal of Computer Vision (IJCV)",
            "author": "Yulan Guo, Mohammed Bennamoun, Ferdous Sohel, Min Lu, Jianwei Wan, Ngai Ming Kwok",
            "url": "https://link.springer.com/article/10.1007/s11263-015-0824-y",
            "code": "",
            "img": "/src/assets/data/Research/publications/guo2017evaluation.jpg"
        },
        {
            "title": "Rotational Projection Statistics for 3D Local Surface Description and Object Recognition",
            "book": "International Journal of Computer Vision (IJCV)",
            "author": "Yulan Guo, Ferdous Sohel, Mohammed Bennamoun, Min Lu, Jianwei Wan",
            "url": "https://link.springer.com/article/10.1007/s11263-013-0627-y",
            "code": "",
            "img": "/src/assets/data/Research/publications/guo2013rotational.jpg"
        },
        {
            "title": "Deep Video Super-Resolution using HR Optical Flow Estimation",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Longguang Wang, Yulan Guo, Li Liu, Zaiping Lin, Xinpu Deng, Wei An",
            "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8967249",
            "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/SOF-VSR",
            "img": "/src/assets/data/Research/publications/wang2020SOFVSR.jpg"
        },
        {
            "title": "Median Robust Extended Local Binary Pattern for Texture Classification",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Li Liu, Songyang Lao, Paul Fieguth, Yulan Guo, Xiaogang Wang, Matti Pietikainen",
            "url": "https://ieeexplore.ieee.org/document/7393828",
            "code": "",
            "img": "/src/assets/data/Research/publications/liu2016median.jpg"
        },
        {
            "title": "Bit-Scalable Deep Hashing With Regularized Similarity Learning for Image Retrieval And Person Re-Identification",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Ruimao Zhang, Liang Lin, Rui Zhang, Wangmeng Zuo, Lei Zhang",
            "url": "https://ieeexplore.ieee.org/abstract/document/7185403",
            "code": "",
            "img": "/src/assets/data/Research/publications/2015_bitscalable_hash.png"
        },
        {
            "title": "SCAN: Self-and-Collaborative Attention Network for Video Person Re-Identification",
            "book": "IEEE Transactions on Image Processing (TIP)",
            "author": "Ruimao Zhang, Jingyu Li, Hongbin Sun, Yuying Ge, Ping Luo, Xiaogang Wang, Liang Lin",
            "url": "https://ieeexplore.ieee.org/abstract/document/8703416",
            "code": "",
            "img": "/src/assets/data/Research/publications/2019_SCAN.png"
        },


        {
            "title": "RandLA-Net: Efficient Semantic Segmentation of Large-Scale Point Clouds",
            "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Qinyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",
            "url": "https://openaccess.thecvf.com/content_CVPR_2020/html/Hu_RandLA-Net_Efficient_Semantic_Segmentation_of_Large-Scale_Point_Clouds_CVPR_2020_paper.html",
            "code": "https://github.com/QingyongHu/RandLA-Net",
            "img": "/src/assets/data/Research/publications/hu2022RandLANet.jpg"
        },
        {
            "title": "Exemplar Normalization for Learning Deep Representation",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Ruimao Zhang, Zhanglin Peng, Lingyun Wu, Zhen Li, Ping Luo",
            "url": "https://openaccess.thecvf.com/content_CVPR_2020/html/Zhang_Exemplar_Normalization_for_Learning_Deep_Representation_CVPR_2020_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2020_exemplar_norm.png"
        },
        {
            "title": "Towards Photo-Realistic Virtual Try-On by Adaptively Generating-Preserving Image Content",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Han Yang, Ruimao Zhang, Xiaobao Guo, Wei Liu, Wangmeng Zuo, Ping Luo",
            "url": "https://openaccess.thecvf.com/content_CVPR_2020/html/Yang_Towards_Photo-Realistic_Virtual_Try-On_by_Adaptively_Generating-Preserving_Image_Content_CVPR_2020_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2020_virtual_tryon.png"
        },
        {
            "title": "DeepFashion2: A Versatile Benchmark for Detection, Pose Estimation, Segmentation and Re-Identification of Clothing Images",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Yuying Ge, Ruimao Zhang, Lingyun Wu, Xiaogang Wang, Xiaoou Tang, Ping Luo",
            "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Ge_DeepFashion2_A_Versatile_Benchmark_for_Detection_Pose_Estimation_Segmentation_and_CVPR_2019_paper.html",
            "code": "https://github.com/switchablenorms/DeepFashion2",
            "img": "/src/assets/data/Research/publications/2019_deepfashion2.png"
        },
        {
            "title": "Unsupervised Primitive Discovery for Improved 3D Generative Modeling",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Salman Khan, Yulan Guo, Munawar Hayat, Nick Barnes",
            "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Khan_Unsupervised_Primitive_Discovery_for_Improved_3D_Generative_Modeling_CVPR_2019_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/khan2019unsupervised.jpg"
        },
        {
            "title": "Learning Parallax Attention for Stereo Image Super-Resolution",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Longguang Wang, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An, Yulan Guo",
            "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Wang_Learning_Parallax_Attention_for_Stereo_Image_Super-Resolution_CVPR_2019_paper.html",
            "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/PASSRnet",
            "img": "/src/assets/data/Research/publications/wang2019PASSRnet.png"
        },
        {
            "title": "SSN: Learning Sparse Switchable Normalization via SparsestMax",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Wenqi Shao, Jingyu Li, Jiamin Ren, Ruimao Zhang, Xiaogang Wang, Ping Luo",
            "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Shao_SSN_Learning_Sparse_Switchable_Normalization_via_SparsestMax_CVPR_2019_paper.html",
            "code": "https://github.com/switchablenorms/Sparse_SwitchNorm",
            "img": "/src/assets/data/Research/publications/2019_ssn.png"
        },
        {
            "title": "Learning for Disparity Estimation through Feature Constancy",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Zhengfa Liang, Yiliu Feng, Yulan Guo, Hengzhu Liu, Wei Chen, Linbo Qiao, Li Zhou, Jianfeng Zhang",
            "url": "https://openaccess.thecvf.com/content_cvpr_2018/html/Liang_Learning_for_Disparity_CVPR_2018_paper.html",
            "code": "http://github.com/leonzfa/iResNet",
            "img": "/src/assets/data/Research/publications/liang2018iResNet.png"
        },
        {
            "title": "Deep Structured Scene Parsing by Learning With Image Descriptions",
            "book": "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
            "author": "Liang Lin, Guangrun Wang, Rui Zhang, Ruimao Zhang, Xiaodan Liang, Wangmeng Zuo",
            "url": "https://openaccess.thecvf.com/content_cvpr_2016/html/Lin_Deep_Structured_Scene_CVPR_2016_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2016_scene_parse.png"
        },
        {
            "title": "Ground-to-aerial Image Geo-localization with a Hard Exemplar Reweighting Triplet Loss",
            "book": "IEEE International Conference on Computer Vision (ICCV)",
            "author": "Sudong Cai, Yulan Guo, Salman Khan, Jiwei Hu, Gongjian Wen",
            "url": "https://openaccess.thecvf.com/content_ICCV_2019/html/Cai_Ground-to-Aerial_Image_Geo-Localization_With_a_Hard_Exemplar_Reweighting_Triplet_Loss_ICCV_2019_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/cai2019ground.jpg"
        },
        {
            "title": "Differentiable Learning-to-Group Channels via Groupable Convolutional Neural Networks",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Zhaoyang Zhang, Jingyu Li, Wenqi Shao, Zhanglin Peng, Ruimao Zhang, Xiaogang Wang, Ping Luo",
            "url": "https://openaccess.thecvf.com/content_ICCV_2019/html/Zhang_Differentiable_Learning-to-Group_Channels_via_Groupable_Convolutional_Neural_Networks_ICCV_2019_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2019_GroupNet_DGconv.png"
        },
        {
            "title": "Once a MAN: Towards Multi-Target Attack via Learning Multi-Target Adversarial Network Once",
            "book": "IEEE/CVF International Conference on Computer Vision (ICCV)",
            "author": "Jiangfan Han, Xiaoyi Dong, Ruimao Zhang, Dongdong Chen, Weiming Zhang, Nenghai Yu, Ping Luo, Xiaogang Wang",
            "url": "https://openaccess.thecvf.com/content_ICCV_2019/html/Han_Once_a_MAN_Towards_Multi-Target_Attack_via_Learning_Multi-Target_Adversarial_ICCV_2019_paper.html",
            "code": "",
            "img": "/src/assets/data/Research/publications/2019_once_a_man.png"
        },
        {
            "title": "ARPDR: An Accurate and Robust Pedestrian Dead Reckoning System for Indoor Localization on Handheld Smartphones",
            "book": "International Conference on Intelligent Robots and Systems (IROS)",
            "author": "Xiaoqiang Teng, Pengfei Xu, Deke Guo, Yulan Guo, Runbo Hu, Hua Chai",
            "url": "https://ieeexplore.ieee.org/document/9341684",
            "code": "",
            "img": "/src/assets/data/Research/publications/teng2020ARPDR.jpg"
        },




        {
            "title": "Differentiable Dynamic Normalization for Learning Deep Representation",
            "book": "International Conference on Machine Learning (ICML)",
            "author": "Ping Luo, Zhanglin Peng, Wenqi Shao, Ruimao Zhang, Jiamin Ren, Lingyun Wu",
            "url": "https://proceedings.mlr.press/v97/luo19a.html",
            "code": "https://github.com/switchablenorms",
            "img": "/src/assets/data/Research/publications/2019_Dynamic_Norm.png"
        },




        {
            "title": "Attentive Crowd Flow Machines",
            "book": "ACM Multimedia (ACMMM)",
            "author": "Lingbo Liu, Ruimao Zhang, Jiefeng Peng, Guanbin Li, Bowen Du, Liang Lin",
            "url": "https://dl.acm.org/doi/abs/10.1145/3240508.3240681",
            "code": "",
            "img": "/src/assets/data/Research/publications/2019_crowd_flow.png"
        },
        // {
        //     "title": "Geometric Scene Parsing with Hierarchical LSTM",
        //     "book": "International Joint Conferences on Artificial Intelligence (IJCAI)",
        //     "author": "Zhanglin Peng, Ruimao Zhang, Xiaodan Liang, Xiaobai Liu, Liang Lin",
        //     "url": "https://ijcai-16.org/index.php/welcome/view/accepted_papers/",
        //     "code": "",
        //     "img": "/src/assets/data/Research/publications/2016_geoscene_parse.png"
        // },


    ]
}
]