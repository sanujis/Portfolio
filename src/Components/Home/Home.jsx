import React from "react";
import MyImage from "../../assets/my.jpg";
import TextChange from "../TextChange";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Home = () => {
  // Function to scroll to the Projects section
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      name="home"
      className="w-full min-h-screen bg-[#171d32] flex items-center justify-center relative overflow-hidden"
    >
      {/* Content wrapper with negative margin to move content up */}
      <div className="text-white flex flex-col md:flex-row w-full items-center md:items-start p-6 md:p-16 lg:p-24 -mt-12">
        {/* Image on the left */}
        <div className="relative md:mr-12 flex-shrink-0 flex justify-center w-full md:w-auto mt-14">
          <img
            className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-white"
            src={MyImage}
            alt="My Photo"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-2/3 flex flex-col space-y-6 md:space-y-10 md:pt-8 md:ml-10 lg:ml-20 items-center md:items-start text-center md:text-left">
          {/* Fixed height container to prevent shifting */}
          <h1
            className="text-2xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter hover:text-[#465697] transition-colors"
            style={{ minHeight: "4.5rem" }} // Adjust based on your text size
          >
            <TextChange />
          </h1>

          {/* Your description paragraph included here */}
          <p className="text-base md:text-2xl lg:text-3xl tracking-tight">
            Computer Science & Engineering Undergraduate at University of Moratuwa
          </p>

          <p className="text-sm md:text-lg lg:text-xl text-gray-300">
            Passionate about software engineering and leveraging data-driven insights to solve complex problems. I enjoy creating practical solutions in software development and data science.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-2 md:mt-4">
            <a href="https://github.com/sanujis" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://medium.com/@sanujis1102" target="_blank" rel="noopener noreferrer">
              <FaMedium size={28} className="hover:text-blue-400 transition duration-300" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download="Sanuji_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white py-3 px-7 text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                Download CV
              </button>
            </a>

            {/* View Projects Button */}
            <button
              onClick={scrollToProjects}
              className="text-white py-3 px-7 text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
