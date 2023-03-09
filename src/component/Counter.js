import React, { Component } from 'react'

export default class Counter extends Component {
 constructor(props) {
    super(props);
    this.state = {
        count:0,
    }

 }
 increment () {
   this.setState({
    count:this.state.count + 1,
   })
 }
 
    render() {
    return (
      <div className='container'>
        <p>Count - {this.state.count}</p>
        <button type="button" onClick={ this.increment.bind(this)} class="btn btn-dark">Dark</button>
      </div>
    )
  }
}
