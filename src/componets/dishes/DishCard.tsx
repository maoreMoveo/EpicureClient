import React from "react";
import '../../assets/styles/components/dishes/_dishCard.scss';
import { useToggle } from "../../hooks/useToggle";
import IDish from "../../interfaces/Dishes";
import DishModal from "./DishModal";
interface IProps {
  dish: IDish;
}
const DishCard = ({ dish }: IProps) => {
  const [openDishModal,dishToggle]= useToggle();
  return (
    <>
    <div className="dish-card" onClick={()=> dishToggle()}>
      <img src={require(`../../${dish.image}`)} alt={dish.name}></img>
      <div className="dish-details">
        <h3>{dish.name}</h3>
        <div className="dish-ing">
          <p>{dish.ingredients}</p>
        </div>
        <div className="dish-price">
          <div className="price-line"></div>
          <span>₪&nbsp;{dish.price}</span>
          <div ></div>
        </div>
      </div>
    </div>
    {openDishModal&& <DishModal dish={dish} dishToggle={dishToggle}/>}
    </>
  );
};

export default DishCard;
