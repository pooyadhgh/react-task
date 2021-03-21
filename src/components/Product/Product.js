import React from 'react';

const Product = props => {
  return (
    <>
      <ul>
        <li>Name : {props.name} </li>
        <li>Quantity : {props.quantity}</li>
      </ul>
    </>
  );
};

export default Product;
