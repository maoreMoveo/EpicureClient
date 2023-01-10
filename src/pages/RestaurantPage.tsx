import React, { useEffect, useState } from "react";
import "./_restaurant-page.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";
import { useNavigate, useParams } from "react-router";
// import { restaurantsData } from "../data/restaurantData";
import clockIcon from "../assets/images/clock-icon.svg";
import IRestaurant from "../interfaces/Restaurant";
import IDish from "../interfaces/Dishes";

import { ISortPath } from "../interfaces/sortPath";
import DishCard from "../componets/dishes/DishCard";
import Loading from "../componets/common/loading/Loading";

const RestaurantPage = () => {
  const restaurantsData:any=[];
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState<IRestaurant | undefined>(
    undefined
  );
  const [restaurantDishes, setRestaurantDishes] = useState<IDish[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (restaurants && dishes) {
      const rest = restaurantsData.find((res:any) => res._id === restaurantId);
      if (!rest) {
        navigate("/");
      }
      const restaurantdishes:any=[]
      setRestaurant(rest);
      setRestaurantDishes(restaurantdishes);
    }
  }, [restaurantId, restaurants, dishes,navigate]);

  const sortPath: ISortPath[] = [
    { path: "Breakfast", isActive: true,value:"" },
    { path: "Lanch", isActive: false,value:"" },
    { path: "Dinner", isActive: false ,value:""},
  ];
  if (!restaurants || !dishes) return <Loading />;
  return (
    <>
      {restaurant && (
        <div className="restaurant-page-container">
          <img
            className="restaurant-page-img"
            src={require(`../${restaurant.thumb}`)}
            alt={restaurant.name}
          ></img>
          <div className="restaurant-page-details">
            <h3>{restaurant.name}</h3>
            <h2>{restaurant.chef[0].name}</h2>
            <div className="time-content">
              <img src={clockIcon} alt="clock-icon"></img>
              <span>Open now</span>
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
            {restaurantDishes &&
              restaurantDishes.map((dish) => (
                <DishCard key={dish._id} item={dish} isOpenModal={true} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantPage;
