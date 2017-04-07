import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../../components/List/List';

import * as HomeAction from './HomeAction';

const mapStoreToProps = store => (store.HomeReducer);

const mapActionToProps = dispatch => (
  bindActionCreators(HomeAction, dispatch)
);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    console.log('This log only appears in development mode');

    const fetch1 = this.props.fetchSingleUser(1);
    const fetch2 = this.props.fetchSingleUser(2);
    const fetch3 = this.props.fetchSingleUser(3);

    // Link async call in order, make them sync together
    fetch1.next(fetch2);
    fetch2.next(fetch3);

    fetch1();
  }

  render() {
    return (
      <div>
        <h2>Homepage</h2>
        { this.state.loading ? <h3>Loading...</h3> : <List collection={this.props.data} /> }
      </div>
    );
  }
}

export default connect(
  mapStoreToProps,
  mapActionToProps
)(Home);
