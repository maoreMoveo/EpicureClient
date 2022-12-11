import React from "react";
import IRestaurant from "../../interfaces/Restaurant";
interface IProps {
  restaurant: IRestaurant;
}
const RestaurantCardCarousel = ({ restaurant }: IProps) => {
  return (
    <div className="card-restaurant-carousel">
      <img
        src={require(`../../${restaurant.thumb}`)}
        alt={restaurant.name}
      ></img>
      <h3>{restaurant.name}</h3>
      <h2>{restaurant.chef}</h2>
    </div>
  );
};

export default RestaurantCardCarousel;
