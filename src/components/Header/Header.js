import React from 'react';

const Header = props => {
  return (
    <div className="header mt-5">
      <h1>Grocery List</h1>
      <h2>Total Items: {props.items}</h2>
      <button className="btn btn-primary " onClick={props.modalHandler}>
        Add New Product
      </button>
      <button className="btn btn-primary m-2" onClick={props.toggle}>
        {props.isHidden ? 'Hide Products' : 'Show Products'}
      </button>
      <button className="btn btn-danger" onClick={props.removeAll}>
        Clear List
      </button>
    </div>
  );
};

export default Header;
