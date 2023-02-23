import React, { Component } from 'react'

export default class Select extends Component {
  constructor() {
    super()
    this.state = {
      cur: '',
      cou: ''
    }
  }
  
  chcou = (e) => {
    this.setState({
      cou: e.target.prev.value
    })
    
    
  }
  render() {
    return (
      <form action="">
        <div>
          <select value={this.state.cou} onChange={this.chcou}>
            <option >INR</option>
            <option >USD</option>
            <option >EURO</option>
          </select>
          <input type="text" value={this.state.cur} onChange={this.chcur} />
        </div>
        <div>
          <select value={this.state.cou} onChange={this.chcou}>
            <option >INR</option>
            <option value="">USD</option>
            <option value="">EURO</option>
          </select>
          <input type="text" value={this.state.cur} onChange={this.chcur} />
        </div>
      </form>
    )
  }
}
