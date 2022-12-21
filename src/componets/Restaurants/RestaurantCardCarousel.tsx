import React from "react";
import { Link } from "react-router-dom";
import './_restaurantCardCarousel.scss';
import IRestaurant from "../../interfaces/Restaurant";
interface IProps {
  item: IRestaurant;
}
const RestaurantCardCarousel = ({ item }: IProps) => {
  return (
    <Link className="card-navigate" to={`/restaurant/${item._id}`}>
    <div className="card-restaurant-carousel">
      <img
        src={require(`../../${item.thumb}`)}
        alt={item.name}
      ></img>
      <h3>{item.name}</h3>
      <h2>{item.chef}</h2>
    </div>
    </Link>
  );
};

export default RestaurantCardCarousel;
