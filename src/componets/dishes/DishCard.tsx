import React from 'react'
import  IDish  from '../../interfaces/Dishes';
interface IProps{
  dish: IDish;
}
const DishCard = ({dish}:IProps) => {
    return (
        <div className="card-chef">
          <img
            src={require(`../../${dish.image}`)}
            alt={dish.name}
          ></img>
          <h3>{dish.name}</h3>
         <div className='dish-ing'>
         <h2>{dish.ingredients}</h2>
         </div>
         <div className='dish-icon'>
          
            <img src={require(`../../${dish.icon}`)}
            alt={dish.name}></img>
          </div>
          <span className='price'>₪&nbsp;{dish.price}</span>
        </div>
      );
}

export default DishCard