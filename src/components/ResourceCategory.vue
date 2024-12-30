<script setup lang="ts">
import { defineProps } from 'vue';
import ResourceItem from "~/components/ResourceItem.vue";

const props = defineProps({
  category: {
    type: Object,
    default: () => ({ title: '', data: [] })
  }
});

import { ref, onMounted, computed, watch } from 'vue';

const catRowDiv = ref<HTMLDivElement | null>(null);
const CardHeight = ref<number>(100);

// 计算高度的函数
const calculateHeight = () => {
  if (catRowDiv.value) {
    const width = catRowDiv.value.offsetWidth;
    return width * 0.125;
  }
  return CardHeight.value;
};

// 使用计算属性确保高度始终为数字类型
const computedHeight = computed(() => calculateHeight());

// 使用 watch 替代 onMounted
watch(computedHeight, (newHeight) => {
  CardHeight.value = newHeight;
}, { immediate: true }); // immediate 选项确保在挂载时立即执行
</script>

<template>
  <div class="resource-category">
    <div class="card-header">
      <div class="title_bar" />
      <span class="title_text">{{ category.title }}</span>
    </div>
    <div class="card-body" style="margin-top: 15px" ref="catRowDiv">
      <el-row :gutter="20">
        <el-col :span="6"  style="margin-bottom: 20px" v-for="resource in category.data">
          <ResourceItem
              :name="resource.name"
              :person="resource.person"
              :img="resource.img"
              :url="resource.url"
              :num="resource.num"
              :intro="resource.intro"
              :height="CardHeight"
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