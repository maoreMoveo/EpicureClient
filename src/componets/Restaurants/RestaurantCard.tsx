import React from "react";
import "./_restaurantCard.scss";
import { Link } from "react-router-dom";
import IRestaurant from "../../interfaces/Restaurant";
import star from "../../assets/images/star.svg";
import emptyStar from "../../assets/images/empty-star.svg";

interface IProps {
  item: IRestaurant;
}
const RestaurantCard = ({ item }: IProps) => {
  return (
    <Link className="card-navigate" to={`/restaurant/${item._id}`}>
      <div className="card-restaurant">
        <img src={`${item.thumb}`} alt={item.name}></img>
        <div className="card-content">
          <h3>{item.name}</h3>
          <h2>{item.chef[0].name}</h2>
          <div className="card-stars">
            {[...Array(item.stars)].map((_, i) => (
              <img src={star} alt="" key={i} />
            ))}
            {[...Array(5 - item.stars)].map((_, i) => (
              <img src={emptyStar} alt="" key={i} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
