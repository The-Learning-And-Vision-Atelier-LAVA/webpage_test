export interface Person {
    name: string
    title: string
    img: string
    area: string
    url: string
    email: string
}

//仅在teaminfo的area项支持\n表示换行
export const FacultytableData: Person[] =  [
    {
        name: '郭裕兰',
        title: '教授',
        img: '/src/assets/data/Team/avatars/GuoYulan.jpeg',
        area: ' 三维视觉与机器人\n\n获中国计算机学会自然科学一等奖',
        url: 'https://www.yulanguo.cn/',
        email: 'guoyulan@sysu.edu.cn',
    },
    {
        name: '黄小红',
        title: '副教授',
        img: '',
        area: '图像处理与识别\n\n获国家科技进步二等奖',
        url: '',
        email: 'huangxh75@mail.sysu.edu.cn',
    },
    {
        name: '张鹏',
        title: '副教授',
        img: '/src/assets/data/Team/avatars/ZhangPeng.jpeg',
        area: '高分辨率对地观测\n\n获省部级科技进步三等奖2次',
        url: '',
        email: 'zhangpeng5@mail.sysu.edu.cn',
    },
    {
        name: '高庆',
        title: '副教授',
        img: '/src/assets/data/Team/avatars/GaoQing.png',
        area: '机器人具身智能\n\n入选深圳市海外高层次人才',
        url: 'https://jimmyqing.github.io/',
        email: 'gaoqing2@mail.sysu.edu.cn',
    },
    {
        name: '张瑞茂',
        title: '副教授',
        img: '/src/assets/data/Team/avatars/ZhangRuimao.jpg',
        area: '机器人具身智能\n\n入选深圳市海外高层次人才',
        url: 'http://zhangruimao.site/#',
        email: 'zhangrm27@mail.sysu.edu.cn',
    },
    {
        name: '张晔',
        title: '博士后',
        img: '/src/assets/data/Team/avatars/Zhangye.jpg',
        area: '时序信号处理\n\n获高分图像解译软件大赛冠军',
        url: 'https://github.com/crocodilegogogo',
        email: 'zhangy2658@mail.sysu.edu.cn ',
    },
    {
        name: '王龙光',
        title: '博士后',
        img: '/src/assets/data/Team/avatars/WangLongguang.png',
        area: '底层视觉与加速\n\n入选中国科协青年人才托举工程',
        url: 'https://longguangwang.github.io/',
        email: 'wanglg9@mail.sysu.edu.cn',
    },
]

export const StafftableData: Person[] =  [
    {
        name: '管玮珺',
        title: '科研助理',
        img: '/src/assets/data/Team/avatars/ra_GuanWeijun.jpg',
        area: '工程项目落地',
        url: '',
        email: 'guanwj25@mail.sysu.edu.cn',
    },
    {
        name: '廖小剑',
        title: '科研助理',
        img: '/src/assets/data/Team/avatars/ra_LiaoXiaojian.png',
        area: '行政助理',
        url: '',
        email: 'liaoxj7@mail.sysu.edu.cn',
    },
]

