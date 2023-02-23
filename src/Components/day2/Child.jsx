import React from "react"

// const Child = () => <><button>Click</button><h2>hello</h2></>

// const Child = (props) => <button onClick={props.g}>Click</button>

const Child = (props) => <button onClick={()=> props.g("Childyy")}>Click</button>

// const Child = () => { <> <h1>he</h1><button>Click</button></> }



export default Child