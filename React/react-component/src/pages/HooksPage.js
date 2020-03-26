import React, { useState, useEffect } from 'react'
import { FruitList, AddFruit } from './Fruit'

export default function HooksPage() {
  const [date, setDate] = useState(new Date());
  const [fruits, setFruits] = useState(['apple', 'banana']);
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // 卸载的时候才会执行返回的清理函数
    return () => {
      clearInterval(timerId);
    }
  }, [date]);

  return (
    <div>
      HooksPage
      <h3>{date.toLocaleTimeString()}</h3>
      <AddFruit addFruit={item => setFruits([...fruits, item])} />
      <FruitList fruits={fruits} setFruits={setFruits} />
    </div>
  )
}

// function AddFruit({addFruit}) {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <button onClick={() => addFruit(name)}>增加</button>
//     </div>
//   )
// }

// function FruitList({ fruits, setFruits }) {
//   const delCur = delIndex => {
//     const tem = [...fruits];
//     tem.splice(delIndex, 1);
//     setFruits(tem);
//   }
//   return (
//     <div>
//       <ul>
//         {
//           fruits.map((item, index) => {
//             return <li key={'fruit' + index} onClick={() => delCur(index)}>
//               {item}
//             </li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }
