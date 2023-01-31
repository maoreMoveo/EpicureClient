import React from "react";
import "./about-us.scss";
import logo from "../../assets/images/epicure-logo.svg";
import googleIcon from "../../assets/images/google-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="about-us-down-link">
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
        </div>
        <div className="about-us-text">
          <h2>ABOUT US:</h2>
          <div className="about-us-text-p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum no eu ipsum. Cras porta
              malesuada eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
