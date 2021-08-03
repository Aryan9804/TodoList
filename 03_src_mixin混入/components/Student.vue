<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>   
    <h2>学生年龄：{{age}}</h2>   
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  name: '',
  data () {
   return {
     name: '张三',
     age: 20
    }
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>