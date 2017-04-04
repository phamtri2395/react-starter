import React from 'react';

const List = ({ collection }) => (
  <div>
    { collection.map((el, idx) => (
      <div key={el.id}>
        <h4>ID: {el.id}</h4>
        <img style={{ display: 'inline-block' }} src={el.avatar} alt={el.id} />
        <h5>Name: {el.first_name} {el.last_name}</h5>
      </div>
    )) }
  </div>
);

List.propTypes = {
  collection: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default List;
