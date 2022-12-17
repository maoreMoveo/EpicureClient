import React from "react";
import "../assets/styles/pages/_home-page.scss";
import AboutUs from "../componets/about-us/AboutUs";
import DishesCarousel from "../componets/dishes/DishesCarousel";
import DishSignature from "../componets/dishes/DishSignature";
import HeroMain from "../componets/hero_main/HeroMain";
import RestaurantCarousel from "../componets/Restaurants/RestaurantCarousel";
import ShefOfWeek from "../componets/chefs/ChefOfWeek";
import Container from "../utils/Container";
import HomePageLink from "../componets/common/links/HomePageLink";

const HomePage = () => {
  return (
    <div>
      <HeroMain />
      <Container>
        <div className="restaurant-carousel-container">
          <h2>popular restaurant in epicure:</h2>
          <RestaurantCarousel />
          <div className="restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="dish-carousel-container">
          <h2>Signature Dish Of:</h2>
          <DishesCarousel />
          <div className="dish-restaurant-link ">
            <HomePageLink path="restaurant" />
          </div>
        </div>
      </Container>
      <DishSignature />
      <Container>
        <div className="chef-container">
          <h2>Chef of the week:</h2>
          <ShefOfWeek />
        </div>
      </Container>
      <AboutUs />
    </div>
  );
};

export default HomePage;
