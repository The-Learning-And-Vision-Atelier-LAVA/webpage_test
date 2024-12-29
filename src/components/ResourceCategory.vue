<script setup lang="ts">
import { defineProps } from 'vue';
import ResourceItem from "~/components/ResourceItem.vue";

const props = defineProps({
  category: Object
});
</script>

<template>
  <div class="resource-category">
    <div class="card-header">
      <div class="title_bar" />
      <span class="title_text">{{ category.title }}</span>
    </div>
    <div class="card-body" style="margin-top: 15px">
      <el-row :gutter="20">
        <el-col :span="6" style="margin-bottom: 20px" v-for="resource in category.data">
          <ResourceItem
              :name="resource.name"
              :person="resource.person"
              :img="resource.img"
              :url="resource.url"
              :num="resource.num"
              :intro="resource.intro"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.resource-category {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  //justify-content: space-between;
}

.title_bar {
  height: 38px;
  width: 8px;
  background-color: var(--ep-color-primary);
}

.title_text {
  font-size: 28px;
  margin-left: 8px;
}

.card-body {
  text-align: left;
  font-size: 20px;
  line-height: 150%;
}
</style>