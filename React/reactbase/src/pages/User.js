import React, { useState, useEffect } from 'react'

// hooks
export default function User() {
  // const date = new Date();
  const [date, setState] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setState(new Date());
    }, 1000);
  });

  return (
    <div>
      <p>我是User</p>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}
