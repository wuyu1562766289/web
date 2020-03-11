<template>
  <div class="container">
    <div>
      <h2>商品列表</h2>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <nuxt-link :to="`/detail/${good.id}`">{{good.text}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  head() {
    return {
      title: "水果",
      meta: [
        { name: "description", hid: "description", content: "set page meta" }
      ],
      link: [{ rel: "favicon", href: "favicon.icon" }]
    };
  },
  // 前后端都会执行，时间点在beforeCreate之前
  // 传递一个上下文对象
  // 会和data合并
  // 里面不能使用this访问组件实例
  async asyncData({ $axios, error }) {
    try {
      const { ok, goods } = await $axios.$get("/api/goods");
      console.log(goods);
      
      if (ok) {
        return { goods };
      }

      // 错误处理
      error({ statusCode: 400, message: "数据查询失败" });
    } catch (error) {
      error(error);
    }
  }
  // data() {
  //   return {
  //     goods: [
  //       { id: 1, text: "苹果", price: 100 },
  //       { id: 2, text: "香蕉", price: 500 }
  //     ]
  //   };
  // }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
