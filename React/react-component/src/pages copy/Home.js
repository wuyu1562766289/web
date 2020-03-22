import React, { Component } from 'react'
import { Comsumer } from '../AppContext'
import TabBar from '../components/TabBar'

export default class Home extends Component {
  render() {
    // const data = this.props;
    // console.log('Home', data);

    return (
      <div>
        Home
        <Comsumer>
          {ctx => <HomeHandle {...ctx} />}
        </Comsumer>
        <TabBar />
      </div>
    )
  }
}

function HomeHandle(props) {

  console.log('HomeHandle', props);
  
  return (
    <div>
      <h1>HomeHandle</h1>
    </div>
  )
}
