import React, { Component } from 'react'
import store from "../store/MyReduxStore"

export default class ReduxPage extends Component {
  componentDidMount() {
    // 订阅状态变更
    store.subscribe(() => {
      // 方法一：
      // 强制刷新
      this.forceUpdate();

      // 方法二：
      // this.setState({})

      // 方法三：在src/index.js的render里订阅状态变更
      // import store from './store/ReduxStore'
      // const render = () => {
      //   ReactDom.render(
      //     <App />,
      //     document.querySelector('#root')
      //   )
      // }
      // render()
      // store.subscribe(render)
    })
  }

  add = () => {
    // 提交更新
    store.dispatch({ type: "add" })
  }
  minus = () => {
    store.dispatch({ type: "minus" })
  }
  static = () => {
    store.dispatch({ type: "others" })
  }

  render() {
    console.log("store:", store);

    return (
      <div>
        <h1>ReduxPage</h1>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.static}>static</button>
      </div >
    )
  }
}
