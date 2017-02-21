import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.data ?
      this.props.data.map((el => (
        <h3 id={el.id}>{el.first_name} - {el.last_name} (avatar: {el.avatar})</h3>
      ))) : <span />;

    return (
      <div>
        { list }
      </div>
    );
  }
}
