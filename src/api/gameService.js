/**
 * 比赛服务api
 */

//axios接口引用
import axios from 'axios';
// ※本地代理：对应config/index.js下proxyTable里的跨域改造体
axios.defaults.baseURL = "/api"; 
axios.defaults.headers.post["Contenst-Type"] = "application/json;";
// 导入接口域名列表
import base from "./base"; 

const gameService = {
  // 开始比赛api
  startBy(params) {
    return axios.post(`${base.running}`, JSON.stringify(params));
  }
};

export default gameService;
