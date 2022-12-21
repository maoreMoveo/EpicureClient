import React from "react";
import './_chefCaruosel.scss';
import HomePageLink from "../common/links/HomePageLink";
import ChefResturantCard from "./ChefResturantCard";
import Slider from "react-slick";
import {useSelector} from 'react-redux';
import { RootStore } from "../../store/store";

const ChefCaruosel = () => {
  const restaurants = useSelector((state:RootStore) => state.restaurants.restaurants);

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
  if(!restaurants) return <div>loading..</div>
  return (

      <div className="chef-res-carousel-container">
        <h2>Chef of the week:</h2>
        <div className="chef-res-carousel">
        <Slider {...settings}>
          {restaurants.map((rest) => (
            <ChefResturantCard key={rest._id} res={rest} />
          ))}
        </Slider>
          <HomePageLink path="chefs" />
        </div>
      
      <div className="chef-desktop">
        <div className="chef-items">
          {restaurants.slice(0, 3).map((rest) => (
            <ChefResturantCard key={rest._id} res={rest} />
          ))}
        </div>
      </div>
      </div>
    
  );
};

export default ChefCaruosel;
