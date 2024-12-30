<script setup lang="ts">
import {computed, defineProps, ref} from 'vue';

// 定义组件的属性
const props = defineProps({
  img: String,  //资源的图片，硬件就是外观图片，软件就是截图，数据集给出一组样例
  person: String,  //资源的联系人，想要使用、获取该资源，直接联系谁比较快
  name: String,  //资源的名字，硬件最好是 品牌+系列+型号，让人能一眼明白最主要参数，比如 “Amax RTXTitan4卡服务器”、“速腾RubyPlus 128线激光雷达”、”大疆M300RTK无人机“
  url: String,  //资源的链接，硬件给到官网该产品的页面或者指向产品说明文件下载页面，软件给到官网页面或者说明文档，数据集给到官方说明页面或者论文连接
  num: String,  //资源的数量，硬件给台数/个数，软件可以空置，数据集给出我们已经下载的数据集大小（如45GB）
  intro: String  //资源的介绍
});

const handleDownload = (url: any) => {
  window.open(url, '_blank')
}

// 构建基础路径
const basePath = ref(import.meta.env.VITE_BASE_PATH);

// 处理图片路径
const imgSrc = computed(() =>
    props.img
        ? props.img
        : `/${basePath.value}/resources/no_img.jpg`
);
</script>

<template>
  <el-card style="height: 100%" class="shadow">
    <el-row :gutter="2">
      <el-col :span="8">
        <div class="info-image">
          <img :src="imgSrc" width="100%" height="80%" style="object-fit: cover; max-height: 150px;" />
          <!--        <el-avatar shape="square" :size="100rem" fit="cover" :src="img" style="max-width: 150px;"/>-->
        </div>
      </el-col>
      <el-col :span="16">
        <div class="info-content">
          <p class="info-name">{{ name }}</p>
          <p class="info-person">{{ person }}</p>
          <p class="info-num">{{ num }}</p>
          <!--        <el-link class="info-url" :href="url">{{ url }}</el-link>-->
          <el-button
              size="small"
              class="more-btn"
              type="primary"
              plain
              :disabled="!url"
              @click="handleDownload(url)"
          >
            相关链接
          </el-button>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="info-intro">
          <span>{{ intro }}</span>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.info-image {
  //min-width: 150px; /* 根据需要调整图片大小 */
  //border-radius: 10px; /* 圆角边框 */
  //width: 45%;
  align-items: center;
}

.info-content {
  //min-width: 100px;
  //width: 55%;
}

.info-name {
  margin: 0;
  font-size: 1.0rem; /* 根据需要调整字体大小 */
  font-weight: bold;
  line-height: 100%;
}

.shadow {
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
}

.info-person {
  margin: 0;
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: #777; /* 根据需要调整颜色 */
  line-height: 125%;
}

.info-num {
  margin: 0;
  font-size: 0.8rem;
  color: #777; /* 根据需要调整颜色 */
  line-height: 125%;
}

.info-url {
  margin: 0.25rem 0;
  margin-right: 1rem;
  font-size: 0.8rem;
  color: #555; /* 根据需要调整颜色 */
  line-height: 100%;
}


.info-intro{
  margin-top: 5px;
  line-height: 125%;
  font-size: 0.8rem;
  text-indent: 1.6rem;
  margin-bottom: 0px;
}

.more-btn {
  margin: 0.2rem; /* 为按钮添加外边距 */
}
</style>