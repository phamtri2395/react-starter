import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renameProps } from 'recompose';

import List from '../../components/List/List';
import userInfoItem from './components/userInfoItem';

import * as HomeAction from './HomeAction';

// Map properties from data to userInfoItem props name
const enhancedUserInfo = renameProps({
  last_name: 'lastName',
  first_name: 'firstName'
})(userInfoItem);

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
        {
          this.state.loading ?
            <h3>Loading...</h3> :
            <List collection={this.props.data} Item={enhancedUserInfo} />
        }
      </div>
    );
  }
}

export default connect(
  mapStoreToProps,
  mapActionToProps
)(Home);
