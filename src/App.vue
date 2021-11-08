<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          router>
          <!-- 导航栏 -->
          <el-menu-item index="mainpage">返回主页</el-menu-item>

          <el-submenu index="1">
            <template slot="title">开始游戏</template>

            <el-menu-item index="start1game"> 单人游戏</el-menu-item>
            <el-menu-item index="start2game">多人游戏</el-menu-item>
            <el-menu-item index="2-3" disabled>游戏复盘</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">记录查询</template>
            <el-menu-item index="searchrunner">选手查询</el-menu-item>
            <el-menu-item index="searchrace">历史比赛查询</el-menu-item>
          </el-submenu>

          <el-submenu index="3" disabled>
            <template slot="title">编辑功能</template>
            <el-menu-item index="3-1">增加选手</el-menu-item>
            <el-menu-item index="3-2">增加地图</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <!-- 自由跳转路由区域 -->
      <el-main><router-view></router-view></el-main>
    </el-container>
    <!-- 角栏 -->
    <el-divider></el-divider>
    <router-link v-bind:to="'/mainpage'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active {
  text-decoration: none;
}
</style>
