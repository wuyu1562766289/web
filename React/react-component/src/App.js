import React from 'react';
import Home from './pages/Home';
import User from './pages/User';
import HooksPage from './pages/HooksPage';
import HooksReducer from './pages/HooksReducer';
import HooksContext from './pages/HooksContext';

const foo = Com => props => {
  return (
    <div style={{ border: "solid 1px red" }}>
      <Com {...props} />
    </div>
  )
}
const foo1 = Com => props => {
  return (
    <div style={{ border: "solid 1px yellow", padding: "10px" }}>
      <Com {...props} />
    </div>
  )
}

function Child(props) {
  return <div>Child</div>;
}
/**
 * 高阶组件（HOC）：是一个工厂函数，接收一个组件并返回另一个组件 * 
 *  支持链式调用 
 */

function App() {
  // const Foo = foo(Child);
  // 链式调用
  const Foo = foo1(foo(Child));

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <User /> */}
      {/* <Child />
      <Foo /> */}
      {/* <HooksPage /> */}
      {/* <HooksReducer /> */}
      <HooksContext />
    </div>
  );
}

export default App;
