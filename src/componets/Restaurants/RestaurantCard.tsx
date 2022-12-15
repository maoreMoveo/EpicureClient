import React from "react";
import { Link } from "react-router-dom";
import IRestaurant from "../../interfaces/Restaurant";
import star from '../../assets/images/star.svg';
import emptyStar from '../../assets/images/empty-star.svg';

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
        <div className="card-content">
          <h3>{restaurant.name}</h3>
          <h2>{restaurant.chef}</h2>
          <div className="card-stars">
          {[...Array(restaurant.stars)].map((_, i) => (
            <img src={star} alt="" key={i} />
          ))}
          {[...Array(5 - restaurant.stars)].map((_, i) => (
            <img src={emptyStar} alt="" key={i} />
          ))}
        </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
