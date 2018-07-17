import React, { Component } from 'react';

class EvilCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  incrementCount = () => {
    const newCount = this.state.counter + 1;
    this.setState({ counter: newCount });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.incrementCount}>+ 1</button>
        <p>You have committed {this.state.counter} evil deeds!</p>
      </React.Fragment>
    );
  }
}

export default EvilCounter;
