import React from 'react';

const Header = props => {
  return (
    <div className="header mt-5">
      <h1>Grocery List</h1>
      <h2>Total Items: {props.items}</h2>
      <button className="btn btn-info" onClick={props.toggle}>
        {props.isHidden ? 'Hide Products' : 'Show Products'}
      </button>
    </div>
  );
};

export default Header;
