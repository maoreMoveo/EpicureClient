import React from "react";
import "./_chefOfWeek.scss";
import { useSelector } from "react-redux";
import Carousel from "../common/carousel/Carousel";
import { RootStore } from "../../store/store";
import ChefRestaurantCard from "./ChefRestaurantCard";

const ChefOfWeek = () => {
  const chefOfWeek = useSelector(
    (state: RootStore) => state.chefs.chefOfWeek
  );
console.log(chefOfWeek);
  return (
    <>
       <div className="chef-about-content">
        <div className="chef-week-img">
          <img
            src={`${chefOfWeek.chef.image}`}
            alt="yossi shitrit"
          ></img>
          <div>{chefOfWeek.chef.name}</div>
        </div>
        <div className="chef-about">
          <p>
           {chefOfWeek.chef.description}
          </p>
        </div>
      </div>
      <div className="chef-week">
        <h2 className="chef-week-title">Chef of the week:</h2>
        <h2 className="chef-week-title2">Yossi’s Restaurants</h2>

        <Carousel data={chefOfWeek.restaurantChef} Content={ChefRestaurantCard} />
      </div> 
    </>
  );
};

export default ChefOfWeek;
