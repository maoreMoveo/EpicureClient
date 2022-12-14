import React from "react";
import menuButton from "../../assets/images/hamborger.svg";
import logo from "../../assets/images/epicure-logo.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import { useToggle } from "../../hooks/useToggle";
import OpenMenu from "./OpenMenu";
import OpenSearch from "./OpenSearch";
import OpenCart from "./OpenCart";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openMenu,menuToggle]= useToggle();
  const [openSearch,searchToggle]= useToggle();
  const [openCart,cartToggle]= useToggle();

  return (
    <nav className="navbar">
      <div className="menu_button" >
        <img src={menuButton} alt="hh3mborger-icon" onClick={()=>menuToggle()}></img>
      </div>
      <div className="logo">
        <Link to='/'>
        <img src={logo} alt="logo-icon"></img>
        </Link>
        <div className="navbar-links">
              <span>Epicure</span>
              <Link to={'restaurant'} >Restaurant</Link>
              <Link to={'chefs'} >Chefs</Link>

        </div>
      </div>
      <div className="buttons_group">
        <img src={searchIcon} alt="search-icon" onClick={()=> searchToggle()}></img>
        <img src={userIcon} alt="user-icon"></img>
        <img src={cartIcon} alt="cart-icon" onClick={()=> cartToggle()}></img>
      </div>

     {openMenu && <OpenMenu menuToggle={menuToggle}/>}
     {openSearch && <OpenSearch searchToggle={searchToggle}/>}
    {openCart &&  <OpenCart cartToggle={cartToggle}/>}
    </nav>
  );
};

export default NavBar;
