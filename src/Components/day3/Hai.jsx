// import React from 'react'

// // var a = [1,2,3]
// // const b = a.map(x=>x*2)
// // alert(b)
// // console.log(b)

// var a = ["John", "Joe", 'adam']
// const b = a.map(x=><h1>{x}</h1>)
// export default function Hai() {
//     return (
//         <div>
//             {/* <h2>{a[0]}</h2> */}

// {/* include curly barckets for variable inside element*/}
//            {a.map(x=>
//                 <h1>{x}</h1>
//            )} 
//            {b}
//         </div>
//     )
// }

import React from 'react'
import Hello from './Hello'
var a =[
    {id:1, name:"joe", age:23},
    {id:2, name:"john", age:22},
    {id:3, name:"june", age:21}
]
// const b = a.map(x=><h4>{x.id}. Name {x.name} with age {x.age}</h4>)

// const b = a.map(x=><Hello list={x.name}/>)

// const b = a.map(x=><Hello key={x.id} name={x.name} age={x.age}/>)

// const b = a.map(x=><Hello id={x.id} name={x.name} age={x.age}/>)

const b = a.map((x,index)=><Hello key={index} id={index} name={x.name}/>)
export default function Hai() {
  return (
    <div>
        <h1>{a[0].age}</h1>
        <h1>{b}</h1>
    </div>
  )
}

