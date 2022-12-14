import React from "react";
import { restaurantsData } from "../../data/restaurantData";
import { ISortPath } from "../../interfaces/sortPath";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const sortPath:ISortPath[]=[
    {path:"All",isActive:true},
    {path:"New",isActive:false},
    {path:"Most Popular",isActive:false},
    {path:"Open Now",isActive:false},
  ]
  return (
    <div className="restaurant-container">
      <h3>Restaurants</h3>
      {/* add sort item */}
      <div className="restuarant-sort">
        <ul>
        {sortPath.map((path,index)=> <li  key={index} className={path.isActive? 'active':""}>{path.path}</li>)}
        </ul>
      </div>
      <div className="restaurant-content">
        {restaurantsData.map((rest) => (
          <RestaurantCard key={rest._id} restaurant={rest} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
