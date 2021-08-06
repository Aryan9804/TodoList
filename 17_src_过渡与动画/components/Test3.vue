<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__bounceOutUp"
    appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">世界</h1>
    </transition-group>
    
  </div>
</template>

<script>
// 引入css库，直接引入路径就可以了
import 'animate.css'
export default {
  name: 'Test3',
  data () {
   return {
     isShow: true
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
  
</style>