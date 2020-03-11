// 具名导出vuex选项即可
export const state = () => ({
  token: ''
});

export const mutations = {
  init(state, token) {
    state.token = token;
  }
};

export const getters = {
  isLogin(state) {
    return !!state.token;
  }
};

export const actions = {
  login({commit, getters}, u) {
    // 通过$axios直接访问数据
    return this.$axios.$post("/api/login", u).then(({token}) => {
      if(token) {
        commit("init", token);
      }
      return getters.isLogin;
    })
  }
}