import React, { Component } from 'react'
import axios from 'axios'
export default class Post extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:'',
       body:'',
       userid:'',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
  }
  
  
  
    render() {
        const {title , body , userid} = this.state;
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler} />
        </div>
        <div>
            <input type="text" name="body" value={body} onChange={this.changeHandler} />
        </div>
        <div>
            <input type="text" name="userid" value={userid} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
        
      </div>
    )
  }
}
