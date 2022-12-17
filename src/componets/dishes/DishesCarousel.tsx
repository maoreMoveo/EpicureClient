import React from "react";
import '../../assets/styles/components/dishes/_dishesCaruosel.scss';
import Slider from "react-slick";
import DishCardCarousel from "./DishCardCarousel";
import IDish from "../../interfaces/Dishes";
interface IProps{
  dishes: IDish[];
}
const DishesCarousel = ({dishes}:IProps) => {
  const settings = {
    dots: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="dish-carousel">
        <Slider {...settings}>
          {dishes.map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </Slider>
      </div>
      <div className="dish-desktop">
        <div className="dish-items">
          {dishes.slice(0, 3).map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesCarousel;
