import React from "react";
import { Link } from "react-router-dom";
import { default as arrows } from "../../../assets/images/arrow.svg";
import './_home-page-link.scss';

interface IProps {
  path: string;
}
const HomePageLink = ({ path }: IProps) => {
  return (
    <Link to={path}>
    <div className="link">
      <h2>All Restaurant</h2>
     
        <img src={arrows} alt="link-button"></img>
    </div>
      </Link>
  );
};

export default HomePageLink;
