import React, { ChangeEvent, useState } from "react";
import "./_dish-modal.scss";
import x from "../../assets/images/x.svg";
import IDish from "../../interfaces/Dishes";
import ICart from '../../interfaces/cart';
import { AppDispatch, RootStore } from "../../store/store";
import {useDispatch,useSelector} from 'react-redux';
import { addItem } from "../../store/cart/cartSlice";
interface IProps {
  dish: IDish;
  dishToggle: () => void;
}

const DishModal = ({ dish, dishToggle }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state:RootStore) => state.cart);
  const [dishItem, setDishItem] = useState<ICart>({
    dish:dish,
    side: "",
    changes: [],
    quantity:1
  });
  console.log(cart);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(!dishItem.changes.includes(event.target.value)){
      console.log('add changes');
      setDishItem({
        ...dishItem,
        changes: [...dishItem.changes, event.target.value]
      });
    } else{
      setDishItem({
        ...dishItem,
        changes: dishItem.changes.filter(item => item !== event.target.value)
      });
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addItem(dishItem));
    dishToggle();
  }
  return (
    <div className="dish-modal-container">
      <div className="dish-modal">
        <div className="dish-menu-button">
          <img
            className="dish-menu-button-img"
            src={x}
            alt="hamborger-icon"
            onClick={() => dishToggle()}
          ></img>
        </div>
        <div className="dish-modal-content">
          <img src={`${dish.image}`} alt={dish.name}></img>
          <div className="dish-modal-details">
            <div className="dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.ingredients}</p>
              <div className="dish-modal-icon">
                <img src={`${dish.icon}`} alt={dish.name}></img>
              </div>
              <div className="dish-modal-price">
                <div className="price-line"></div>
                <span>₪&nbsp;{dish.price}</span>
                <div></div>
              </div>
            </div>
              <form  className="dish-chooose" onSubmit={handleSubmit}>
              <div className="dish-item-choose">
                <div className="dish-title-choose">
                  <span>Choose a side</span>
                </div>
                <div className="dish-inputs">
                  <div className="dish-input-side">
                    <input
                      type="checkbox"
                      value="White bread"
                      name="side"
                      checked={dishItem.side === "White bread"}
                      onChange={(e) =>
                        setDishItem(
                          {...dishItem,side:dishItem.side === "White bread" ? "" : "White bread"}
                        )
                      }
                    ></input>
                    <span>White bread</span>
                  </div>
                  <div className="dish-input-side">
                    <input
                      type="checkbox"
                      value="Sticky rice"
                      name="side"
                      checked={dishItem.side === "Sticky rice"}
                      onChange={(e) =>
                        setDishItem(
                          {...dishItem,side:dishItem.side === "Sticky rice" ? "" : "Sticky rice"}
                        )
                      }
                    ></input>
                    <span>Sticky rice</span>
                  </div>
                </div>
              </div>
              <div className="dish-item-choose">
                <div className="dish-title-choose">
                  <span>Changes</span>
                </div>
                <div className="dish-inputs">
                  <div className="dish-input">
                    <input
                      type="checkbox"
                      value="Whithout peanuts"
                      name="withoutPeanuts"
                      onChange={(e) => handleChange(e)}
                    ></input>
                    <span>Whithout peanuts</span>
                  </div>
                  <div className="dish-input">
                    <input
                      type="checkbox"
                      name="lessSpicy"
                      value="Sticky Less spicy"
                      onChange={(e) => handleChange(e)}
                    ></input>
                    <span>Sticky Less spicy</span>
                  </div>
                </div>
              </div>
              <div className="dish-item-choose">
                <div className="dish-title-choose">
                  <span>Quantity</span>
                </div>
                <div className="dish-quantity">
                  <button
                  type="button"
                    className="minus"
                    onClick={() =>
                      setDishItem(
                        {...dishItem,quantity: (dishItem.quantity>0)? dishItem.quantity -1: dishItem.quantity}
                      )
                    }
                  >
                    -
                  </button>
                  <span>{dishItem.quantity}</span>
                  <button
                  type="button"
                    className="pluse"
                    onClick={() =>
                      setDishItem({...dishItem,quantity: dishItem.quantity +1})
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="dish-add">
                <button type="submit">Add to bag</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default DishModal;
