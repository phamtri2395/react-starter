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
  }

  componentDidMount() {
    this.props.fetchUser(15);
  }

  render() {
    const loading = this.props.msg ?
      <h3>{ this.props.msg }</h3> :
      <span />;

    return (
      <div>
        <h2>Homepage</h2>
        { loading }
        <List data={this.props.data} />
      </div>
    );
  }
}

export default connect(
  mapStoreToProps,
  mapActionToProps
)(Home);
