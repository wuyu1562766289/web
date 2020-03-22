import React, { Component } from 'react';
import { consumerHandle } from '../AppContext';
import Layout from './Layout';

// export default class User extends Component {
//   render() {
//     return (
//       <div>
//         <Consumer>
//           {ctx => <UserHandle {...ctx} />}
//         </Consumer>
//       </div>
//     )
//   }
// }

// 具名
function UserHandle(props) {
  return (
    <Layout showTabBar={true} title="用户信息" favicon="d">
      {{
        btn: <button>按钮</button>,
        content: "我是内容"
      }}
    </Layout>
  )
}

export default consumerHandle(UserHandle);

