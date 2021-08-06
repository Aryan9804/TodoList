<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "qwer",
      address: "贵州",
    };
  },
  mounted() {
    // 订阅完一个消息之后，都会返回一个订阅id
    //   this.subId = pubsub.subscribe('hello', function(messageName, data) {
    //     console.log('有人发布了消息，hello消息的回调函数被触发了。回调函数形参接收到的数据分别为消息名：', messageName,"数据为：", data);
    //   })
    // },
    // 由于回调函数不使用箭头函数的写法，会导致this指向为undefined，所以建议使用回调函数使用箭头函数的写法，此时this指向当前组件实例对象vc
    // 也可以把回调函数在methods里面配置，然后再this.xxx,这个方法也可以把this指向调整为当前组件的实例对象
    this.pId = pubsub.subscribe("hello", (messageName, data) => {
      console.log(
        "有人发布了消息，hello消息的回调函数被触发了。回调函数形参接收到的数据分别为消息名：",
        messageName,
        "数据为：",
        data
      );
    });
  },
  beforeDestroy() {
    // 停止订阅hello消息
    pubsub.unsubscribe(this.pId);
  },
};
</script>

<style>
/* .school {
    background-color: blue;
  } */
</style>