import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting';
import Login from './Login';
import EvilCounter from './EvilCounter';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: ''
    };
  }

  setName = name => {
    this.setState({ userName: name });
  };

  render() {
    if (this.state.userName) {
      return (
        <div className="App">
          <h1>Evil Deeds</h1>
          <Greeting userName={this.state.userName} />
          <EvilCounter />
          <TodoList />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Evil Deeds</h1>
        <Login setName={this.setName} />
      </div>
    );
  }
}

export default App;
