import React from 'react'
import { Link } from 'react-router-dom';
import './_empty-cart.scss';
import cartIcon from "../../../assets/images/cart-icon.svg";
const EmptyCart = () => {
  return (
    <div className="cart-empty-content">
        
    <div className="cart-empty-text">
    <img src={cartIcon} alt="cart-icon"></img>
      <h2>your bag is empty</h2>
    </div>
    <div className="cart-empty-order-link">
      <Link to={'orders'}>Order History</Link>
    </div>
  </div>
  )
}

export default EmptyCart