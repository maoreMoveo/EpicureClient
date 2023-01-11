import React from 'react';
import './_chefRestaurantCard.scss';
import IRestaurant from '../../interfaces/Restaurant';
import { Link } from 'react-router-dom';
interface IPropsChef{
  item: IRestaurant;
}
const ChefRestaurantCard = ({item}:IPropsChef) => {
  return (
    <Link className="card-chef-navigate" to={`/restaurant/${item._id}`}>
    <div className="card-chef-res">
      <img
        src={`${item.thumb}`}
        alt={item.name}
      ></img>
      <div className='chef-card-content'>
      <h2>{item.name}</h2>
      </div>
    </div>
    </Link>
  )
}

export default ChefRestaurantCard;