/**
 * 地图管理api
 */

//axios接口引用
import axios from '@/utils/http';
//导入接口域名列表
import base from "./base";

const mapService = {
  // 查找所有地图
  mapList() {
    return axios.get(`${base.searchAllMap}`);
  }
};

export default mapService;
