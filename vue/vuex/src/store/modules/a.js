const state = {
    count: 1
}
const mutations = {
    add(state) {
        state.count++
    },
    minus(state) {
        state.count--
    }
}
const actions = {
    add: ({ commit }) => {
        commit('add')
    },
    minus: ({ commit }) => {
        commit('minus')
    }
}

export default {
    // 开启命名空间
    namespaced: true,
    state,
    mutations,
    actions
}