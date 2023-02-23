import React from 'react'

export default function Event() {
    function click() {
        console.log('clicked')
    }
    return (
        <div>
            <h1>hi</h1>
            <button onClick={click}>Click</button>
            {/* <Handling /> */}
        </div>
    )
}

// class Handling extends React.Component() {

// }
