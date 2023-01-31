import React, { useState, useEffect } from "react";
import "./_navbar.scss";
import menuButton from "../../assets/images/hamborger.svg";
import logo from "../../assets/images/epicure-logo.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import { useToggle } from "../../hooks/useToggle";
import OpenMenu from "./OpenMenu";
import OpenSearch from "./OpenSearch";
import OpenCart from "./cart/OpenCart";
import { Link, useLocation } from "react-router-dom";
import { ILink } from "../../interfaces/ILink";
import OpenUser from "./OpenUser";

const NavBar = () => {
  const [openMenu, menuToggle, resetMenuToogle] = useToggle();
  const [openSearch, searchToggle, resetSearchToogle] = useToggle();
  const [openCart, cartToggle, resetCartToogle] = useToggle();
  const [openUser, userToggle, resetUserToogle] = useToggle();
  const [lastModalOpen, setLastModalOpen] = useState<string>("");
  const location = useLocation();
  const [navLinks, setNavLinks] = useState<ILink[]>([
    { path: "restaurants", isActive: false, value: "Restaurants" },
    { path: "chefs", isActive: false, value: "Chefs" },
  ]);

  useEffect(() => {
    const prevNavLink = [...navLinks];
    const link = navLinks.findIndex(
      (li) => `/${li.path}` === location.pathname
    );
    prevNavLink.map((link) => (link.isActive = false));
    if (link >= 0) {
      prevNavLink[link].isActive = true;
    }
    setNavLinks(prevNavLink);
  }, [location.pathname]);

  const resetToggle = (type: string, func: Function) => {
    resetMenuToogle();
    resetCartToogle();
    resetSearchToogle();
    resetUserToogle();
    setLastModalOpen(type);
    func();
    if (lastModalOpen === type) {
      setLastModalOpen("");
      func();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="menu_button">
            <img
              src={menuButton}
              alt="hh3mborger-icon"
              onClick={() => resetToggle("menu", menuToggle)}
            ></img>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo-icon"></img>
            </Link>
            <div className="navbar-links">
              <Link className="navbar-title" to={"/"}>
                Epicure
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={
                    link.isActive ? "navbar-link active" : "navbar-link"
                  }
                >
                  {link.value}
                </Link>
              ))}
            </div>
          </div>
          <div className="buttons_group">
            <img
              src={searchIcon}
              alt="search-icon"
              onClick={() => resetToggle("search", searchToggle)}
            ></img>
            <img
              src={userIcon}
              alt="user-icon"
              onClick={() => resetToggle("user", userToggle)}
            ></img>
            <img
              src={cartIcon}
              alt="cart-icon"
              onClick={() => resetToggle("cart", cartToggle)}
            ></img>
          </div>
        </div>
        {openMenu && <OpenMenu menuToggle={menuToggle} />}
        {openSearch && (
          <OpenSearch resetToggles={resetToggle} searchToggle={searchToggle} />
        )}
        {openCart && <OpenCart cartToggle={cartToggle} />}
        {openUser && (
          <OpenUser resetToggles={resetToggle} userToggle={userToggle} />
        )}
      </nav>
    </>
  );
};

export default NavBar;
