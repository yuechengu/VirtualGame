// 导入vue实例
import Vue from 'vue'
//导入 App 组件
import App from './App'
//导入 vue-router插件，element ui布局系统
/*
在实施导入之前需要先行安装相关的插件，安装过程如下
npm install vue-cli -g
npm install vue-resource
npm install vue-router
npm install element-ui -S
*/
import VueRouter from 'vue-router'
import VueResource from 'vue-resource' 
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
//------------------------------
//该处导入路由参数
import MainPage from './components/MainPage'
import About from './components/About'
import Start1Game from './components/Start1Game'
import Start2Game from './components/Start2Game'
import SearchRunner from './components/SearchRunner'
import RunnerDetail from './components/RunnerDetail'
import SearchRace from './components/SearchRace'
//告诉vue使用vue-router路由组件
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use( VueResource)
Vue.use(axios)
Vue.config.productionTip = false

//定义路由表
// 创建路由器实例，并且传入`routes`变量作为路由。
// 你还可以传入别的参数，不过在这里尽量简单化就可以了
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

const router = new VueRouter({
  routes,
  mode: 'history'
})

//实例化Vue实例
new Vue({
  //定义Vue绑定的根元素，是指最外面的index.html的<div id="app"></div>到时候将会被替换
  el: '#app',
  //用<App/>代替根元素
  template: '<App/>',
  //声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  //将上面声明的路由器传递到根Vue实例
  router
}).$mount('#app')//将这个实例挂载到id=app的根元素上

/*
STEP1: 首先我们从node模块中导入了vue模块，
接着我们又导入了App模块(这个是本地定义的模块)。

STEP2: 这个App模块是我们在用vue cli脚手架创建这个项目的时候默认帮我们创建的，
作为我们整个项目的根模块。

STEP3: 之后，我们导入了vue-router,
接着我们使用vue的静态方法Vue.use，告诉vue我们将使用vue-router这个组件。

*/