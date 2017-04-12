import React from 'react';
import PropTypes from 'prop-types';


/**
 * Custom Item for displaying user's info
 */

const userInfoItem = ({ id, firstName, lastName, avatar }) => (
  <div>
    <h4>ID: {id}</h4>
    <img style={{ display: 'inline-block' }} src={avatar} alt={id} />
    <h5>Name: {firstName} {lastName}</h5>
  </div>
);

userInfoItem.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default userInfoItem;
