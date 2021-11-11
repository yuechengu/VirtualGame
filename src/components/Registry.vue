<template>
  <div class="registry">
    <h1>运动员注册</h1>
    <el-form ref="form" :model="form">
      <el-form-item label="姓名"><br>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄"><br>
        <el-slider v-model="age" show-input> </el-slider>
      </el-form-item>
      <el-form-item label="平均速度"><br>
        <el-slider v-model="value2" :step="10" show-stops> </el-slider>
      </el-form-item>
      <el-form-item label="负重"><br>
        <el-slider v-model="value2" :step="10" show-stops> </el-slider>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "runners",
  data() {
    return {
      form: {
        name: "",
        age: 0,
        speed: 0,
        weight: 0,
      },
      runners: [],
      alert: "",
    };
  },
  methods: {
    //这里要改
    onSubmit() {
      console.log("submit!");
    },
    //这里要改
    fetchRunners() {
      this.$http.get("http://localhost:3000/runners").then(function (response) {
        console.log("This request is succeed! Here is the response:");
        this.runners = response.body;
      });
    },
  },
  created() {
    this.fetchRunners();
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