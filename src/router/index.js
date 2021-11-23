import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入路由参数
import MainPage from '@/components/MainPage'
import About from '@/components/About'
import Registry from '@/components/Registry'
import Result from '@/components/Result'//这个是单次比赛的结果
import Running from '@/components/Running'
import SearchPlayer from '@/components/SearchPlayer'
import PlayerDetail from '@/components/PlayerDetail'
// import SearchRace from '@/components/SearchRace'
//定义routes路由的集合，数组类型
const routes = [
  { path: '/', component: MainPage },
  { path: '/mainpage', component: MainPage },
  { path: '/about', component: About },
  { path: '/registry', component: Registry },
  { path: '/running', component: Running },
  { path: '/result', component: Result },
  { path: '/queryGameScore', component: SearchPlayer },
  { path: '/queryGameScore/Playerdetail/:id', component: PlayerDetail }
  // { path: '/queryRace', component: SearchRace },
  // { path: '/queryRace/result/:gameid', component: Result},
  // { path: '/queryRace/result/:gamename', component: Result}//暂时调整中
]
//创建路由器实例，并且传入`routes`变量作为路由。
const router = new VueRouter({
  routes,
  mode: 'history'
})
//抛出这个这个实例对象方便外部读取以及访问
export default router