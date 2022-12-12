import React from "react";
import IDish from "../../interfaces/Dishes";
interface IProps {
  dish: IDish;
}
const DishCard = ({ dish }: IProps) => {
  return (
    <div className="card-dish">
      <img src={require(`../../${dish.image}`)} alt={dish.name}></img>
      <div className="dish-details">
        <h3>{dish.name}</h3>
        <div className="dish-ing">
          <p>{dish.ingredients}</p>
        </div>
        <div className="dish-price">
          <span>₪&nbsp;{dish.price}</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
