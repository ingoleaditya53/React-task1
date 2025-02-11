import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';   // Ensure correct path
import BookmarkedProducts from './components/BookmarkedProducts';   // Ensure correct path
import SearchBar from './components/SearchBar';
import { fetchProducts } from './utils/api';   // Ensure correct import
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [bookmarkedProducts, setBookmarkedProducts] = useState(
    JSON.parse(localStorage.getItem('bookmarkedProducts')) || []
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page).then((data) => setProducts((prev) => [...prev, ...data]));
  }, [page]);

  const toggleBookmark = (productId) => {
    setBookmarkedProducts((prev) => {
      const newBookmarks = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem('bookmarkedProducts', JSON.stringify(newBookmarks)); // Save to localStorage
      return newBookmarks;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title && product.title.toLowerCase().includes(searchQuery)
  );

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      <div className="tabs-container">
        <div className="tab">
          <h2>Products</h2>
          <ProductList
            products={filteredProducts}
            toggleBookmark={toggleBookmark}
            bookmarkedProducts={bookmarkedProducts}
          />
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
        <div className="tab">
          <h2>Bookmarked Products</h2>
          <BookmarkedProducts
            products={products}
            bookmarkedProducts={bookmarkedProducts}
            toggleBookmark={toggleBookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
