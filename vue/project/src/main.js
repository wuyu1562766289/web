import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from './wrouter-test'

Vue.config.productionTip = false

new Vue({
  // router,
  router: VueRouter,
  render: h => h(App)
}).$mount('#app')
