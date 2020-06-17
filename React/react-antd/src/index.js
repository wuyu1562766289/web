import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './store/ReduxStore';

import { Provider } from 'react-redux'
import store from './store/ReactReduxStore'

// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
// render();

// redux订阅状态变更
// store.subscribe(render);


/**
 * react-redux：npm install react-redux --save
 *  提供了了两个api：
 *   1. Provider 为后代组件提供store；
 *   2. connect 为组件提供数据和变更方法
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
