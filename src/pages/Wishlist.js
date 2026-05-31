import React from "react";
import "../styles/Wishlist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

 function WishlistPage({ wishlist }) {
  return (
    <div className="wishlist-page">
      <h1 className="wishlist-page-title">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="empty-wishlist">No items in wishlist yet.</p>
      ) : (
        <div className="wishlist-page-grid">
          {wishlist.map((item, index) => (
            <div className="wishlist-page-card" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-page-img"
              />

              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button className="product-btn">{item.button}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default WishlistPage;