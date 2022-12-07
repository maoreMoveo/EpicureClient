import React from "react";
import menuButton from "../../assets/images/hamborger.svg";
import logo from "../../assets/images/epicure-logo.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
const NavBar = () => {
  return (
    <nav className="navbar">

        <div className="menu_button">
          <img src={menuButton} alt="hamborger-icon"></img>
        </div>
        <div className="logo">
          <img src={logo} alt="logo-icon"></img>
        </div>
        <div className="buttons_group">
          <img src={searchIcon} alt="search-icon"></img>
          <img src={userIcon} alt="user-icon"></img>
          <img src={cartIcon} alt="cart-icon"></img>
        </div>
        
    </nav>
  );
};

export default NavBar;
