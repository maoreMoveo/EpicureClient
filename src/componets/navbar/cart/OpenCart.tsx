import React from "react";
import './_open-cart.scss';
import { Link } from "react-router-dom";
import EmptyCart from './EmptyCart';
import { RootStore } from "../../../store/store";
import {useSelector,useDispatch} from 'react-redux';

interface IProps {
  cartToggle: () => void;
}
const OpenCart = ({ cartToggle }: IProps) => {
  const cart = useSelector((state:RootStore) => state.cart);
  console.log(cart)
  return (
    <div className="open-cart">
     <EmptyCart/>
    </div>
  );
};

export default OpenCart;
