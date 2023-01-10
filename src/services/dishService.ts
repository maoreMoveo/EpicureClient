import axios from "axios";
const getDishesHomePage = async() => {
  const res=  await axios.get('http://localhost:3003/dish/getDishesForHomePage');
  console.log(res)
  return res.data;
};
const getRestaurantDishes = async(id:string,page:number,perPage:number) => {
  const res=  await axios.get('http://localhost:3003/dish/getRestaurantDishes',{
    params:{
      id:id,
      page,
      perPage
    }
  });
  return res.data;
};


const dishService = {
  getDishesHomePage,
  getRestaurantDishes
};

export default dishService;
