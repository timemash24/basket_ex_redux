import React from 'react';
import { useSelector } from 'react-redux';

function Basket() {
  const products = useSelector((state) => state.basket.products);
  const total = products
    ? products.reduce((acc, product) => acc + product.quantity, 0)
    : 0;
  return (
    <div>
      <p>Total Items in Basket:{total}</p>
      <ul>
        Item list:
        {products
          ? products.map((product) => (
              <li key={product.name}>
                {product.name}:{product.quantity}
              </li>
            ))
          : 0}
      </ul>
    </div>
  );
}

export default Basket;
