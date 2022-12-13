import React from "react";
import ChefCaruosel from "./ChefCaruosel";

const ChefOfWeek = () => {
  return (
    <>
    <div className="chef-container">
      <h2>Chef of the week:</h2>
      <div className="chef-about-content">
      <div className="chef-week-img">
        <img
          src={require("../../assets/images/yossi-shitrit-image.png")}
          alt="yossi shitrit"
        ></img>
        <div>Yossi Shitrit</div>
      </div>
      <div className="chef-about">
        <p>
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </p>
      </div>
      </div>
      <div className="chef-week">
        <ChefCaruosel/>
      </div>
      </div>
      
      </>
  );
};

export default ChefOfWeek;
