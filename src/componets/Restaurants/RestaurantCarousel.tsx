import React from "react";
import { restaurantsData } from "../../data/restaurantData";
import RestaurantCardCarousel from "./RestaurantCardCarousel";
import Slider from "react-slick";
import HomePageLink from "../common/links/HomePageLink";
import RestaurantCard from "./RestaurantCard";
const RestaurantCarousel = () => {
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
    <div className="restaurant-carousel-container">
      <div className="title-restaurant">
        <h2>popular restaurant in epicure:</h2>
      </div>
      <div className="restaurant-carousel">
        <Slider {...settings}>
          {restaurantsData.map((rest) => (
            <RestaurantCardCarousel key={rest._id} restaurant={rest} />
          ))}
        </Slider>
        <div className="restaurant-link">
          <HomePageLink path="restaurant" />
        </div>
      </div>
      <div className="restaurant-desktop">
        <div className="restaurant-items">
          {restaurantsData.slice(0, 3).map((rest) => (
            <RestaurantCard key={rest._id} restaurant={rest} />
          ))}
        </div>
        <div className="restaurant-link">
          <HomePageLink path="restaurant" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCarousel;
