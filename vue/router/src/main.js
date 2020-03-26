import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/**
 * 全局守卫：每次路由跳转都会被触发
 *  */
// 全局前置守卫，当一个导航触发时，全局前置守卫按照创建顺序调用（数据校验时比较有用）
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // 判断当前用户是否登录，没有的话跳转到登录页面
  if (to.fullPath === "/shoppingCart") {
    next('/login')
  }
  window.console.log('before each', to, from)
  next()
})
// 全局解析守卫，和router.beforeEach类似，区别是在导航被确认之前，同时在所有组件内守卫和
// 异步路由组件被解析之后，解析守卫就被调用
// 时间触发比前置钩子晚一些
router.beforeResolve((to, from, next) => {
  window.console.log('before resolve', to, from)
  next()
})
// 全局后置钩子
router.afterEach((to, from) => {
  window.console.log('after each', to, from)
  // 最后一个，不需要next
  // next()
})
/* */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
