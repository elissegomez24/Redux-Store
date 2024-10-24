import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;