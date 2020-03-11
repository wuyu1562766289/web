// 解析指令和插值表达式
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    // 移动模板内容到片段操作
    this.$fragment = this.node2Fragment(this.$el);
    // 执行编译
    this.compile(this.$fragment);
    // 编译后的内容放回$el中
    this.$el.appendChild(this.$fragment);
  }

  node2Fragment(el) {
    // 创建片段
    const fragment = document.createDocumentFragment();
    // 移动dom节点
    let child;
    while (child = el.firstChild) {
      fragment.appendChild(child);
    }

    return fragment;
  }

  compile(el) {
    const childNodes = el.childNodes;

    Array.from(childNodes).forEach(node => {
      if (node.nodeType == 1) {
        // 元素
        this.compileElement(node);
      } else if (node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent)) {
        // 只关心{{xxx}}
        this.compileText(node);
      }

      // 递归子节点
      if (node.children && node.childNodes.length > 0) {
        this.compile(node);
      }
    })
  }
  compileElement(node) {
    // 关心属性
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      // eg: w-xxx="xxx"
      const attrName = attr.name;
      const value = attr.value;

      if (attrName.indexOf('w-') == 0) {
        // 指令
        const dest = attrName.substring(2);
        // 执行更新
        this[dest] && this[dest](node, value);
      } else if (attrName.indexOf('@') == 0) {
        const eventName = attrName.substring(1);
        this.eventHandler(node, value, eventName);
      }
    })
  }

  text(node, value) {
    this.update(node, value, 'text');
  }
  html(node, value) {
    this.update(node, value, 'html');
  }
  model(node, value) {
    // 数据变了改界面
    this.update(node, value, "model");
    // 界面变了改数值
    node.addEventListener('input', e => {
      this.$vm[value] = e.target.value;
    })
  }

  update(node, value, type) {
    const updator = this[type + "Updator"];
    updator && updator(node, this.$vm[value]);

    new Watcher(this.$vm, value, function(val) {
      updator && updator(node, val);
    });
  }
  textUpdator(node, value) {
    node.textContent = value;
    console.log(value);
  }
  htmlUpdator(node, value) {
    node.innerHTML = value;
  }
  modelUpdator(node, value) {
    node.value = value;
  }
  compileText(node) {
    // 表达式
    const value = RegExp.$1;
    this.update(node, value, "text");
  }

  eventHandler(node, value, eventName) {
    // 获取回调函数
    const fn = this.$vm.$options.methods && this.$vm.$options.methods[value];
    if(eventName && fn) {
      node.addEventListener(eventName, fn.bind(this.$vm));
    }
  }
}