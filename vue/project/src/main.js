import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from './wrouter-test'

Vue.config.productionTip = false

// render函数
{/* <div id="box" class="test"><span>aaa</span></div> */}
Vue.component("comp", {
  // 因为是webpack环境，编译打包后浏览器环境不带编译器，所以不能使用template
  // template: `<div id="box" class="test"><span>aaa</span></div>`
  render(h) {
    return h("div", {class: {test: true}, attrs: { id: "box"}}, [h("span", "aaa")])
  }

  // 可以使用jsx方式
  // render(h) {
  //   return <div id="box" class="test"><span>aaa</span></div>
  // }
})

new Vue({
  // router,
  router: VueRouter,
  render: h => h(App)
}).$mount('#app')
