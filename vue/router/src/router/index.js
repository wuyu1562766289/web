import Vue from 'vue'
import Router from 'vue-router'
import pageA from '../views/pageA'
// import pageB from '../views/pageB'
import Test from '../views/Test'

// 安装路由到vue
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/a'
  },
  {
    // path: '/a',
    // beforeRouterUpdate
    path: '/a:id',
    name: 'pageA',
    /**
     * 路由独享守卫：写在配置里
     * 触发时间处于beforeEach与beforeResolve之间，在进入这个路由之前调用
     */
    beforeEnter: (to, from, next) => {
      // ...
      window.console.log('before enter', to, from)
      next()
    },
    components: {
      default: pageA,
      wx: Test
    }
  },
/*   {
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
  } */
]

export default new Router({
  // seo:搜索引擎优化
  // sem：搜索引擎营销
  // 修改url显示（hash会显示#，不利于网站推广）
  mode: 'history',
  routes
})