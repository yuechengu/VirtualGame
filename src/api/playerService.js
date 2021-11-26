/**
 * 运动员管理api
 */

//axios接口引用
import axios from "axios";
axios.defaults.baseURL = "/api"; // 开发本地代理
axios.defaults.headers.post["Contenst-Type"] = "application/json;";
// 导入接口域名列表
import base from "./base";

const playerService = {
  // 查找所有运动员
  playerList() {
    return axios.get(`${base.searchAllPlayer}`);
  },
  // 插入一个运动员(id与name不可为空，成功返回插入的运动员，已存在返回null)
  insertPlayer(params) {
    return axios.post(`${base.insertPlayer}`, params);
  },
  // 通过ID查找一个运动员
  // ※这里最好调用后端的 IDfindPlayer(int ID)
  IDfindPlayer(params) {
    return axios.get(`${base.searchAllPlayer}/${params}`);
  },
  // 删除一个运动员
  deletePlayer(params) {
    return axios.delete(`${base.deletePlayer}/${params}`);
  },
};

export default playerService;
