import React, { Component } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{display: 'flex'}}>
      <input type="text" name="title" placeholder="Enter Here....0"/>
      <input style={{flex: '1'}} type="submit" value="Submit"/>
      </form>
    )
  }
}
