/**
 * 比赛结果管理api
 */

//axios接口引用
import axios from '@/utils/http';
// 导入接口域名列表
import base from "./base"; 

const gameResultService = {
  participaterInfo(param) {
    return axios.get(`${base.searchGameResult}`, {params: {id: param}});
  }
};

export default gameResultService;