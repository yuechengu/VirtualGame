<template>
  <div class="registry">
    <h1>运动员注册</h1>
    <el-form ref="runner" :model="runner">
      <el-form-item label="姓名" prop="name"
        ><br />
        <el-input v-model="runner.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="name">
        <el-radio-group v-model="runner.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age"
        ><br />
        <el-slider v-model="runner.age" show-input> </el-slider>
      </el-form-item>
      <el-form-item label="基础速度" prop="speed"
        ><br />
        <el-slider v-model="runner.speed" :step="10" show-stops> </el-slider>
      </el-form-item>
      <el-form-item label="基础负重" prop="weight"
        ><br />
        <el-slider v-model="runner.weight" :step="10" show-stops> </el-slider>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('runner')">注册</el-button>
        <el-button @click="onReset('runner')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "runner",
  data() {
    return {
      runner: { name: "", gender: "", age: 0, speed: 0, weight: 0 },
      alert: "",
    };
  },
  methods: {
    //注册方法
    onSubmit(FormName) {
      if (!this.runner.name || !this.runner.gender || !this.runner.age) {
        this.$message({
          showClose: true,
          message: "请输入完整信息",
          type: "error",
        });
      } else {
        let newRunner = {
          name: this.runner.name,
          gender: this.runner.gender,
          age: this.runner.age,
          speed: this.runner.speed,
          weight: this.runner.weight,
        };
        this.$http
          .post("http://localhost:3000/runners", newRunner)
          .then(function (response) {
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
  },
};
</script>

<style>
.registry {
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