import React from "react";
import { Link } from "react-router-dom";
import x from "../../assets/images/x.svg";
interface IProps {
  menuToggle: ()=>void;
}
const OpenMenu = ({ menuToggle }: IProps) => {
  return (
    <div className="open-menu">
      <div className="menu_button">
        <img src={x} alt="hamborger-icon" onClick={()=>menuToggle()}></img>
      </div>
      <div className="list">
        <Link to={"restaurant"} onClick={() => menuToggle()}>
          <h3>Restaurants</h3>
        </Link>
        <Link to={"chefs"} onClick={() => menuToggle()}>
          <h3>Chefs</h3>
        </Link>
        <div className="line"></div>
        <Link to={"contact-us"} onClick={() => menuToggle()}>
          <h3>Contact Us</h3>
        </Link>
        <Link to={"term-us"} onClick={() => menuToggle()}>
          <h3>Terms of Use</h3>
        </Link>
        <Link to={"privacy-policy"} onClick={() => menuToggle()}>
          <h3>Privacy Policy</h3>
        </Link>
      </div>
    </div>
  );
};

export default OpenMenu;
