/**
 * 接口域名的管理
 */

const base = {
  //运动员管理（lsc提供）
  searchAllPlayer: '/lishaochenService/player/queryplayer',
  IDfindPlayer: '/lishaochenService/player/IDfindplayer',
  insertPlayer: '/lishaochenService/player/insertplayer',
  deletePlayer: '/lishaochenService/player/deleteplayer',
  //地图管理（lsc提供）
  searchAllMap: '/lishaochenService/mapandevent/queryallmap',
  //比赛结果管理（lsc提供）
  searchGameResult: '/lishaochenService/gameresult/queryresult',
  //比赛（lx提供）
  running: '/lixiService/sports/running',//NG：Bad Request, 把get改成post应该就行了

  /**
   * 前端mockService模拟后端接口
   * 工具：json-server
   * 端口：3000
   */
  // //运动员管理
  // searchAllPlayer: '/mockService/player',
  // IDfindPlayer: '',
  // insertPlayer: '',
  // deletePlayer: '',
  // //地图管理
  // searchAllMap: '/mockService/map',
  // //比赛结果管理
  // searchGameResult: '/mockService/playerRecord',
  // //比赛
  // running: '',  
};

export default base;
