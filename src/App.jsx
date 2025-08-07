import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden scroll-smooth">
      <>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <div id="projects">
          <Projects />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
