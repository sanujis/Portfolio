import React from "react";
import { FaGuitar, FaPaintBrush, FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="About"
      className="w-full mt-10 px-4 scroll-mt-10"
    >
      <h2 className="text-2xl md:text-4xl font-bold mt-20 mb-12 text-white text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 rounded-2xl shadow-2xl p-10 flex items-start gap-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-white bg-opacity-20 rounded-full p-5 flex items-center justify-center">
            <FaGuitar size={48} className="text-blue-200" />
          </div>
          <div>
            <div className="topic text-2xl font-bold mb-2 text-white">Playing Musical Instruments</div>
            <p className="text-base text-white">
              I am a versatile musician with the ability to play the piano, guitar and recorder.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 rounded-2xl shadow-2xl p-10 flex items-start gap-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-white bg-opacity-20 rounded-full p-5 flex items-center justify-center">
            <FaPaintBrush size={48} className="text-pink-200" />
          </div>
          <div>
            <div className="topic text-2xl font-bold mb-2 text-white">Graphic Design</div>
            <p className="text-base text-white">
              I have experience in designing eye-catching flyers that effectively communicate messages.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-fuchsia-900 via-fuchsia-700 to-fuchsia-500 rounded-2xl shadow-2xl p-10 flex items-start gap-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-white bg-opacity-20 rounded-full p-5 flex items-center justify-center">
            <FaCode size={48} className="text-fuchsia-200" />
          </div>
          <div>
            <div className="topic text-2xl font-bold mb-2 text-white">Coding</div>
            <p className="text-base text-white">
              I am proficient in multiple programming languages, including Python, Java, C, and C++.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 rounded-2xl shadow-2xl p-10 flex items-start gap-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-white bg-opacity-20 rounded-full p-5 flex items-center justify-center">
            <FaLaptopCode size={48} className="text-purple-200" />
          </div>
          <div>
            <div className="topic text-2xl font-bold mb-2 text-white">Web Development</div>
            <p className="text-base text-white">
              I specialize in web development, utilizing HTML, CSS, and JavaScript to create dynamic and responsive websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;