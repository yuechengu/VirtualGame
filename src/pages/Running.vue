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
    <el-dialog :title="dialogtitle" :visible.sync="dialogVisible">
      <el-divider>显示比赛过程: {{progressSec}}秒</el-divider>
      <el-row>
        <el-col :span="2">
          <i class="el-icon-user-solid" >{{player1Details.playerName}}</i>
        </el-col>
        <el-col :span="10" align="left">
          <el-progress :percentage="player1Details.processPer" color="#8e71c7"></el-progress>
        </el-col>
        <el-col :span="12" align="left">
          <i class="el-icon-chat-line-square">{{player1Details.processMsg}}</i>
        </el-col>
      </el-row>
      <br />
      <el-row>
        <el-col :span="2">
          <i class="el-icon-user-solid" >{{player2Details.playerName}}</i>
        </el-col>
        <el-col :span="10" align="left">
          <el-progress :percentage="player2Details.processPer" color="#6f7ad3"></el-progress>
        </el-col>
        <el-col :span="12" align="left">
          <i class="el-icon-chat-line-square">{{player2Details.processMsg}}</i>
        </el-col>
      </el-row>
      <br />
      <el-row>
        <el-col :span="2">
          <i class="el-icon-user-solid" >{{player3Details.playerName}}</i>
        </el-col> 
        <el-col :span="10" align="left">
          <el-progress :percentage="player3Details.processPer" color="#67C23A"></el-progress>
        </el-col>
        <el-col :span="12" align="left">
          <i class="el-icon-chat-line-square">{{player3Details.processMsg}}</i>
        </el-col>
      </el-row>
      <br />
      <br /><br />
      <el-button type="primary" @click="clickBtn()" :disabled="processDisplay">显示</el-button>

      <br />
      <el-divider>显示比赛结果</el-divider>
      <el-table
        :data="records"
        v-loading="tableLoading"
        element-loading-text="比赛进行中，请稍等片刻~"
        element-loading-spinner="el-icon-loading"
        style="width: 100%"
      >
        <el-table-column prop="playerName" label="参赛人姓名"> </el-table-column>
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
      tableLoading: true,
      //显示按钮是否可用
      processDisplay: false,
      //过程初始时间
      progressSec : 0,
      //各运动员初始进度和文本
      player1Details: {
          playerName : "张三",
          processPer : 0,
          processMsg : "开始",
      },
      player2Details: {
          playerName : "李四",
          processPer : 0,
          processMsg : "开始",
      },
      player3Details: {
          playerName : "王五",
          processPer : 0,
          processMsg : "开始",
      },
      //结果表
      records: [],
      dialogtitle: "比赛结果"
      //参赛细节表
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
        this.$api.gameService.startBy(this.form).then((result) => {
          console.log(
            "This request succeeded! Here is the response of running:"
          );
          //控制台看一下返回的表单
          console.log(result.data);
          //返回比赛结果表，并提供下载
          this.records = response.body;
        });
      }
    },
    backToMain() {
      this.$router.push("/");
    },
    backToRunning() {
      this.dialogVisible = false;
    },
    //重置方法
    resetRunning() {
      this.form.players = [];
      this.form.mapName = "";
    },
    //加载运动员
    fetchplayers() {
      this.$api.playerService.playerList().then((result) => {
        this.playerOptions = result.data;
      });
    },
    //加载地图
    fetchMaps() {
      this.$api.mapService.mapList().then((result) => {
        this.mapOptions = result.data;
      });
    },
    //获取运动员1的运动细节
    fetchPlayerProcess(processSec){
      this.$http.get("http://localhost:3000/playerProDetails?playerName=%E5%BC%A0%E4%B8%89&processSec="+processSec)
          .then(function(response){
            this.player1Details = response.body[0];
          });
      this.$http.get("http://localhost:3000/playerProDetails?playerName=%E6%9D%8E%E5%9B%9B&processSec="+processSec)
          .then(function(response){
            this.player2Details = response.body[0];
          });
      this.$http.get("http://localhost:3000/playerProDetails?playerName=%E7%8E%8B%E4%BA%94&processSec="+processSec)
          .then(function(response){
            this.player3Details = response.body[0];
          });
    },
    clickBtn() {
      //定义定时器开始时间为0
      var progressSecTemp = 0;
      // //禁用二次点击
      this.processDisplay = true;
      //定一个定时器
      var timer = setInterval(() => {
        //变量一直++
        progressSecTemp++;
        this.fetchPlayerProcess(progressSecTemp);
        //清除定时器
        if (progressSecTemp >= 50) {
          this.$http.get("http://localhost:3000/mockresult")
          .then(function(response){
            this.records = response.body;
          });
          this.tableLoading = false; 
          clearInterval(timer);
        }
        //获取重新赋值
        this.progressSec = progressSecTemp;

      }, 1000);
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