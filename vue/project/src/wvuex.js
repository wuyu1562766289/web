// 1.维护state
// 2.修改状态commit
// 3.业务逻辑控制dispatch
// 4.状态派发getter
// 5.state响应式
// 6.插件
// 7.混入

let Vue;

function install(_Vue) {
  Vue = _Vue;

  // 混入：把store选项指定到Vue原型上
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  })
}

class Store {
  constructor(options = {}) {
    this.state = new Vue({
      data: options.state
    });

    this.mutations = options.mutations || {};
    this.actions = options.actions || {};

    options.getters && this.handleGetters(options.getters);
  }

  // 实现commit以触发mutations
  commit = (type, arg) => {
    const fn = this.mutations[type];
    fn(this.state, arg);
  };

  dispatch = (type, arg) => {
    const fn = this.actions[type];
    return fn({ commit: this.commit, state: this.state }, arg);
  };

  handleGetters(getters) {
    this.getters = {};

    // 定义只读属性
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      })
    })
  }
}

export default { Store, install }