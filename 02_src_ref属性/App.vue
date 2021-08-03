<template>
  <div>
    <h1 v-text="msg" id="title"></h1>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我获取h1</button>
    <School/>   
    <School/>   
    <School/>   
  </div>
</template>

<script>
import School from './components/School'
export default {
  name: 'App',
  components: {
    School
  },
  data () {
   return {
     msg: '你好你好你好！'
    }
  },
  methods:{
    showDom() {
      console.log(document.getElementById('title'));
      console.log(this.$refs.title);
    }
  }
}
</script>

<style scoped>

</style>