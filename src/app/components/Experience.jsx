import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col gap-12 justify-center">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-10">
        Experience
      </h2>
      <div className="">
        <div className="flex justify-center h-auto">
          <div className="w-2/5 lg:w-1/3 bg-white shadow-lg rounded-tl-[10px] rounded-br-[10px] pb-3">
            <div className="p-3 font-semibold rounded-b-lg rounded-s-lg">
              Fresher, Junior, Middle-
            </div>
            <div className="p-3 text-sm italic">
              I began my official work journey at TCOM, where I have
              accomplished and learned a great deal. Starting as a frontend
              developer, I gained insights into backend development and
              potentially evolved into a full-stack developer.
            </div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              04/2022 - 03/2024
            </div>
            <div className="ml-3 p-2 rounded bg-blue-400 text-white text-sm font-semibold w-fit">
              TCOM
            </div>
          </div>
          <div className="w-1/5 lg:w-1/6">
            <div className="w-1 h-full bg-gray-600 rounded relative left-[50%]">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-2/5 lg:w-1/3"></div>
        </div>
        <div className="flex justify-center h-auto">
          <div className="w-2/5 lg:w-1/3"></div>
          <div className="w-1/5 lg:w-1/6">
            <div className="w-1 h-full bg-gray-600 rounded relative left-[50%]">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-2/5 lg:w-1/3 bg-white shadow-lg rounded-tl-[10px] rounded-br-[10px] pb-3">
            <div className="p-3 font-semibold rounded-b-lg rounded-s-lg">
              Internship
            </div>
            <div className="p-3 text-sm italic">
              In my final year of university, I interned here, where I applied
              my knowledge and learned some real-world project workflows.
            </div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              01/2022 - 04/2022
            </div>
            <div className="ml-3 p-2 rounded bg-blue-400 text-white text-sm font-semibold w-fit">
              EBIZWORLD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
