import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('constructor', this.state.count);
  }

  static getDerivedStateFromProps(props, state) {
    // 在调用render方法之前调用
    // 在初始挂载及后续更新时都会被调用
    // 应该返回一个对象来更新state，如果返回null则不更新任何内容
    const { count } = state;
    console.log('getDerivedStateFromProps', count);
    return count < 8 ? null : { count: 1 };
  }
  // 最近一次渲染输出之前调用，返回上一次的值
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { count } = prevState;
    console.log('getSnapshotBeforeUpdate', count);
    return null;
  }

  /** 16.3之前的生命周期，将被废弃 */
  // // 组件挂载之前
  // componentWillMount() {
  //   console.log('componentWillMount', this.state.count);
  // }
  // 组件挂载之后
  componentDidMount() {
    console.log('componentDidMount', this.state.count);
  }
  // 组件卸载前
  componentWillUnmount() {
    console.log('componentWillUnmount', this.state.count);
  }
  // 组件更新后
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.count);
  }
  /** 16.3之前的生命周期，将被废弃 */
  // 组件更新前
  // componentWillUpdate() {
  //   console.log('componentWillUpdate', this.state.count);
  // }

  // 组件是否render
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', this.state.count);
    // 返回true则更新组件，否则不渲染
    // return true;
    const { count } = this.state;
    return count != 5;  // count值为5的时候不会去渲染
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>我是生命周期页</h1>
        <p>{count}</p>
        <button onClick={this.changeCount}>改变count</button>
        {!(count % 2) && <Test />}
      </div>
    )
  }
}

class Test extends Component {
  componentWillUnmount() {
    console.log('Test componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h3>我是Test组件</h3>
      </div>
    )
  }
}
