import React from "react";
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
    <div className="dish-carousel-container">
      <div className="dish-title-chef">
        <h2>Signature Dish Of:</h2>
      </div>
      <div className="dish-carousel">
        <Slider {...settings}>
          {dishesData.map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </Slider>
        <HomePageLink path="restaurant" />
      </div>
      <div className="dish-desktop">
        <div className="dish-items">
          {dishesData.slice(0, 3).map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishesCarousel;
