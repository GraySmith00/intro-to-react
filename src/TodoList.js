import React, { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      deeds: []
    };
  }

  updateVal = e => {
    this.setState({
      inputVal: e.target.value
    });
  };

  addToList = e => {
    e.preventDefault();
    this.setState({
      deeds: [...this.state.deeds, this.state.inputVal]
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <input type="text" onChange={this.updateVal} />
          <input type="submit" />
        </form>
        <ul>
          {this.state.deeds.map(deed => {
            return <li>{deed}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
