import React from "react";
import {useSelector} from 'react-redux';
import "../assets/styles/pages/_restaurant.scss";
import { ISortPath } from "../interfaces/sortPath";
import RestaurantCard from "../componets/Restaurants/RestaurantCard";
import { RootStore } from "../store/store";
import Loading from "../componets/common/loading/Loading";

const Restaurants = () => {
  const restaurants = useSelector((state:RootStore) => state.restaurants.restaurants);
  
  
  const sortPath: ISortPath[] = [
    { path: "All", isActive: true },
    { path: "New", isActive: false },
    { path: "Most Popular", isActive: false },
    { path: "Open Now", isActive: false },
  ];
  if(!restaurants) return <Loading/>

  return (
    <div className="restaurant-container">
      <h2 className="restaurant-title">Restaurants</h2>
      <div className="restuarant-sort">
        <ul>
          {sortPath.map((path, index) => (
            <li key={index} className={path.isActive ? "active" : ""}>
              {path.path}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="navbar-filter">
        <div className="navbar-filter-item">
          <span>Price Range</span>
          <img src={singleArrow} alt="single-arrow"></img>
        </div>
        <div className="navbar-filter-item">
          <span>Distance</span>
          <img src={singleArrow} alt="single-arrow"></img>
        </div>
        <div className="navbar-filter-item">
          <span>Rating</span>
          <img src={singleArrow} alt="single-arrow"></img>
        </div>
      </div> */}
      <div className="restaurant-content">
        { restaurants && restaurants.map((rest) => (
          <RestaurantCard key={rest._id} restaurant={rest} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
