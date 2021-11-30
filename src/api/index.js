/**
 * api接口的统一出口
 */

// 模块接口导入
import playerService from '@/api/playerService'
import mapService from '@/api/mapService'
import gameService from '@/api/gameService'
import gameResultService from '@/api/gameResultService'

// 导出接口
export default {
  playerService,
  mapService,
  gameService,
  gameResultService
};
