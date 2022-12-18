import React from "react";
import '../../assets/styles/components/restaurant/_restaurantCarousel.scss';
import { restaurantsData } from "../../data/restaurantData";
import RestaurantCardCarousel from "./RestaurantCardCarousel";
import Slider from "react-slick";
import HomePageLink from "../common/links/HomePageLink";
import RestaurantCard from "./RestaurantCard";
import IRestaurant from "../../interfaces/Restaurant";
interface IProps{
  restaurant:IRestaurant[];
}
const RestaurantCarousel = ({restaurant}:IProps) => {
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
      <div className="restaurant-carousel">
        <Slider {...settings}>
          {restaurant.map((rest) => (
            <RestaurantCardCarousel key={rest._id} restaurant={rest} />
          ))}
        </Slider>
      </div>
      <div className="restaurant-desktop">
        <div className="restaurant-items">
          {restaurant.slice(0, 3).map((rest) => (
            <RestaurantCard key={rest._id} restaurant={rest} />
          ))}
        </div> 
      </div>
    </>
  );
};

export default RestaurantCarousel;
