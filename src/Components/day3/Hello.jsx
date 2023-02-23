import React from 'react'
import './welcome.css'

export default Hello

//function Hello(props) {
//   return (
//     <div>{props.list}</div>
//   )
// }

//key is not a props, but should be passed while calling to avoid warnings in console $ should not be used in the child component
// function Hello({key, name,age}) {
//   return (
//     <div>{key}. {name} with {age}</div> 
//   )
// }

function Hello({id, name,age}) {
    return (
      <div className="a1">{id}. {name} with {age}</div> 
    )
  }
