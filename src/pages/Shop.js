import { useState } from "react";
import '../styles/Shop.css'
import '../styles/Wishlist.css'
import jacket from '../assests/jacket.png'
import bea from '../assests/bea.png'
import card from '../assests/card.jpeg'
import beanie from '../assests/beanie.jpg'
import sc from '../assests/sc.jpg'
import cr4 from '../assests/cr4.jpg'
import bear from '../assests/bear.png'
import blanket from '../assests/blanket.png'
import Keychain from '../assests/keychain.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



const Shop = ({ addToWishlist, isInWishlist, searchProduct }) => {
  const [category, setCategory] = useState("All");

  const products = [
    {
      name: "Handmade Cardigan",
      description: "$89 - Cozy, custom-fit.",
      image: jacket,
      category: "🧶 Crochet Wearables",
      button: "Inquire",
    },
    {
      name: "Warm Beanie",
      description: "$29 - Many colors.",
      image: bea,
      category: "🧶 Crochet Wearables",
      button: "Order",
    },
    {
      name: "Crochet Bunny",
      description: "$35 - Huggable toy.",
      image: cr4,
      category: "🧸 Amigurumi Toys",
      button: "Order",
    },
    {
      name: "Teddy Bear",
      description: "$45 - Keepsake gift.",
      image: bear,
      category: "🧸 Amigurumi Toys",
      button: "Order",
    },
    {
      name: "Mini Keychain",
      description: "$12 - Tiny animals.",
      image: Keychain,
      category: "🧸 Amigurumi Toys",
      button: "Order",
    },
    {
      name: "Throw Blanket",
      description: "$120 - Warm and textured.",
      image: blanket,
      category: "🧶 Crochet Wearables",
      button: "Order",
    },
    {
      name: "Handmade Cardigans",
      description: "$50 - Cozy, custom-fit cardigans in natural fibers.",
      image: card,
      category: "🧶 Crochet Wearables",
      button: "Inquire",
    },
    {
      name: "Warm Beanies",
      description: "$29 - Perfect for winter, many colors available.",
      image: beanie,
      category: "🧶 Crochet Wearables",
      button: "Order",
    },
    {
      name: "Infinity Scarves",
      description: "$30 - Soft, elegant, and unique.",
      image: sc,
      category: "🧶 Crochet Wearables",
      button: "Customize",
    },
  ];

  const filteredProducts = products.filter((product) => {
  const searchText = (searchProduct || "").toLowerCase();

  return (
    (category === "All" || product.category === category) &&
    product.name.toLowerCase().includes(searchText)
  );
});
  const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productIndex = cart.findIndex((item) => item.name === product.name);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
};

  return (


    <div className="shop-page">
      <h1 className="shop-title">All Products</h1>

      <div className="filter-buttons">
        <button
          className={category === "All" ? "filter-btn active" : "filter-btn"}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={
            category === "🧶 Crochet Wearables"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() => setCategory("🧶 Crochet Wearables")}
        >
          🧶 Crochet Wearables
        </button>

        <button
          className={
            category === "🧸 Amigurumi Toys"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() => setCategory("🧸 Amigurumi Toys")}
        >
          🧸 Amigurumi Toys
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <h3 className="product-name">{product.name}</h3>

            <p className="product-desc">{product.description}</p>

            <button className="product-btn ">{product.button}</button>
            <button className="product-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <button
              className={isInWishlist(product) ? "wishlist-btn added" : "wishlist-btn"}
              onClick={() => addToWishlist(product)}
            >
              {isInWishlist(product) ? "♥" : "♡"}
            </button>
            
          </div>
        ))}
      </div>
    </div>

  );
}
export default Shop;