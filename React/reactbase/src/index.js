import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import User from './pages/User';
import Search from './pages/Search';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <User /> */}
    {/* <Search /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


/**
 * Test代码
 */
const src = '我是jsx的内容';
const obj = {
  firstName: "wang",
  lastName: "xing"
};
function formatName(src) {
  return src.firstName + ' ' + src.lastName;
}
const html = <h1>我是HTML</h1>;
const show = false;
const arr = [1, 2, 3, 4];
const data = [
  {
    name: 'wx',
    age: 18
  },
  {
    name: 'wd',
    age: '20'
  }
];

const jsx = (
  <div>
    hello react
    <p>{src}</p>
    <p>{obj.firstName + ' ' + obj.lastName}</p>
    <p>{formatName(obj)}</p>
    {html}
    {show && html}
    {show ? '楼上被隐藏了' : html}

    <ul>
      {
        arr.map((item, index) => {
          return <li key={"item" + index}>{item}</li>
        })
      }
    </ul>
    {
      data.map((item, index) => {
        return <li key={"item1" + index}>{item.name + '-' + item.age}</li>
      })
    }
    <img className='logo' src={logo} />
  </div>
);
// ReactDOM.render(jsx, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


