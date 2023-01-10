import React, { useEffect, useState } from "react";
import "./_restaurant-page.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";
import { useNavigate, useParams } from "react-router";
import clockIcon from "../assets/images/clock-icon.svg";
import IRestaurant from "../interfaces/Restaurant";
import IDish from "../interfaces/Dishes";
import { ISortPath } from "../interfaces/sortPath";
import DishCard from "../componets/dishes/DishCard";
import Loading from "../componets/common/loading/Loading";
import restaurantService from "../services/restaurantService";
import dishService from "../services/dishService";
import ReactPaginate from "react-paginate";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
  const [restaurantDishes, setRestaurantDishes] = useState<IDish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(1);
  const sortPath: ISortPath[] = [
    { path: "Breakfast", isActive: true, value: "" },
    { path: "Lanch", isActive: false, value: "" },
    { path: "Dinner", isActive: false, value: "" },
  ];

  useEffect(() => {
    let rest:IRestaurant | undefined=undefined;
    if(!restaurant){
      if (restaurants) {
        rest = restaurants.find((rest) => rest._id === restaurantId);
       if (rest) {
         setRestaurant(rest);
       }
     } 
     else {
       try {
         if (restaurantId) {
         (async () => {
               const res = await restaurantService.getRestarauntById(
               restaurantId
             );
             if (res) {
               rest = res.restaurant[0];
               setRestaurant(res.restaurant[0]); 
             }
           })();
         }
       } catch (err) {
         console.log(err);
       }
     }
    }
    // if (!rest) navigate("/");
    if(restaurantId){
      (async () => {
        const restDishes= await dishService.getRestaurantDishes(restaurantId,pageOffset+1,4);
        if(restDishes)
        setRestaurantDishes([...restDishes.restaurantDishes])
        setPageCount(Math.trunc(restDishes.restDishesCount / 4))
        setLoading(false);
      })()
        
    }
  }, [restaurants, restaurantId, navigate,pageOffset]);

  const handlePageChange = (event: any) => {
    setLoading(true);
    setPageOffset(event.selected);
  };
  if (loading) return <Loading />;
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
      )}
    </>
  );
};

export default RestaurantPage;
