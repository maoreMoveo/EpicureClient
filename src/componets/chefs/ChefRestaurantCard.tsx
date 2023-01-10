import React from 'react';
import './_chefRestaurantCard.scss';
import IRestaurant from '../../interfaces/Restaurant';
interface IPropsChef{
  item: IRestaurant;
}
const ChefRestaurantCard = ({item}:IPropsChef) => {
  return (
    <div className="card-chef-res">
      <img
        src={`${item.thumb}`}
        alt={item.name}
      ></img>
      <div className='chef-card-content'>
      <h2>{item.name}</h2>
      </div>
    </div>
  )
}

export default ChefRestaurantCard;