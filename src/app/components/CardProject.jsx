"use client";
import Image from "next/image";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";

const CardProject = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group h-full flex flex-col justify-between text-white rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/50 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:border-blue-500/50">
        
        <div>
          <div 
            className="relative mb-6 rounded-xl h-52 w-full overflow-hidden cursor-pointer group/image bg-[#0B1120] shadow-inner"
            onClick={() => setIsOpen(true)}
          >
            <Image src={project.image} alt={project.name} fill className="object-contain transition-transform duration-700 group-hover/image:scale-110" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
               <EyeIcon className="h-14 w-14 text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
            </div>
          </div>
          <h3 className="text-2xl font-bold tracking-wide">{project.name}</h3>
          {project.position && (
            <p className="text-sm font-bold text-blue-300 mt-1 uppercase tracking-wider">{project.position}</p>
          )}
          <p className="mt-4 text-sm text-gray-300 font-normal leading-relaxed">{project.desc}</p>
        </div>

        <ul className="w-full mt-6 flex flex-row flex-wrap gap-2 list-none">
          {project.tech.map((tech, index) => (
            <li key={index} className="font-semibold text-[11px] uppercase tracking-wider rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-1 shadow-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal View */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-[90vw] h-[90vh] bg-transparent rounded-lg p-2 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-0 right-0 z-10 p-2 bg-[#121212]/80 border border-white/10 rounded-full hover:bg-red-500/80 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <div className="relative w-full h-full mt-4">
              <Image src={project.image} alt={project.name} fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProject;
