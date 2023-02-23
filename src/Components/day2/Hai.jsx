import React from 'react'
//
export default function Hai() {
    return (
        <>
            <Hel name='John' age="25" />
        </>
    )
}

// function Hel({ nam, age }) {
//     return <h1>Hai {nam} age {age}</h1>
// }

// function Hel(props)
// {
//     const {name, age} = props
//     return <h1>Hai {name} age {age}</h1>
// }

class Hel extends React.Component {
    constructor() {
        super()
        this.state = { msg: 'he' }
    }
    click = () => {
        this.setState({ msg: "welcome" })
    }
    render() {
        const { name, age } = this.props
        return (
            <>
                <h1>Hai {name} age {age}</h1>
                <h2>{this.state.msg}</h2>
                <button onClick={this.click}>Subscribe</button>
            </>)
    }
}