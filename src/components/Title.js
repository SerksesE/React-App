import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
      </div>
    )
  }
}