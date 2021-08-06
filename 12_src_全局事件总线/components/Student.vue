<template>
  <div>
    <h2>学生姓名：{{name}}</h2>   
    <h2>学生年龄：{{age}}</h2> 
    <button @click="sendStudentName">把学生名给School组件</button>  
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
   return {
     name: '张三',
     age: 20
    }
  },
  methods: {
    sendStudentName() {
      // 触发的事件名为hello，传递的数据为666
      this.$bus.$emit('takeData', this.name)
    }
  }
}
</script>

<style scoped>

</style>