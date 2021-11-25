<template>
  <div>
    <h1>比赛结果{{ record1 }}</h1>

    <el-table
      :data="records"
      v-loading="loading"
      element-loading-text="比赛结果计算中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="width: 95%"
    >
      <el-table-column prop="playerId" label="参赛人ID"> </el-table-column>
      <el-table-column prop="league" label="排名"> </el-table-column>
      <el-table-column prop="gameSpeed" label="比赛中速度"> </el-table-column>
      <el-table-column prop="gameCommentary" label="比赛描述"> </el-table-column>
    </el-table>
    <br /><br />
    <el-row>
      <el-button type="primary" @click="backToSearch()">返回</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "records",
  data() {
    return {
      loading: false,
      records: "",
    };
  },
  methods: {
    fetchGame(id) {
      this.$http
        .get("http://localhost:3000/runnerRecord?gameId=" + id)
        .then(function (response) {
            if(response.body == []){
              this.loading = true;
            }
            this.records = response.body;
        });
    },
    backToSearch() {
      this.$router.push("/queryRace");
    },
  },
  created() {
    this.fetchGame(this.$route.params.gameid);
  },
};
</script>

<style>
</style>