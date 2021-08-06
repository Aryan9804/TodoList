<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <br>
    <button @click="getCars">获取车辆信息</button>
    <br>
    <button @click="getLocalStudents">获取本地pulic文件夹下的Student内容</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    getStudents() {
      // 请求的时候，需要请求代理服务器的地址和地址
      // ps：代理服务器会自动生成一个端口号与本地一致的端口号
      // http://localhost:8080这个就是代理服务器
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    // 不走代理，走代理服务器本身，也就是public文件夹下去找
    // 不配置请求前缀就是走本地public，本地public没有代理服务器才去转发给服务器
    getLocalStudents() {
      axios.get("http://localhost:8080/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      // 请求的时候要在端口号后面加上配置的请求前缀，目的是让代理服务器直接走转发
      axios.get("http://localhost:8080/api/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      )
    }
  },
};
</script>

<style>
</style>