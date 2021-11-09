<template>
  <div class="search">
    <div class="search2">
      <h1>搜索运动员</h1>
      <el-input placeholder="请输入姓名"></el-input>
      <el-table :data="runners">
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="gender" label="性别"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="averageSpeed" label="基础速度">
        </el-table-column>
        <el-table-column prop="addWeight" label="基础负重"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small"
              ><router-link
                class="btn btn-default"
                v-bind:to="'/searchrunner/runnerdetail/' + scope.row.id"
                >查看</router-link
              ></el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "runners",
  data() {
    return {
      runners: [],
      alert: "",
    };
  },
  methods: {
    fetchRunners() {
      this.$http.get("http://localhost:3000/runners").then(function (response) {
        console.log("This request is succeed! Here is the response:");
        this.runners = response.body;
      });
    },
  },
  created() {
    this.fetchRunners();
  },
};
</script>

<style>
.search {
  float: left;
  position: relative;
  left: 50%;
}
.search2 {
  position: relative;
  left: -50%;
}
</style>