//导入vue实例
import Vue from 'vue'
//导入App组件
import App from './App'
//引用本地@router/index.js
import router from '@/router/index.js'
//axios接口引用
import axios from 'axios'
Vue.prototype.$axios=axios
axios.defaults.baseURL = '/api' // 开发本地代理
axios.defaults.headers.post['Contenst-Type'] = 'application/json;'
// 导入element ui布局系统
import VueResource from 'vue-resource' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JsonExcel from 'vue-json-excel'
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(axios)
Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)

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