import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class Todos extends Component {
  
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} checkMark={this.props.checkMark}/>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;




// class component
// function Todos(props){
//   return props.todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))
// }
// export default Todos