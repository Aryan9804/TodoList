<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyWord: ''
    };
  },
  methods: {
    searchUsers() {
      // 请求前的各个数据的状态
      this.$bus.$emit('updataStatus', {isFirst: false, isLoading:true, errorMessage:'', users: []})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response)=> {
          console.log('请求成功了', response.data.items);
          // 通过全局事件总线向List传递数据
          this.$bus.$emit('updataStatus', {isLoading: false, errorMessage: '', users: response.data.items})
        },
        (error)=> {
          console.log('请求失败了', error.message);
          this.$bus.$emit('updataStatus', {isLoading: false, errorMessage: error.message, users: []})
        }
      )
    },
    chufa() {
      
    }
  },
};
</script>

<style scoped>
</style>