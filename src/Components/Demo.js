import React from "react";
import BannerBackground from "../Assets/demo.gif";

const Demo = () => {
  return (
    <div className="about-section-container demo-section-container">
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          {"Seamless Camouflage".toUpperCase()}
        </h1>
        <p className="primary-text primary-text-margin2">
          Disguise your apps as everyday tools, accessible only through a secret that's yours to keep.
        </p>
        <p className="primary-text primary-text-margin2">
          Automatically reverting to hidden mode even when minimized.
        </p>
      </div>
      <div className="about-section-image-container">
        <img src={BannerBackground} alt="" className="demo-gif" />
      </div>
    </div>
  );
};

export default Demo;
