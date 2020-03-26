import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据
  state: {
    count: 1
  },
  // 操作数据
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  // 什么时候来触发（异步的）
  actions: {
    increment: ({commit}) => {
      commit('increment')
    },
    decrement: (obj) => {
      // commit('decrement')
      window.console.log(obj)
      obj.commit('decrement')
    }
  },
  // 维护多套数据
  modules: {
  }
})
