import React from 'react'
import { chefData } from '../../data/shefData'
import { ISortPath } from '../../interfaces/sortPath'

const Chefs = () => {
    const sortPath:ISortPath[]=[
        {path:"All",isActive:true},
        {path:"New",isActive:false},
        {path:"Most Views",isActive:false},
      ]
  return (
    <div className="chefs-container">
      <h3>chefs</h3>
      {/* add sort item */}
      <div className="chefs-sort">
        <ul>
        {sortPath.map((path,index)=> <li  key={index} className={path.isActive? 'active':""}>{path.path}</li>)}
        </ul>
      </div>
      <div className="chefs-content">
        {chefData.map((chefs) => (
          <div className="chef-img">
          <img
            src={require(`../../${chefs.image}`)}
            alt={chefs.name}
          ></img>
          <div>{chefs.name}</div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Chefs