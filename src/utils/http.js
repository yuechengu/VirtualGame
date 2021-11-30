/**
 * axios封装
 * 主要解决本地跨域
 * 请求拦截、响应拦截、错误统一处理等暂不作对应
 */

import axios from 'axios';

// 创建axios实例
var instance = axios.create({
    baseURL: '/lishaochenService'
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;