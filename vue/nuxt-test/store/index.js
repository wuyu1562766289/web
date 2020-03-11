export const actions = {
  // 该action只能出现在index
  // 只能在服务端执行一次
  // 参数2是nuxt上下文
  nuxtServerInit({commit}, {app}) {
    // 1. 获取cookie
    const token = app.$cookies.get('token')
    // 2. 写入user模块中
    if(token) {
      commit('user/init', token);
    }
  }
}