import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Just Do It",
        isCompleted: false
      },
      {
        id: 2,
        title: "bring it on baby",
        isCompleted: false
      },
      {
        id: 3,
        title: "wanna hang out tonight",
        isCompleted: false
      }
    ]
  };
  checkMark = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  deleteNode = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  InsertData = passedTitle => {
    // older version using concat
    //this.setState({todos: this.state.todos.concat({id: this.state.todos.length+1, title: passedTitle, isCompleted: false})})
    // in es6 the following way
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          title: passedTitle,
          isCompleted: false
        }
      ]
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact
            path="/"
            render={props => (
              <React.Fragment>
                <Todos
                  todos={this.state.todos}
                  checkMark={this.checkMark}
                  deleteNode={this.deleteNode}
                />
                <AddTodo InsertData={this.InsertData} />
              </React.Fragment>
            )}
          />
          <Route path="/about" Component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
