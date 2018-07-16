import React from 'react';

function GroceryListItem(props) {
  return (
    <React.Fragment>
      <p>
        {props.name}: {props.count}
      </p>
    </React.Fragment>
  );
}

export default GroceryListItem;
