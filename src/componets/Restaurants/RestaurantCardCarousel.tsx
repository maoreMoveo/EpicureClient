import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/components/restaurant/_restaurantCardCarousel.scss';
import IRestaurant from "../../interfaces/Restaurant";
interface IProps {
  restaurant: IRestaurant;
}
const RestaurantCardCarousel = ({ restaurant }: IProps) => {
  return (
    <Link className="card-navigate" to={`/restaurant/${restaurant._id}`}>
    <div className="card-restaurant-carousel">
      <img
        src={require(`../../${restaurant.thumb}`)}
        alt={restaurant.name}
      ></img>
      <h3>{restaurant.name}</h3>
      <h2>{restaurant.chef}</h2>
    </div>
    </Link>
  );
};

export default RestaurantCardCarousel;
