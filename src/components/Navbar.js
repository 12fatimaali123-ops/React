import React, { useState } from "react";
import SearchComponent from './searchcomponents';
import logo from '../assests/logo.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";
import { IoPerson } from 'react-icons/io5';



const NavBar = ({ wishlist, searchProduct,
  productSearchFunction,
  clearSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const getNavLinksClass = () => {
    if (menuOpen) {
      return "nav-links active";
    } else {
      return "nav-links";
    }
  };
  const getWishlistHeartClass = () => {
    if (wishlist.length > 0) {
      return "wishlist-heart clicked";
    }

    return "wishlist-heart";
  };
  const getWishlistIcon = () => {
    if (wishlist.length > 0) {
      return <FaHeart />;
    }

    return <FaRegHeart />;
  };
  return (
    <nav className="navbar ">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand"><img src={logo} alt="logo" height='40' className="logo-img" />
          <span className="logo-font ">Crochic</span>
        </Link>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>



        <div className={getNavLinksClass()}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/Shop" onClick={toggleMenu}>Shop</Link>
          <Link to="/About" onClick={toggleMenu}>About</Link>
          <Link to="/Faq" onClick={toggleMenu}>FAQ</Link>
          <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/Wishlist" className="wishlist-nav-icon" onClick={toggleMenu}>
            <span className={getWishlistHeartClass()}>{getWishlistIcon()} </span>
            {wishlist.length > 0 && (
              <span className="wishlist-badge">{wishlist.length}</span>
            )}
          </Link>
          <Link to="/cart" className="nav-link"><FaShoppingCart /></Link>
          <Link to="/Personalinfo" className='nav-link'><IoPerson /></Link>
          <div className="search-wrapper">
            <SearchComponent
              searchProduct={searchProduct}
              productSearchFunction={productSearchFunction}
              clearSearch={clearSearch}
            />
          </div>
        </div>

      </div>
    </nav>
  );
}
export default NavBar;