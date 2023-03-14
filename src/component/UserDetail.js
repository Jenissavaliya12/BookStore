import React, { Component } from 'react'

class UserDetail extends Component {
  render() {
    return (
      <div>
        {this.props.user.title}
      </div>

      
    )
  }
}

export default UserDetail
