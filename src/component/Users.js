import axios from "axios";
import React, { Component } from "react";
import UserDetail from "./UserDetail";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.state;
    
    return (
        
        <div className="container">
            List of UserDetail
            {user.length ? user.map(users => (
                <div>
                    <UserDetail key={users.id + users.name} user={users}/>
                </div>
            )): null}
        </div>


    //   <div className="container mt-4">
    //     List of user
    //     {user.length
    //       ? user.map((users) => (
    //           <div className="" key={users.id}>
                
    //             {users.title}

                
    //           </div>
              
    //         ))
    //       : null}
    //   </div>
    );
  }
}

export default Users;
