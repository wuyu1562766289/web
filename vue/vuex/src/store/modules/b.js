const state = {
    number: 10
}
const mutations = {
    add(state) {
        state.number++
    },
    minus(state) {
        state.number--
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