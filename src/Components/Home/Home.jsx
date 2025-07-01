import React from "react";
import MyImage from "../../assets/my.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full items-center md:items-start p-6 md:p-16 lg:p-24 min-h-[80vh]">
      {/* Image on the left */}
      <div className="relative mt-8 mb-8 md:mb-0 md:mr-12 flex-shrink-0 flex justify-center w-full md:w-auto">
        <img
          className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-white"
          src={MyImage}
          alt="My Photo"
        />
      </div>
      {/* Text on the right */}
      <div className="w-full md:w-2/3 flex flex-col space-y-6 md:space-y-10 md:pt-8 md:ml-10 lg:ml-20 items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter hover:text-blue-400 transition-colors">
          <TextChange />
        </h1>
        <p className="text-base md:text-2xl lg:text-3xl tracking-tight">
          Computer Science & Engineering Undergraduate at 
          University of Moratuwa
        </p>
        <a
          href="/cv.pdf"
          download="Sanuji_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 md:mt-10 text-white py-3 px-7 text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;