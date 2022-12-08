import React from "react";
import { restaurantsData } from "../../data/restaurantData";
import RestaurantCard from "./RestaurantCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
        <h2>popular restaurant in epicure:</h2>
      </div>
      <div className="restaurant-carousel">
        <Slider {...settings}>
          {restaurantsData.map((rest) => (
            <RestaurantCard key={rest._id} restaurant={rest} />
          ))}
        </Slider>
        {/* move to common/linkButton */}
        <div className="link">
          <h2>All Restaurant</h2>
          <Link to={"restaurant"}>
            <img
            //svg not work
              src={require("../../assets/images/arrow.svg")}
              alt="link-button"
            ></img>
          </Link>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default RestaurantCarousel;
