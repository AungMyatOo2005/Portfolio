import React from "react";
import ProjectList from "../components/ProjectList";

const Project = ({ isDarkMode }) => {
  return (
    <section id="project" className="min-h-screen pt-16">
      <div>
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } w-full text-center text-[26px] font-Poppins font-semibold`}
        >
          Past Project Experience
        </h2>
        <p
          className={`text-center ${
            isDarkMode ? "dark-gradient-text" : "light-gradient-text"
          } font-Poppins text-[14px] mt-3`}
        >
          Explore the projects I've worked on so far
        </p>
      </div>
      <ProjectList isDarkMode={isDarkMode} />
    </section>
  );
};

export default Project;
