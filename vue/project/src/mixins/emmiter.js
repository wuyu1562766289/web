// 导出一个对象
export default {
  // 可以是方法、生命周期钩子、或者data
  methods: {
    dispach(eventName, data) {
      let parent = this.$parent;
      // 查找父元素
      while(parent) {
        // $emit触发
        parent.$emit(eventName, data);
        // 递归查找父元素
        parent = parent.$parent;
      }
    },
    boardcast(eventName, data) {
      boardcast.call(this, eventName, data);
    }
  }
}

function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data);
    if(child.$children.length) {
      // 递归调用，通过call修改this指向child
      boardcast.call(child, eventName, data);
    }
  })
}