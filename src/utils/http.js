/**
 * axios封装
 * 由于时间有限
 * 请求拦截、响应拦截、错误统一处理等暂不作对应
 */

import axios from 'axios';

// 创建axios实例
var instance = axios.create();
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;