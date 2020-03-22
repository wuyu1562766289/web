import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handle = () => {
    const {sayHello} = this.props;
    sayHello('我是Search呀！');

    console.log('我被点击了');
  }
  change = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
    console.log(this.state.value);
  }

  render() {
    const { value } = this.state;
    // 传值
    const { userInfo } = this.props.store;
    return (
      <div>
        <p>Search</p>
        <button onClick={this.handle}>点击</button>
        <input value={value} onChange={this.change} />
        <h3>{userInfo.userName}</h3>
      </div>
    )
  }
}
