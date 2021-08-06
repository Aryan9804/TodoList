<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 挖一个坑，等使用者来填充 -->
      <slot name="barbecue">烧烤插槽的默认值</slot>
      <slot name="chafingDish">火锅插槽的默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data () {
   return {
     
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    text-align: center;
    background-color: orange;
  }
</style>