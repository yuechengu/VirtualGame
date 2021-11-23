<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <h4 class="box" ref="box">比赛模块</h4>
    <ul class="box" ref="box">
      <li>
        <router-link to="/registry">选手注册</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/running'">开始游戏</router-link>
      </li>
    </ul>
    <h4 class="box" ref="box">查询模块</h4>
    <ul class="box" ref="box">
      <li>
        <router-link v-bind:to="'/queryGameScore'">选手查询</router-link>
      </li>
      <!-- <li>
        <router-link v-bind:to="'/queryRace'">比赛查询</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
//导入gsap模块之TweenMax
import { TweenMax } from "gsap";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "虚拟运动会",
      author: "",
    };
  },
  mounted() {
    const box = this.$refs["box"];
    new TweenMax.staggerFromTo(".box",0.8,{
        x: -200,
        alpha: 0.2,
      },
      {
        x: 0,
        alpha: 1,
      },0.2);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  float: left;
  position: relative;
  width: 80%;
  left: 10%;

}

h5 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2c3e50;
}

</style>
