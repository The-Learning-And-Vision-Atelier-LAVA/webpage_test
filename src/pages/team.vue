<template>
<!--  <div class="main">-->
<!--    <el-row style="margin-top: 20px" gutter="10">-->
<!--      <el-col :span="24">-->
<!--        <el-card class="info_card" shadow="always">-->
<!--          &lt;!&ndash; 使用新的组件展示每个类别的成员 &ndash;&gt;-->
<!--          <TeamCategory :category="facultyCategory" />-->
<!--          <TeamCategory :category="staffCategory" />-->
<!--          <TeamCategory :category="phDCategory" />-->
<!--          <TeamCategory :category="masterCategory" />-->
<!--          <TeamCategory :category="bachelorCategory" />-->
<!--          <TeamCategory :category="alumniCategory" />-->
<!--        </el-card>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--  </div>-->

<!--  <div style="height: 100vh">-->

<!--  </div>-->

  <el-aside position="fixed" style="height: 100%; margin-top: 0px; z-index: 1000">
    <el-anchor :offset="70" style="height: 100%; text-align: left; background-color: #ffffff;">
      <el-anchor-link href="#faculty"><el-card class="shadow"><span class="link-text">教&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp师 Faculty</span></el-card></el-anchor-link>
      <el-anchor-link href="#staff"><el-card class="shadow"><span class="link-text">教&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp工 Staff</span></el-card></el-anchor-link>
      <el-anchor-link href="#graduate"><el-card class="shadow"><span class="link-text">研&nbsp&nbsp究&nbsp&nbsp生 Graduate Students</span></el-card></el-anchor-link>
<!--      <el-anchor-link href="#phd"><el-card class="shadow"><span class="link-text">博&nbsp&nbsp士&nbsp&nbsp生 PhD Students</span></el-card></el-anchor-link>-->
<!--      <el-anchor-link href="#master"><el-card class="shadow"><span class="link-text">硕&nbsp&nbsp士&nbsp&nbsp生 Master Students</span></el-card></el-anchor-link>-->
      <el-anchor-link href="#bachelor"><el-card class="shadow"><span class="link-text">本&nbsp&nbsp科&nbsp&nbsp生 Bachelor Students</span></el-card></el-anchor-link>
      <el-anchor-link href="#alumni"><el-card class="shadow"><span class="link-text">毕&nbsp&nbsp业&nbsp&nbsp生 Alumni</span></el-card></el-anchor-link>
      <el-anchor-link href="#visiting"><el-card class="shadow"><span class="link-text">交流访问 Visiting</span></el-card></el-anchor-link>
    </el-anchor>
  </el-aside>

<!--  <el-aside position="fixed">-->
<!--    <el-menu-->
<!--        default-active="2"-->
<!--        class="el-menu-vertical-demo"-->
<!--    >-->
<!--      <el-menu-item index="1-1">item one</el-menu-item>-->
<!--    </el-menu>-->
<!--  </el-aside>-->

  <el-main class="main">
    <el-row style="margin-top: 20px" gutter="10">
      <el-card class="info_card" shadow="always">
        <!-- 使用新的组件展示每个类别的成员 -->
        <div id="faculty"><TeamCategory :category="facultyCategory" /></div>
        <div id="staff"><TeamCategory :category="staffCategory" /></div>
        <div id="graduate"><TeamCategory :category="graduateCategory" /></div>
<!--        <div id="graduate"><TeamCategory :category="phDCategory" /></div>-->
<!--        <div id="master"><TeamCategory :category="masterCategory" /></div>-->
        <div id="bachelor"><TeamCategory :category="bachelorCategory" /></div>
        <div id="alumni"><TeamCategory :category="alumniCategory" /></div>
        <div id="visiting"><TeamCategory :category="visitingCategory" /></div>
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

.shadow {
  width: 95%;
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
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


</style>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  FacultytableData,
  StafftableData,
  // PhDtableData,
  // MastertableData,
  GraduatetableData,
  BachelortableData,
  AlumnitableData,
  VisitingtableData,
} from '~/assets/data/Team/TeamInfo.ts';
import TeamCategory from '~/components/TeamCategory.vue';

const facultyCategory = { title: '教师 Faculty', data: FacultytableData };
const staffCategory = { title: '教工 Staff', data: StafftableData };
const graduateCategory = { title: '研究生 Graduate Students', data: GraduatetableData };
// const phDCategory = { title: '博士生 PhD Students', data: PhDtableData };
// const masterCategory = { title: '硕士生 Master Students', data: MastertableData };
const bachelorCategory = { title: '本科生 Bachelor Students', data: BachelortableData };
const alumniCategory = { title: '毕业生 Alumni', data: AlumnitableData };
const visitingCategory = { title: '交流访问 Visiting', data: VisitingtableData };

// const facultyCount = ref(FacultytableData.length);
// const staffCount = ref(StafftableData.length);
// const graduateCount = ref(GraduatetableData.length);
// // const phdCount = ref(PhDtableData.length);
// // const masterCount = ref(MastertableData.length);
// const bachelorCount = ref(BachelortableData.length);
</script>