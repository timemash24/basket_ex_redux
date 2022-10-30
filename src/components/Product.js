import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeAll } from '../basketSlice';

function Product({ name }) {
  const product = {
    name,
    quantity: 1,
  };
  const dispatch = useDispatch();

  return (
    <div>
      {name}
      <button onClick={() => dispatch(increment(product))}>
        Add to basket
      </button>
      <button onClick={() => dispatch(decrement(product))}>
        Remove from basket
      </button>
      <button onClick={() => dispatch(removeAll(product.name))}>
        Remove all
      </button>
    </div>
  );
}

export default Product;
