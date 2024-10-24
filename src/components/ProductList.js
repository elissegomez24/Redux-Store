import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;