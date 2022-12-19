
import { restaurantsData } from "../data/restaurantData";
import IRestaurant from "../interfaces/Restaurant";

const getAll = () => {
  return new Promise<IRestaurant[]>((resolve) => {
    resolve(restaurantsData);
  });
};

const restaurantService = {
  getAll,
};

export default restaurantService;
