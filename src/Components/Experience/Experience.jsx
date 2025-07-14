import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiC, SiCplusplus, SiPython, SiMongodb, SiMysql, SiNextdotjs, SiAngular, SiTailwindcss, SiFlask } from "react-icons/si";
// Removed SiVisualstudiocode import because it causes an error

const iconStyle = "transition-transform duration-300 hover:scale-125 drop-shadow-lg";

const Experience = () => {
  return (
    <div id="Experience" className="w-full mt-10 px-4 scroll-mt-10">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-12 text-center mt-24">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Languages */}
        <div className="bg-zinc-900 bg-opacity-80 rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-6 tracking-wide">Languages</span>
          <div className="flex gap-10 mb-3 justify-center">
            <SiPython size={56} className={`text-yellow-300 ${iconStyle}`} />
            <FaJava size={56} className={`text-blue-400 ${iconStyle}`} />
            <SiC size={56} className={`text-blue-300 ${iconStyle}`} />
            <SiCplusplus size={56} className={`text-blue-500 ${iconStyle}`} />
            <FaJs size={56} className={`text-yellow-400 ${iconStyle}`} />
          </div>
        </div>
        {/* Frontend */}
        <div className="bg-zinc-900 bg-opacity-80 rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-6 tracking-wide">Frontend</span>
          <div className="flex gap-10 mb-2 flex-wrap justify-center">
            <FaHtml5 size={56} className={`text-orange-500 ${iconStyle}`} />
            <FaCss3 size={56} className={`text-blue-400 ${iconStyle}`} />
            <FaReact size={56} className={`text-cyan-300 ${iconStyle}`} />
            <SiNextdotjs size={56} className={`text-white ${iconStyle}`} />
            <SiAngular size={56} className={`text-red-500 ${iconStyle}`} />
            <FaBootstrap size={56} className={`text-purple-400 ${iconStyle}`} />
            <SiTailwindcss size={56} className={`text-cyan-400 ${iconStyle}`} />
          </div>
        </div>
        {/* Backend */}
        <div className="bg-zinc-900 bg-opacity-80 rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-6 tracking-wide">Backend</span>
          <div className="flex gap-10 mb-2 justify-center">
            <FaNodeJs size={56} className={`text-green-400 ${iconStyle}`} />
            <SiNextdotjs size={56} className={`text-white ${iconStyle}`} />
            <SiFlask size={56} className={`text-gray-200 ${iconStyle}`} />
          </div>
        </div>
        {/* Databases */}
        <div className="bg-zinc-900 bg-opacity-80 rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-6 tracking-wide">Databases</span>
          <div className="flex gap-10 mb-2 justify-center">
            <SiMysql size={56} className={`text-blue-300 ${iconStyle}`} />
            <SiMongodb size={56} className={`text-green-400 ${iconStyle}`} />
          </div>
        </div>
        {/* Tools & Platforms */}
        <div className="bg-zinc-900 bg-opacity-80 rounded-2xl shadow-xl p-10 col-span-1 md:col-span-2 flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-6 tracking-wide">Tools & Platforms</span>
          <div className="flex gap-10 mb-2 flex-wrap justify-center">
            <FaGitAlt size={56} className={`text-orange-400 ${iconStyle}`} />
            <FaGithub size={56} className={`text-white ${iconStyle}`} />
            {/* <SiVisualstudiocode size={56} className={`text-blue-400 ${iconStyle}`} /> */}
            <FaFigma size={56} className={`text-pink-400 ${iconStyle}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;