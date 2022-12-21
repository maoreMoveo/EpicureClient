import React, { useEffect, useState } from "react";
import "../../assets/styles/components/navbar/_open-menu.scss";
import { Link } from "react-router-dom";
import x from "../../assets/images/x.svg";
import { useLocation } from "react-router";
import { ILink } from "../../interfaces/ILink";
interface IProps {
  menuToggle: () => void;
}
const OpenMenu = ({ menuToggle }: IProps) => {
  const location = useLocation();
  const [navLinks, setNavLinks] = useState<ILink[]>([
    { path: "restaurant", isActive: false, value: "Restaurant" },
    { path: "chefs", isActive: false, value: "Chefs" },
    { path: "123", isActive: false, value: "Contact Us" },
    { path: "1", isActive: false, value: "Terms of Use" },
    { path: "2", isActive: false, value: "Privacy Policy" },
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
    <div className="open-menu">
      <div className="menu_button">
        <img src={x} alt="hamborger-icon" onClick={() => menuToggle()}></img>
      </div>
      <div className="list">
        {navLinks.map((link, index) => (
          <div key={link.path}>
            <div>
              <Link
                key={link.path}
                to={link.path}
                className="navbar-link"
                onClick={() => menuToggle()}
              >
                <h3 className={link.isActive ? "active" : ""}>{link.value}</h3>
              </Link>
            </div>
            {index === 1 ? <div className="navbar-line"></div> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenMenu;
