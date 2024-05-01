import { useEffect, useRef } from "react";
import "./App.css";
import BannerBackground from "./Assets/home-banner-background.png";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import YoutTube from "./Components/YouTube";
import ForDevelopers from "./Components/ForDevelopers";
import Demo from "./Components/Demo";

function App() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const absoluteX = rect.left + window.scrollX;
      const absoluteY = rect.top + window.scrollY;
      console.log(`Absolute X position: ${absoluteX}, Absolute Y position: ${absoluteY}`);
    }
  }, []);

  return (
    <>
      <div className="App">
        <Home />
        <YoutTube />
        <Demo />
        {/* <Work /> */}
        <ForDevelopers />
        {/* <Contact /> */}
      </div>
      <div ref={elementRef} className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <Footer />
    </>
  );
}

export default App;
