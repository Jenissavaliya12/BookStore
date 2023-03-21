// import React from "react";
// import UserDetail from "./UserDetail";
// export default function Users(props) {
//   const [list, setList] = React.useState(null);

//   React.useEffect(() => {
//     const fetchdata = async () => {
//       const responce = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await responce.json();
//       console.log(data);
//       setList(data);
//     };
//     fetchdata();
//   }, []);
//   return (
//     <div>
//       {list
//         ? list.map((user) => (
//             <UserDetail user={user} key={user.id + user.name} />
//           ))
//         : null}
//     </div>
//   );
// }

// <-----api responce with useReducer --------->

import React, { useReducer } from "react";
import axios from "axios";

const initialValue = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state,action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS': 
      return {
        loading:false,
        error:'',
        post:action.payload
      }
    case 'FETCH_ERROR':
      return {
        loading:false,
        error:'something wrong',
        post:{}
      }
    default:
      return state
  }

}

function Users() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => {
    dispatch({type:'FETCH_SUCCESS',payload:res.data})
  })
  .catch(err => {
    dispatch({typer:'FETCH_ERROR'})
  })

  return <div className="text-center">
    {state.loading ? 'loading' : state.post.title}
    {state.error ? state.error : null}
  </div>;
}

export default Users;
