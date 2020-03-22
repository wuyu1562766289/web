import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const data = this.props;
    console.log('User', data);
    
    return (
      <div>
        User
      </div>
    )
  }
}
