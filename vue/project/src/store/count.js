export default {
  // 设置独立的命名空间
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    add(state, num = 1) {
      state.count += num;
    }
  },
  actions: {
    // 实现复杂业务逻辑，类似controller
    // 如用来实现ajax请求
    // asyncAdd({commit}, num = 1) {
    //   setTimeout(() => {
    //     commit('add', num);
    //   }, 1000)
    // }
    asyncAdd({ commit }, num = 1) {
      return new Promise(resolve => setTimeout(() => {
        commit('add', num);
        resolve({ ok: 1 });
      }, 1000))
    }
  },
  getters: {
    // 派生
    score(state) {
      return 'score: ' + state.count;
    }
  },
  modules: {
  }
}