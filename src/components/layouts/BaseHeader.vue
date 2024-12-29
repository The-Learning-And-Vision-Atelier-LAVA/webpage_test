<script lang="ts" setup>
import { toggleDark } from "~/composables";

import { repository } from '~/../package.json'
</script>

<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      router
      :unique-opened="true"
      :close-on-click-outside="true"
      default-active="/"
      position=""
  >
    <el-menu-item index="/">
      <div class="flex items-center justify-center gap-2">
        <img
            style="width: 100px"
            src="/assets/lavalogo.png"
            alt="LAVA logo"
        />
      </div>
    </el-menu-item>
    <el-menu-item index="/"> <div class="el-menu-item-text"><p>主页</p><p>Home</p></div> </el-menu-item>
    <el-menu-item index="team"> <div class="el-menu-item-text"><p>团队成员</p><p>Team</p></div> </el-menu-item>
    <el-sub-menu index="research">
      <template #title><div class="el-menu-item-text"><p>研究方向</p><p>Research</p></div> </template>
      <el-menu-item index="research_overview">方向简介 Introduction</el-menu-item>
      <el-menu-item index="research_achievements">成果展示 Achievements</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="resources"> <div class="el-menu-item-text"><p>平台资源</p><p>Resources</p></div> </el-menu-item>
    <el-menu-item index="events"> <div class="el-menu-item-text"><p>团队动态</p><p>Events</p></div> </el-menu-item>
    <el-menu-item index="contact"> <div class="el-menu-item-text"><p>联系我们</p><p>Contact</p></div> </el-menu-item>

<!--    <el-menu-item h="full" @click="toggleDark()">-->
<!--      <button-->
<!--        class="border-none w-full bg-transparent cursor-pointer"-->
<!--        style="height: var(&#45;&#45;ep-menu-item-height)"-->
<!--      >-->
<!--        <i inline-flex i="dark:ep-moon ep-sunny" />-->
<!--      </button>-->
<!--    </el-menu-item>-->
    
    <el-menu-item h="full">
      <a class="size-full flex items-center justify-center" :href="repository.url" target="_blank">
        <div i-ri-github-fill />
      </a>
    </el-menu-item>
  </el-menu>

  <el-backtop :right="100" :bottom="100" />
</template>


<style lang="scss">
.el-menu-item-text {
  line-height: 4px;
}

.el-menu-demo {
  background-color: #ffffff; /* 设置导航栏背景为白色 */
  position: fixed; /* 固定导航栏在顶部 */
  top: 0; /* 距离顶部0距离 */
  left: 0; /* 距离左侧0距离 */
  width: 100%; /* 宽度为100%，覆盖整个视口宽度 */
  z-index: 1000; /* 设置较高的z-index以确保导航栏在最上层 */

  &.ep-menu--horizontal > .ep-menu-item {
    font-size: var(--navigator-font-size); // --navigator-font-size 定义在 styles/index.scss中  :root
  }

  &.ep-menu--horizontal > .ep-sub-menu > .ep-sub-menu__title {
    font-size: var(--navigator-font-size);
  }

  &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
  &.ep-menu--horizontal > .ep-menu-item:nth-child(7) {
    margin-right: auto;
  }
}

</style>
