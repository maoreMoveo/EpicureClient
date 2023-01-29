import React, { useEffect, useState } from "react";
import "./_restaurant-page.scss";
import { useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../store/store";
import { useParams } from "react-router";
import clockIcon from "../assets/images/clock-icon.svg";
import IRestaurant from "../interfaces/Restaurant";
import { ISortPathChef } from "../interfaces/sortPath";
import DishCard from "../componets/dishes/DishCard";
import Loading from "../componets/common/loading/Loading";
import restaurantService from "../services/restaurantService";
import Pagination from "../componets/common/pagination/Pagination";
import { useDispatch } from "react-redux";
import { getRestaurantDishes } from "../store/restaurant/restaurantAction";
import LoadingContent from "../componets/common/loading/LoadingContent";
import moment from "moment";
import { MealOption } from "../interfaces/Dishes";

const perPage = 4;

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { restaurants, restaurantPage, loading } = useSelector(
    (state: RootStore) => state.restaurants
  );
  const [loadingPage, setLoadingPage] = useState<boolean>(true);
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [sortPath, setSortPath] = useState<ISortPathChef>({
    path: "Breakfast",
    isActive: true,
    value: MealOption.Breakfast,
  });
  const [sortPaths, setSortPaths] = useState<ISortPathChef[]>([
    { path: "Breakfast", isActive: true, value: MealOption.Breakfast },
    { path: "Lunch", isActive: false, value: MealOption.Lunch },
    { path: "Dinner", isActive: false, value: MealOption.Dinner },
  ]);

  useEffect(() => {
    if (restaurantId) {
      fetchRestaurant(restaurantId);
    }
  }, [restaurantId,pageOffset,sortPath]);

  const fetchRestaurant = async (restaurantId: string) => {
    if (restaurants) {
      const rest = restaurants.find((item) => item._id === restaurantId);
      if (rest) {
        await dispatch(
          getRestaurantDishes({
            id: restaurantId,
            page: pageOffset + 1,
            perPage: perPage,
            filterByMeal: sortPath.value,
          })
        );
        setRestaurant(rest);
        setLoadingPage(false);
      }
    } else {
      const restFromDb: any = await restaurantService.getRestarauntById(
        restaurantId
      );
      if (restFromDb) {
        await dispatch(
          getRestaurantDishes({
            id: restaurantId,
            page: pageOffset + 1,
            perPage: perPage,
            filterByMeal: sortPath.value,
          })
        );
        setRestaurant(restFromDb.restaurant[0]);
        setLoadingPage(false);
      }
    }
  };
  const handleFilterChange = async (sortItem: ISortPathChef) => {
    let tempSortPath = [...sortPaths];
    tempSortPath.map((path) => (path.isActive = false));
    const pathIndex = tempSortPath.findIndex((li) => li.path === sortItem.path);
    tempSortPath[pathIndex].isActive = true;
    setSortPath(sortItem);
    setSortPaths([...tempSortPath]);
    setPageOffset(0);
  };

  const isOpen = (open: string, close: string): boolean => {
    const currentTime = moment();
    const openTime = moment(open, "HH:mm");
    const closeTime = moment(close, "HH:mm");
    return currentTime.isBetween(openTime, closeTime);
  };
  const handlePageChange = async (event: any) => {
    setPageOffset(event.selected);
  };
  if (loadingPage) return <Loading />;
  return (
    <>
      {restaurant && (
        <div className="restaurant-page-container">
          <img
            className="restaurant-page-img"
            src={`${restaurant.thumb}`}
            alt={restaurant.name}
          ></img>
          <div className="restaurant-page-details">
            <h3>{restaurant.name}</h3>
            <h2>{restaurant.chef[0].name}</h2>
            {isOpen(restaurant.open, restaurant.close) ? (
              <div className="time-content">
                <img src={clockIcon} alt="clock-icon"></img>
                <span>Open now</span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="restuarant-page-sort">
            <ul className="restaurant-page-sort-list">
              {sortPaths.map((path, index) => (
                <li
                  key={index}
                  onClick={() => handleFilterChange(path)}
                  className={path.isActive ? "active" : ""}
                >
                  {path.path}
                </li>
              ))}
            </ul>
          </div>
          <div className="restaurant-page-dish">
            {loading ? (
              <LoadingContent />
            ) : (
              restaurantPage.restaurantDishes &&
              restaurantPage.restaurantDishes.map((dish) => (
                <DishCard key={dish._id} item={dish} isOpenModal={true} />
              ))
            )}
          </div>
          {restaurantPage.restaurantDishesCount > 0 && (
            <Pagination
              pageCount={Math.floor(
                restaurantPage.restaurantDishesCount / perPage
              )}
              pageOffset={pageOffset}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default RestaurantPage;
