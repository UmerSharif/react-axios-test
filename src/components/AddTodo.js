import React, { Component } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{display: 'flex'}}>
      <input style={{flex: '10', padding: '10px'}} type="text" name="title" placeholder="Enter Here...."/>
      <input style={{flex: '1', padding:'10px'}} type="submit" value="Submit"/>
      </form>
    )
  }
}
