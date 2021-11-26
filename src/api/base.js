/**
 * 接口域名的管理
 */

const base = {
  //运动员管理（lsc提供）
  searchAllPlayer: "/players",
  insertPlayer: "/players",
  deletePlayer: "/players",
  //地图管理（lsc提供）
  searchAllMap: "/maps",
  //比赛结果管理（lsc提供）
  searchGameResult: "/playerRecord",
  //比赛管理（lx提供）
  running: "/sports/running"
};

export default base;
