<template>
  <div class="detail">
    <h1>基本信息</h1>
    <el-descriptions
      class="margin-top"
      title=" "
      :column="2"
      :size="size"
      border
    >
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          选手名
        </template>
        {{ player.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-male"></i>
          性别
        </template>
        {{ player.gender }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-watch"></i>
          年龄
        </template>
        {{ player.age }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          基础速度
        </template>
        {{ player.speed }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-goods"></i>
          基础负重
        </template>
        {{ player.weight }}
      </el-descriptions-item> </el-descriptions
    ><br />

    <h2 style="">参赛信息</h2>
    <download-excel
      class="export-excel-wrapper"
      :data="records"
      :fields="json_fields"
      type="xls"
      name="参赛信息.xls"
      ><el-button type="info">下载.xls格式到本地</el-button> </download-excel
    ><br />
    <el-table :data="records">
      <el-table-column prop="dateOfGame" label="比赛时间"> </el-table-column>
      <el-table-column prop="gameMapName" label="比赛地图"> </el-table-column>
      <el-table-column prop="league" label="排名"> </el-table-column>
      <el-table-column prop="gameSpeed" label="比赛速度"> </el-table-column>
      <el-table-column prop="commentary" label="比赛讲解">
      </el-table-column> </el-table
    ><br /><br />

    <el-row>
      <el-button type="danger" @click="deleteplayer(player.id)">删除</el-button>
      <el-button type="success" @click="backToSearch()">返回</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "playerdetails",
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
        比赛解说: "commentary",
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
    //根据点击详细的id返回运动员的详细信息
    fetchplayer(id) {
      /*
      this.$http
        .get("http://localhost:3000/players/" + id)
        .then(function (response) {
          this.player = response.body;
        });
      */
      this.$axios.get("/players/" + id).then((result) => {
        this.player = result.data;
      });
    },
    //根据运动员的id筛选出运动员的参赛记录
    fetchRecord(id) {
      /*
      this.$http
        .get("http://localhost:3000/playerRecord?playerId=" + id)
        .then(function (response) {
          this.records = response.body;
        });
      */
      this.$axios.get("/playerRecord?playerId=" + id).then((result) => {
        this.records = result.data;
      });
    },
    //根据运动的id删除相应的运动员
    deleteplayer(id) {
      /*
      this.$http
        .delete("http://localhost:3000/players/" + id)
        .then(function (response) {
          this.$router.push({
            path: "/queryGameScore",
            query: { alert: "运动员删除成功" },
          });
        });
      */
      this.$axios.delete("/players/" + id).then((result) => {
        this.$router.push({
          path: "/queryGameScore",
          query: { alert: "运动员删除成功" },
        });
      });
    },
    backToSearch() {
      this.$router.push("/queryGameScore");
    },
  },
  created() {
    this.fetchplayer(this.$route.params.id);
    this.fetchRecord(this.$route.params.id);
  },
};
</script>


<style scoped>
.detail {
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