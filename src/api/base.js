/**
 * 接口域名的管理
 */

const base = {
  //运动员管理（lsc提供）
  searchAllPlayer: '/player/queryplayer',//OK
  IDfindPlayer: '',//NG：没有提供, 前端传的是param，注意一下
  insertPlayer: "/player/insertplayer",//OK
  deletePlayer: "/player/deleteplayer",//NG: 405，reponse的HEADER里是【GET】方法?应该是【DELETE】方法吧
  //地图管理（lsc提供）
  searchAllMap: '/mapandevent/queryallmap',//OK
  //比赛结果管理（lsc提供）
  searchGameResult: "/gameresult/queryresult",//NG：前端传的是的param, 不是body
  //比赛管理（lx提供）
  running: '/sports/running'//NG：Bad Request, 把get改成post应该就行了
};

export default base;
