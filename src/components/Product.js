import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../basketSlice';

function Product({ name }) {
  const product = {
    name,
    quantity: 1,
  };
  const dispatch = useDispatch();

  const count = useSelector((state) =>
    state.basket.products?.map((product) => {
      if (product.name === name) return product.quantity;
      return null;
    })
  );

  return (
    <div>
      {name}:{count}
      <button onClick={() => dispatch(increment(product))}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
