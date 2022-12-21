import React from 'react';
import './_chefCard.scss';
import IRestaurant from '../../interfaces/Restaurant';
interface IProps{
  res: IRestaurant;
}
const ChefResturantCard = ({res}:IProps) => {
  return (
    <div className="card-chef-res">
      <img
        src={require(`../../${res.thumb}`)}
        alt={res.name}
      ></img>
      <div className='chef-card-content'>
      <h2>{res.name}</h2>
      </div>
    </div>
  )
}

export default ChefResturantCard;