import React, { Component } from 'react';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to React Starter</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Root;
