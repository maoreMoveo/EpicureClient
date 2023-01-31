import axios from "axios";
const getDishesHomePage = async() => {
  const res=  await axios.get('/dish/getDishesForHomePage');
  console.log(res)
  return res.data;
};

const dishService = {
  getDishesHomePage,
};

export default dishService;
