import React from 'react'
import spicyIcon from '../../assets/images/spicy-icon.svg';
import vegetarianIcon from '../../assets/images/vegetarian-icon.svg';
 import veganIcon from '../../assets/images/vegan-icon.svg';
const DishSignature = () => {
  return (
    <div className='dish-signature'>
        <h3>Signature Dish Of:</h3>
        <div  className='dish-options'>
        <div>
            <img src={spicyIcon} alt="spicy-icon"></img>
            <h2>Spicy</h2>
        </div>
        <div>
            <img src={vegetarianIcon} alt="vegenarian-icon"></img>
            <h2>Vagitarian</h2>
        </div>
        <div>
            <img src={veganIcon} alt="vegan-icon"></img>
            <h2>Vegan</h2>
        </div>
        </div>
    </div>
  )
}

export default DishSignature