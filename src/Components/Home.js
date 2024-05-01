import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/phone-shadow.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            {"The Best Place to Hide is in Plain Sight".toUpperCase()}
          </h1>
          <p className="primary-text">
            Secure and disguise your app with our innovative camouflage technology, accessible only to your end user.
          </p>
          <a href="mailto:tal.sharon@outlook.co.il" className="secondary-button">
            Contact Us <FiArrowRight />{" "}
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{ width: "75%" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
