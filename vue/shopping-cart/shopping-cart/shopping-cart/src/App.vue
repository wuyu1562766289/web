<template>
  <div id="app">
    <h1>{{title}}</h1>
    <hr />
    <div>
      <h2>添加课程</h2>
      <div>
        <label for>课程名称：</label>
        <input type="text" v-model="courseInfo.name" />
      </div>
      <div>
        <label for>课程价格：</label>
        <input type="text" v-model="courseInfo.pice" />
      </div>
      <div>
        <button @click="addCourseToList">添加课程到列表</button>
      </div>
    </div>
    <div>
      <h2>课程列表</h2>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
        </tr>
        <tr v-for="(item, index) in courseList" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.pice}}</td>
          <td>
            <button @click="addCourseToCart(index)">添加到购物车</button>
          </td>
        </tr>
      </table>
    </div>
    <cart :courseItem="courseItem" @removeItem="remove(index)"></cart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cart from "./components/Cart";

export default {
  name: "app",
  components: {
    // HelloWorld
    Cart
  },
  data() {
    return {
      title: "王兴-购物车",
      courseInfo: {
        name: "",
        pice: ""
      },
      courseItem: [],
      courseList: [
        { id: 0, name: "web全栈开发架构师", pice: 9998 },
        { id: 1, name: "Python人工智能", pice: 8888 }
      ]
    };
  },
  methods: {
    addCourseToList() {
      this.courseList.push(this.courseInfo);
    },
    addCourseToCart(index) {
      let item = this.courseList[index];
      let isHasCourse = this.courseItem.find(x => x.id == item.id);
      if (isHasCourse) {
        isHasCourse.number += 1;
      } else {
        this.courseItem.push({
          ...item,
          number: 1,
          isActive: true
        });
      }
    },
    remove(index) {
      this.courseItem.splice(index, 1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
