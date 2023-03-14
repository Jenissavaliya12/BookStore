// import axios from "axios";
// import React, { Component } from "react";
// import UserDetail from "./UserDetail";

// class Users extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         this.setState({ user: response.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     const { user } = this.state;

//     return (

//         <div className="container">
//             List of UserDetail
//             {user.length ? user.map(users => (
//                 <div>
//                     <UserDetail key={users.id + users.name} user={users}/>
//                 </div>
//             )): null}
//         </div>

//     //   <div className="container mt-4">
//     //     List of user
//     //     {user.length
//     //       ? user.map((users) => (
//     //           <div className="" key={users.id}>

//     //             {users.title}

//     //           </div>

//     //         ))
//     //       : null}
//     //   </div>
//     );
//   }
// }
import React from "react";
import UserDetail from "./UserDetail";
export default function Users(props) {
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    const fetchdata = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await responce.json();
      console.log(data);
      setList(data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      {list
        ? list.map((user) => (
            <UserDetail user={user} key={user.id + user.name} />
          ))
        : null}
    </div>
  );
}
