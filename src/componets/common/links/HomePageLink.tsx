import React from "react";
import { Link } from "react-router-dom";
import { default as arrows } from "../../../assets/images/arrow.svg";
import '../../../assets/styles/components/common/_home-page-link.scss';

interface IProps {
  path: string;
}
const HomePageLink = ({ path }: IProps) => {
  return (
    <div className="link">
      <h2>All Restaurant</h2>
      <Link to={path}>
        <img src={arrows} alt="link-button"></img>
      </Link>
    </div>
  );
};

export default HomePageLink;
