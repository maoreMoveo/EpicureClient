
import { restaurantsData } from "../data/restaurantData";
import IRestaurant from "../interfaces/Restaurant";

const getAll = () => {
  return new Promise<IRestaurant[]>((resolve) => {
   setTimeout(() => {
    resolve(restaurantsData);
   }, 5000);
  });
};

const restaurantService = {
  getAll,
};

export default restaurantService;
