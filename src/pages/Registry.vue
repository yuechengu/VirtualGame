<template>
  <div class="registry">
    <h1>运动员注册</h1>
    <el-form ref="player" :model="player">
      <el-form-item label="姓名" prop="name"
        ><br />
        <el-input v-model="player.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="name">
        <el-radio-group v-model="player.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age"
        ><br />
        <el-slider v-model="player.age" show-input> </el-slider>
      </el-form-item>
      <el-form-item label="基础速度" prop="averageSpeed"
        ><br />
        <el-slider v-model="player.averageSpeed" :step="10" show-stops> </el-slider>
      </el-form-item>
      <el-form-item label="基础负重" prop="addWeight"
        ><br />
        <el-slider v-model="player.addWeight" :step="10" show-stops> </el-slider>
      </el-form-item>
    </el-form>

    <br /><br />
    <el-button type="primary" @click="onSubmit('player')">注册</el-button>
    <el-button @click="onReset('player')">重置</el-button>
    <el-button type="info" @click="backToMain()">返回</el-button>
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      player: {
        name: "",
        gender: "",
        age: 0,
        averageSpeed: 0,
        addWeight: 0,
        gameSpeed: 0,
        winCount: 0,
      },
      alert: "",
    };
  },
  methods: {
    //注册方法
    onSubmit(FormName) {
      if (!this.player.name || !this.player.gender || !this.player.age) {
        this.$message({
          showClose: true,
          message: "请输入完整信息",
          type: "error",
        });
      } else {
        let newPlayer = {
          name: this.player.name,
          gender: this.player.gender,
          age: this.player.age,
          averageSpeed: this.player.averageSpeed,
          addWeight: this.player.addWeight,
          gameSpeed: 0,
          winCount: 0,
        };
        //※要改
        //这个地方后台接口返回msg形式不是这样的
        this.$api.playerService.insertPlayer(newPlayer).then((result) => {
          console.log("The post successs");
          this.$refs[FormName].resetFields();
          this.$message({
            showClose: true,
            message: "成功插入信息",
            type: "success",
          });
        });
      }
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
    backToMain() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.registry {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  float: left;
  position: relative;
  width: 50%;
  left: 25%;
}
</style>