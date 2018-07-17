import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    };
  }

  updateVal = e => {
    this.setState({ inputVal: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.updateVal} />
        <button onClick={() => this.props.setName(this.state.inputVal)}>
          SUBMIT
        </button>
      </React.Fragment>
    );
  }
}

export default Login;
