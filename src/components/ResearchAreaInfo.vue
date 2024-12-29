<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  researcharea: {
    type: Object,
    default: () => ({ area: '', img: '', intro: '', papers: [] })
  }
});


const handleDownload = (url: any) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="card-header">
    <div class="title_bar" />
    <span class="title_text">{{ researcharea.area }}</span>
  </div>

  <div class="card-body" style="margin-top: 15px">
    <el-row :gutter="20">
      <el-col :span="6" style="margin-bottom: 20px">
<!--        <el-image style="width: 100%;" :fit="cover" :src="researcharea.img" />-->
        <img :src="researcharea.img" width="100%" height="150px" style="object-fit: contain"/>
      </el-col>
      <el-col :span="18" style="margin-bottom: 20px; text-align: justify;">
        <span>{{ researcharea.intro }}</span>
      </el-col>
    </el-row>

    <el-row>
      <span>代表性成果</span>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-table
            style="width: auto; margin-bottom: 30px;"
            :data="researcharea.papers"
            :show-header="false"
        >
          <el-table-column label="论文信息" min-width="85">
            <template #default="scope">
              <div>
                <span class="paper-title-style">{{ scope.row.title }}</span><br>
                <span class="paper-author-style">{{ scope.row.author }}</span><br>
                <span class="paper-book-style">{{ scope.row.book }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="论文链接" min-width="15">
            <template #default="scope">
              <div>
                <el-button
                    size="default"
                    class="more-btn"
                    type="primary"
                    plain
                    :disabled="!scope.row.url"
                    @click="handleDownload(scope.row.url)"
                >
                  paper
                </el-button>
                <br/>
                <el-button
                    size="default"
                    class="more-btn"
                    type="info"
                    plain
                    :disabled="!scope.row.code"
                    @click="handleDownload(scope.row.code)"
                >
                  code
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
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

.paper-title-style {
  font-size: 18px;
  font-weight: bold;
  font-family: 'Microsoft YaHei', '黑体', sans-serif;
}

.paper-author-style {
  font-size: 15px;
  color: gray;
  font-style: italic;
}

.paper-book-style {
  font-size: 15px;
}

.more-btn {
  margin-right: 8px; /* 为按钮添加右侧外边距 */
  margin-bottom: 8px; /* 为按钮添加底部外边距 */
}
</style>