import React from "react";
import x from "../../assets/images/x.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
interface IProps {
  cartToggle: () => void;
}
const OpenCart = ({ cartToggle }: IProps) => {
  return (
    <div className="open-cart">
      <div className="menu_button">
        <img src={x} alt="hamborger-icon" onClick={() => cartToggle()}></img>
        <h3>Cart</h3>
      </div>
      <div className="cart-content">
        <img src={cartIcon} alt="cart-icon"></img>
        <div className="cart-text">
          <h2>your bag is empty</h2>
        </div>
      </div>
    </div>
  );
};

export default OpenCart;
