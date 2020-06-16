export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  // 保留状态
  let currentState = undefined;
  // 回调函数
  let currentListeners = [];

  function getState() {
    return currentState;
  }
  function subscribe(listener) {
    currentListeners.push(listener);
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(v => v());
    
    return action;
  }
  dispatch({type: '@@suijizifuchuan'});

  return { getState, subscribe, dispatch };
}