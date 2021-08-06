<template>
  <div class="row">
    <div class="card" v-show="objData.users.length" v-for="user in objData.users" :key="user.login">
      <a v-bind:href="user.html_url" target="_blank">
        <img v-bind:src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
      <h1 v-show="objData.isFirst">欢迎使用</h1>
    <!-- 展示加载中 -->
      <h1 v-show="objData.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
      <h1>{{objData.errorMessage}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      objData: {
      isFirst: true,
      isLoading: false,
      errorMessage: '',
      users: []
      }
    };
  },
  mounted() {
    this.$bus.$on("updataStatus", (obj) => {
      console.log("updataStatus被触发了", obj);
      // this.isFirst = isFirst
      // this.isLoading = isLoading
      // this.errorMessage = errorMessage
      // // 拿到从Search组件中传递过来的数据，并存储到users数组中
      // this.users = users
      // ...this.objData会把自己所有的属性和...obj中所有的属性进行对比，相同的key，不同的value值，已obj的值为准
      // this.objData = {...this.objData, ...obj}
      this.objData = obj
    });
  },
  methods: {},
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>