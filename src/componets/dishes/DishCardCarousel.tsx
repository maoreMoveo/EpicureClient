import React from "react";
import '../../assets/styles/components/dishes/_dishCardCarousel.scss';
import IDish from "../../interfaces/Dishes";
interface IProps {
  item: IDish;
}
const DishCardCarousel = ({ item }: IProps) => {
  return (
    <div className="card-dish-carousel">
      <img className="card-dish-carousel-img" src={require(`../../${item.image}`)} alt={item.name}></img>
      <div className="dish-carousel-details">
      <h3>{item.name}</h3>
      <div className="dish-carousel-ing">
        <p>{item.ingredients}</p>
      </div>
      <div className="dish-carousel-icon">
        <img src={require(`../../${item.icon}`)} alt={item.name}></img>
      </div>
      <div className="dish-carousel-price">
      <div className="price-line "></div>
      <span >₪&nbsp;{item.price}</span>
      <div></div>
      </div>
      </div>
    </div>
  );
};

export default DishCardCarousel;
