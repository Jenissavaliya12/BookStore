// import React, { Component } from 'react'
// import "./LogInForm.css"

// export default class LogInForm extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             username:"",
//             email:"",
//             password:"",
//         }
//     }

// handleUsernameOnChange = (event) => {
//     this.setState({
//         username:event.target.value
//     })

//   }
//    handleEmailOnChange = (event) => {
//     this.setState({
//         email:event.target.value
//     })

//   }
//    handlePasswordOnChange = (event) => {
//    this.setState({
//         password:event.target.value
//     })

//   }
//   handleSubmit = () => {
//     alert(`${this.state.username} ${this.state.email} ${this.state.password}`)
//   }

//     render() {
//     return (

// <div className="container mt-5">
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleUsernameOnChange}
//           placeholder="Enter your username"
//         />
//         <label htmlFor="username">Email</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           value={this.state.email}
//           onChange={this.handleEmailOnChange}
//           placeholder="Enter your email"
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={this.statepassword}
//           onChange={this.handlePasswordOnChange}
//           placeholder="Enter your password"
//         />

//         <input type="submit" value="Login" />
//       </form>
//     </div>

//     )
// }

// }
import React, { useState } from "react";
import "./LogInForm.css";
function LogInForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameOnChange = (event) => {
    setUserName(
      event.target.value,
    );
  };
  const handleEmailOnChange = (event) => {
    setEmail(
       event.target.value,
    );
  };
  const handlePasswordOnChange = (event) => {
    setPassword(
       event.target.value,
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username:${username} Email:${email} Password:${password}`);
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameOnChange}
          placeholder="Enter your username"
        />
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailOnChange}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordOnChange}
          placeholder="Enter your password"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LogInForm;
