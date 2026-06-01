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
import { FaRegHeart, FaHeart } from "react-icons/fa";



const Shop = ({ addToWishlist, isInWishlist, searchProduct }) => {
  const [category, setCategory] = useState("All");

  const products = [
    {
      name: "Handmade Cardigan",
      description: "$89 - Cozy, custom-fit.",
      image: jacket,
      category: "🧶 Crochet Wearables",
      
    },
    {
      name: "Warm Beanie",
      description: "$29 - Many colors.",
      image: bea,
      category: "🧶 Crochet Wearables",
     
    },
    {
      name: "Crochet Bunny",
      description: "$35 - Huggable toy.",
      image: cr4,
      category: "🧸 Amigurumi Toys",
     
    },
    {
      name: "Teddy Bear",
      description: "$45 - Keepsake gift.",
      image: bear,
      category: "🧸 Amigurumi Toys",
     
    },
    {
      name: "Mini Keychain",
      description: "$12 - Tiny animals.",
      image: Keychain,
      category: "🧸 Amigurumi Toys",
      
    },
    {
      name: "Throw Blanket",
      description: "$120 - Warm and textured.",
      image: blanket,
      category: "🧶 Crochet Wearables",
      
    },
    {
      name: "Handmade Cardigans",
      description: "$50 - Cozy, custom-fit cardigans in natural fibers.",
      image: card,
      category: "🧶 Crochet Wearables",
      
    },
    {
      name: "Warm Beanies",
      description: "$29 - Perfect for winter, many colors available.",
      image: beanie,
      category: "🧶 Crochet Wearables",
      
    },
    {
      name: "Infinity Scarves",
      description: "$30 - Soft, elegant, and unique.",
      image: sc,
      category: "🧶 Crochet Wearables",
    
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
  const getWishlistClass = (product) => {
    if (isInWishlist(product)) {
      return "wishlist-btn added";
    }

    return "wishlist-btn";
  };

 const getWishlistHeart = (product) => {
  if (isInWishlist(product)) {
    return <FaHeart />;
  }

  return <FaRegHeart />;
};
  const getFilterButtonClass = (buttonCategory) => {
  if (category === buttonCategory) {
    return "filter-btn active";
  }

  return "filter-btn";
};

  return (


    <div className="shop-page">
      <h1 className="shop-title">All Products</h1>

      <div className="filter-buttons">
        <button
          className={getFilterButtonClass("All")}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={getFilterButtonClass("🧶 Crochet Wearables")}
          onClick={() => setCategory("🧶 Crochet Wearables")}
        >
          🧶 Crochet Wearables
        </button>

        <button
          className={getFilterButtonClass("🧸 Amigurumi Toys")}
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

            
            <button className="product-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <button
              className={getWishlistClass(product)}
              onClick={() => addToWishlist(product)}
            >
              {getWishlistHeart(product)}
            </button>

          </div>
        ))}
      </div>
    </div>

  );
}
export default Shop;