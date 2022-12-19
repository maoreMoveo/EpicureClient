
import { dishesData } from "../data/dishesData";
import IDish from "../interfaces/Dishes";

const getAll = () => {
  return new Promise<IDish[]>((resolve) => {
    resolve(dishesData);
  });
};

const dishService = {
  getAll,
};

export default dishService;
