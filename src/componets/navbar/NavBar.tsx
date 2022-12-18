import React, { useState, useEffect } from "react";
import "../../assets/styles/components/navbar/_navbar.scss";
import menuButton from "../../assets/images/hamborger.svg";
import logo from "../../assets/images/epicure-logo.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import { useToggle } from "../../hooks/useToggle";
import OpenMenu from "./OpenMenu";
import OpenSearch from "./OpenSearch";
import OpenCart from "./OpenCart";
import { Link, useLocation } from "react-router-dom";
import { ISortPath } from "../../interfaces/sortPath";
import { ILink } from "../../interfaces/ILink";

const NavBar = () => {
  const [openMenu, menuToggle] = useToggle();
  const [openSearch, searchToggle] = useToggle();
  const [openCart, cartToggle] = useToggle();
  const location = useLocation();
  const [navLinks, setNavLinks] = useState<ILink[]>([
    { path: "restaurant", isActive: false, value: "Restaurant" },
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

  return (
    <>
      <nav className="navbar">
        <div className="menu_button">
          <img
            src={menuButton}
            alt="hh3mborger-icon"
            onClick={() => menuToggle()}
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
                className={link.isActive ? "navbar-link active" : "navbar-link"}
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
            onClick={() => searchToggle()}
          ></img>
          <img src={userIcon} alt="user-icon"></img>
          <img
            src={cartIcon}
            alt="cart-icon"
            onClick={() => cartToggle()}
          ></img>
        </div>
      </nav>

      {openMenu && <OpenMenu menuToggle={menuToggle} />}
      {openSearch && <OpenSearch searchToggle={searchToggle} />}
      {openCart && <OpenCart cartToggle={cartToggle} />}
    </>
  );
};

export default NavBar;
