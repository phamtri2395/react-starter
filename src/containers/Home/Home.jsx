import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as HomeAction from './HomeAction';

const mapStoreToProps = store => ({
  data: store.HomeReducer.data
});

const mapActionToProps = dispatch => (
  bindActionCreators({
    fetch: HomeAction.fetch
  }, dispatch)
);

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch('Hello World');
  }

  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <h5>{this.props.data}</h5>
      </div>
    );
  }
}

export default connect(
  mapStoreToProps,
  mapActionToProps
)(Home);
