import React, { useContext } from "react";
// import Consumer3 from "./Consumer2"
import { UserContext, channelContext } from "../App";
//  class Consumer2 extends Component {
//   render() {
//     return (
//       <div>
//         <Consumer3 />
//       </div>
//     )
//   }
// }

function Consumer2() {
  const user = useContext(UserContext);
  const channel = useContext(channelContext);
  return (
    <div className="text-center">
      Hello {user} , Hello {channel} 
    </div>
    // <UserContext.Consumer>
    //   {
    //     user => {
    //      return (
    //       <channelContext.Consumer>
    //         {
    //           channel => {
    //             return (
    //               <div className='text-center'> Hello {user}  , Hello {channel}</div>
    //             )
    //           }
    //         }
    //       </channelContext.Consumer>
    //      )
    //     }
    //   }
    // </UserContext.Consumer>
  );
}

export default Consumer2;
