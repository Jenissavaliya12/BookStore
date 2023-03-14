import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class Consumer3 extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {username => {
                return (<h3> Hello {username}</h3>)
            }}
        </UserConsumer>
      </div>
    )
  }
}

export default Consumer3
