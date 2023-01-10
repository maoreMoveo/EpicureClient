import axios from "axios";
const getDishesHomePage = async() => {
  const res=  await axios.get('http://localhost:3003/dish/getDishesForHomePage');
  console.log(res)
  return res.data;
};


const dishService = {
  getDishesHomePage,
};

export default dishService;
