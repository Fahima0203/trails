import {useState, useEffect} from 'react';
import React, { Component } from 'react'

export default class Currency extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            curr:0
        }
    }
    Inp=()=>{
        this.setState({curr: window.prompt("Enter Dollar")})
    }
    Us=()=>{
        this.setState({curr:this.state.curr*82.81})
    }
  render() {
    return (
      <div>
        <h1>{this.state.curr}</h1>
        <button onClick={this.Inp}>Input</button>
        <button onClick={this.Us}>To Us</button>
      </div>
    )
  }
}

// export default function Currency() {
//     // const [curr, setCurr] = useState(0)

//     // useEffect(()=>{
//     //     curr = prompt("Value");
//     // },[]);
//     var curr = window.prompt();
//     console.log(curr)
//     return (
//         <>
//             <h2>currency : {curr} </h2>
//         </>
//     )
// }
