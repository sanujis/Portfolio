import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";

function App() {
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
