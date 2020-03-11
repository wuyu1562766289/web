class WVue {
  constructor(options) {
    this.$options = options;

    // data
    this.$data = options.data;

    // 响应化处理
    this.observe(this.$data);

    new Compile(options.el, this);

    if (options.created) {
      options.created.call(this)
    }
  }

  observe(value) {
    if (!value || typeof value !== "object") {
      return;
    }

    Object.keys(value).forEach(key => {
      // 响应式处理
      this.defineReactive(value, key, value[key]);
      // 代理data中的属性到wvue根上
      this.proxyData(key);
    })
  }

  defineReactive(obj, key, value) {
    // 递归遍历
    this.observe(key);

    // 每个Dep实例和data中每个key有一对一关系
    const dep = new Dep();

    // 给obj的每个key定义拦截
    Object.defineProperty(obj, key, {
      get() {
        // 依赖收集
        Dep.target && dep.addDep(Dep.target);

        return value;
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          console.log(key + '属性更新了！');

          dep.notify();
        }
      }
    })
  }

  // 数据代理
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key];
      },
      set(newValue) {
        this.$data[key] = newValue;
      }
    })
  }
}

// 管理所有watcher
class Dep {
  constructor() {
    // 存储所有依赖
    this.watchers = [];
  }

  addDep(watcher) {
    this.watchers.push(watcher);
  }

  notify() {
    this.watchers.forEach(watcher => {
      watcher.update();
    })
  }
}

// 保存data中数值和页面中的挂钩关系
class Watcher {
  constructor(vm, key, cb) {
    // 创建实例时将该实例指向Dep.target便于依赖收集
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    // 触发依赖收集
    Dep.target = this;
    this.vm[this.key];
    Dep.target = null;
  }

  update() {
    this.cb.call(this.vm, this.vm[this.key]);
  }
}