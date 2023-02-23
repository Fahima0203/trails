// import React from 'react'

// export default function Fragment() {
//     return (
//         <td>Fragment</td>
//         // <React.Fragment>
//         //     <td>Fragment</td>
//         // </React.Fragment>
//     )
// }

import React from 'react'

export default function Fragment() {
    var a=[]
    a[0] = prompt()
    //only props that can be passed in React>Fragment is key
    var b = a.map(x=><React.Fragment key={a.id}>{x}</React.Fragment>)

    // <h1>HI<h1/> --> internally this will convert to React.creatRoot("", h1, HI);
    // var b = a.map(x=><>{x}</>)

  return (
    <td>{b}</td>
  )
}

