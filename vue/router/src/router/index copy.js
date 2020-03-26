import Vue from 'vue'
import Router from 'vue-router'
import pageA from '../views/pageA'
import pageB from '../views/pageB'
import Test from '../views/Test'

// 安装路由到vue
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/a'
  },
  {
    path: '/a',
    name: 'pageA',
    component: pageA
  },
  {
    path: '/b/:id',
    // 使用props属性可以简化取值方式
    props: true,
    component: pageB,
    // 嵌套路由
    children: [
      {
        path: 'test',
        component: Test
      }
    ]
  }
]

export default new Router({
  // 修改url显示（hash会显示#，不利于网站推广）
  mode: 'history',
  routes
})