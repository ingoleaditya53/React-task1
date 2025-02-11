import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300); // Throttling for 300ms

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="search-container">
        <h2>Search Products</h2>
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users"
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
