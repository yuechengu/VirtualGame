<template>
  <div class="playerDetail">
    <h1>详细信息</h1>
    <el-row>
      <el-button type="primary" disabled>编辑</el-button>
      <el-button type="danger" @click="deleteplayer(player.id)">删除</el-button>
      <el-button type="info" @click="backToSearch()">返回</el-button>
    </el-row>
    <el-descriptions
      class="margin-top"
      title=" "
      :column="4"
      border
    >
        <el-descriptions-item :span="4">
        <template slot="label" >
          <i class="el-icon-user"></i>
          选手ID
        </template>
        {{ player.id }}
      </el-descriptions-item>
      <el-descriptions-item :span="4">
        <template slot="label">
          <i class="el-icon-user"></i>
          选手名
        </template>
        {{ player.name }}
      </el-descriptions-item>
      <el-descriptions-item :span="2">
        <template slot="label">
          <i class="el-icon-male"></i>
          性别
        </template>
        {{ player.gender }}
      </el-descriptions-item>
      <el-descriptions-item :span="2">
        <template slot="label">
          <i class="el-icon-watch"></i>
          年龄
        </template>
        {{ player.age }}
      </el-descriptions-item>
      <el-descriptions-item :span="2">
        <template slot="label">
          <i class="el-icon-tickets"></i>
          基础速度
        </template>
        {{ player.averageSpeed }}
      </el-descriptions-item>
      <el-descriptions-item :span="2">
        <template slot="label">
          <i class="el-icon-s-goods"></i>
          基础负重
        </template>
        {{ player.addedWeight }}
      </el-descriptions-item>
    </el-descriptions><br />

    <h1 style="">参赛信息</h1>
    <download-excel
      class="export-excel-wrapper"
      :data="records"
      :fields="json_fields"
      type="xls"
      name="参赛信息.xls"
      ><el-button type="success">下载.xls格式到本地</el-button> </download-excel
    ><br />
    <el-table :data="records">
      <el-table-column width="180" prop="dateOfGame" label="比赛时间"> </el-table-column>
      <el-table-column width="180" prop="gameMapName" label="比赛地图"> </el-table-column>
      <el-table-column width="180" prop="league" label="排名"> </el-table-column>
      <el-table-column width="180" prop="gameSpeed" label="比赛速度"> </el-table-column>
      <el-table-column prop="gameCommentary" label="比赛讲解">
      </el-table-column> </el-table
    ><br /><br />
  </div>
</template>

<script>
export default {
  name: "playerDetail",
  data() {
    return {
      player: "",
      //用来存放每个运动员的详细信息
      records: [],
      //用来存放运动员的每条记录
      //表描述

      json_fields: {
        玩家ID: "playerId",
        游戏日期: "dateOfGame",
        游戏地图: "gameMapName",
        名次: "league",
        比赛速度: "gameSpeed",
        比赛解说: "gameCommentary",
      },
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 ",
          },
        ],
      ],
    };
  },
  methods: {
    //NG
    //根据点击详细的id返回运动员的详细信息
    fetchplayer(id) {
      this.$api.playerService.IDfindPlayer(id).then((result) => {
        this.player = result.data;
      });
    },
    //NG
    //根据运动员的id筛选出运动员的参赛记录
    fetchRecord(id) {
      this.$api.gameResultService.participaterInfo(id).then((result) => {
        this.records = result.data;
      });
    },
    //NG
    //根据运动的id删除相应的运动员
    deleteplayer(id) {
      this.$api.playerService.deletePlayer(id).then((result) => {
        console.log(result);
        if (result){
          this.$router.push({
            path: "/queryGameScore",
            query: { alert: "选手删除成功" },
          });
        }else{
          this.$router.push({
            path: "/queryGameScore",
            query: { alert: "选手删除失败" },
          });
        }
      });
    },
    backToSearch() {
      this.$router.go(-1);
    },
  },
  created() {
    this.fetchplayer(this.$route.params.id);
    this.fetchRecord(this.$route.params.id);
  },
};
</script>


<style scoped>
.playerDetail {
  text-align: center;
  float: left;
  position: relative;
  width: 80%;
  left: 10%;
}
.margin-top {
  position: relative;
  width: 50%;
  left: 25%;
}
</style>
