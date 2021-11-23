<template>
  <div class="running">
    <h1>运动员比赛</h1>
    <br />
    <el-form ref="running" :model="form">
      <el-form-item label="参赛人员">
        <!-- value是每个运动员的id -->
        <el-select v-model="form.players" multiple placeholder="请选择选手">
          <el-option
            v-for="item in playerOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比赛地图">
        <!-- value是每个地图的mapName -->
        <el-select
          v-model="form.mapName"
          collapse-tags
          placeholder="请选择地图"
        >
          <el-option
            v-for="item in mapOptions"
            :key="item.mapId"
            :label="item.mapName"
            :value="item.mapName"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <br /><br />
    <el-button type="primary" @click="startGame()">开始</el-button>
    <!-- <el-button type="info" @click="onReset('form')">重置</el-button> -->
    <el-button type="success" @click="backToMain()">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //加载的选手
      playerOptions: [],
      //加载的地图
      mapOptions: [],
      //表单
      form: {
        mapName: "",
        players: [],
      },
    };
  },

  methods: {
    //加载运动员
    fetchplayers() {
      /*vue-resource实现
      this.$http.get("http://localhost:3000/players").then(function (response) {
        console.log(
          "This request succeeded! Here is the response for players:"
        );
        this.playerOptions = response.body;
      });
      */
      this.$axios.get("/players").then((result) => {
        this.playerOptions = result.data;
      });
    },
    //加载地图
    fetchMaps() {
      /*vue-resource办法实现
         this.$http.get("http://localhost:3000/maps").then(function (response) {
         console.log("This request succeeded! Here is the response for maps:");
         this.mapOptions = response.body;
       });
      */
      this.$axios.get("/maps").then((result) => {
        this.mapOptions = result.data;
      });
    },
    //axios开始比赛，post方法
    startGame() {
      console.log(JSON.stringify(this.form));
      this.$axios
        .post("/sports/running", JSON.stringify(this.form))
        .then((result) => {
          console.log(
            "This request succeeded! Here is the response for start running:"
          );
          console.log(result.data);
        });
    },
    backToMain() {
      this.$router.push("/");
    },
    //重置方法
    onReset(FormName) {
      this.$refs[FormName].resetFields();
      this.$message({
        showClose: true,
        message: "信息已被重置",
        type: "warning",
      });
    },
  },
  created() {
    this.fetchplayers();
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