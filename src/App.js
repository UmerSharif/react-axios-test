import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

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
        title: "wanna hang out tonight at my plave",
        isCompleted: true
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
