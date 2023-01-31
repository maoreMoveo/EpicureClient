export enum MealOption {
  Breakfast = 0,
  Lunch = 1,
  Dinner = 2
}
export default interface IDish {
  _id: string
  name: string;
  restaurant: string;
  ingredients: string;
  image: string;
  icon: string;
  price: number;
  meal:MealOption
  }