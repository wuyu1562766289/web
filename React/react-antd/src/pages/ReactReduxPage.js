import React, { Component } from 'react'
import { connect } from "react-redux"

class ReactReduxPage extends Component {
  render() {
    const { num, dispatch } = this.props;

    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>{num}</p>
        <button onClick={() => dispatch({ type: 'add' })}>add</button>
        <button onClick={() => dispatch({ type: 'minus' })}>minus</button>
      </div>
    )
  }
}

// const mapStateToProps = state => { num: state }
// const mapDispatchToProps = {
//   minus: () => {
//     return { type: "minus" }
//   }
// }

export default connect(
  // 状态映射 
  // mapStateToProps,
  // 派发事件映射
  // mapDispatchToProps

  state => ({ num: state })
)(ReactReduxPage)