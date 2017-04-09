import React from 'react';


/**
 * List component, which accepts an array & return list of Items
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
  collection: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default List;
