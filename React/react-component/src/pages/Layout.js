import React, { Component } from 'react'
import TabBar from '../components/TabBar'

export default class Layout extends Component {
  componentDidMount() {
    const { title = "商城", favicon = "favicon" } = this.props;
    document.title = title;
    if (favicon) {
      document.querySelector('link').href = `http://localhost:3000/${favicon}.ico`;
    }
  }
  // 具名
  render() {
    const { children, showTabBar = true } = this.props;
    // 处理具名和不具名混用的情况
    const a = [];
    if (children.$$typeof) {
      a.push(children);
    } else {
      for (let item in children) {
        a.push(children[item]);
      }
    }

    return (
      <div>
        {/* {children.btn}
        {children.content} */}
        {a.map((item, index) => { return <div key={"child" + index}>{item}</div> })}
        {showTabBar && <TabBar />}
      </div>
    )
  }
  // render() {
  //   const { children, showTabBar = true } = this.props;
  //   return (
  //     <div>
  //       {children}
  //       {showTabBar && <TabBar />}
  //     </div>
  //   )
  // }
}
