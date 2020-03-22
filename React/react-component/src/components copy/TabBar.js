import React, { Component } from 'react'
import { Comsumer } from '../AppContext'

export default class TabBar extends Component {
  render() {
    return (
      <div>
        TabBar
        <Comsumer>
          {ctx => <TabBarHandle {...ctx} />}
        </Comsumer>
      </div>
    )
  }
}

function TabBarHandle(props) {
  console.log('TabBarHandle', props);
  return(
    <div>
      <h1>TabBarHandle</h1>
    </div>
  )
}