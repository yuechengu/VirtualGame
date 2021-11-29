/**
 * 地图管理api
 */

//axios接口引用
import axios from "axios";
axios.defaults.baseURL = "/api"; // 开发本地代理
axios.defaults.headers.post["Contenst-Type"] = "application/json;";
// 导入接口域名列表
import base from "./base";

const mapService = {
  // 查找所有地图
  mapList() {
    return axios.get(`${base.searchAllMap}`);
  }
};

export default mapService;
