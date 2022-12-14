import React from 'react'
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
      <h3>{res.name}</h3>
    </div>
  )
}

export default ChefResturantCard;