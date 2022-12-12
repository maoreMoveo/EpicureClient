import React from "react";
import IDish from "../../interfaces/Dishes";
interface IProps {
  dish: IDish;
}
const DishCardCarousel = ({ dish }: IProps) => {
  return (
    <div className="card-dish-carousel">
      <img src={require(`../../${dish.image}`)} alt={dish.name}></img>
      <div className="dish-carousel-details">
      <h3>{dish.name}</h3>
      <div className="dish-carousel-ing">
        <h2>{dish.ingredients}</h2>
      </div>
      <div className="dish-carousel-icon">
        <img src={require(`../../${dish.icon}`)} alt={dish.name}></img>
      </div>
      <div className="dish-carousel-price">
      <span >₪&nbsp;{dish.price}</span>
      <div></div>
      </div>
      </div>
    </div>
  );
};

export default DishCardCarousel;
