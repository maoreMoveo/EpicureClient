import React from "react";
import { restaurantsData } from "../../data/restaurantData";
import RestaurantCardCarousel from "./RestaurantCardCarousel";
import Slider from "react-slick";
import HomePageLink from "../common/links/HomePageLink";

const RestaurantCarousel = () => {
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
      <div className="title-restaurant">
        <h3>popular restaurant in epicure:</h3>
      </div>
      <div className="restaurant-carousel">
        <Slider {...settings}>
          {restaurantsData.map((rest) => (
            <RestaurantCardCarousel key={rest._id} restaurant={rest} />
          ))}
        </Slider>
        <HomePageLink path="restaurant" />
      </div>
    </div>
  );
};

export default RestaurantCarousel;
