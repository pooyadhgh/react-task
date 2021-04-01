import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = props => {
  return props.fruits.map(fruit => {
    const { name, quantity, id } = fruit;
    return (
      <ProductItem
        key={id}
        name={name}
        quantity={quantity}
        add={() => props.add(id)}
        subtract={() => props.subtract(id)}
      />
    );
  });
};

export default ProductList;