export const GraduatetableData: Person[] =  [
//博士生
    {
        name: '高平海',
        title: '',
        img: '/src/assets/data/Team/avatars/r2020_GaoPinghai.jpg',
        area: '事件相机成像',
        url: '',
        email: 'gaoph@mail2.sysu.edu.cn',
    },

    {
        name: '马燕妮',
        title: '',
        img: '/src/assets/data/Team/avatars/r2020_MaYanni.jpg',
        area: '点云场景理解',
        url: '',
        email: 'mayn3@mail2.sysu.edu.cn',
    },

    {
        name: '陈铭林',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_ChenMinglin.jpg',
        area: '三维重建与生成',
        url: '',
        email: 'chenmlin8@mail2.sysu.edu.cn',
    },

    {
        name: '李坤洪',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_LiKunhong.jpg',
        area: '视觉三维重建',
        url: '',
        email: 'likh25@mail2.sysu.edu.cn',
    },

    {
        name: '刘砚',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_LiuYan.jpg',
        area: '三维感知',
        url: '',
        email: 'liuy2297@mail2.sysu.edu.cn',
    },

    {
        name: '王宇坤',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_WangYukun.jpg',
        area: '新视角合成、视频生成和编辑',
        url: '',
        email: 'wangyk59@mail2.sysu.edu.cn',
    },

    {
        name: '李浩然',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_LiHaoran.jpg',
        area: '点云压缩',
        url: '',
        email: 'lihr67@mail2.sysu.edu.cn',
    },

    {
        name: '裴昀',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_PeiYun.jpg',
        area: '三维感知、具身智能',
        url: '',
        email: 'peiy8@mail2.sysu.edu.cn',
    },

    {
        name: '宋卓',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_SongZhuo.jpg',
        area: '视觉重定位',
        url: '',
        email: 'songzh28@mail2.sysu.edu.cn',
    },

    {
        name: '叶培根',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_YePeigen.jpg',
        area: '语义通信',
        url: '',
        email: 'yepg@mai2.sysu.edu.cn',
    },

    {
        name: '姜润青',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_JiangRunqing.jpg',
        area: '模型压缩',
        url: '',
        email: 'jiangrq3@mail2.sysu.edu.cn',
    },

    {
        name: '郁鹏鹏',
        title: '遥感图像与点云压缩',
        img: '/src/assets/data/Team/avatars/r2023_YuPengpeng.png',
        area: '',
        url: '',
        email: 'yupp5@mail2.sysu.edu.cn',
    },

    {
        name: '张勇健',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_ZhangYongjian.jpg',
        area: '三维重建、视觉语言导航',
        url: '',
        email: 'zhangyj85@mail2.sysu.edu.cn',
    },


    {
        name: '陈毅军',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_ChenYijun.jpg',
        area: '具身智能',
        url: '',
        email: 'huqb@mail2.sysu.edu.cn',
    },

    {
        name: '胡启滨',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_HuQibin.jpg',
        area: '具身智能',
        url: '',
        email: 'huqb@mail2.sysu.edu.cn',
    },

    {
        name: '杨荣坤',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_YangRongkun.jpg',
        area: '场景理解',
        url: '',
        email: 'yangrk6@mail2.sysu.edu.cn',
    },

    {
        name: '张逸',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_ZhangYi.jpg',
        area: '具身智能',
        url: '',
        email: 'zhangy2785@mail2.sysu.edu.cn',
    },

    {
        name: '汪怡',
        title: '',
        img: '/src/assets/data/Team/avatars/r2025_WangYi.jpg',
        area: '具身智能',
        url: '',
        email: 'wangy2356@mail2.sysu.edu.cn',
    },

//硕士
    //2021
    {
        name: '张乐盈',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_ZhangLeying.jpg',
        area: '点云语义分割',
        url: '',
        email: 'zhangly75@mail2.sysu.edu.cn',
    },

    //2022
    {
        name: '古芷璇',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_GuZhixuan.jpg',
        area: '点云重定位',
        url: '',
        email: 'guzhx3@mail2.sysu.edu.cn',
    },

    {
        name: '胡菁',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_HuJing.png',
        area: '视频手语识别',
        url: '',
        email: 'hujing53@mail2.sysu.edu.cn',
    },

    {
        name: '黄煜幸',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_HuangYuxing.jpg',
        area: '遥感图像变化检测',
        url: '',
        email: 'huangyx227@mail2.sysu.edu.cn',
    },

    {
        name: '刘雪帆',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_LiuXuefan.jpg',
        area: '点云场景理解',
        url: '',
        email: 'liuxf83@mail2.sysu.edu.cn',
    },

    {
        name: '覃洋',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_QinYang.jpg',
        area: 'SAR图像三维重建',
        url: '',
        email: 'qiny76@mail2.sysu.edu.cn',
    },

    {
        name: '许伟博',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_XuWeibo.jpg',
        area: 'SAR图像解译',
        url: '',
        email: 'xuwb7@mail2.sysu.edu.cn',
    },

    {
        name: '赵健羽',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_ZhaoJianyu.jpg',
        area: '不确定性估计',
        url: '',
        email: 'zhaojy59@mail2.sysu.edu.cn',
    },

    {
        name: '周佐运',
        title: '',
        img: '/src/assets/data/Team/avatars/r2022_ZhouZuoyun.jpg',
        area: '多视图立体匹配',
        url: '',
        email: 'zhouzy73@mail2.sysu.edu.cn',
    },

    //2023
    {
        name: '刘洪达',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_LiuHongda.jpg',
        area: '图像超分辨率',
        url: '',
        email: 'liuhd36@mail2.sysu.edu.cn',
    },

    {
        name: '刘文昊',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_LiuWenhao.jpg',
        area: '动态数据剪枝',
        url: '',
        email: 'liuwh26@mail2.sysu.edu.cn',
    },

    {
        name: '唐书衡',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_TangShuheng.jpg',
        area: '深度伪造检测',
        url: '',
        email: 'tangshh6@mail2.sysu.edu.cn',
    },

    {
        name: '吴波鸿',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_WuBohong.jpg',
        area: '人物交互识别',
        url: '',
        email: 'wubh6@mail2.sysu.edu.cn',
    },

    {
        name: '徐业兴',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_XuYexing.jpg',
        area: '新视角合成',
        url: '',
        email: 'xuyx55@mail2.sysu.edu.cn',
    },

    {
        name: '张明宇',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_ZhangMingyu.jpg',
        area: '姿态估计',
        url: '',
        email: 'zhangmy239@mail2.sysu.edu.cn',
    },

    {
        name: '张绪鑫',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_ZhangXuxin.jpg',
        area: '图像匹配',
        url: '',
        email: 'zhangxx237@mail2.sysu.edu.cn',
    },

    {
        name: '张艺欣',
        title: '',
        img: '/src/assets/data/Team/avatars/r2023_ZhangYixin.jpg',
        area: '点云重定位',
        url: '',
        email: 'zhangyx563@mail2.sysu.edu.cn',
    },

    {
        name: '成先锋',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_ChengXianfeng.jpg',
        area: '人形机器人动作和技巧迁移',
        url: '',
        email: 'chengxf6@mail2.sysu.edu.cn',
    },

    {
        name: '方佳俊',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_FangJiajun.png',
        area: 'SAR目标态势估计',
        url: '',
        email: 'fangjj8@mail2.sysu.edu.cn',
    },

    {
        name: '赖缘川',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_LaiYuanchuan.jpg',
        area: '运动重定向',
        url: '',
        email: 'laiych25@mail2.sysu.edu.cn',
    },

    {
        name: '李长军',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_LiChangjun.jpg',
        area: '',
        url: '',
        email: '',
    },

    {
        name: '廖宣淇',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_LiaoXuanqi.jpg',
        area: '具身抓取',
        url: '',
        email: 'liaoxq7@mail2.sysu.edu.cn',
    },

    {
        name: '黎逸雄',
        title: '',
        img: '/src/assets/data/Team/avatars/r2024_LiYixiong.jpg',
        area: '具身智能',
        url: '',
        email: 'liyx357@mail2.sysu.edu.cn',
    },
]

