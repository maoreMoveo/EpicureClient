import React from 'react'
import { Link } from "react-router-dom";

interface IProps{
  path:string
}
const HomePageLink = ({path}:IProps) => {
  return (
    <div className="link">
          <h2>All Restaurant</h2>
          <Link to={path}>
            <img
              alt="link-button"
            ></img>
          </Link>
        </div>
  )
}

export default HomePageLink