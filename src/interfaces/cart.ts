import IDish from "./Dishes";

export default interface ICart {
    dish: IDish;
    side: string,
    changes:string[],
    quantity:number
  }
  