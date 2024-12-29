<template>
  <el-config-provider namespace="ep">
    <el-container style="height: 100%">
      <el-header class="header">
        <BaseHeader />
      </el-header>

      <el-container style="height: 100%">
        <div class="main-container">
          <div style="padding-top: 20px; padding-bottom: 20px; width: 100%;">
            <RouterView />
          </div>
        </div>
        <el-backtop :right="100" :bottom="100" />
      </el-container>

      <el-footer class="footer">
        <el-row style="
                  margin-top: 20px;
                  min-width: var(--main-min-valid-width);
                  max-width: var(--main-max-width);
                  width: var(--main-valid-width);
                  margin-left: var(--main-side-left-width);
                  margin-bottom: 20px;
                "
                gutter="10">
          <el-col :span="8">
            <h1>联系我们</h1>
            <h2>xyz<br/>xyz@sysu.edu.cn</h2>
          </el-col>
          <el-col :span="16">
            <h1>相关链接</h1>

            <el-row>
              <el-col :span="12">
                <h2>
                  <el-link class="el-link" @click="handleClick('https://www.sysu.edu.cn/')" >
                    中山大学
                  </el-link>
                </h2>

                <p>
                  <el-link class="el-link" @click="handleClick('https://sece.sysu.edu.cn/index.htm')" >
                    中山大学电子与通信工程学院
                  </el-link>
                </p>
              </el-col>

              <el-col :span="12">
                <h2>
                  <el-link class="el-link" @click="handleClick('https://gms.sysu.edu.cn/gsapp/sys/yjsrzfwappsysu/dbLogin/index.do')">
                    中山大学研究生教育管理服务平台
                  </el-link>
                </h2>

                <p>
                  <el-link class="el-link" @click="handleClick('https://jwxt.sysu.edu.cn/jwxt/#/login')">
                    中山大学本科教务系统
                  </el-link>
                </p>
              </el-col>
            </el-row>
          </el-col>

<!--          <el-col :span="8">-->
<!--            <h1> </h1>-->

<!--            <h2>-->
<!--              <el-link class="el-link" href="https://www.sysu.edu.cn/" >中山大学</el-link>-->
<!--            </h2>-->

<!--            <p>-->
<!--              <el-link class="el-link" href="https://sece.sysu.edu.cn/index.htm" >中山大学电子与通信工程学院</el-link>-->
<!--            </p>-->
<!--          </el-col>-->
        </el-row>
      </el-footer>

    </el-container>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.header {
  height: var(--ep-menu-item-height);
  width: 100%;
  z-index: 100;
}

.footer {
  height: auto;
  width: 100%;
  background-color: #5e4848;
  color: #ffffff;
  text-align: left;
}

.footer h1{
  margin-top: 10px;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: left;
  font-size: 18px;

}

.el-link{
  margin-top: 5px;
  margin-bottom: 5px;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  line-height: 90%;
  font-weight: normal;
}

.footer h2{
  margin-top: 5px;
  margin-bottom: 5px;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  line-height: 90%;
  font-weight: normal;
}

.main-container {
  display: flex;
  background: #bd232e;
  width: 100%;
  height: 100%;
}


</style>
<script setup lang="ts">
const handleClick = (url) => {
  window.open(url, '_blank')
}
</script>