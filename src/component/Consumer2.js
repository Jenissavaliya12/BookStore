import React, { Component } from 'react'
import Consumer3 from "./Consumer2"
 class Consumer2 extends Component {
  render() {
    return (
      <div>
        <Consumer3 />       
      </div>
    )
  }
}

export default Consumer2