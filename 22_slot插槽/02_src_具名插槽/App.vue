<template>
  <div class="container">
    <Category title="美食">
      <!-- 
      vue解析了该img标签，但是不知道在组件模板中的那个地方进行展示，
      所以需要在该组件中定义一个插槽，这个插槽的位置就是该标签展示的地方
      -->
      <img slot="barbecue" src="./assets/烧烤.jpg" alt="" />
      <img slot="chafingDish" src="./assets/火锅.jpg" alt="" />
    </Category>

    <Category title="游戏">
      <ul slot="barbecue">
        <li v-for="(item, index) in listData.games" :key="index">{{ item }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <ul slot="chafingDish">
        <li v-for="(item, index) in listData.films" :key="index">{{ item }}</li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      listData: {
        foods: ["火锅", "烧烤", "小龙虾", "牛排"],
        games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
        films: ["《教父》", "《拆弹专家》", "《你好！李焕英》", "《大话西游》"],
      }
      
    };
  },
  methods: {},
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
</style>