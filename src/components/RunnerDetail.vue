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
        {{ runner.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-male"></i>
          性别
        </template>
        {{ runner.gender }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-watch"></i>
          年龄
        </template>
        {{ runner.age }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          基础速度
        </template>
        {{ runner.speed }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-goods"></i>
          基础负重
        </template>
        {{ runner.weight }}
      </el-descriptions-item> </el-descriptions
    ><br />

    <h2 style="">参赛信息</h2>

    <el-table :data="records">
      <el-table-column prop="dateOfGame" label="比赛时间"> </el-table-column>
      <el-table-column prop="gameMapName" label="比赛地图"> </el-table-column>
      <el-table-column prop="league" label="排名"> </el-table-column>
      <el-table-column prop="gameSpeed" label="比赛速度"> </el-table-column>
      <el-table-column prop="commentary" label="比赛讲解">
      </el-table-column> </el-table
    ><br /><br />

    <el-row>
        <el-button type="danger" @click="deleteRunner(runner.id)"
          >删除</el-button
        >
        <el-button type="primary" @click="backToSearch()">返回</el-button>
        <el-button type="info"
            >
        <download-excel
          class="export-excel-wrapper"
          :data="records"
          :fields="json_fields"
          type="xls"
          name="下载.xls"
          >下载
        </download-excel></el-button
          >
      </el-row>
  </div>
</template>

<script>
export default {
  name: "runnerdetails",
  data() {
    return {
      runner: "",
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
    fetchRunner(id) {
      this.$http
        .get("http://localhost:3000/runners/" + id)
        .then(function (response) {
          this.runner = response.body;
        });
    },
    //根据运动员的id筛选出运动员的参赛记录
    fetchRecord(id) {
      this.$http
        .get("http://localhost:3000/runnerRecord?playerId=" + id)
        .then(function (response) {
          this.records = response.body;
          console.log(this.records);
        });
    },
    //根据运动的id删除相应的运动员
    deleteRunner(id) {
      this.$http
        .delete("http://localhost:3000/runners/" + id)
        .then(function (response) {
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
    this.fetchRunner(this.$route.params.id);
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