/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <div className="header">
    <div className="header-item">
      <img className="blockian-logo" src={Logo} alt="logo" />
      <p className="logo-text" >HIDEY</p>
    </div>
    {/* <div className="header-item">
      <a rel="noreferrer" href="https://twitter.com/_blockian" target="_blank">
        <TwitterIcon fontSize="large" />
      </a>
    </div> */}
  </div>
  );
};

export default Navbar;
