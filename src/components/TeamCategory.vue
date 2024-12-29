<template>
  <div class="team-category">
    <div class="card-header">
      <div class="title_bar" />
      <span class="title_text">{{ category.title }}</span>
    </div>
    <div class="card-body" style="margin-top: 15px">
      <el-row :gutter="20">
        <el-col :span="8" style="margin-bottom: 20px" v-for="person in category.data">
          <AvatarInfo
              :img="person.img"
              :name="person.name"
              :title="person.title"
              :area="person.area"
              :url="person.url"
              :email="person.email"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import AvatarInfo from '~/components/AvatarInfo.vue';

const props = defineProps({
  category: {
    type: Object,
    default: () => ({title: '', data: []}),
  }
});
</script>

<style scoped>
.team-category {
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