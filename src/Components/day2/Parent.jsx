import React from 'react'
import Child from './Child'

// function Parent() {
//     return (
//         <>
//             <h1>hi</h1>
//             <Child />
//         </>
//     )
// }

// class Parent extends React.Component {
//     constructor() {
//         super()
//         this.state = { msg: 'parent' }
//         // this.welcome = this.welcome.bind(this)
//     }
//     welcome=(a)=> { 
//         // alert("HEllo from"+ this.state.msg )
//         alert(`Hello ${this.state.msg} from ${a}`)
//     }
//     render() {
//         return (
//             <Child g={this.welcome} />
//         )
//     }
// }

class Parent extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedin: false
        }
    }
    logIn=()=> {
        this.setState ( {
            isLoggedin: true
        })
        console.log("logged In")
    }
    logOut=()=> {
        this.setState ( {
            isLoggedin: false
        })
        console.log("logged Out")
    }
    render() {
        // var message;
        if (this.state.isLoggedin) {
            return (
                <>
                    <h1>Welcome</h1>
                    <button onClick={this.logOut}>Log Out</button>
                </>
            )
            // message = <h1>Welcome</h1>

        }
        else
            return (
                <>
                    <h1>Guest</h1>
                    <button onClick={this.logIn}>Log In</button>
                </>
            )
        // message = <h1>Guest</h1>

        // return message

        //CONDITIONAL RENDERING
        // return this.state.isLoggedin ?
        //     <h1>User</h1> :
        //     <h1>Guest</h1>

        //

    }
}

export default Parent