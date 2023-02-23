import React from 'react'
import './welcome.css'
const a ={
    color:"red",
    fontSize:"70px"
}
export default function Welcome(props) {
    var classs = props.log ? "a1" : "b1"
    return (
        <div className={`${classs} font-a`}>hii
            <h1 style={a}>Welcome</h1>
        </div>
    )
}
