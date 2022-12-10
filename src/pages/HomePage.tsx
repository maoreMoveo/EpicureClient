import React from "react";
import AboutUs from "../componets/about-us/AboutUs";
import DishesCarousel from "../componets/dishes/DishesCarousel";
import DishSignature from "../componets/dishes/DishSignature";
import Footer from "../componets/footer/Footer";
import HeroMain from "../componets/hero_main/HeroMain";
import RestaurantCarousel from "../componets/Restaurants/RestaurantCarousel";
import ShefOfWeek from "../componets/shefs/ShefOfWeek";

const HomePage = () => {
  return (
    <div>
      <HeroMain />
      <RestaurantCarousel />
      <DishesCarousel/>
      <DishSignature/>
      <ShefOfWeek/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default HomePage;
