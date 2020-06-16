import { createStore, applyMiddleware } from 'redux'

// Redux只是个纯粹的状态管理器，默认只支持同步，实现异步任务 比如延迟，网络请求，需要中间件的
// 支持，比如我们试用最简单的redux - thunk和redux - logger 。
// 中间件就是一个函数，对 store.dispatch 方法进行改造，在发出 Action 和执行 Reducer 这两步之
// 间，添加了其他功能。
// npm install redux-thunk redux-logger --save
import logger from "redux-logger"
import thunk from "redux-thunk"

const countReducer = (state = 0, actions) => {
  switch (actions.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      state = 0
      return state
  }
}

const store = createStore(countReducer, applyMiddleware(logger, thunk));

export default store