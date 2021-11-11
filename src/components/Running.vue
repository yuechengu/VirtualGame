<template>
  <div class="running">
    <h1>请选择运动员和地图</h1>
    <br />
    <!-- key对应的是每个运动员的id -->
    <el-select v-model="player" multiple placeholder="请选择选手">
      <el-option
        v-for="item in playerOptions"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      >
      </el-option>
    </el-select>

    <el-select v-model="map" collapse-tags style="margin-left: 20px" placeholder="请选择地图">
      <el-option
        v-for="item in mapOptions"
        :key="item.mapId"
        :label="item.mapName"
        :value="item.mapName"
      >
      </el-option>
    </el-select>
    <br />
    <br />
    <br />
    <el-button type="primary" @click="startGame()">开始比赛</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: [],
      mapOptions: [],
      player: [],
      map: [],
      //提交给后台的比赛信息，这里要改
      nextGameForm: {
        playerSelected: [],
        maySelected: [],
      },
    };
  },

  methods: {
    //加载注册运动员
    fetchRunners() {
      this.$http.get("http://localhost:3000/runners").then(function (response) {
        console.log("This request is succeed! Here is the response for runners:");
        this.playerOptions = response.body;
      });
    },
    //加载地图
    fetchMaps() {
      this.$http.get("http://localhost:3000/maps").then(function (response) {
        console.log("This request is succeed! Here is the response for maps:");
        this.mapOptions = response.body;
      });
    },    
    //开始比赛
    startGame() {
      let form = null;
      form = this.nextGameForm;
      const params = form;
      const res = this.startGame(params); //这地方有问题，要改
      console.log(res);
      if (res.code === "0000") {
        this.$message({
          type: "info",
          message: "开始成功",
        });
        return;
      }
      this.$message({
        type: "error",
        message: "开始失败",
      });
    },
  },
  created() {
    this.fetchRunners();
    this.fetchMaps();
  },
};
</script>

<style>
</style>