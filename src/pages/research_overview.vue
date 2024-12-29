<script setup lang="ts">

import ResearchArea from "~/components/ResearchAreaInfo.vue";
import { AreatableData } from '~/assets/data/Research/AreaInfo.ts';
</script>

<template>
  <el-aside position="fixed" style="height: 100%; margin-top: 0px; z-index: 1000">
    <el-anchor :offset="70" style="height: 100%; text-align: left; background-color: #ffffff;">
      <el-anchor-link
          v-for="area in AreatableData"
          :href="`#${area.id.toLowerCase().replace(/\s+/g, '-')}`"
      >
        <el-card class="shadow"><span class="link-text">{{ area.area }}</span></el-card>
      </el-anchor-link>
    </el-anchor>
  </el-aside>


  <el-main class="main">
    <el-row style="margin-top: 20px" :gutter="10">
        <el-card class="info_card" shadow="always">
          <el-col :span="24" v-for="area in AreatableData">
            <div :id="`${area.id.toLowerCase().replace(/\s+/g, '-')}`"><ResearchArea :researcharea="area" /></div>
          </el-col>
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