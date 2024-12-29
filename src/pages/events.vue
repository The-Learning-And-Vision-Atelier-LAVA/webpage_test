<script setup lang="ts">
import {Event, EventtableData} from '~/assets/data/home/EventsInfo'
</script>

<template>
  <el-main class="main">
    <el-row style="margin-top: 20px">
      <el-col :span="24">
        <el-card class="info_card" shadow="always">
          <div class="card-body">
            <el-timeline
                v-for="event in EventtableData"
            >
              <el-timeline-item
                  :timestamp="event.date"
                  placement="top"
                  type="primary"
                  :hollow="true"
                  :hide-timestamp="true"
              >
                <div class="timestamp">{{event.date}}</div>
                <el-card class="shadow">
                  <p class="event_title">{{event.name}}</p>
                  <p class="event_content">{{event.content}}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
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

.card-body {
  text-align: left;
  font-size: 20px;

}

.timestamp {
  text-align: left;
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.25rem;
}

.shadow {
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
}

.event_title {
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 125%;
  margin-top: 0;
  margin-bottom: 0;
}

.event_content {
  font-size: 1.0rem;
  line-height: 110%;
  margin-top: 0.75rem;
  margin-bottom: 0;
}
</style>