import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import YoutTube from "./Components/YouTube";
import ForDevelopers from "./Components/ForDevelopers";

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <YoutTube />
        {/* <Work /> */}
        <ForDevelopers />
        {/* <Contact /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
