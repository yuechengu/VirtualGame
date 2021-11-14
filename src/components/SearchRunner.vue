<template>
  <div class="search">
    <el-alert v-if="alert" v-bind:title="alert" type="success"> </el-alert>
    <h1>搜索运动员</h1>
    <br />

    <el-input placeholder="请输入姓名" v-model="filterInput"></el-input>
    <el-table
      :data="filterBy(runners, filterInput)"
      :default-sort="{ prop: 'name', order: 'descending' }"
    >
      <el-table-column prop="name" label="姓名" sortable> </el-table-column>
      <el-table-column prop="gender" label="性别" sortable> </el-table-column>
      <el-table-column prop="age" label="年龄" sortable> </el-table-column>
      <el-table-column prop="averageSpeed" label="竞赛平均速度" sortable>
      </el-table-column>
      <el-table-column
        prop="winCounts"
        label="获胜次数"
        sortable
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-link
            ><router-link
              class="btn btn-default"
              v-bind:to="'/queryGameScore/runnerdetail/' + scope.row.id"
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
  name: "runners",
  data() {
    return {
      runners: [],
      alert: "",
      filterInput: "",
    };
  },
  methods: {
    fetchRunners() {
      this.$http.get("http://localhost:3000/runners").then(function (response) {
        this.runners = response.body;
      });
    },
    filterBy(runners, value) {
      return runners.filter(function (runner) {
        return runner.name.match(value);
      });
    },
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchRunners();
  },
};
</script>

<style>
</style>