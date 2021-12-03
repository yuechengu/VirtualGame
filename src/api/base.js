/**
 * 接口域名的管理
 */

const base = {
  //运动员管理（lsc提供）
  searchAllPlayer: '/player/queryplayer',//OK
  IDfindPlayer: 'player/IDfindplayer',//OK
  insertPlayer: '/player/insertplayer',//OK
  deletePlayer: '/player/deleteplayer',//OK
  //地图管理（lsc提供）
  searchAllMap: '/mapandevent/queryallmap',//OK
  //比赛结果管理（lsc提供）
  searchGameResult: '/gameresult/queryresult',//OK
  //比赛（lx提供）
  running: '/sports/running'//NG：Bad Request, 把get改成post应该就行了
};

export default base;
