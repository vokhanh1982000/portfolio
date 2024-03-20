import React from "react";
import CardProject from "./CardProject";

const projects = [
  {
    image: "/images/ihealth.png",
    name: "IHealth",
    desc: "Website for health",
    position: "Fullstack developer",
    tech: ["ReactJs", "NestJs", "WebSocket", "React-query"],
  },
  {
    image: "/images/spa.png",
    name: "Spa",
    desc: "Website for spa",
    position: "Fullstack developer",
    tech: ["ReactJs", "NestJs", "React-query"]
  },
  {
    image: "/images/goodlife.png",
    name: "GoodLife",
    desc: "Website to advertise flyers",
    position: "Fullstack developer",
    tech: ["NextJs", "ReactJs", "NestJs", "Redux"]
  },
  {
    image: "/images/baychat.png",
    name: "BayChat",
    desc: "Website linked to third parties for chatting, manager, ...",
    position: "FrontEnd developer",
    tech: ["ReactJs", "NestJs", "WebSocket", "Context"]
  },
  {
    image: "/images/cresenii.png",
    name: "Cresenii",
    desc: "Website is same as Trello",
    position: "FrontEnd developer",
    tech: ["ReactJs", "NestJs", "Redux"]
  },
  {
    image: "/images/analus.png",
    name: "Analus",
    desc: "Website for learning",
    position: "Fullstack developer",
    tech: ["ReactJs", "NestJs", "React-query", "S3"]
  }
];

const ProjectSection = () => {
  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-10">
        My Projects
      </h2>
      <div className="flex flex-wrap gap-[3.33333%]">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
