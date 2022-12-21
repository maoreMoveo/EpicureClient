import React from "react";
import { useSelector } from "react-redux";
import "../assets/styles/pages/_home-page.scss";
import AboutUs from "../componets/about-us/AboutUs";
import DishesCarousel from "../componets/dishes/DishesCarousel";
import DishSignature from "../componets/dishes/DishSignature";
import HeroMain from "../componets/hero_main/HeroMain";
import RestaurantCarousel from "../componets/Restaurants/RestaurantCarousel";
import ChefOfWeek from "../componets/chefs/ChefOfWeek";
import Container from "../componets/common/Container";
import HomePageLink from "../componets/common/links/HomePageLink";
import { RootStore } from "../store/store";
import Loading from "../componets/common/loading/Loading";
import Carausel from "../componets/common/Carousel";
import RestaurantCardCarousel from "../componets/Restaurants/RestaurantCardCarousel";
import RestaurantCard from "../componets/Restaurants/RestaurantCard";
import DishCardCarousel from "../componets/dishes/DishCardCarousel";
import IRestaurant from "../interfaces/Restaurant";


const HomePage = () => {
  const restaurants = useSelector((state:RootStore) => state.restaurants.restaurants);
  const dishes= useSelector((state:RootStore)=> state.dishes.dishes);
  // ask  amir why not &&
  if (!restaurants || !dishes) return <Loading />;
    return (
    <div>
      <HeroMain />
      <Container>
        <div className="restaurant-carousel-container">
          <h2>popular restaurant in epicure:</h2>
          <Carausel data={restaurants}  Content={RestaurantCard} />
          {/* <RestaurantCarousel restaurants={restaurants} /> */}
          <div className="restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="dish-carousel-container">
          <h2>Signature Dish Of:</h2>
          {/* <DishesCarousel dishes={dishes} /> */}
          <Carausel data={dishes}  Content={DishCardCarousel}/>
          <div className="dish-restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
      </Container>
      <DishSignature />
      <Container>
        <div className="chef-container">
          <h2>Chef of the week:</h2>
          <ChefOfWeek />
        </div>
      </Container>
      <AboutUs />
    </div>
  );
};

export default HomePage;
