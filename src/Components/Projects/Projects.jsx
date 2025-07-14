import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import airlineImg from "../../assets/airways.png"; 
import deliveryImg from "../../assets/delivery.png";
import healthImg from "../../assets/health.png";

const projects = [
  {
    title: "Airline Reservation System",
    main: "B Airways is a web application that allows users to search for flights, book tickets, manage passenger details, and more. This is built using Next.js, React, and integrates with a MySQL database.",
    image: airlineImg,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/Sithum-Bimsara/B-Airways.git",
  },
  {
    title: "Food Delivery Website",
    main: "Fast Feast is a web application that allows users to order food from our restaurant, track their orders, and make payments. This is built using Next.js, React, and integrates with a MongoDB database.",
    image: deliveryImg,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/sanujis/Food-delivery-website.git",
  },
  {
    title: "Wellness Tracking Website",
    main: "Wellness 360 is a web application that analyzes health reports, provides insights, and helps users manage their wellness journey. This is built using React.js for the frontend and Ballerina for the backend.",
    image: healthImg,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/InduwaraRathnayake/iwb121-code-stormers.git",
  },
  {
    title: "Wellness Tracking Website",
    main: "Wellness 360 is a web application that analyzes health reports, provides insights, and helps users manage their wellness journey. This is built using React.js for the frontend and Ballerina for the backend.",
    image: healthImg,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/InduwaraRathnayake/iwb121-code-stormers.git",
  },
  {
    title: "Wellness Tracking Website",
    main: "Wellness 360 is a web application that analyzes health reports, provides insights, and helps users manage their wellness journey. This is built using React.js for the frontend and Ballerina for the backend.",
    image: healthImg,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/InduwaraRathnayake/iwb121-code-stormers.git",
  },
  {
    title: "Wellness Tracking Website",
    main: "Wellness 360 is a web application that analyzes health reports, provides insights, and helps users manage their wellness journey. This is built using React.js for the frontend and Ballerina for the backend.",
    image: healthImg,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/InduwaraRathnayake/iwb121-code-stormers.git",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  // Split projects into chunks of 3
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }

  // Only show up to visibleCount projects
  const visibleProjects = projects.slice(0, visibleCount);
  return (
    <div
      id="Projects"
      className="p-10 md:p-24 text-white"
    >
      <h1
        id="ProjectsHeading"
        className="text-2xl md:text-4xl text-white font-bold text-center mt-2 mb-6 scroll-mt-10"
      >
        Projects
      </h1>
      <div className="py-6 flex flex-col gap-y-10 items-center">
        {Array.from({ length: Math.ceil(visibleProjects.length / 3) }).map((_, rowIdx) => (
          <div key={rowIdx} className="flex flex-wrap justify-center gap-x-12 gap-y-10 w-full">
            {visibleProjects.slice(rowIdx * 3, rowIdx * 3 + 3).map((project, idx) => (
              <div key={idx} className="flex-1 flex justify-center min-w-[280px] max-w-[350px]">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-0">
        {visibleCount < projects.length && (
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + 3, projects.length))}
            className="md:mt-0 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] transition"
          >
            Show More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={() => setVisibleCount(3)}
            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;