export const BachelortableData: Person[] =  [
    {
        name: '钟柠泽',
        title: '',
        img: '/src/assets/data/Team/avatars/r2021_ZhongNingze.jpg',
        area: '三维重建、具身智能',
        url: '',
        email: 'zhongnz@mail2.sysu.edu.cn',
    },
]

export const AlumnitableData: Person[] =  [
    {
        //博士
        name: '敖晟',
        title: '2024届 博士',
        img: '/src/assets/data/Team/avatars/g2024_AoSheng.jpg',
        area: '',
        url: '',
        email: '',
    },
    {
        name: '刘浩',
        title: '2023届 博士',
        img: '/src/assets/data/Team/avatars/g2023_LiuHao.jpg',
        area: '南洋理工大学博士后',
        url: '',
        email: '',
    },

    {
        name: '武光辉',
        title: '2023届 博士',
        img: '/src/assets/data/Team/avatars/g2023_WuGuanghui.jpg',
        area: '小米上海',
        url: '',
        email: '',
    },
    // 2024届硕士
    {
        name: '陈佳慧',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_ChenJiahui.jpg',
        area: 'idea研究院',
        url: '',
        email: '',
    },
    {
        name: '陈思宇',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_ChenSiyu.jpg',
        area: '荣耀终端有限公司',
        url: '',
        email: '',
    },
    {
        name: '陈挺',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_ChenTing.jpg',
        area: 'TP-Link联洲国际技术有限公司',
        url: '',
        email: '',
    },
    {
        name: '陈梓浩',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_ChenZihao.jpg',
        area: '中信银行信用卡中心',
        url: '',
        email: '',
    },

    {
        name: '赖鹤丰',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_LaiHefeng.jpg',
        area: '华为',
        url: '',
        email: '',
    },


    {
        name: '林增荣',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_LinZengrong.jpg',
        area: '上海理想汽车科技公司',
        url: '',
        email: '',
    },

    {
        name: '刘文硕',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_LiuWenshuo.jpg',
        area: '广州公务员',
        url: '',
        email: '',
    },

    {
        name: '卢铭轩',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_LuMingxuan.jpg',
        area: '腾讯',
        url: '',
        email: '',
    },

    {
        name: '王逸舟',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_WangYizhou.jpg',
        area: '百度',
        url: '',
        email: '',
    },

    {
        name: '肖强',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_XiaoQiang.jpg',
        area: '腾讯（深圳）科技有限公司',
        url: '',
        email: '',
    },

    {
        name: '周晓锋',
        title: '2024届 硕士',
        img: '/src/assets/data/Team/avatars/g2024_ZhouXiaofeng.png',
        area: '南方电网',
        url: '',
        email: '',
    },

    //2023届硕士
    {
        name: '方广驰',
        title: '2023届 硕士',
        img: '/src/assets/data/Team/avatars/g2023_FangGuangchi.jpg',
        area: '香港理工大学读博',
        url: '',
        email: '',
    },
    {
        name: '林思哲',
        title: '2023届 硕士',
        img: '/src/assets/data/Team/avatars/g2023_LinSizhe.jpg',
        area: '罗湖区街道办事处',
        url: '',
        email: '',
    },
    {
        name: '万骏辉',
        title: '2023届 硕士',
        img: '/src/assets/data/Team/avatars/g2023_WanJunhui.jpg',
        area: '商汤科技',
        url: '',
        email: '',
    },
    {
        name: '汪赟',
        title: '2023届 硕士',
        img: '/src/assets/data/Team/avatars/g2023_WangYun.jpg',
        area: '香港城市大学读博',
        url: '',
        email: '',
    },
    {
        name: '危义民',
        title: '2023届 硕士',
        img: '/src/assets/data/Team/avatars/g2023_WeiYimin.jpg',
        area: '日本东京大学读博',
        url: '',
        email: '',
    },
    //2022届硕士
    {
        name: '杜沛峰',
        title: '2022届 硕士',
        img: '/src/assets/data/Team/avatars/g2022_DuPeifeng.jpg',
        area: '华为海思',
        url: '',
        email: '',
    },
    {
        name: '杜荣',
        title: '2022届 硕士',
        img: '/src/assets/data/Team/avatars/g2022_DuRong.jpg',
        area: '华为',
        url: '',
        email: '',
    },
    {
        name: '柯晴天',
        title: '2022届 硕士',
        img: '/src/assets/data/Team/avatars/g2022_KeQingtian.jpg',
        area: '华为',
        url: '',
        email: '',
    },
    {
        name: '李明武',
        title: '2022届 硕士',
        img: '/src/assets/data/Team/avatars/g2022_LiMingwu.jpg',
        area: '深圳市前海管理局',
        url: '',
        email: '',
    },
    {
        name: '李一帆',
        title: '2022届 硕士',
        img: '/src/assets/data/Team/avatars/g2022_LiYifan.png',
        area: '米兰理工大学读博',
        url: '',
        email: '',
    },
    //2021届硕士
    {
        name: '陈鸿翔',
        title: '2021届 硕士',
        img: '/src/assets/data/Team/avatars/g2021_ChenHongxiang.jpg',
        area: '海南省科技厅',
        url: '',
        email: '',
    },
    {
        name: '郭伟健',
        title: '2021届 硕士',
        img: '/src/assets/data/Team/avatars/g2021_GuoWeijian.jpg',
        area: '网易互娱',
        url: '',
        email: '',
    },
    {
        name: '李坤洪',
        title: '2021届 硕士',
        img: '/src/assets/data/Team/avatars/g2021_LiKunhong.jpg',
        area: '中大读博',
        url: '',
        email: '',
    },
    //2020届硕士
    {
        name: '洪思宇',
        title: '2020届 硕士',
        img: '', //'/src/assets/data/Team/avatars/g2020_HongSiyu.jpg',
        area: '华为2012实验室',
        url: '',
        email: '',
    },
    {
        name: '马燕妮',
        title: '2020届 硕士',
        img: '/src/assets/data/Team/avatars/g2020_MaYanni.jpg',
        area: '中大读博',
        url: '',
        email: '',
    },
    {
        name: '张永聪',
        title: '2020届 硕士',
        img: '/src/assets/data/Team/avatars/g2020_ZhangYongcong.jpg',
        area: '华为2012实验室',
        url: '',
        email: '',
    },
]

export const VisitingtableData: Person[] =  [
    {
        name: '符智恒',
        title: '2018.12-2022.03',
        img: '/src/assets/data/Team/avatars/visiting_FuZhiheng.jpg',
        area: '西澳大学',
        url: '',
        email: '',
    },
    {
        name: '胡庆拥',
        title: '2020.09-2022.01',
        img: '/src/assets/data/Team/avatars/visiting_HuQingyong.jpg',
        area: '牛津大学',
        url: '',
        email: '',
    },
    {
        name: '刘胜利',
        title: '2020.09-2022.04',
        img: '',
        area: '空军工程大学',
        url: '',
        email: '',
    },
    {
        name: '王梓',
        title: '2021.05-2022.05',
        img: '/src/assets/data/Team/avatars/visiting_WangZi.jpg',
        area: '国防科技大学',
        url: 'https://scholar.google.com/citations?hl=zh-CN&user=iTBXvaIAAAAJ',
        email: '',
    },
    {
        name: '党吉圣',
        title: '2023.07-2024.03',
        img: '/src/assets/data/Team/avatars/visiting_DangJisheng.jpg',
        area: '中山大学',
        url: '',
        email: '',
    },
]