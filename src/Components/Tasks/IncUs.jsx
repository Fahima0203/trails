import React, { Component } from 'react'

export default class IncUs extends Component {
  constructor() {
    super()
    this.state = {
      ind: '',
      us: '',
      euro: ''
    }
  }
  chind = (event) => {
    this.setState({
      ind: event.target.value,
      us: event.target.value * 0.012,
      euro: event.target.value * 0.011
    })
  }
  chus = (event) => {
    this.setState({
      us: event.target.value,
      euro:event.target.value*0.94,
      ind: event.target.value * 82.84
    })
  }

  cheuro = (event) => {
    this.setState({
      euro: event.target.value,
      us: event.target.value*1.07,
      ind:event.target.value*88.31
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>India: </label>
          <input type="text" value={this.state.ind} onChange={this.chind}></input>
        </div>
        <div>
          <label htmlFor="">US </label>
          <input type="text" value={this.state.us} onChange={this.chus} />
        </div>
        <div>
          <label htmlFor="">Euro: </label>
          <input type="text" value={this.state.euro} onChange={this.cheuro} />
        </div>
      </form>
    )
  }
}
