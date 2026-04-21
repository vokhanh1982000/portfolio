import React from "react";
import CardProject from "./CardProject";
import { projectsData } from "../../data/portfolio";

const ProjectSection = () => {
  return (
    <div id="projects">
      <div className="flex items-center my-16">
        <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="px-10 text-center text-4xl font-bold text-white title-animation">
          My Projects
        </h2>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
