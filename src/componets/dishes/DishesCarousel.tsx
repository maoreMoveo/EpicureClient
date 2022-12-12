import React from "react";
import Slider from "react-slick";
import { dishesData } from "../../data/dishesData";
import HomePageLink from "../common/links/HomePageLink";
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
    <div className="restaurant-carousel-container">
      <div className="title-chef">
        <h3>Signature Dish Of::</h3>
      </div>
      <div className="restaurant-carousel">
        <Slider {...settings}>
          {dishesData.map((dish) => (
            <DishCardCarousel key={dish._id} dish={dish} />
          ))}
        </Slider>
        <HomePageLink path="dishes" />
      </div>
    </div>
  );
};

export default DishesCarousel;
