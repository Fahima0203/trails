import React, { Component } from 'react'
// import '../../../public/manifest.json'
export default class Error extends Component {
    constructor() {
        super()
        this.state = {
            // hasError: true
            hasError: false
        }
    }
    static getDerviedStateFromError(error) { //method lyk setState
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    render() {
        if (this.state.hasError) {
            return( <h3>Error</h3> )
        }
        return this.props.children
    }
}
