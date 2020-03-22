import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import Search from './pages/Search';
import LifeCycle from './pages/LifeCycle';

// 对象传值
const store = {
  userInfo: {
    userName: 'hello world!'
  }
};
// 函数传值
function sayHello(msg) {
  console.log(msg);  
}

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <User /> */}
      {/* 传值 */}
      {/* <Search store={store} sayHello={sayHello} /> */}
      <LifeCycle />
    </div>
  );
}

export default App;
