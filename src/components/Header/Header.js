import React from 'react';

const Header = props => {
  return (
    <div className="header mt-5">
      <h1>Grocery List</h1>
      <h3>Total Items : {props.items}</h3>
    </div>
  );
};

export default Header;
