<template>
  <div class="running">
    <h1>运动员比赛</h1>
    <br />
    <el-form ref="runningForm" :model="form">
      <el-form-item label="参赛人员">
        <!-- value是每个运动员的id -->
        <el-select
          v-model="form.players"
          multiple
          placeholder="请选择选手"
          style="width: 100%"
        >
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
          style="width: 100%"
        >
          <el-option
            v-for="(val, key) in this.mapOptions"
            :key="key"
            :label="val"
            :value="val"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <br /><br />
    <el-button type="primary" @click="startGame()">开始</el-button>
    <el-button @click="resetRunning()">重置</el-button>
    <el-button type="info" @click="backToMain()">返回</el-button>

    <!-- el-dialog 是弹窗样式，title 绑定弹窗的标题内容，visible 绑定弹窗是否展示 -->
    <el-dialog title="比赛结果" :visible.sync="dialogVisible">
      <el-table
        :data="records"
        v-loading="loading"
        element-loading-text="比赛进行中，请稍等片刻~"
        element-loading-spinner="el-icon-loading"
        style="width: 100%"
      >
        <el-table-column prop="playerId" label="参赛人ID"> </el-table-column>
        <el-table-column prop="league" label="排名"> </el-table-column>
        <el-table-column prop="gameSpeed" label="比赛中速度"> </el-table-column>
        <el-table-column prop="gameCommentary" label="比赛描述">
        </el-table-column>
      </el-table>
      <br /><br />
      <el-row>
        <el-button type="info" @click="backToRunning()">返回</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //加载的选手
      playerOptions: [],
      //加载的地图
      mapOptions: {},
      //表单
      form: {
        mapName: "",
        players: [],
      },
      //弹窗是否出现
      dialogVisible: false,
      //是否加载遮罩
      loading: false,
      //结果表
      records: [],      
    };
  },

  methods: {
    //开始比赛，post方法
    startGame() {
      if (!this.form.players || !this.form.mapName) {
        this.$message({
          showClose: true,
          message: "请输入完整信息",
          type: "error",
        });
      } else {
        //弹出对话框，显示加载中
        this.dialogVisible = true;
        this.loading = true;
        //控制台看一下提交的表单
        console.log(JSON.stringify(this.form));
        //发出post请求
        this.$api.gameService.startBy(this.form)
          .then((result) => {
            console.log("This request succeeded! Here is the response of running:");          
            //控制台看一下返回的表单
            console.log(result.data);
            //返回比赛结果表，并提供下载
            this.records = response.body;
          })        
      };
    },  
    backToMain() {
      this.$router.push("/");
    },
    backToRunning() {
      this.dialogVisible = false;
    },
    //重置方法
    resetRunning() {
      this.form.players=[];
      this.form.mapName="";
    },
    //加载运动员
    fetchplayers() {
      this.$api.playerService.playerList().then((result) => {
        this.playerOptions = result.data;
      });;
    },
    //加载地图
    fetchMaps() {
      this.$api.mapService.mapList().then((result) => {
        this.mapOptions = result.data;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  float: left;
  position: relative;
  width: 50%;
  left: 25%;
  height: 100%;
}
</style>