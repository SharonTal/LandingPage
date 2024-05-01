import React from "react";
import { CodeBlock, dracula } from 'react-code-blocks';

import BannerBackground from "../Assets/about-background.png";
import BannerImage from "../Assets/phone-shadow.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useTypewriter } from "react-simple-typewriter";
const code = `import { Hidey, FlappyBird, Calculator, Delivery } from "hidey";

 const apps = [FlappyBird, Calculator, Delivery];

 const Main = () => {
   return (
     <Hidey
       allowedApps={apps}
       resetOnLeave={true}
     >
       <App />
     </Hidey>
   );
 }`

const ForDevelopers = () => {
  const [text, flags] = useTypewriter({
    words: [code],
    loop: false,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    onLoopDone: () => console.log("done from typewriter hook")
  });

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={BannerImage} alt="" style={{ height: "600px" }} /> */}
        <CodeBlock
          text={" " + text}
          language="jsx"
          showLineNumbers={true}
          theme={dracula}
          customStyle={{
            width: 600,
            height: 390
          }}
        />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          {"Built with developers in mind".toUpperCase()}
        </h1>
        <p className="primary-text primary-text-margin2">
          Import Our Library - Seamlessly integrate our technology with a few lines of code.
        </p>
        <p className="primary-text primary-text-margin2">
          Set Your Camouflage - Let your user Choose from a wide range of innocent-looking themes like calculators, calendars, weather apps, and more.
        </p>
        <p className="primary-text primary-text-margin2">
          Unlock Secretly - Only those with the secret can reveal and access the real application beneath the facade.
        </p>
        <div className="about-buttons-container">
          <a href="mailto:tal.sharon@outlook.co.il" className="secondary-button">
            Contact Us <FiArrowRight />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForDevelopers;
