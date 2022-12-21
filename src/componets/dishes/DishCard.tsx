import React from "react";
import "./_dishCard.scss";
import { useToggle } from "../../hooks/useToggle";
import IDish from "../../interfaces/Dishes";
import DishModal from "./DishModal";
interface IProps {
  item: IDish;
}
const DishCard = ({ item }: IProps) => {
  const [openDishModal, dishToggle] = useToggle();
  return (
      <div className="dish-card" onClick={() => dishToggle()}>
        <img src={require(`../../${item.image}`)} alt={item.name}></img>
        <div className="dish-details">
          <div className="dish-info">
            <h3>{item.name}</h3>
            <div className="dish-ing">
              <p>{item.ingredients}</p>
            </div>
          </div>
          <div className="dish-icon">
            <img src={require(`../../${item.icon}`)} alt={item.name}></img>
          </div>
          <div className="dish-price">
            <div className="price-line"></div>
            <label>₪</label>
            <span>{item.price}</span>
            <div></div>
          </div>
        </div>
        {openDishModal && <DishModal dish={item} dishToggle={dishToggle} />}
      </div>
  );
};

export default DishCard;
