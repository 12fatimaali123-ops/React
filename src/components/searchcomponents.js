import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function SearchComponent({
  searchProduct,
  productSearchFunction,
  clearSearch,
}) {
  return (
    <div className="navbar-search-wrapper">
      <div className="navbar-search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchProduct}
          onChange={productSearchFunction}
          className="navbar-search-input"
        />

        {searchProduct && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={clearSearch}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;