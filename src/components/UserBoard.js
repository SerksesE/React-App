import React, { Component } from 'react'

export default class UserBoard extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }


  render() {
    return (
      <div>
        <h3>UserBoard</h3>
        <p>User:
          <b> Serkses</b>
          <p onClick={this.toggle}>Serkses is {this.state.active ? undefined : <b>not</b>} present </p>
        </p>
        <p>User:
          <b> Edward</b>
          <p onClick={this.toggle}>Edward is {this.state.active ? undefined : <b>not</b>} present </p>
        </p>
        <p>User:
          <b> Alphonse</b>
          <p onClick={this.toggle}>Alphonse is {this.state.active ? undefined : <b>not</b>} present </p>
        </p>
        <p>User:
          <b> Havic</b>
          <p onClick={this.toggle}>Havic is {this.state.active ? undefined : <b>not</b>} present </p>
        </p>
      </div>
    )
  }
}
