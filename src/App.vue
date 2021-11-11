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
          <!-- 比赛模块 -->
          <el-submenu index="1">
            <template slot="title">比赛模块</template>
            <el-menu-item index="registry">选手注册</el-menu-item>
            <el-menu-item index="running">开始游戏</el-menu-item>
          </el-submenu>
          <!-- 查询模块 -->
          <el-submenu index="2">
            <template slot="title">查询模块</template>
            <el-menu-item index="queryGameScore">记录管理</el-menu-item>
          </el-submenu>
          <!-- 扩展模块 -->
          <el-submenu index="3">
            <template slot="title">其他功能</template>
            <el-menu-item index="3-1" disabled>编辑选手</el-menu-item>
            <el-menu-item index="3-2" disabled>编辑地图</el-menu-item>
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
<!-- css格式 -->
<style>
#app {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
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
