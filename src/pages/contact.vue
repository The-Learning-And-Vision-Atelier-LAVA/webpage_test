<script setup lang="ts">
const handleClick = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <el-aside position="fixed" style="height: 100%; margin-top: 0px; ">
    <el-anchor :offset="70" style="height: 100%; text-align: left; background-color: #ffffff;">
      <el-anchor-link href="#employment"><el-card class="shadow"><span class="link-text">博士后招聘</span></el-card></el-anchor-link>
      <el-anchor-link href="#enrollment"><el-card class="shadow"><span class="link-text">研究生招生</span></el-card></el-anchor-link>
<!--      <el-anchor-link href="#enrollment_phd"><el-card class="shadow"><span class="link-text">博士招生</span></el-card></el-anchor-link>-->
<!--      <el-anchor-link href="#enrollment_master"><el-card class="shadow"><span class="link-text">硕士招生</span></el-card></el-anchor-link>-->
      <el-anchor-link href="#enrollment_bachelor"><el-card class="shadow"><span class="link-text">本科生科研培训</span></el-card></el-anchor-link>
      <el-anchor-link href="#policy"><el-card class="shadow"><span class="link-text">相关政策参考</span></el-card></el-anchor-link>
    </el-anchor>
  </el-aside>

  <el-main class="main">
    <el-row style="margin-top: 20px" gutter="10">
      <el-card class="info_card" shadow="always">
        <el-col :span="24">
          <div class="card-body">
            <p>
              实验室长期招收硕士研究生、博士研究生、博士后、专职科研人员（要有博士学位）、长期访问学生，同时欢迎学有余力的本科同学加入实验室开展科研培训。请有意向的同学、研究者通过电子邮件与郭裕兰教授联系（guoyulan@sysu.edu.cn）。
            </p>
            <br/>
            <p>
              希望你符合以下几点：
            </p>
            <p>
              1. 较强的自我驱动力
              <div class="text_item"> 有明确的人生目标，了解自己内心的渴望，明白自己想成为一个什么样的人，懂得自律，并具备为了梦想持续刻苦努力的勇气和毅力。</div>
            </p>
<!--            <p class="text_item">-->
<!--              有明确的人生目标，了解自己内心的渴望，明白自己想成为一个什么样的人，懂得自律，并具备为了梦想持续刻苦努力的勇气和毅力。-->
<!--            </p>-->
            <p>
              2. 浓厚的研究兴趣
              <div class="text_item"> 希望通过做研究的过程，持续提升自己的逻辑思维能力、理性思考能力、前沿判断能力、算法设计能力及工程实践能力。</div>
            </p>
<!--            <p class="text_item">-->
<!--              希望通过做研究的过程，持续提升自己的逻辑思维能力、理性思考能力、前沿判断能力、算法设计能力及工程实践能力。-->
<!--            </p>-->
            <p>
              3. 良好的学习基础
              <div class="text_item"> 本科基础好（我主要看重数学类、物理类和专业基础类课程），英语和专业类课程是额外加分项。</div>
            </p>
<!--            <p class="text_item">-->
<!--              本科基础好（我主要看重数学类、物理类和专业基础类课程），英语和专业类课程是额外加分项。-->
<!--            </p>-->
            <br/>
            <p>
              希望你在实验室内能够收获以下几点：
            </p>
            <p>
              1、扎实的算法功底
              <div class="text_item">学会如何找到学术前沿，如何发现科学问题并寻找解决方案，如何设计算法并编程实现，如何开展算法评估测试与迭代改进。</div>
            </p>
<!--            <p class="text_item">-->
<!--              学会如何找到学术前沿，如何发现科学问题并寻找解决方案，如何设计算法并编程实现，如何开展算法评估测试与迭代改进。-->
<!--            </p>-->
            <p>
              2、良好的表达能力
              <div class="text_item">学会如何写一篇逻辑严密、论证充分、表达清晰的学术论文；学会如何做一个优雅得体、引人入胜的学术报告。</div>
            </p>
<!--            <p class="text_item">-->
<!--              学会如何写一篇逻辑严密、论证充分、表达清晰的学术论文；学会如何做一个优雅得体、引人入胜的学术报告。-->
<!--            </p>-->
            <p>
              3、开放的个人胸怀
              <div class="text_item">学会与团队的良好协作，与全球智力精英的思维碰撞与交流，与企业和学术界的交流与合作，掌握持续自我学习的能力。</div>
            </p>
