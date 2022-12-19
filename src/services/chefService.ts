import { chefData } from "../data/chefData";
import IChef from "../interfaces/chef";

const getAll = () => {
  return new Promise<IChef[]>((resolve) => {
    setTimeout(() => {
      resolve(chefData);
     }, 5000);
  });
};

const dishService = {
  getAll,
};

export default dishService;
