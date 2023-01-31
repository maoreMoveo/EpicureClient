import axios from "axios";
import { MealOption } from "../interfaces/Dishes";

const getAllRestaraunt = async (
  typeFilter: string,
  page: number,
  perPage: number
) => {
  try {
    const res = await axios.get(
      `/restaurant/getRestaurantsPerPageWithFilter?page=${page}&perPage=${perPage}&typeFilter=${typeFilter}`
    );
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const getRestaurantDishes = async (
  id: string,
  page: number,
  perPage: number,
  filterByMeal:MealOption
) => {
  try {
    const res = await axios.get(
      "/dish/getRestaurantDishes",
      {
        params: {
          id: id,
          page,
          perPage,
          filterByMeal
        },
      }
    );
    const tempRes={...res.data,restaurantId:id}
    return tempRes;
  } catch (err) {
    console.log(err);
  }
};

const getPopularRestaraunt = async () => {
  try {
    const res = await axios.get(
      "/restaurant/getPopularRestaurnts"
    );
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const getRestarauntById = async (id: string) => {
  try {
    const res = await axios.get(
      "/restaurant/getRestaurantById",
      {
        params: {
          id: id,
        },
      }
    );
    console.log("gett by id");
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const restaurantService = {
  getAllRestaraunt,
  getPopularRestaraunt,
  getRestarauntById,
  getRestaurantDishes,
};

export default restaurantService;
