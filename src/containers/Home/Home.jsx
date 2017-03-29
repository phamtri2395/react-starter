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
      loading: true
    };
  }

  componentDidMount() {
    const preFetchUserList = () => (
      this.setState({
        loading: true
      })
    );

    const sufFetchUserList = () => (
      this.setState({
        loading: false
      })
    );

    const promise = this.props.fetchUserList(15)({
      pre: preFetchUserList,
      suf: sufFetchUserList
    });
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
