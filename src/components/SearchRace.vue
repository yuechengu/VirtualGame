<template>
  <div class="search">
  <h1>搜索比赛记录</h1>

    <el-table :data="races" style="width: 95%">
      <el-table-column prop="gameId" label="比赛ID"> </el-table-column>
      <el-table-column prop="dateOfGame" label="比赛时间"> </el-table-column>
      <el-table-column prop="gameMapName" label="地图名"> </el-table-column>
      <el-table-column prop="gameDuration" label="持续时间"> </el-table-column>
      <el-table-column prop="rankFirst" label="冠军"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: "races",
  data() {
    return {
      races: [
        {
          gameId: 1,
          dateOfGame: "2021-11-07",
          gameMapName: "希望平原",
          gameDuration: 29,
          rankFirst:"张三"
        },
      ],
      alert: "",
    };
  },
  methods: {
    fetchRaces() {
      this.$http.get("http://localhost:3000/races").then(function (response) {
        console.log("This request is succeed! Here is the response:");
        this.races = response.body;
      });
    },
  },
};
</script>

<style>
</style>