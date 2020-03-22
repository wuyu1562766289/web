import React, { Component } from 'react';
// import { Consumer } from '../AppContext';
import { consumerHandle } from '../AppContext';
import Layout from './Layout';

// // 高阶组件
// const consumerHandle = Cmp => props => {
//   return (
//     <Consumer>
//       {
//         ctx => <Cmp {...props} {...ctx} />
//       }
//     </Consumer>
//   )
// }

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         <Consumer>
//           {ctx => <HomeHandle {...ctx} />}
//         </Consumer>
//       </div>
//     )
//   }
// }

// 具名
function HomeHandle(props) {
  return (
    <Layout showTabBar={true} title="商城首页" favicon="d">
      {{
        btn: <button>按钮</button>,
        content: "我是内容"
      }}
    </Layout>
  )
}

// function HomeHandle(props) {
//   return (
//     <Layout showTabBar={true} title="商城首页" favicon="d">
//       <div>
//         <h1>Home</h1>
//         {/* <TabBar /> */}
//       </div>
//     </Layout>
//   )
// }

export default consumerHandle(HomeHandle);
