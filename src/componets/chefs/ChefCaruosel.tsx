import React from "react";
import HomePageLink from "../common/links/HomePageLink";
import ChefResturantCard from "./ChefResturantCard";
import { restaurantsData } from "../../data/restaurantData";
import Slider from "react-slick";

const ChefCaruosel = () => {
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
      <div className="chef-res-carousel-container">
        <h3>Chef of the week:</h3>
        <Slider {...settings}>
          {restaurantsData.map((rest) => (
            <ChefResturantCard key={rest._id} res={rest} />
          ))}
        </Slider>
      </div>
      <HomePageLink path="chefs" />
    </>
  );
};

export default ChefCaruosel;
