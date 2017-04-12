import React from 'react';
import PropTypes from 'prop-types';


/**
 * List component, which accepts an array & return list of Items.
 * It requires a display Item as prop, which handles rendering elements to view properly.
 */

const List = ({ collection, Item }) => (
  <div>
    {
      collection.map(el => (
        <Item key={el.id} {...el} />
      ))
    }
  </div>
);

List.propTypes = {
  collection: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  Item: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired
};

export default List;
