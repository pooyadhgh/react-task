import React from 'react';

const ProductItem = props => {
  return (
    <>
      <tr>
        <td scope="row">{props.name}</td>
        <td scope="row">
          <button className="btn btn-secondary btn-sm m-1" onClick={props.add}>
            +
          </button>
          {props.quantity}
          <button
            className="btn btn-secondary btn-sm m-1"
            onClick={props.subtract}
          >
            -
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
