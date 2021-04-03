import React from 'react';
const prodRef = React.createRef();
const quantRef = React.createRef();

const AddNewProduct = props => {
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

        <button type="submit" id="addToCard" className="btn btn-primary m-2">
          Add Product
        </button>

        <input
          type="button"
          id="cancel"
          className="btn btn-danger"
          value="Cancel"
          onClick={props.cancelHandler}
        />
      </form>
    </div>
  );
};

export default AddNewProduct;
