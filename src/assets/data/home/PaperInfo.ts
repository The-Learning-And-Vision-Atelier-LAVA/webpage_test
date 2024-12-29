export interface Paper {
    title: string
    author: string
    book: string
    url: string
    code: string
}

export const PapertableData: Paper[] =  [
    {
        title: 'You Only Train Once: Learning General and Distinctive 3D Local Descriptors',
        book: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2022, 45(3): 3949-3967.',
        author: 'Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen',
        url: 'https://ieeexplore.ieee.org/document/9792207',
        code: 'https://github.com/QingyongHu/SpinNet',
    },
    {
        title: 'Parallax Attention for Unsupervised Stereo Correspondence Learning',
        book: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 44(4): 2108-2125.',
        author: 'Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An',
        url: 'https://ieeexplore.ieee.org/document/9206116',
        code: 'https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM',
    },
    {
        title: 'Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling',
        book: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021, 44(11): 8338-8354.',
        author: 'Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham',
        url: 'https://ieeexplore.ieee.org/document/9440696',
        code: 'https://github.com/QingyongHu/RandLA-Net',
    },
    {
        title: 'Deep Learning for 3D Point Clouds: A Survey. IEEE Transactions on Pattern Analysis and Machine Intelligence',
        book: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2020, 43(12): 4338-4364.',
        author: 'Yulan Guo, Hanyun Wang, Qingyong Hu, Hao Liu, Li Liu, Mohammed Bennamoun',
        url: 'https://ieeexplore.ieee.org/document/9127813',
        code: 'https://github.com/QingyongHu/SoTA-Point-Cloud',
    },
    {
        title: 'Stereo Matching Using Multi-level Cost Volume and Multi-scale Feature Constancy',
        book: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2019, 43(1): 300-315.',
        author: 'Zhengfa Liang, Yulan Guo, Yiliu Feng, Wei Chen, Linbo Qiao, Li Zhou, Jianfeng Zhang, Hengzhu Liu',
        url: 'https://ieeexplore.ieee.org/document/8765737',
        code: 'https://github.com/leonzfa/iResNet',
    },
]