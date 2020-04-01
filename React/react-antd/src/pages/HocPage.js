import React, { Component } from 'react'
import {Button} from 'antd'

// function Child(props) {
//   return <div>child</div>;
// }

// const foo = Cmp => props => {
//   return <div className="border">
//     <Cmp {...props} />
//   </div>
// }
// const foo2 = Cmp => props => {
//   return <div className="border" style={{border: "solid 1px red"}}>
//     <Cmp {...props} />
//   </div>
// }

// export default class HockPage extends Component {
//   render() {
//     const Foo = foo2(foo(Child));

//     return (
//       <div>
//         <h1>HockPage</h1>
//         <Foo />
//       </div>
//     )
//   }
// }


const foo = Cmp => props => {
  return <div className="border">
    <Cmp {...props} />
  </div>
}
const foo2 = Cmp => props => {
  return <div className="border" style={{border: "solid 1px red"}}>
    <Cmp {...props} />
  </div>
}

@foo2
@foo
class Child extends Component {
  render() {
    return <div>child</div>;
  }
}

@foo
class HockPage extends Component {
  render() {
    // const Foo = foo2(foo(Child));
    return (
      <div>
        <h1>HockPage</h1>
        {/* <Foo /> */}
        <Child />
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}

// export default foo(HockPage)
export default HockPage