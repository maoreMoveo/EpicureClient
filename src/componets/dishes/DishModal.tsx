import React from "react";
import '../../assets/styles/components/dishes/_dish-modal.scss';
import x from "../../assets/images/x.svg";
import IDish from "../../interfaces/Dishes";
interface IProps {
  dish: IDish;
  dishToggle: () => void;
}
const DishModal = ({ dish, dishToggle }: IProps) => {
  return (
    <div className="dish-modal-container">
    <div className="dish-modal">
      <div className="menu_button">
        <img src={x} alt="hamborger-icon" onClick={() => dishToggle()}></img>
      </div>
      <div className="dish-modal-content">
        <img src={require(`../../${dish.image}`)} alt={dish.name}></img>
        <div className="dish-modal-details">
          <div className="dish-info">
            <h3>{dish.name}</h3>
            <p>{dish.ingredients}</p>
          </div>
          <div className="dish-chooose">
            <div className="dish-item-choose">
              <div className="dish-title-choose">
                <span>Choose a side</span>
              </div>
              <div className="dish-input-side">
                <input type="checkbox"></input>
                <span>White bread</span>
              </div>
              <div className="dish-input-side">
                <input type="checkbox"></input>
                <span>Sticky rice</span>
              </div>
            </div>
            <div className="dish-item-choose">
              <div className="dish-title-choose">
                <span>Changes</span>
              </div>
              <div className="dish-input">
                <input type="checkbox"></input>
                <span>Whithout peanuts</span>
              </div>
              <div className="dish-input">
                <input type="checkbox"></input>
                <span>Sticky Less spicy</span>
              </div>
            </div>
            <div className="dish-item-choose">
              <div className="dish-title-choose">
                <span>Quantity</span>
              </div>
              <div className="dish-quantity">
                {/* <input type="checkbox"></input> */}
                <button className="minus">-</button>
                <span>1</span>
                <button className="pluse">+</button>
              </div>
            </div>
            <div className="dish-add">
            <button >Add to bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DishModal;
