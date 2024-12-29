<script setup lang="ts">

import {ServertableData, HardwawretableData, SoftwawretableData, DatasettableData} from "~/assets/data/Resource/ResourceInfo";
import ResourceCategory from "~/components/ResourceCategory.vue";

const severCategory = { title: '计算资源', data: ServertableData };
const hardwareCategory = { title: '硬件资源', data: HardwawretableData };
const softwareCategory = { title: '软件资源', data: SoftwawretableData };
const datasetCategory = { title: '数据资源', data: DatasettableData };
</script>

<template>
  <el-aside position="fixed" style="height: 100%; margin-top: 0px; ">
    <el-anchor :offset="70" style="height: 100%; text-align: left; background-color: #ffffff;">
      <el-anchor-link href="#server"><el-card class="shadow"><span class="link-text">计算资源</span></el-card></el-anchor-link>
      <el-anchor-link href="#hardware"><el-card class="shadow"><span class="link-text">硬件资源</span></el-card></el-anchor-link>
      <el-anchor-link href="#software"><el-card class="shadow"><span class="link-text">软件资源</span></el-card></el-anchor-link>
      <el-anchor-link href="#dataset"><el-card class="shadow"><span class="link-text">数据资源</span></el-card></el-anchor-link>
    </el-anchor>
  </el-aside>

  <el-main class="main">
    <el-row style="margin-top: 20px" :gutter="10">
      <el-card class="info_card" shadow="always">
        <div id="server"><ResourceCategory :category="severCategory" /></div>
        <div id="hardware"><ResourceCategory :category="hardwareCategory" /></div>
        <div id="software"><ResourceCategory :category="softwareCategory" /></div>
        <div id="dataset"><ResourceCategory :category="datasetCategory" /></div>
      </el-card>
    </el-row>
  </el-main>
</template>

<style scoped>
.main {
  min-width: var(--main-min-valid-width);
  max-width: var(--main-max-width);
  width: var(--main-valid-width);
  margin-left: var(--main-side-left-width);
  margin-top: 0px;
}

.info_card {
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--ep-color-primary);
}

.link-text {
  font-size: 18px;
  text-align: left;
  //color: #ffffff;
  color: var(--ep-color-primary);
}

.shadow {
  width: 95%;
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
}
</style>