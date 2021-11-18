<template>
  <div class="running">
    <!-- key对应的是每个运动员的id -->
    <el-select v-model="runner" multiple placeholder="请选择选手">
      <el-option
        v-for="item in runnerOptions"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      >
      </el-option>
    </el-select>
    <!-- key对应的是每个地图的id -->
    <el-select v-model="map" collapse-tags style="margin-left: 20px" placeholder="请选择地图">
      <el-option
        v-for="item in mapOptions"
        :key="item.mapId"
        :label="item.mapName"
        :value="item.mapName"
      >
      </el-option>
    </el-select><br><br><br>

    <el-input v-model="input" placeholder="请为比赛命名"></el-input>
    <el-button type="primary" @click="startGame()">开始</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      runnerOptions: [],
      mapOptions: [],
      runner: [],
      map: [],
      //※要改
      //提交给后台的比赛信息表，这里要改
      GameForm: {
        runnerSelected: [],
        mapSelected: [],
      },
    };
  },

  methods: {
    //加载注册运动员
    fetchRunners() {
      this.$http.get("http://localhost:3000/runners").then(function (response) {
        console.log("This request succeeded! Here is the response for runners:");
        this.runnerOptions = response.body;
      });
    },
    //加载地图
    fetchMaps() {
      this.$http.get("http://localhost:3000/maps").then(function (response) {
        console.log("This request succeeded! Here is the response for maps:");
        this.mapOptions = response.body;
      });
    },    
    //开始比赛
    startGame() {
      let form = null;
      form = this.GameForm;
      console.log(this.GameForm)
      const params = form;
      //※要改
      //这地方有问题，要改
      const res = this.startGame(params); 
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