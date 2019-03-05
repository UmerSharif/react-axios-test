import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
      title : ''
  }

  onChange = (e) =>{
    return this.setState({title: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.InsertData(this.state.title)
    this.state.title = ''
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
      <input style={{flex: '10', padding: '10px'}} 
      type="text" 
      name="title" 
      placeholder="Enter Here...."
      value={this.state.title}
      onChange={this.onChange}
      />

      <input style={{flex: '1', padding:'10px'}}
       type="submit" 
       value="Submit"/>
      </form>
    )
  }
}
