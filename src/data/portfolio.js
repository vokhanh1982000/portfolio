import React from "react";
import ihealth from "/public/images/ihealth.png";
import spa from "/public/images/spa.png";
import goodlife from "/public/images/goodLife.png";
import baychat from "/public/images/baychat.png";
import cresenii from "/public/images/cresenii.png";
import analus from "/public/images/analus.png";

export const NavLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-col gap-3">
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">Frameworks:</span> React.js, Next.js, Shopify Liquid</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">Languages:</span> JavaScript, TypeScript</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">Styling:</span> HTML5, CSS3, Tailwind, SCSS/SASS</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">State Management:</span> Redux, React Query, Zustand</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">UI library:</span> Antd, MUI, Bootstrap</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">APIs:</span> GraphQL, RESTful, Apollo Client</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">Backend & Databases:</span> NestJS, NodeJS, MongoDB, MySQL, Redis</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">▹</span>
          <span className="text-gray-300"><span className="text-white font-semibold tracking-wide">Tools:</span> Git, Github, Sourcetree, Jira</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col group">
          <h4 className="text-xl font-bold text-white leading-relaxed">Ho Chi Minh City University of Foreign Languages and Information Technology <span className="text-blue-400 ml-2 tracking-widest">(HUFLIT)</span></h4>
          <div className="flex flex-col mt-4 space-y-2 border-l-2 border-blue-500/50 pl-4 py-1">
            <span className="text-gray-300 text-base"><span className="font-semibold text-white">Major:</span> SOFTWARE ENGINEERING</span>
            <span className="text-purple-400 text-base font-medium drop-shadow-md">Level - Good (GPA: 7.6/10)</span>
          </div>
        </li>
      </ul>
    ),
  },
];

export const projectsData = [
  {
    image: ihealth,
    name: "iHealth",
    desc: "Comprehensive healthcare management platform with booking, analytics, and reporting features.",
    position: "Full-stack Developer",
    tech: ["ReactJs", "NestJs", "WebSocket", "React-query"],
  },
  {
    image: spa,
    name: "Spa",
    desc: "Comprehensive SPA service management platform.",
    position: "Full-stack Developer",
    tech: ["ReactJs", "NestJs", "React-query"],
  },
  {
    image: goodlife,
    name: "GoodLife",
    desc: "E-commerce and marketing platform for flyer advertisement.",
    position: "Full-stack Developer",
    tech: ["NextJs", "ReactJs", "NestJs", "Redux"],
  },
  {
    image: baychat,
    name: "BayChat",
    desc: "Enterprise chat system with third-party service integrations.",
    position: "Front-end Developer",
    tech: ["ReactJs", "NestJs", "WebSocket", "Context"],
  },
  {
    image: cresenii,
    name: "Cresenii",
    desc: "Agile project management and collaboration tool similar to Trello.",
    position: "Front-end Developer",
    tech: ["ReactJs", "NestJs", "Redux"],
  },
  {
    image: analus,
    name: "Analus",
    desc: "E-learning platform with comprehensive educational resources.",
    position: "Full-stack Developer",
    tech: ["ReactJs", "NestJs", "React-query", "S3"],
  },
];
