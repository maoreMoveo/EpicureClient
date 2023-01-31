
import axios from "axios";
const getChefsWithPagination = async(typeFilter:string,page:number,perPage:number) => {
  const res=  await axios.get(`http://localhost:3003/chef/getChefsWithPagination?page=${page}&perPage=${perPage}&typeFilter=${typeFilter}`);
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
  getChefsWithPagination,
  getChefOfWeek
};

export default dishService;
