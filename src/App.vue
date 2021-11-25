<template>
  <div id="app">
    <el-container style="border: 1px solid #eee; min-height: 100%;">
      <el-aside style="background-color: #545c64; width:auto;">
        <!-- 使用 Menu 组件，传入变量 isMenuCollapse -->
        <Menu :isMenuCollapse="isMenuCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <!-- 点击切换收起左侧菜单 -->
          <el-button @click="isMenuCollapse = !isMenuCollapse" style="font-size: 24px;padding: 5px 8px;">
            <i :class="isMenuCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" />
          </el-button>
        </el-header>
        <el-main>
          <!-- 子路由界面 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入Menu组件
import Menu from './components/Menu.vue';
export default {
  name: "App",
  data:() =>{
    return {
      isMenuCollapse: false, // 是否收起左侧菜单
    }
  },
  components: {
    Menu
  }
};
</script>
<!-- css格式 -->
<style>
body {
  margin: 0;
}
#app {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header {
  color: #333;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  font-size: 12px;
  background-color: #ededed;
}
.el-aside {
  color: #333;
}
</style>
