import { useState, useContext, createContext } from 'react'
import React from 'react'

const userContext = createContext();

export default function Usecontext() {
    const [user, setUser] = useState('jan');
    return (
        <center>
            <userContext.Provider value={user}>
                <h1>hi {user}</h1>
                <Comp1></Comp1>
            </userContext.Provider>
        </center>
    )
}
function Comp1() {
    return (
        <>
            <h1>comp1</h1>
            <Comp2></Comp2>
        </>
    )
}
function Comp2(){
    return(
        <>
            <h1>comp2</h1>
            <Comp3></Comp3>
        </>
    )
}
function Comp3(){
    const user = useContext(userContext);
    return(
        <>
            <h1>Comp5</h1>
            <h2>hello {user}</h2>
        </>
    )
}