// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, toggleBookmark, bookmarkedProducts }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <span>{product.title}</span>
          <p>{product.price} USD</p>
          <button
            className={`bookmark-btn ${bookmarkedProducts.includes(product.id) ? 'bookmarked' : ''}`}
            onClick={() => toggleBookmark(product.id)}
          >
            {bookmarkedProducts.includes(product.id) ? 'Unbookmark' : 'Bookmark'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
