import React from "react";
import { Link } from "react-router-dom";
import IRestaurant from "../../interfaces/Restaurant";

interface IProps {
  restaurant: IRestaurant;
}
const RestaurantCard = ({ restaurant }: IProps) => {
  return (
    <Link to={`/restaurant/${restaurant._id}`}>
    <div className="card-restaurant">
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

export default RestaurantCard;
