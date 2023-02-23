// import React, { Component } from 'react'

// export default class Welcome extends Component {
//     constructor(props) {
//         super()
//         console.log("Wel cons")
//         this.state = { a: 1 }
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log("Wel gDSFP")
//         return null
//     }
//     shouldComponentUpdate() {
//         console.log("Wel sCU")
//         return true
//     }

//     getSnapshotBeforeUpdate() {
//         console.log("Wel gSBU")
//         return true
//     }
//     componentDidUpdate() {
//         console.log("Wel cDU")
//     }
//     click = () => {
//         this.setState({ a: 2 })
//     }
//     render() {
//         console.log("Wel render")
//         return (
//             <div>
//                 <Hello />
//                 <button onClick={this.click}>click</button>
//             </div>
//         )
//     }
//     componentDidMount() {
//         console.log("Wel CDM")
//     }
// }

// class Hello extends Component {
//     constructor(props) {
//         super()
//         this.state = {}
//         console.log("Helo Cons")
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log("Helo gDSFP");
//         return null
//     }
//     render() {
//         console.log("Helo render")
//         return <h1>Hello</h1>
//     }
//     componentDidMount() {
//         console.log("Helo CMD");
//     }
//}

import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        if (this.props.name == "dev") {
            throw new Error("Can't use name dev")
        }
        return (
            <div>{this.props.name}</div>
        )
    }
}
