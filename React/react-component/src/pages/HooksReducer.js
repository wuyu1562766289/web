import React, { useEffect, useReducer } from 'react';
import { FruitList } from './Fruit';

function fruitsReducer(state, action) {
  switch (action.type) {
    case 'init':
    case 'replace':  
      return action.payload;
    default:
      return state;
  }
}

export default function HooksReducer() {
  const [fruits, dispatch] = useReducer(fruitsReducer, []);
  useEffect(() => {
    // effect
    setTimeout(() => {
      dispatch({type: 'init', payload: ['apple', 'banana']});
    }, 1000);
    return () => {
      // cleanup
    }
  }, [])
  return (
    <div>
      HooksReducer
      {/* <AddFruit /> */}
      <FruitList fruits={fruits} setFruits={newFruitList => dispatch({type: 'replace', payload: newFruitList})} />
    </div>
  )
}

