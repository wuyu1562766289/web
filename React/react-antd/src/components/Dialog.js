import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
    this.node = window.document.createElement("div");
    window.document.body.appendChild(this.node)
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  render() {
    return createPortal(
      <div className="dialog">
        <h3>Dialog</h3>
        <button>关闭</button>
      </div>,
      this.node
    )
  }
}
