import { createStore } from '../utils/MyRedux'

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

const store = createStore(countReducer);

export default store