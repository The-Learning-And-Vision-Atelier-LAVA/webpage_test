// export const Bannerimages = [
//     { url: "/src/assets/home_carousel/1.jpg", text: "中山大学深圳校区激光SLAM建图结果" },
//     { url: "/src/assets/home_carousel/2.jpg", text: "左：高灵活度桌面抓取机器人\n右：野外智能抓取机器人" },
//     { url: "/src/assets/home_carousel/3.jpg", text: "大场景高精度建图的移动激光扫描车" },
//     // 可以根据需要添加更多的图片数据
// ];

import { reactive } from 'vue';

// 定义一个接口来描述轮播图对象的结构
interface CarouselItem {
    url: string;
    text: string;
}

// 使用 reactive 创建一个响应式的 CarouselItem 数组
export const Bannerimages = reactive<CarouselItem[]>([
    { url: "assets/home_carousel/1.jpg", text: "中山大学深圳校区激光SLAM建图结果" },
    { url: "assets/home_carousel/2.jpg", text: "左：高灵活度桌面抓取机器人\n右：野外智能抓取机器人" },
    { url: "assets/home_carousel/3.jpg", text: "大场景高精度建图的移动激光扫描车" },
    // 可以根据需要添加更多的图片数据
]);