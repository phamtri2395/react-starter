import React, { Component } from 'react';
import { Link } from 'react-router';

const linkStyle = {
  textDecoration: 'none',
  display: 'inline-block',
  marginLeft: 15,
  marginRight: 15
};

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to React Starter</h1>
        <Link style={linkStyle} to="/home">Show Home Page</Link>
        <Link style={linkStyle} to="/">Show Root Page</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Root;
