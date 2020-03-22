import React, { Component } from 'react'
import { Consumer } from '../AppContext'

export default class TabBar extends Component {
  render() {
    return (
      <div>
        TabBar
        <Consumer>
          {ctx => <TabBarHandle {...ctx} />}
        </Consumer>
      </div>
    )
  }
}

function TabBarHandle(props) {
  console.log('TabBarHandle', props);
  return(
    <div className="tabBar">
      <h1>TabBarHandle</h1>
    </div>
  )
}