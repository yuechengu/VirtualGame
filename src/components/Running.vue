<template>
  <div class="running">
    <h1>运动员比赛</h1>
    <el-form ref="form" :model="form">
      <el-form-item label="比赛名称"><br>
        <el-input v-model="form.gameName"></el-input>
      </el-form-item>
      <el-form-item label="参赛人员">
        <!-- value是每个运动员的id -->
        <el-select v-model="form.runnerSelected" multiple placeholder="请选择选手">
          <el-option
            v-for="item in runnerOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比赛地图">
        <!-- value是每个地图的id -->
        <el-select v-model="form.mapSelected" collapse-tags placeholder="请选择地图">
          <el-option
            v-for="item in mapOptions"
            :key="item.mapId"
            :label="item.mapName"
            :value="item.mapId"
          >
          </el-option>
        </el-select>          
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="startGame()">开始</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //加载的选手
      runnerOptions: [],
      //加载的地图
      mapOptions: [],
      //表单
      form: {
        gamename: "",
        runnerSelected: [],
        mapSelected: "",
      }     
    };
  },

  methods: {
    //加载运动员
    fetchRunners() {
      this.$http.get("http://localhost:3000/runners").then(function (response) {
        console.log(
          "This request succeeded! Here is the response for runners:"
        );
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
      this.$http
        .post("http://localhost:3000/games", JSON.stringify(this.form), {
          emulateJSON: true,
        })
        .then(function (response) {
          console.log("This request succeeded! Here is the response for start running:");
        });
      this.$router.push({
        path: "/queryRace/result/" + 1,
        params: {
          gameid: 1
        },
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
.running {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  float: left;
  position: relative;
  width: 30%;
  left: 35%;
}
</style>