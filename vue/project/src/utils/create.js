// 创建指定组件实例并挂载到body上
import Vue from 'vue';

export default function create(Component, props) {
  // 首先创建vue实例
  const vm = new Vue({
    render(h) {
      // 可以渲染VNode
      return h(Component, { props });
    }
  }).$mount();  // 更新操作

  // 通过children获取该组件实例
  const comp = vm.$children[0];

  // 追加到body上
  document.body.appendChild(vm.$el);

  // 清理函数
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }

  // 返回组件实例
  return comp;
}