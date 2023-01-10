
import axios from "axios";
const getAllChefs = async() => {
  const res=  await axios.get('http://localhost:3003/chef/getChefs');
  console.log(res)
  return res.data;
};
const getChefOfWeek= async() => {
  try{
  const res=  await axios.get('http://localhost:3003/chef/getChefOfTheWeek');
  console.log(res)
  return res.data.result;
  } catch(err){
    console.log(err)
  }
};


const dishService = {
  getAllChefs,
  getChefOfWeek
};

export default dishService;
