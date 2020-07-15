/* eslint-disable import/first */
/* eslint-disable import/no-duplicates */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* mint-ui开始 */
// 引入Mint-ui
// eslint-disable-next-line import/first
import MintUI from 'mint-ui'
// 安装插件
Vue.use(MintUI)
// 引入css
// eslint-disable-next-line import/first
import 'mint-ui/lib/style.css'

// eslint-disable-next-line import/first
import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

import { Tabbar, TabItem } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

// 引入全局样式
import '../static/css/global.css'

import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
/* mint-ui结束 */

/* axios开始 */
import Axios from 'axios'
// 引入 自己的插件安装器
import Installer from '@/plugins/installer'
Vue.use(Installer)
// 给Vue的原型挂载$axios属性
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = 'https://api.jisuapi.com/'
// 配置请求的设置
// Axios.defaults.headers.post['Content-type'] = 'application/json'
/** axios结束 */

// 全局组件 开始
import MyUl from './components/common/MyUl'
Vue.component(MyUl.name, MyUl)
import MyLi from './components/common/MyLi'
Vue.component(MyLi.name, MyLi)
import NavBar from './components/common/NavBar'
Vue.component(NavBar.name, NavBar)
// 全局组件 结束

// 定义全局过滤器 开始
import Moment from 'moment'
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})
// 定义全局过滤器 结束

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
