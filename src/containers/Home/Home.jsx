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
  /**
   * Server-side rendering
   * Static method, which handles fetching asynchronous data for component
   */

  static getPreloadedState({ store }) {
    // Take out dispatch from store
    const dispatch = store.dispatch;

    // Bind dispatch to actions
    const actions = bindActionCreators(HomeAction, dispatch);

    const fetch1 = actions.fetchSingleUser(1);
    const fetch2 = actions.fetchSingleUser(2);
    const fetch3 = actions.fetchSingleUser(3);

    // Link async call in order, make them sync together
    fetch1.next(fetch2);
    fetch2.next(fetch3);

    return fetch1.all();
  }


  /**
   * Component's traditional logic
   */

  // Get store directly from Context
  static contextTypes = {
    store: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    console.log('This log only appears in development mode');

    // Use same static method, which's used to fetch preloadedState in Server-side redering
    // To load data when componentDidMount
    this.constructor.getPreloadedState({ store: this.context.store });
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
