import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/images/cart-icon.svg";
interface IProps {
  cartToggle: () => void;
}
const OpenCart = ({ cartToggle }: IProps) => {
  return (
    <div className="open-cart">
      <div className="cart-content">
        
        <div className="cart-text">
        <img src={cartIcon} alt="cart-icon"></img>
          <h2>your bag is empty</h2>
        </div>
        <div className="cart-order-link">
          <Link to={'orders'}>Order History</Link>
        </div>
      </div>
    </div>
  );
};

export default OpenCart;
