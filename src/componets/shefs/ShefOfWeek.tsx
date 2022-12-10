import React from "react";
import ShefCaruosel from "./ShefCaruosel";

const ShefOfWeek = () => {
  return (
    <>
    <div className="shef-container">
      <h3>Chef of the week:</h3>
      <div className="img">
        <img
          src={require("../../assets/images/yossi-shitrit-image.png")}
          alt="yossi shitrit"
        ></img>
        <div>Yossi Shitrit</div>
      </div>
      <div className="shef-about">
        <p>
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </p>
      </div>
      </div>
      <div className="shef-week">
        <ShefCaruosel/>
      </div>
      </>
  );
};

export default ShefOfWeek;
