<template>
  <div class="school">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
   return {

    }
  },
  // props: ['name', 'sex', 'age'] // 简单接收
  // 接收的同时，对类型进行限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }
  // 接收的同时对数据进行限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, // 类型
      required: true //是否必填
    },
    age: {
      type: Number, 
      default: 99 //默认值
    },
    sex: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  /* .school {
    background-color: blue;
  } */
</style>