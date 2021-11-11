/*
在实施导入之前需要先行安装相关的插件，安装过程如下
npm install vue-cli -g
npm install vue-resource
npm install vue-router
npm install element-ui -S
*/
//导入vue实例
import Vue from 'vue'
//导入App组件
import App from './App'
//引用本地@router/index.js
import router from '@/router/index.js'
//axios接口引用
import axios from 'axios'
// Vue.prototype.$axios=Axios
//qs引用
import qs from "qs"
// Vue.prototype.$qs=qs
//导入element ui布局系统
import VueResource from 'vue-resource' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(axios)
Vue.config.productionTip = false
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