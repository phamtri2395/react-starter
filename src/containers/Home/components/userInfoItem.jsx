import React from 'react';


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
  id: React.PropTypes.number.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired
};

export default userInfoItem;
