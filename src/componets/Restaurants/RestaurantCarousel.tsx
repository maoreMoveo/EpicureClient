import React from "react";
import "../../assets/styles/components/restaurant/_restaurantCarousel.scss";
import RestaurantCardCarousel from "./RestaurantCardCarousel";
import Slider from "react-slick";
import RestaurantCard from "./RestaurantCard";
import IRestaurant from "../../interfaces/Restaurant";
interface IProps {
  restaurants: IRestaurant[] | null;
}
const RestaurantCarousel = ({ restaurants }: IProps) => {

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
  if (!restaurants) return <div>loading....</div>;
  return (
    <>
      <div className="restaurant-carousel">
        <Slider {...settings}>
          {restaurants.map((rest) => (
            <RestaurantCardCarousel key={rest._id} restaurant={rest} />
          ))}
        </Slider>
      </div>
      <div className="restaurant-desktop">
        <div className="restaurant-items">
          {restaurants.slice(0, 3).map((rest) => (
            <RestaurantCard key={rest._id} restaurant={rest} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantCarousel;
