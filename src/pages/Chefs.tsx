import React,{useEffect} from "react";
import "./_chefs.scss";
import { ISortPath } from "../interfaces/sortPath";
import {useSelector,useDispatch} from 'react-redux';
import { AppDispatch, RootStore } from "../store/store";
import { getAllChefs } from "../store/chef/chefAction";
import Loading from "../componets/common/loading/Loading";
const Chefs = () => {
  const chefs= useSelector((state:RootStore) => state.chefs.chefs);
  const sortPath: ISortPath[] = [
    { path: "All", isActive: true },
    { path: "New", isActive: false },
    { path: "Most Views", isActive: false },
  ];
  const dispatch=useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllChefs())
  }, [dispatch])
  
  if(!chefs) return <Loading/>
  return (
    <div className="chefs-container">
      <h2>chefs</h2>
      {/* add sort item */}
      <div className="chefs-sort">
        <ul>
          {sortPath.map((path, index) => (
            <li key={index} className={path.isActive ? "active" : ""}>
              {path.path}
            </li>
          ))}
        </ul>
      </div>
      <div className="chefs-content">
        {chefs.map((chefs) => (
          <div key={chefs.name} className="chef-img">
            <img src={require(`../${chefs.image}`)} alt={chefs.name}></img>
            <div>{chefs.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
