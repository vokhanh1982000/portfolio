import React from "react";
import CardProject from "./CardProject";
// import ihealth from "/public/images/ihealth.png";
// import spa from "/public/images/spa.png";
// import goodlife from "/public/images/goodLife.png";
// import baychat from "/public/images/baychat.png";
// import cresenii from "/public/images/baychat.png";
// import analus from "/public/images/analus.png"

const projects = [
  {
    image: "ihealth",
    name: "IHealth",
    desc: "Website for health",
    position: "Fullstack developer",
    tech: ["ReactJs", "NestJs", "WebSocket", "React-query"],
  },
  {
    image: "spa",
    name: "Spa",
    desc: "Website for spa",
    position: "Fullstack developer",
    tech: ["ReactJs", "NestJs", "React-query"]
  },
  {
    image: "goodlife",
    name: "GoodLife",
    desc: "Website to advertise flyers",
    position: "Fullstack developer",
    tech: ["NextJs", "ReactJs", "NestJs", "Redux"]
  },
  {
    image: "baychat",
    name: "BayChat",
    desc: "Website linked to third parties for chatting, manager, ...",
    position: "FrontEnd developer",
    tech: ["ReactJs", "NestJs", "WebSocket", "Context"]
  },
  {
    image: "cresenii",
    name: "Cresenii",
    desc: "Website is same as Trello",
    position: "FrontEnd developer",
    tech: ["ReactJs", "NestJs", "Redux"]
  },
  {
    image: "analus",
    name: "Analus",
    desc: "Website for learning",
    position: "Fullstack developer",
    tech: ["ReactJs", "NestJs", "React-query", "S3"]
  }
];

const ProjectSection = () => {
  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-10">
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
