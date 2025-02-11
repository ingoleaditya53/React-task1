// src/components/BookmarkedProducts.js
import React from 'react';

const BookmarkedProducts = ({ products, bookmarkedProducts, toggleBookmark }) => {
  const bookmarkedList = products.filter((product) =>
    bookmarkedProducts.includes(product.id)
  );

  return (
    <div className="product-list">
      {bookmarkedList.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <span>{product.title}</span>
          <p>{product.price} USD</p>
          <button
            className="bookmark-btn bookmarked"
            onClick={() => toggleBookmark(product.id)}
          >
            Remove Bookmark
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookmarkedProducts;
