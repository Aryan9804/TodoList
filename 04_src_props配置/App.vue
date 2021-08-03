<template>
  <div>
    <Student name="张三" :age='30' sex="男"/>  
  </div>
</template>

<script>
import Student from './components/Student'
export default {
  name: 'App',
  components: {
    Student
  },
  data () {
   return {
     msg: '你好你好你好！'
    }
  },
  
}
</script>

<style scoped>

</style>