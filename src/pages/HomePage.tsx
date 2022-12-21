import React from "react";
import { useSelector } from "react-redux";
import "./_home-page.scss";
import AboutUs from "../componets/about-us/AboutUs";
import DishSignature from "../componets/dishes/DishSignature";
import HeroMain from "../componets/hero_main/HeroMain";
import ChefOfWeek from "../componets/chefs/ChefOfWeek";
import HomePageLink from "../componets/common/links/HomePageLink";
import { RootStore } from "../store/store";
import Loading from "../componets/common/loading/Loading";
import Carausel from "../componets/common/carousel/Carousel";
import RestaurantCard from "../componets/Restaurants/RestaurantCard";
import DishCard from "../componets/dishes/DishCard";

const HomePage = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  // ask  amir why not &&
  if (!restaurants || !dishes) return <Loading />;
  return (
    <div>
      <HeroMain />
        <div className="container">
          <h2>popular restaurant in epicure:</h2>
          <Carausel data={restaurants} Content={RestaurantCard} />
          <div className="restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
        <div className="container">
          <h2>Signature Dish Of:</h2>
          <Carausel data={dishes} Content={DishCard} />
          <div className="dish-restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
      <DishSignature />
        <div className="container">
          <h2>Chef of the week:</h2>
          <ChefOfWeek />
          <div className="restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
      <AboutUs />
    </div>
  );
};

export default HomePage;
