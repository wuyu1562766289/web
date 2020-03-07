let Vue;

class VueRouter {
  constructor(options) {
    this.$options = options;

    // 创建一个路由path和route映射
    this.routerMap = {};

    // 利用Vue的响应式原理实现current的响应式
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }

  init() {
    // 绑定浏览器事件
    this.bindEvents();

    // 解析路由配置
    this.createRouterMap(this.$options);

    // 创建router-link和router-view
    this.initComponent();
  }

  bindEvents() {
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }
  onHashChange() {
    // http://localhost/#/home
    this.app.current = window.location.hash.slice(1) || '/';
  }

  createRouterMap(options) {
    options.routes.forEach(item => {
      // ['/home']: {path: '/home', component: Home}
      this.routerMap[item.path] = item;
    })
  }

  initComponent() {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render(h) {
        // 实现<a :href="to">xxx</a>
        return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default);
      }
    });

    // hash → current → render
    Vue.component('router-view', {
      // this指向VueRouter实例
      render: h => {
        const Comp = this.routerMap[this.app.current].component;

        return h(Comp);
      }
    })
  }
}

// 实现VueRouter插件
VueRouter.install = function(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      // this指向Vue组件实例
      if(this.$options.router) {
        this.$options.router.init();
      }
    }
  })
}

export default VueRouter