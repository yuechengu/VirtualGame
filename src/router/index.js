import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入路由参数
import MainPage from '@/components/MainPage'
import About from '@/components/About'
import Start1Game from '@/components/Start1Game'
import Start2Game from '@/components/Start2Game'
import SearchRunner from '@/components/SearchRunner'
import RunnerDetail from '@/components/RunnerDetail'
import SearchRace from '@/components/SearchRace'
//定义routes路由的集合，数组类型
const routes = [
  { path: '/', component: MainPage },
  { path: '/mainpage', component: MainPage },
  { path: '/about', component: About },
  { path: '/start1game', component: Start1Game },
  { path: '/start2game', component: Start2Game },
  { path: '/searchrunner', component: SearchRunner },
  { path: '/searchrunner/runnerdetail/:id', component: RunnerDetail },
  { path: '/searchrace', component: SearchRace }
]
//创建路由器实例，并且传入`routes`变量作为路由。
const router = new VueRouter({
  routes,
  mode: 'history'
})
//抛出这个这个实例对象方便外部读取以及访问
export default router