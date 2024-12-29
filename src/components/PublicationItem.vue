<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  pubyear: {
    type: Object,
    default: () => ({ year: '', papers: [] })
  }
});

const handleDownload = (url: any) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="card-header">
    <div class="title_bar" />
    <span class="title_text">{{ pubyear.year }}</span>
  </div>

  <div class="card-body" style="margin-top: 15px">

      <el-row v-for="paper in pubyear.papers" style="margin-top: 15px">
        <el-card style="width: 100%" shadow="always" class="shadow">
          <el-row :gutter="20">
            <el-col :span="6">
              <img :src="require(paper.img)" width="100%" height="150px" style="object-fit: contain"/>
            </el-col>

            <el-col :span="18" style="line-height: 125%">
              <span class="paper-title-style">{{ paper.title }}</span><br/>
              <span class="paper-author-style">{{ paper.author }}</span><br/>
              <span class="paper-book-style">{{ paper.book }}</span><br/>
              <br/>
              <span>
                  <el-button
                      size="default"
                      class="more-btn"
                      type="primary"
                      plain
                      :disabled="!paper.url"
                      @click="handleDownload(paper.url)"
                  >
                    paper
                  </el-button>
                  <el-button
                      size="default"
                      class="more-btn"
                      type="info"
                      plain
                      :disabled="!paper.code"
                      @click="handleDownload(paper.code)"
                  >
                    code
                  </el-button>
                </span>
            </el-col>
          </el-row>
        </el-card>
      </el-row>

  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  margin-top: 15px;
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

.shadow {
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
}

.card-body {
  text-align: left;
  font-size: 20px;
  line-height: 150%;
}

.paper-title-style {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Microsoft YaHei', '黑体', sans-serif;
}

.paper-author-style {
  font-size: 14px;
  color: gray;
  font-style: italic;
  line-height: 100%;
}

.paper-book-style {
  font-size: 14px;
}

.more-btn {
  margin-right: 8px; /* 为按钮添加右侧外边距 */
  margin-bottom: 8px; /* 为按钮添加底部外边距 */
}
</style>