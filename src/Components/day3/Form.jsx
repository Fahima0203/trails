import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "John",
            com: " Hi",
            job: "Nil "
        }

    }
    chname = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    chcom=(event)=>{
        this.setState({
            com:event.target.value
        })
    }
    chjob=(event)=>{
        this.setState({
            job:event.target.value
        })
    }
    onsub=(event)=>
    {
        // console.log(this.state.name)
        // alert(this.state.com)
        // alert(this.state.job)
        alert(`${this.state.name} - ${this.state.com} - ${this.state.job}`)
        event.preventDefault()
    }
    render() {
        const {job} = this.state
        return (
            <form onSubmit={this.onsub}>
                <div>
                    <label>Name : </label>
                    <input type="text" value={this.state.name} onChange={this.chname} />
                </div>
                <div>
                    <label htmlFor="">Comment: </label>
                    <textarea name="" id="" cols="25" rows="5" value={this.state.com} onChange={this.chcom}></textarea>
                </div>
                <div>
                    <label>Job: </label>
                    <select name="" id="" value={this.state.job} onChange={this.chjob}>
                        <option value="React">React</option>
                        <option value="MongoDb">MongoDb</option>
                        <option value="Express">Express</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
