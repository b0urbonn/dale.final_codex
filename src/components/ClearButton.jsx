// ClearButton.jsx
import React from 'react';
import './ClearButton.css'; // Import the ClearButton CSS file

const ClearButton = ({ handleClear }) => {
  return (
    <div className="clear-button-container">
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
