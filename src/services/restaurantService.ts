
import axios from "axios";

const getAllRestaraunt = async(typeFilter:string,page:number,perPage:number) => {
  try{
  const res=  await axios.get(`http://localhost:3003/restaurant/getRestaurantsPerPageWithFilter?page=${page}&perPage=${perPage}&typeFilter=${typeFilter}`);
  console.log(res)
  return res.data;
  }
  catch(err){
    console.log(err)
  }
};
const getPopularRestaraunt = async() => {
  try{
  const res=  await axios.get('http://localhost:3003/restaurant/getPopularRestaurnts');
  console.log(res)
  return res.data;
  }catch(err){
    console.log(err)
  }
 
};

const restaurantService = {
  getAllRestaraunt,
  getPopularRestaraunt,
};

export default restaurantService;
