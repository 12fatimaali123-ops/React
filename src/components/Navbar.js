import React, { useState } from "react";
import SearchComponent from './searchcomponents';
import logo from '../assests/logo.png';
import profile from '../assests/profile.png';
import cart from '../assests/cart1.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const NavBar = ({wishlist,searchProduct,
  productSearchFunction,
  clearSearch}) => {
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
    return (
        <nav className="navbar ">
        <div className="container navbar-container">
            <Link  to="/" className="navbar-brand"><img src={logo} alt="logo" height='40' className="logo-img" />
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
                <Link to="/Wishlist" className="wishlist-nav-icon">
  ♡
  {wishlist.length > 0 && (
    <span className="wishlist-badge">{wishlist.length}</span>
  )}
</Link>
<Link to="/cart" className="nav-link"><img src={cart} alt='Cart' className="logo-img"/></Link>
<Link to="/Personalinfo" className='nav-link'><img src={profile} alt='profile' className="logo-img"/></Link>
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