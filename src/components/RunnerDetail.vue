<template>
  <div class="detail">
    <h1>
      基本信息
    </h1>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="2">
        <router-link to="/queryGameScore"
          ><el-button type="primary">返回</el-button></router-link>
      </el-col>
      <el-col :span="2"><el-button type="danger" v-on:click="deleteRunner(runner.id)">删除</el-button></el-col>
    </el-row>

<el-descriptions class="margin-top" title=" " :column="2" :size="size" border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        选手名
      </template>
      {{runner.name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-male"></i>
        性别
      </template>
      {{runner.gender}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-watch"></i>
        年龄
      </template>
      {{runner.age}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        基础速度
      </template>
      {{runner.speed}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-goods"></i>
        基础负重
      </template>
      {{runner.weight}}
    </el-descriptions-item>
  </el-descriptions>


<h2 style="">参赛信息</h2>

      <el-table :data="records">
        <el-table-column prop="dateOfGame" label="比赛时间"> </el-table-column>
        <el-table-column prop="gameMapName" label="比赛地图"> </el-table-column>
        <el-table-column prop="league" label="排名"> </el-table-column>
        <el-table-column prop="gameSpeed" label="比赛速度"> </el-table-column>
        <el-table-column prop="commentary" label="比赛讲解"> </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: "runnerdetails",
  data() {
    return {
      runner: "",
      //用来存放每个运动员的详细信息
      records: "",
      //用来存放运动员的每条记录
      recordNumber: ""
    };
  },
  methods: {
    //根据点击详细的id返回运动员的详细信息
    fetchRunner(id) {
      this.$http
        .get("http://localhost:3000/runners/"+id)
        .then(function (response) {
          this.runner = response.body;
        });
    },
    //根据运动员的id筛选出运动员的参赛记录
    fetchRecord(id) {
      this.$http
        .get("http://localhost:3000/runnerRecord?playerId="+id)
        .then(function (response) {
          this.records = response.body;
        });
    },
    deleteRunner(id){
    	this.$http.delete("http://localhost:3000/runners/"+id)
    		.then(function(response){
    			this.$router.push({path:"/queryGameScore",query:{alert:"运动员删除成功"}});
    		})
    }
  },
  created() {
    this.fetchRunner(this.$route.params.id);
    this.fetchRecord(this.$route.params.id);
  },
};
</script>


<style scoped>
.detail {
  float: left;
  position: relative;
  width: 60%;
  left: 20%;
}
</style>