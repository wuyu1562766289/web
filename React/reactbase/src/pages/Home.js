import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    }

    // this.addCount = this.addCount.bind(this);
  }

  // 组件挂载完成之后
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);

    /** 同步执行 */
    // 2
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
      this.setState({
        count: this.state.count + 2
      });
      console.log(this.state.count);      // 2
    })
  }

  // 卸载组件前执行
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // addCount() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  addCount = () => {
    /** 同步执行 */
    // 2
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 2
    //   });
    //   console.log(this.state.count);    // 2
    // }, 0)

    /** 同步执行 */
    // 3
    // this.setState(nextState => {
    //   return { count: nextState.count + 1 }
    // });
    // console.log(this.state.count);    // 0

    // this.setState(nextState => {
    //   return { count: nextState.count + 2 }
    // });
    // console.log(this.state.count);    // 0


    /** 异步执行 */
    // 2
    // this.setState({
    //   count: this.state.count + 1
    // });
    // console.log(this.state.count);    // 0

    // this.setState({
    //   count: this.state.count + 2
    // });
    // console.log(this.state.count);    // 0
  }

  render() {
    const msg = '我是Home页';
    const { date, count } = this.state;

    return (
      <div>
        {msg}
        <h2>{date.toLocaleTimeString()}</h2>
        <p>{count}</p>
        <button onClick={this.addCount}>修改count值</button>
      </div>
    )
  }
}
