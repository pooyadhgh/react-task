import React from 'react';
const prodRef = React.createRef();
const quantRef = React.createRef();
let addedProduct = {};

const AddNewProduct = props => {
  // function formHandler(event) {
  //   event.preventDefault();
  //   addedProduct = {
  //     name: event.target.productName.value,
  //     quantity: event.target.productQuantity.value,
  //   };
  //   event.target.productName.value = '';
  //   event.target.productQuantity.value = '';
  // }

  return (
    <div className="mb-5 mt-5">
      <form onSubmit={e => (e.preventDefault(), props.formHandler(e))}>
        <input
          type="text"
          name="productName"
          id="productName"
          placeholder="Enter product name"
          className="form-control mb-2"
          ref={prodRef}
        />
        <input
          type="number"
          name="productQuantity"
          id="productQuantity"
          placeholder="Enter quantity"
          className="form-control mb-2"
          ref={quantRef}
          min="0"
        />
        <button id="addToCard" className="btn btn-success">
          Add to cart
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
