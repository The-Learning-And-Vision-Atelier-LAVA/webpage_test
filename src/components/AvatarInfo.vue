<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';

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

// 构建基础路径
const basePath = ref(import.meta.env.VITE_BASE_PATH);

// 处理图片路径
const imgSrc = computed(() =>
    props.img
        ? props.img
        : `/${basePath.value}/avatars/no_img.png`
);

</script>

<template>

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
          <img :src="imgSrc" width="100%" height="auto" style="object-fit: contain; max-height: 200px;" />
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
}

.info-content {
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