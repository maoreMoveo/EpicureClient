import React from 'react'
import IRestaurant from '../../interfaces/Restaurant';
interface IProps{
  res: IRestaurant;
}
const ShefResturantCard = ({res}:IProps) => {
  return (
    <div className="card-shef-res">
      <img
        src={require(`../../${res.thumb}`)}
        alt={res.name}
      ></img>
      <h3>{res.name}</h3>
    </div>
  )
}

export default ShefResturantCard;