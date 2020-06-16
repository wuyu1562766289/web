import React, { useState } from 'react'
import Dialog from '../components/Dialog'

export default function DialogPage(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>DialogPage</h1>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Dialog />}
    </div>
  )
}
