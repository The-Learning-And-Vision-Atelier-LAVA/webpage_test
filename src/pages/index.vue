<template>

  <Banner />

  <div class="main">
    <el-row style="margin-top: 20px" :gutter="10">
      <el-col :span="24">
        <el-card class="info_card" shadow="always">
          <template #header>
            <div class="card-header">
              <div class="title_bar" />
              <span class="title_text">实验室简介 Introduction</span>
            </div>
          </template>
          <div class="card-body" style="text-align: justify">
            <p>
              中山大学空间智能实验室（Spatial Artificial Intelligence Lab，SAIL）专注于三维空间感知、理解与生成基础理论与核心算法研究，及其在机器人等应用领域的关键技术研发。SAIL实验室隶属于中山大学电子与通信工程学院，坐落于深圳光明，是广东省先进智能感知技术重点实验室、广东省低空安全探测技术工程中心的核心组成团队。实验室共有教授1名，副教授4名，专职科研人员3名，博硕士研究生40余名。 实验室围绕深度估计与重建、图像视频超分辨、点云配准与制图、点云理解与压缩、三维内容生成、具身智能与机器人等方向开展研究， 主持国家自然科学基金联合重点/面上/青年项目、部委基金/预研项目等多项，发表学术论文200余篇（其中CCF A类论文100余篇）， 与航天科技集团、航空工业集团、华为、阿里巴巴、腾讯、大疆、三一重工等单位保持良好合作。团队成员获国家科技进步奖二等奖、 中国计算机学会自然科学一等奖、吴文俊人工智能优秀青年奖等奖励多项。
            </p>
          </div>
        </el-card>
      </el-col>


    </el-row>
    <el-row style="margin-top: 20px" :gutter="10">
      <el-col :span="12">
        <el-card class="info_card" shadow="always">
          <template #header>
            <div class="card-header">
              <div class="title_bar" />
              <span class="title_text">近期动态 Recent Events</span>
              <el-button size="small" class="more-btn"><el-link href="/events">更多 more</el-link></el-button>
            </div>
          </template>
          <div>
            <el-table
                style="width: auto"
                :data="EventtableData.slice(0, 5)"
                height="250px"
                :show-header="false"
            >
              <el-table-column label="标题" min-width="70">
                <template #default="scope">
                  <div>
                    <span>{{ scope.row.name }}</span>
                  </div>
                </template>
              </el-table-column>

              <el-table-column label="时间" min-width="30">
                <template #default="scope">
                  <div>
                    <el-icon><timer /></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="info_card" shadow="always">
          <template #header>
            <div class="card-header">
              <div class="title_bar" />
              <span class="title_text">会议截稿日 Conference DDLs</span>
            </div>
          </template>
          <div>
<!--            <el-descriptions-->
<!--                :column="3"-->
<!--                size="large"-->
<!--                style="marginTop: 6px"-->
<!--            >-->
<!--              <el-descriptions-item >ICCV <el-tag size="small">CCF A</el-tag></el-descriptions-item>-->
<!--              <el-descriptions-item label="官网"><el-link href="https://element-plus.org" target="_blank">https://element-plus.org</el-link></el-descriptions-item>-->
<!--              <el-descriptions-item label="截稿日">2025-03-15</el-descriptions-item>-->

<!--              <el-descriptions-item >ICCV <el-tag size="small">CCF A</el-tag></el-descriptions-item>-->
<!--              <el-descriptions-item label="官网"><el-link href="https://element-plus.org" target="_blank">https://element-plus.org</el-link></el-descriptions-item>-->
<!--              <el-descriptions-item label="截稿日">2025-03-15</el-descriptions-item>-->

