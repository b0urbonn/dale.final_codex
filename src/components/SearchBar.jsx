// SearchBar.jsx
import React from 'react';
import './SearchBar.css';
import ClearButton from './ClearButton'; // Import the ClearButton component

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, handleClear }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {/* Include ClearButton component */}
      <ClearButton handleClear={handleClear} />
    </div>
  );
};

export default SearchBar;
