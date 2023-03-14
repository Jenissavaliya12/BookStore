// import React, { Component } from 'react'

// class UserDetail extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.user.title}
//       </div>

//     )
//   }
// }

// export default UserDetail

import React from "react";

export default function UserDetail({ user }) {
  return (
    <div>
      {user.id}.{user.name}
    </div>
  );
}
