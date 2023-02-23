// import {useState, useEffect} from 'react'
// import React from 'react'

// export default function App() {
//   const [count, setCount] = useState('blue');

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((count) => count+1);
//     },9)

//   },9)

//   return (
//     <>
//       <center>
//         <h2>{count}</h2>
//         <button onClick={()=>setCount(count+1)}>increment</button>
//         <button onClick={()=>setCount(count-1)}>decrement</button>
//       </center>
//     </>
//   )
// }

import React from 'react'
// import Usecontext from './Components/Usecontext'
// import Props from './Components/Props'
import State from './Components/day2/State'
// import Hai from './Components/day2/Hai'
// import Event from './Components/day2/Event'
// import Parent from './Components/day2/Parent'
import Usestate from './Components/HOOKS/Usestate'
import Currency from './Components/day2/Currency'
// import Hai from './Components/day3/Hai'
// import Welcome from './Components/day3/Welcome'
// import Modulecss from './Components/day3/Modulecss'
// import Form from './Components/day3/Form'
import IncUs from './Components/Tasks/IncUs'

// import Welcome from './Components/day4/Welcome'
// import Error from './Components/day4/Error'
// import Hello from './Components/day4/Hello'

// import Select from './Components/Tasks/Select'
export default function App() {
  return (
    <center>
      {/* <Usecontext></Usecontext> */}
      {/* <Props /> */}
      {/* <div> */}
      <State count='5' />
      <hr></hr>
      {/* <Hai /> */}
      {/* <Event /> */}
      {/* <Parent /> */}
      {/* </div> */}
      <>
        <Usestate/><hr></hr>
        <Currency/><hr></hr>
        <div>
          {/* <Hai /> */}
          {/* <Welcome log={false}/> */}
          {/* <Modulecss/> */}
          {/* <Form/> */}
          <IncUs/>
          {/* <Select /> */}
        </div>

        <div>
          {/* <Welcome/>

          <Error>
            <Welcome name="adam" />
          </Error>
          <Error>
            <Welcome name="joe" />
          </Error>
          <Error>
            <Welcome name="dev" />
          </Error> */}

          {/* <Hello/> */}
        </div>
      </>
    </center>
  )
}
