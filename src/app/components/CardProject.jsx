import Image from "next/image";
import React from "react";

const CardProject = ({ project }) => {
  return (
    <div className="mt-7 w-[100%] md:w-[46%] lg:w-[30%] h-auto text-white flex flex-col rounded-[10px] bg-gradient-to-b from-blue-500 to-blue-900 shadow-md py-[18px] px-[24px]">
      <div
        className="mb-6 rounded-[5px] h-52 w-full hover:h-100"
        style={{ background: `url(${project.image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
      />
      <h3 className="text-[25px] font-bold">{project.name}</h3>
      <p className="mt-[6px] text-[25px] font-normal">{project.desc}</p>
      <ul className="w-full mt-[14px] flex flex-row flex-wrap gap-[6px] list-none">
        {project.tech.map((tech, index) => (
          <li key={index} className="font-normal text-[25px] rounded-[100px] bg-[#516897] px-[22px] py-[2px]">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardProject;
