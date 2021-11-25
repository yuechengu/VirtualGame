import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//导入路由参数
import Home from "@/pages/Home.vue";
import Registry from "@/pages/Registry.vue";
import Running from "@/pages/Running.vue";
// import Result from '@/components/Result.vue'
import QueryGameScore from "@/pages/queryGameScore/QueryGameScore.vue";
import PlayerDetail from "@/pages/queryGameScore/PlayerDetail.vue";

// 配置路由信息
const routes = [
  // 主页
  { path: "/", component: Home, name: "Home" },      
  // 注册模块
  { path: "/registry", component: Registry, name: "Registry" },
  // 比赛模块
  { path: "/running", component: Running, name: "Running" },
  // 查询模块
  { path: "/queryGameScore", component: QueryGameScore, name: "QueryGameScore" },
  // 详细信息
  { path: "/playerDetail/:id", component: PlayerDetail, name: "PlayerDetail" }
];

//创建路由器实例，并且传入`routes`变量作为路由。
const router = new VueRouter({
  routes,
  mode: "history"
});
//抛出这个这个实例对象方便外部读取以及访问
export default router;
