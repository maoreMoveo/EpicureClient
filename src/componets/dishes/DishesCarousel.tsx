import React from "react";
import '../../assets/styles/components/dishes/_dishesCaruosel.scss';
import Slider from "react-slick";
import { dishesData } from "../../data/dishesData";
import HomePageLink from "../common/links/HomePageLink";
import DishCard from "./DishCard";
import DishCardCarousel from "./DishCardCarousel";
const DishesCarousel = () => {
  const settings = {
    dots: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 1.5,
    swipeToSlide: true,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="dish-carousel">
        <Slider {...settings}>
          {dishesData.map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </Slider>
      </div>
      <div className="dish-desktop">
        <div className="dish-items">
          {dishesData.slice(0, 3).map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesCarousel;
