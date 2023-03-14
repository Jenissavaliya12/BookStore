import React, { Component } from 'react'
import Consumer2 from "./Consumer2"
 class Consumer1 extends Component {
  render() {
    return (
      <div>
        <Consumer2 />       
      </div>
    )
  }
}

export default Consumer1
