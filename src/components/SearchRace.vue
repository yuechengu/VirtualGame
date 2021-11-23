<template>
  <div class="search">
    <h1>搜索比赛记录</h1>
    废弃页面
    <el-table :data="games" style="width: 95%">
      <el-table-column prop="id" label="比赛ID"> </el-table-column>
      <el-table-column prop="gameName" label="比赛名称"> </el-table-column>
      <el-table-column prop="mapSelected" label="地图名"> </el-table-column>
      <el-table-column prop="runnerSelected" label="参赛人员"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-link
            ><router-link
              class="btn btn-default"
              v-bind:to="'/queryRace/result/' + scope.row.id"
              >查看</router-link
            ><i class="el-icon-view el-icon--right"></i
          ></el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "games",
  data() {
    return {
      games: [],
      alert: "",
    };
  },
  methods: {
    fetchGames() {
      this.$http.get("http://localhost:3000/games").then(function (response) {
        console.log("This request is succeed! Here is the response:");
        this.games = response.body;
      });
    },
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchGames();
  },
};
</script>

<style>
</style>