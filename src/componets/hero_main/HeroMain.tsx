import React from "react";
import heroImg from "../../assets/images/main-image.png";
import searchButton from "../../assets/images/search-icon.svg";
const HeroMain = () => {
  return (
    <div className="main">
        <img className="img" src={heroImg} alt="hero-img"></img>
      <div className="box">
        <div className="text">
        <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
        </div>
        <div className="search">
            <button>
                <img src={searchButton} alt="search-icon"></img>
            </button>
            <input placeholder="Search for restaurant cuisine, chef"></input>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
