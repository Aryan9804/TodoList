<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">世界</h1>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  name: 'Test',
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
  .v-enter-active {
    animation: atguigu 1s;
  }

  .v-leave-active {
    animation: atguigu 1s reverse;
  }

  /* 动画 */
  @keyframes atguigu {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>