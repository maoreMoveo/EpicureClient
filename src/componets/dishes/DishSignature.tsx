import React from 'react'

const DishSignature = () => {
  return (
    <div className='dish-signature'>
        <h3>Signature Dish Of:</h3>
        <div  className='dish-options'>
        <div>
            <img src={require("../../assets/images/spicy-icon.svg")} alt="spicy-icon"></img>
            <h2>Spicy</h2>
        </div>
        <div>
            <img src={require("../../assets/images/vegan-icon.svg")} alt="vegan-icon"></img>
            <h2>Vagitarian</h2>
        </div>
        <div>
            <img src={require("../../assets/images/vegan-icon.svg")} alt="vegan-icon"></img>
            <h2>Vegan</h2>
        </div>
        </div>
    </div>
  )
}

export default DishSignature