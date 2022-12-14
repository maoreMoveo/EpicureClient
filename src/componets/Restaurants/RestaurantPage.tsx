import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { restaurantsData } from "../../data/restaurantData";
import clockIcon from "../../assets/images/clock-icon.svg";
import IRestaurant from "../../interfaces/Restaurant";
import IDish from "../../interfaces/Dishes";
import { dishesData } from "../../data/dishesData";
import { ISortPath } from "../../interfaces/sortPath";
import DishCard from "../dishes/DishCard";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState<IRestaurant | undefined>(
    undefined
  );
  const [restaurantDishes, setRestaurantDishes] = useState<IDish[]>([]);

  useEffect(() => {
    const rest = restaurantsData.find((res) => res._id === restaurantId);
    const dish = dishesData.filter((d) => d.restaurant === rest?.name);
    setRestaurant(rest);
    setRestaurantDishes(dish);
  }, [restaurantId]);

  const sortPath: ISortPath[] = [
    { path: "Breakfast", isActive: true },
    { path: "Lanch", isActive: false },
    { path: "Dinner", isActive: false },
  ];
  return (
    <>
      {!restaurant && <span>loading...</span>}
      {restaurant && (
        <div className="restaurant-page-container">
          <img
            src={require(`../../${restaurant.thumb}`)}
            alt={restaurant.name}
          ></img>
          <div className="restaurant-page-details">
            <h3>{restaurant.name}</h3>
            <h2>{restaurant.chef}</h2>
            <div className="time-content">
              <img src={clockIcon} alt="clock-icon"></img>
              <h2>Open now</h2>
            </div>
          </div>
          <div className="restuarant-page-sort">
            <ul>
              {sortPath.map((path, index) => (
                <li key={index} className={path.isActive ? "active" : ""}>
                  {path.path}
                </li>
              ))}
            </ul>
          </div>
          <div className="restaurant-page-dish">
            {restaurantDishes.map((dish) => (
              <DishCard key={dish._id} dish={dish} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantPage;
