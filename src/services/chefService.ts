import { chefData } from "../data/chefData";
import IChef from "../interfaces/chef";

const getAll = () => {
  return new Promise<IChef[]>((resolve) => {
    resolve(chefData);
  });
};

const dishService = {
  getAll,
};

export default dishService;
