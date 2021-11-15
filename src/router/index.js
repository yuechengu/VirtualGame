import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入路由参数
import MainPage from '@/components/MainPage'
import About from '@/components/About'
import Registry from '@/components/Registry'
import Result from '@/components/Result'//这个是单次比赛的结果，暂时没写
import Running from '@/components/Running'
import SearchRunner from '@/components/SearchRunner'
import RunnerDetail from '@/components/RunnerDetail'
import SearchRace from '@/components/SearchRace'
//定义routes路由的集合，数组类型
const routes = [
  { path: '/', component: MainPage },
  { path: '/mainpage', component: MainPage },
  { path: '/about', component: About },
  { path: '/registry', component: Registry },
  { path: '/withdraw', component: SearchRunner },
  { path: '/running', component: Running },
  { path: '/queryGameScore', component: SearchRunner },
  { path: '/queryGameScore/runnerdetail/:id', component: RunnerDetail },
  { path: '/searchrace', component: SearchRace }//暂时调整中
]
//创建路由器实例，并且传入`routes`变量作为路由。
const router = new VueRouter({
  routes,
  mode: 'history'
})
//抛出这个这个实例对象方便外部读取以及访问
export default router