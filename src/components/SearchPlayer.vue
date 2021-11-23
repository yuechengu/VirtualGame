<template>
  <div class="playerAll">
    <el-alert v-if="alert" v-bind:title="alert" type="success"> </el-alert>
    <h1>搜索运动员</h1>
    <download-excel
      class="export-excel-wrapper"
      :data="playerAll"
      :fields="player_fields"
      type="xls"
      name="选手信息.xls"
      ><el-button type="info">下载.xls格式到本地</el-button> </download-excel
    ><br />
    <el-row>
      <el-input placeholder="请输入姓名检索" v-model="filterInput"></el-input>
    </el-row>

    <el-table
      :data="filterBy(playerAll, filterInput)"
      :default-sort="{ prop: 'id', order: 'ascending' }"
    >
      <el-table-column prop="id" label="运动员Id" sortable> </el-table-column>
      <el-table-column prop="name" label="姓名" sortable> </el-table-column>
      <el-table-column prop="gender" label="性别" sortable> </el-table-column>
      <el-table-column prop="age" label="年龄" sortable> </el-table-column>
      <el-table-column prop="gameSpeed" label="比赛速度" sortable>
      </el-table-column>
      <el-table-column prop="winCount" label="获胜次数" sortable>
      </el-table-column>
      <!-- 目前的操作，只提供查看功能，后续会增加编辑功能 -->
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-link
            ><router-link
              class="btn btn-default"
              v-bind:to="'/queryGameScore/playerDetail/' + scope.row.id"
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
  name: "playerAll",
  data() {
    return {
      playerAll: [],
      player_fields: {
        玩家ID: "id",
        玩家姓名: "name",
        性别: "gender",
        速度: "speed",
        负重: "weight",
        比赛速度: "gameSpeed",
        获胜次数: "winCount",
      },
      alert: "",
      filterInput: "",
    };
  },
  methods: {
    fetchplayerAll() {
      /*vue-resource实现
      this.$http.get("http://localhost:3000/players").then(function (response) {
        this.players = response.body;
      });
      */
      this.$axios.get("/players").then((result) => {
        this.playerAll = result.data;
      });
    },
    //根据姓名动态筛选
    filterBy(playerAll, value) {
      return playerAll.filter(function (player) {
        return player.name.match(value);
      });
    },
    //返回主页
    backToMain() {
      this.$router.push("/");
    },
  },
  //当创建vue实例时获取警告，如果该文件是由注册运动员跳转而来
  //则alert返回警告
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchplayerAll();
  },
};
</script>

<style>
.search {
  float: left;
  position: relative;
  width: 60%;
  left: 20%;
}
</style>