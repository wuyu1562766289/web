// new WVue({data: {...}})

class WVue {
    constructor(options) {
        this.$options = options;

        // 数据响应化
        this.$data = options.data;
        this.observe(this.$data);


        // // 模拟一下watcher创建
        // new Watcher();
        // this.$data.test;
        // new Watcher();
        // this.$data.foo.bar;

        new Compile(options.el, this);

        // created执行
        if (options.created) {
            options.created.call(this);
        }
    }

    observe(value) {
        if (!value || typeof value !== 'object') {
            return;
        }

        // 遍历该对象
        Object.keys(value).forEach(key => {
            this.defineReactive(value, key, value[key]);
            // 代理data中的属性到vue实例上
            this.proxyData(key);
        })
    }

    // 数据响应化
    defineReactive(obj, key, val) {
        this.observe(val);  // 递归解决数据嵌套

        const dep = new Dep();

        Object.defineProperty(obj, key, {
            get() {
                Dep.target && dep.addDep(Dep.target);
                return val;
            },
            set(newValue) {
                if (newValue === val) {
                    return;
                }
                val = newValue;
                // console.log(`${key}属性更新了：${val}`); 
                dep.notify();
            }
        })
    }

    proxyData(key) {
        Object.defineProperty(this, key, {
            get() {
                return this.$data[key];
            },
            set(newVal) {
                this.$data[key] = newVal;
            }
        })
    }
}

// Dep：用来管理Watcher
class Dep {
    constructor() {
        // 这里存放若干依赖(watcher)
        this.deps = [];
    }

    // 添加依赖
    addDep(dep) {
        this.deps.push(dep)
    }

    // 通知所有watcher进行更新
    notify() {
        this.deps.forEach(dep => dep.update())
    }
}

// Watcher
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm;
        this.key = key;
        this.cb = cb;

        // 将当前watcher实例指定到Dep静态属性target
        Dep.target = this;
        // 触发getter，添加依赖
        this.vm[this.key];
        Dep.target = null;
    }

    update() {
        // console.log('属性更新了');
        this.cb.call(this.vm, this.vm[this.key]);
    }
}




