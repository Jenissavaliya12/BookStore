// import React, { useState } from 'react'

// function CounterHook() {
  
//     const [count, setCount] = useState(0)
//  const  increment =  () => {
//     setCount(count+1)
//  }
//     return (
//     <div>
//     <p>Count - {count}</p>
//     <button type='button' onClick={increment}>Click</button>
      
//     </div>
//   )
// }

// export default CounterHook

// <-------------useReducer-------------->
import React, { useReducer } from 'react'

const inititalValue = 0 ;
const reducer = (state,action) => {
   switch(action) {
      case 'increament':
         return state + 1 
      case 'reset':
         return inititalValue
      default :
         return state   
   }
}

function CounterHook() {
  
   const[count,dispatch] = useReducer(reducer,inititalValue)
  
   return (
    <div className='text-center'>
    <div>Count - {count}</div>
    <button onClick={() => dispatch('increament')}>Increament</button>
    <button onClick={() => dispatch('reset')}>Reset</button>
      
    </div>
  )
}


export default CounterHook


