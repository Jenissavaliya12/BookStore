import React, { Component } from 'react'
import HOC from '../component/HOC'
// import Title from '../components/Title'
// import Counter from '../components/Counter'
import UserList from '../component/UserList'

export default class Home extends Component {

  // constructor() {
  //     super();
  //     this.state = { title: "Default Title", description: "Default Description" };
  // }

  render() {
    const userData = [
      {ID : 1, Name : 'Jenis'},
      {ID : 2, Name : 'Manthan'},
      {ID : 3, Name : 'Sandip'},
    
    ]

    const Users = HOC(UserList, userData)
    return (
      // <div>
      //    <>
      //   <h1>This home page</h1>
      // <div>
      //   <Title
      //     Title1="first title"
      //     Title2="second title"
      //     Title3="third title"
      //     titlestate={this.state.title}
      //     descriptionstate={this.state.description}

      //   />
      // </div>
      // <Counter/>

      // 
      <div className='container mt-5'>
          <Users />
      </div>
    )
  }
}