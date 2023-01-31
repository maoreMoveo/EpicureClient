import IChef from "./chef";

export default interface IRestaurant {
  _id: string;
    name: string;
    chef: IChef[];
    open: string;
    close: string;
    thumb: string;
    stars: number;
}
