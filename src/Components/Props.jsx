// import {React, useState} from 'react'

// export default function Props() {
//     const [users, setUsers] = useState('Janny');
//   return (
//     <center>
//         <h1>Hi {users}</h1>
//         <Comp1 props={users}/>
//     </center>
//   )
// }

// function Comp1({props}){
//     return (
//         <>
//             <h1>name : {props}</h1>
//             <Copm2 name = {props}/>
//         </>
//     )
// }

// function Copm2({name}){
//     return <h1>{name}</h1>
// }

import {useState, useContext, createContext} from 'react'
import React from 'react'

const UserContext = createContext();
export default function Props() {
    const [user, setUser] = useState('jan')
  return (
    <center>
        <UserContext.Provider value={user}>
            <h1>Hi {user}</h1>
            <Component1/>
        </UserContext.Provider>
    </center>
  )
}

function Component1(){
    return(
        <>
            <h1>Component 1</h1>
            <Component2/>
        </>
    )
}

function Component2(){
    const user = useContext(UserContext)
    return <h1>hello {user}</h1>
}
