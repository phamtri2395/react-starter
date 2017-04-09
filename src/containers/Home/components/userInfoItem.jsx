import React from 'react';


/**
 * Custom Item to display user's info
 */

const userInfo = ({ id, firstName, lastName, avatar }) => (
  <div>
    <h4>ID: {id}</h4>
    <img style={{ display: 'inline-block' }} src={avatar} alt={id} />
    <h5>Name: {firstName} {lastName}</h5>
  </div>
);

userInfo.propTypes = {
  id: React.PropTypes.number.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired
};

export default userInfo;
