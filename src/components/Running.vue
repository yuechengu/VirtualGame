<template>
  <div class="running">
    <h1>请选择运动员和地图</h1><br>
    <el-select v-model="player" multiple placeholder="请选择选手">
      <el-option
        v-for="item in playerOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="map"
      collapse-tags
      style="margin-left: 20px"
      placeholder="请选择地图"
    >
      <el-option
        v-for="item in mapOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <br>
    <br>
    <br>
    <el-button type="primary" @click="startGame()">开始比赛</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: [
        { key: "1", label: "张三" },
        { key: "2", label: "李四" },
        { key: "3", label: "王五" },
      ],
      mapOptions: [
        { key: "1", label: "图1" },
        { key: "2", label: "图2" },
        { key: "3", label: "图3" },
      ],
      player: [],
      map: [],
      nextGameForm: {
        playerSelected: [],
        maySelected: "",
      },
    };
  },
    
  methods: {
    //开始比赛
    startGame() {
      let form = null;
      form = this.nextGameForm;
      const params = form;
      const res = this.startGame(params);//这地方有问题，要改
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
};
</script>

<style>
</style>