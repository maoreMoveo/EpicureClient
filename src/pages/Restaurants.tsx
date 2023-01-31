import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./_restaurant.scss";
import { ISortPath } from "../interfaces/sortPath";
import RestaurantCard from "../componets/Restaurants/RestaurantCard";
import { AppDispatch, RootStore } from "../store/store";
import { useDispatch } from "react-redux";
import { getRestaurantsPerPageWithFilter } from "../store/restaurant/restaurantAction";
import Pagination from "../componets/common/pagination/Pagination";
import HeaderSort from "../componets/common/HeaderSort";
import LoadingContent from "../componets/common/loading/LoadingContent";

const perPage=6;

const Restaurants = () => {
  const { restaurants, restaurantCount, loading } = useSelector(
    (state: RootStore) => state.restaurants
  );
  const dispatch = useDispatch<AppDispatch>();
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [sortPath, setSortPath] = useState<ISortPath>({
    path: "All",
    isActive: true,
    value: "All",
  });
  const [sortPaths, setSortPaths] = useState<ISortPath[]>([
    { path: "All", isActive: true, value: "All" },
    { path: "New", isActive: false, value: "createdAt" },
    { path: "Most Popular", isActive: false, value: "stars" },
    { path: "Open Now", isActive: false, value: "isOpen" },
  ]);
  
  useEffect(() => {
    (async () => {
      try {
        return await dispatch(
          getRestaurantsPerPageWithFilter({
            typeFilter: sortPath.value,
            page: pageOffset + 1,
            perPage: perPage,
          })
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, pageOffset, sortPath]);

  const handlePageChange = (event: any) => {
    window.scrollTo(0, 0);
    setPageOffset(event.selected);
  };
  const handleFilterChange = async (sortItem: ISortPath) => {
    let tempSortPath = [...sortPaths];
    tempSortPath.map((path) => (path.isActive = false));
    const pathIndex = tempSortPath.findIndex((li) => li.path === sortItem.path);
    tempSortPath[pathIndex].isActive = true;
    setSortPath(sortItem);
    setSortPaths([...tempSortPath]);
    setPageOffset(0);
  };

  return (
    <div className="restaurant-container">
      <h2 className="restaurant-title">Restaurants</h2>
      <div className="restuarant-sort">
        <HeaderSort
          sortPaths={sortPaths}
          handleFilterChange={handleFilterChange}
        />
      </div>

      {restaurants && restaurants.length === 0 && (
        <h2>no more restaurant...</h2>
      )}
      {loading ? (
       <div className="restaurant-content-loading"> <LoadingContent /></div>
      ) : (
        <div className="restaurant-content">
         {restaurants &&
            restaurants.map((rest) => (
              <RestaurantCard key={rest._id} item={rest} />
            ))
          }
          </div>)}
      {restaurantCount > 0 && (
        <Pagination
          pageCount={Math.floor((restaurantCount / 6)+1 )}
          pageOffset={pageOffset}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Restaurants;

//more filter option
{
  /* <div className="navbar-filter">
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
      </div> */
}