<!--              <el-descriptions-item >ICCV <el-tag size="small">CCF A</el-tag></el-descriptions-item>-->
<!--              <el-descriptions-item label="官网"><el-link href="https://element-plus.org" target="_blank">https://element-plus.org</el-link></el-descriptions-item>-->
<!--              <el-descriptions-item label="截稿日">2025-03-15</el-descriptions-item>-->
<!--            </el-descriptions>-->

            <el-table
                style="width: auto"
                max-height="250"
                :data="ConftableData"
                :show-header="true"
            >
              <el-table-column label="会议名称" width="100">
                <template #default="scope">
                  <div>
                    <span>{{ scope.row.name }}</span>
                  </div>
                </template>
              </el-table-column>

              <el-table-column>
                <template #default="scope" width="50">
                  <div>
                    <el-tag>{{ scope.row.level }}</el-tag>
                  </div>
                </template>
              </el-table-column>

              <el-table-column label="截稿日期" width="150">
                <template #default="scope">
                  <div>
                    <el-icon><timer /></el-icon>
                    <span>{{ scope.row.date }}</span>
                  </div>
                </template>
              </el-table-column>

              <el-table-column label="会议官网" width="350">
                <template #default="scope">
                  <div>
                    <el-link :href="scope.row.url" target="_blank">{{ scope.row.url }}</el-link>
                  </div>
                </template>
              </el-table-column>

            </el-table>

          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row style="margin-top: 20px" :gutter="10">
      <el-col :span="24">
        <el-card class="info_card" shadow="always">
          <template #header>
            <div class="card-header">
              <div class="title_bar" />
              <span class="title_text">代表性论文 Representative Publications</span>
            </div>
          </template>
          <div>
            <el-table
                style="width: auto"
                :data="PapertableData"
                :show-header="false"
            >
              <el-table-column label="论文信息" min-width="85">
                <template #default="scope">
                  <div>
                    <span class="title-style">{{ scope.row.title }}</span><br>
                    <span class="author-style">{{ scope.row.author }}</span><br>
                    <span class="book-style">{{ scope.row.book }}</span>
                  </div>
                </template>
              </el-table-column>

              <el-table-column label="论文链接" min-width="15">
                <template #default="scope">
                  <div>
<!--                    <el-button size="small" class="more-btn" :disabled="{{ scope.row.url }}!=''"><el-link :href="{{ scope.row.url }}">pdf</el-link></el-button>-->
                    <!-- 使用 v-if 来判断是否有 URL，如果有则显示按钮 -->
<!--                    <el-button-->
<!--                        size="small"-->
<!--                        class="more-btn"-->
<!--                        v-if="scope.row.url"-->
<!--                        @click="handleDownload(scope.row.url)"-->
<!--                    >-->
<!--                      <el-link :href="scope.row.url" target="_blank">pdf</el-link>-->
<!--                    </el-button>-->

<!--                    <el-button-->
<!--                        size="small"-->
<!--                        class="more-btn"-->
<!--                        v-if="scope.row.code"-->
<!--                        @click="handleDownload(scope.row.code)"-->
<!--                    >-->
<!--                      <el-link :href="scope.row.code" target="_blank">code</el-link>-->
<!--                    </el-button>-->
                    <!-- 按钮始终显示，但如果没有URL，则为禁用状态 -->
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
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.main {
  min-width: var(--main-min-valid-width);
  max-width: var(--main-max-width);
  width: var(--main-valid-width);
  /* 默认情况下，使用 var(--main-side-left-width) */
  margin-left: var(--main-side-left-width); /*var(--main-side-left-width);*/
  margin-top: 30px; /* 与banner之间的间隔*/
}

/* 当屏幕宽度小于 1000px + 两倍的 var(--main-side-left-width) 时 */
@media screen and (max-width: calc(1000px + 2 * var(--main-side-left-width))) {
  .main {
    /* 使用 (100vw - var(--main-valid-width)) / 2 作为 margin-left */
    margin-left: calc((100vw - var(--main-valid-width)) / 2);
  }
}

.row_style {
  margin-top: 20px;
}

.info_card {
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--ep-color-primary);
}

.card-header {
  display: flex;
  //justify-content: space-between;
}

.card-body {
  text-align: left;
  text-indent: 40px;
  font-size: 20px;
  line-height: 150%;
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

.custom-table ::v-deep(.el-table__header) {
  margin: 0 auto;
}

.more-btn {
  margin-left: auto; /* 按钮靠右 */
  margin-top: auto; /* 按钮上下居中 */
  margin-bottom: auto; /* 按钮上下居中 */
}

.title-style {
  font-size: 18px;
  font-weight: bold;
  font-family: 'Microsoft YaHei', '黑体', sans-serif;
}

.author-style {
  font-size: 15px;
  color: gray;
  font-style: italic;
}

.book-style {
  font-size: 15px;
}

.more-btn {
  margin-right: 8px; /* 为按钮添加右侧外边距 */
  margin-bottom: 8px; /* 为按钮添加底部外边距 */
}

/* 如果您想要在列中垂直排列按钮，可以添加以下样式 */
.more-btn:last-child {
  margin-right: 0; /* 最后一个按钮不需要右侧外边距 */
}
</style>

<script lang="ts" setup>

import { Timer } from '@element-plus/icons-vue'
import {Conf, ConftableData} from '../../assets/data/home/ConfInfo'
import {Event, EventtableData} from '../../assets/data/home/EventsInfo'
import {Paper, PapertableData} from '../../assets/data/home/PaperInfo'

const handleDownload = (url: any) => {
  window.open(url, '_blank')
}
</script>