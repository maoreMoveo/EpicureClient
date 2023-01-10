import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./_restaurant.scss";
import { ISortPath } from "../interfaces/sortPath";
import RestaurantCard from "../componets/Restaurants/RestaurantCard";
import { AppDispatch, RootStore } from "../store/store";
import Loading from "../componets/common/loading/Loading";
import { useDispatch } from "react-redux";
import { getRestaurantsPerPageWithFilter } from "../store/restaurant/restaurantAction";
import ReactPaginate from "react-paginate";

const Restaurants = () => {
  const { restaurants, restaurantCount } = useSelector(
    (state: RootStore) => state.restaurants
  );
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setPageCount((restaurantCount % 6) + 1); 
  }, [restaurantCount]);

  useEffect(() => {
    (async () => {
      try {
        return await dispatch(
          getRestaurantsPerPageWithFilter({
            typeFilter: sortPath.value,
            page: pageOffset + 1,
            perPage: 6,
          })
        );
      } catch (err) {
        console.log(err);
      }
    })();
    setLoading(false);
  }, [dispatch, pageOffset, sortPath]);

  const handlePageChange = (event: any) => {
    setLoading(true);
    setPageOffset(event.selected);
  };
  const handleFilterChange = async (sortItem: ISortPath) => {
    let tempSortPath = [...sortPaths];
    tempSortPath.map((path) => path.isActive = false);
    const pathIndex = tempSortPath.findIndex(
      (li) => li.path === sortItem.path
    );
    tempSortPath[pathIndex].isActive = true;
    setSortPath(sortItem);
    setSortPaths([...tempSortPath])
    setLoading(true);
    setPageOffset(0);
  };

  if (loading) return <Loading />;
  return (
    <div className="restaurant-container">
      <h2 className="restaurant-title">Restaurants</h2>

      <div className="restuarant-sort">
        <ul>
          {sortPaths.map((path, index) => (
            <li
              key={index}
              className={path.isActive ? "active" : ""}
              onClick={() => handleFilterChange(path)}
            >
              {path.path}
            </li>
          ))}
        </ul>
      </div>
      {restaurants && restaurants.length === 0 && (
        <h2>no more restaurant...</h2>
      )}
      <div className="restaurant-content">
        {restaurants &&
          restaurants.map((rest) => (
            <RestaurantCard key={rest._id} item={rest} />
          ))}
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(e: any) => handlePageChange(e)}
          containerClassName="pagination"
          activeClassName="link-active"
          forcePage={pageOffset}
        />
      </div>
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
