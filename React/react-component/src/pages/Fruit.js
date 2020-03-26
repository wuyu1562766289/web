import React, { useState } from 'react';

export function AddFruit({ addFruit }) {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => addFruit(name)}>增加</button>
    </div>
  )
}

export function FruitList({ fruits, setFruits }) {
  const delCur = delIndex => {
    const tem = [...fruits];
    tem.splice(delIndex, 1);
    setFruits(tem);
  }
  return (
    <div>
      <ul>
        {
          fruits.map((item, index) => {
            return <li key={'fruit' + index} onClick={() => delCur(index)}>
              {item}
            </li>
          })
        }
      </ul>
    </div>
  )
}