import React, { useEffect } from "react";
import "./_dishCard.scss";
import { useToggle } from "../../hooks/useToggle";
import shekelImg from '../../assets/images/shekel.svg';
import IDish from "../../interfaces/Dishes";
import DishModal from "./DishModal";
interface IProps {
  item: IDish;
  isOpenModal?:boolean
}
const DishCard = ({ item,isOpenModal }: IProps) => {
  const [openDishModal, dishToggle] = useToggle();
  useEffect(() => {
    if (openDishModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openDishModal])
  
  console.log(openDishModal);
  return (
    <>
      <div className="dish-card" onClick={ isOpenModal && dishToggle}>
        <img className="dish-card-img" src={`${item.image}`} alt={item.name}></img>
        <div className="dish-details">
          <div className="dish-info">
            <h3>{item.name}</h3>
            <div className="dish-ing">
              <p>{item.ingredients}</p>
            </div>
          </div>
          <div className="dish-icon">
            <img src={`${item.icon}`} alt={item.name}></img>
          </div>
          <div className="dish-price">
            <div className="price-line"></div>
            <div className="dish-price-img"><img src={shekelImg} alt="shekel"></img></div>
            <div className="dish-price-number">{item.price}</div>
            <div className="price-line-seconde"></div>
          </div>
        </div>
      </div>
        
        {openDishModal && <DishModal dish={item} dishToggle={dishToggle} />}
        </>
  );
};

export default DishCard;
