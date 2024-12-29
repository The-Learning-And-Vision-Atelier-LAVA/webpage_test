<script setup lang="ts">
import { defineProps, ref } from 'vue';

// 定义组件的属性
const props = defineProps({
  img: String,
  name: String,
  title: String,
  area: String,
  url: String,
  email: String,
});

const handleDownload = (url: any) => {
  if (url) {
    window.open(url, '_blank');
  }
}

const NohandleDownload = () => {}

//
// import { useClipboard } from "@vueuse/core";
//
// const { copy, isSupported } = useClipboard();
//
// // 定义一个 ref 来存储需要复制的文本内容
// const copyContent = ref(props.email);
//
// const handleCopy = () => {
//   // 检查当前浏览器是否支持 Clipboard API
//   if (!isSupported) {
//     window.$message.error("您的浏览器不支持Clipboard API");
//     return;
//   }
//
//   // 调用 copy 方法将目标文本复制到剪贴板
//   copy(copyContent.value);
//
//   // 提示用户复制成功并展示被复制的内容
//   window.$message.success(`复制成功：${copyContent.value}`);
// };
</script>

<template>
<!--  <div class="info-card">-->
<!--&lt;!&ndash;    <img :src="img" :alt="name" class="info-image" />&ndash;&gt;-->
<!--    <div class="info-image">-->
<!--&lt;!&ndash;      <el-avatar shape="square" :size="150" fit="cover" :src="img" />&ndash;&gt;-->
<!--&lt;!&ndash;      <el-image shape="square" :size="150" fit="cover" :src="img" />&ndash;&gt;-->
<!--      <img :src="img" width="100px" height="150px" style="object-fit: contain"/>-->
<!--    </div>-->

<!--    <div class="info-content">-->
<!--      <p class="info-name">{{ name }}</p>-->
<!--      <p class="info-title">{{ title }}</p>-->
<!--      <p class="info-area">{{ area }}</p>-->
<!--    </div>-->
<!--  </div>-->

  <el-card
      :class="{'shadow': url}"
      style="height: 100%;
      background-color: #ffffff"
      @click="handleDownload(url)"
      :shadow="url ? 'hover' : 'never'"
  >
    <el-row :gutter="10">
      <el-col :span="10">
        <div class="info-image">
<!--          <img :src="img" width="100%" height="auto" style="object-fit: contain; max-height: 200px;" />-->
          <img :src="img || '/src/assets/data/Team/avatars/no_img.png'" width="100%" height="auto" style="object-fit: contain; max-height: 200px;" />
          <!--        <el-avatar shape="circle" :size="150" fit="cover" :src="img" style="max-width: 150px;"/>-->
        </div>
      </el-col>
      <el-col :span="14">
        <div class="info-content">
          <el-row :gutter="10">
            <p class="info-name">{{ name }}</p>
          </el-row>
          <p class="info-title">{{ title }}</p>
          <p class="info-area" style="white-space: pre-line;">{{ area }}</p>
          <!--          <p class="info-email">{{ email }}</p>-->

        </div>
      </el-col>
<!--      <el-col :span="14">-->
<!--        <div class="info-content">-->
<!--          <p class="info-name">{{ name }}</p>-->
<!--          <p class="info-title">{{ title }}</p>-->
<!--          <p class="info-area" style="white-space: pre-line;">{{ area }}</p>-->
<!--&lt;!&ndash;          <p class="info-email">{{ email }}</p>&ndash;&gt;-->

<!--        </div>-->
<!--      </el-col>-->
    </el-row>
    <el-row>
      <el-card class="info-email" shadow="never" style="height: 30px; width: 100%;" @click.stop="NohandleDownload" ><p style="margin-top: -5px;">{{ email }}</p></el-card>
    </el-row>
  </el-card>
</template>

<style scoped>
.info-card {
  display: flex;
  align-items: start; /* 确保内容在顶部对齐 */
  gap: 10px; /* 元素之间的间距 */
}

.shadow:hover {
  box-shadow: 0.5rem 0.5rem 0.75rem rgba(189, 35, 46, 0.3);
}

.info-image {
  //min-width: 150px; /* 根据需要调整图片大小 */
  //border-radius: 10px; /* 圆角边框 */
  //width: 45%;
}

.info-content {
  //min-width: 100px;
  //width: 55%;
}

.info-name {
  margin: 0;
  font-size: 1.5rem; /* 根据需要调整字体大小 */
  font-weight: bold;
}

.info-title {
  margin: 0.25rem 0;
  font-size: 1rem;
  color: #555; /* 根据需要调整颜色 */
}

.info-area {
  margin: 0;
  font-size: 0.9rem;
  color: #777; /* 根据需要调整颜色 */
  line-height: 125%;
}

.info-email {
  width: 80%;
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
  color: #777; /* 根据需要调整颜色 */
  line-height: 0%;
}
</style>