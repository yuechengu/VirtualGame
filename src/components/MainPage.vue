<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h5>{{author}}</h5>
    <br>
    <h4>比赛模块</h4>
    <ul>
      <li>
        <router-link v-bind:to="'/registry'">选手注册</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/running'">开始游戏</router-link>
      </li>
    </ul>
    <h4>查询模块</h4>
    <ul>
      <li>
        <router-link v-bind:to="'/queryGameScore'">记录查询</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "虚拟运动会v1.0",
      author: ""
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
