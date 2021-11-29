/**
 * 比赛结果管理api
 */

//axios接口引用
import axios from 'axios';
// ※本地代理：对应config/index.js下proxyTable里的跨域改造体
axios.defaults.baseURL = "/api"; 
axios.defaults.headers.post["Contenst-Type"] = "application/json;";
// 导入接口域名列表
import base from "./base"; 

const gameResultService = {
  // 开始比赛api
  participaterInfo(params) {
    return axios.get(`${base.searchGameResult}?playerId=${params}`);
  }
};

export default gameResultService;