<!--            <p class="text_item">-->
<!--              学会与团队的良好协作，与全球智力精英的思维碰撞与交流，与企业和学术界的交流与合作，掌握持续自我学习的能力。-->

<!--            </p>-->
          </div>

          <el-row id="employment">
            <el-col :span="24">
              <div class="card-header">
                <div class="title_bar" />
                <span class="title_text">博士后招聘</span>
              </div>
            </el-col>

            <div class="card-body">
              <p>
                实验室长期招聘博士后，可申报中山大学逸仙博士后项目，同时可享受广东及深圳相关博后补贴，待遇优厚。欢迎在人工智能、计算机、电子信息等相学科取得博士学位，致力于从事三维视觉、具身智能等相关研究，有良好的理论和实践基础，有刻苦钻研的精神和强烈的事业心，有良好的身体心理素质和团队合作精神的博士与我们联系。
              </p>
              <p>
              相关招聘信息：<el-link class="link_text" @click="handleClick('https://rcb.sysu.edu.cn/article/547')">https://rcb.sysu.edu.cn/article/547</el-link>
              </p>
              <p>
              相关政策信息：<el-link class="link_text" @click="handleClick('https://rsc.sysu.edu.cn/postdoctor/article/128')">https://rsc.sysu.edu.cn/postdoctor/article/128</el-link>
              </p>
            </div>
          </el-row>


          <el-row id="enrollment">
            <el-col :span="24">
              <div class="card-header">
                <div class="title_bar" />
                <span class="title_text">研究生招生</span>
              </div>
            </el-col>

            <div class="card-body">
              <p>
                实验室每年有一定的学硕、专硕及博士生招生名额。我们聚焦于三维视觉与具身智能，致力于实现机器对三维世界的智能感知、理解与交互，欢迎对此方向有研究兴趣的同学加入我们。申请时请在邮件中附上个人简历、本科以来的成绩单、主要成果（论文、竞赛奖励）。
              </p>
			  <p>
			   实验室不招收任何以混文凭或混经历为目的的成员。鼓励硕士生毕业后读本组博士或读海外一流研究组的博士，鼓励博士生毕业后在国内外一流高校或IT头部企业继续从事科研工作，鼓励学生参与国内外学术交流，并尽可能提供一切便利。
			  </p>
            </div>
          </el-row>

          <el-row id="enrollment_bachelor">
            <div class="card-header">
              <div class="title_bar" />
              <span class="title_text">本科生科研培训</span>
            </div>
            <div class="card-body">
              <p>
                欢迎有余力、愿意提前进入科研的本校本科生加入实验室开展科研培训，可通过竞赛指导、大创设计、本科毕设等形式参与实验室科研项目。同时，欢迎外校保研学生通过本科毕设的形式提前进入实验室参与科研项目。
              </p>
            </div>
          </el-row>
		  
		  <el-row id="policy">
            <div class="card-header">
              <div class="title_bar" />
              <span class="title_text">相关政策参考</span>
            </div>
            <div class="card-body">
              <p>相关政策请关注中山大学研究生招生网：<el-link class="link_text" @click="handleClick('https://graduate.sysu.edu.cn/zsw/')">https://graduate.sysu.edu.cn/zsw/</el-link></p>
              <p>
			          中山大学博士研究生招生公告：<el-link class="link_text" @click="handleClick('https://graduate.sysu.edu.cn/zsw/doctor')">https://graduate.sysu.edu.cn/zsw/doctor</el-link>
              </p>
              <p>
                中山大学硕士研究生招生公告：<el-link class="link_text" @click="handleClick('https://graduate.sysu.edu.cn/zsw/postgraduate')">https://graduate.sysu.edu.cn/zsw/postgraduate</el-link>
              </p>
            </div>
          </el-row>
		  
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

.link-text {
  font-size: 18px;
  text-align: left;
  //color: #ffffff;
  color: var(--ep-color-primary);
}

.info_card {
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--ep-color-primary);
}

.shadow {
  width: 95%;
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
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

.text_item {
  padding-left: 2rem;
}

.card-body {
  text-align: justify;
  font-size: 20px;
  line-height: 150%;
  text-indent: 2rem;
}

.link_text {
  font-size: 20px;
  text-indent: 0rem;
}

</style>