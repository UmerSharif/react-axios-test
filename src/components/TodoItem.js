import React, { Component } from 'react'
import PropTypes from 'prop-types'

const textC = {
  color: '#dfe1e4'
  
}
export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#036564',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isCompleted ? 'line-through': 'none'
        }
    }

    buttonStyle = () => {
      return {
        float: 'right'
      }
    }



  render() {
      const { id , title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p style={textC}>
           <input type="checkbox" onChange={this.props.checkMark.bind(this, id)}/>
           {title}
           <button onClick={this.props.deleteNode.bind(this,id)} style={this.buttonStyle()}>Delete</button>
        {/* {this.props.todo.title}   */}
        </p>
        
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
