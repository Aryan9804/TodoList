<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
   return {
     name: 'qwer',
     address: '贵州'
    }
  },
  // 挂载完毕之后就开始绑定$bus总线通信
  mounted() {
    // 给$bus绑定hello事件
    this.$bus.$on('takeData', (data)=> {
      console.log('我是School组件，收到了数据', data);
    })
  },
  // 组件用完了之后记得解除绑定
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style>
  /* .school {
    background-color: blue;
  } */
</style>