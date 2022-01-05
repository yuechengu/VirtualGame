//导入vue实例
import Vue from 'vue'
//导入App组件
import App from './App'
//引用本地@router/index.js
import router from '@/router/index.js'
//axios接口引用
import axios from '@/utils/http'
//导入api接口
import api from './api'
//将api挂载到vue的原型上
Vue.prototype.$api = api; 
//全局样式
import './assets/css/all.css'
//图片选框
import VueSelectImage from 'vue-select-image'
// 导入element ui布局系统
import VueResource from 'vue-resource' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JsonExcel from 'vue-json-excel'
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(axios)
Vue.use(VueSelectImage)
Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)

// 启动一个 Vue 应用
new Vue({
  el: "#app",
  router, // 传入路由能力
  render: h => h(App)
});