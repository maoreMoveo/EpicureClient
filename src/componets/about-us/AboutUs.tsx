import React from "react";
import logo from "../../assets/images/epicure-icon.png";
import googleIcon from "../../assets/images/google-icon.png";
import appleIcon from "../../assets/images/apple-icon.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <img className="about-us-logo" src={logo} alt="logo"></img>
        <div className="about-us-download">
          <img src={googleIcon} alt="google-icon"></img>
          <div>
            <span className="line-one">Get it on</span>
            <span className="line-two">Google Play</span>
          </div>
        </div>
        <div className="about-us-download">
          <img src={appleIcon} alt="apple-icon"></img>
          <div>
            <span className="line-one">Download on the</span>
            <span className="line-two">App Store</span>
          </div>
        </div>
        <div className="about-us-text">
          <h3>ABOUT US:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
            justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
