<template>
  <div class="details">
    <router-link to="/searchrunner"
      ><el-button type="primary">返回</el-button></router-link
    >
    <h1>
      {{ runner.name }}
      <span style="float: right">
        <el-button v-on:click="deleteRunner(runner.id)">删除</el-button>
      </span>
    </h1>
    <ul>
      <li>
        <span>
          {{ runner.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "runnerdetails",
  data() {
    return {
      runner: "",
    };
  },
  methods: {
    fetchRunner(id) {
      this.$http
        .get("http://localhost:3000/runners/" + id)
        .then(function (response) {
          console.log(response);
          this.runner = response.body;
        });
    },
    deleteRunner(id) {
      this.$http
        .delete("http://localhost:3000/runners/" + id)
        .then(function (response) {
          this.$router.push({ path: "/", query: { alert: "用户删除成功!" } });
        });
    },
  },
  created() {
      console.log(this.$route.params.id);
    this.fetchRunner(this.$route.params.id);
  },
};
</script>


<style scoped>
</style>