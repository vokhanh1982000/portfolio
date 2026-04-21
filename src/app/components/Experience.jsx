import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col gap-12 justify-center">
      <div className="flex items-center my-16">
        <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="px-10 text-center text-4xl font-bold text-white title-animation">
          Experience
        </h2>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <div className="">
        <div className="flex justify-start md:justify-center h-auto w-full">
          <div className="hidden md:block md:w-2/5 lg:w-1/3 order-1 md:order-1"></div>
          <div className="w-[15%] md:w-1/5 lg:w-1/6 flex md:block justify-center order-1 md:order-2">
            <div className="w-1 h-full bg-slate-700 rounded relative md:left-[50%]">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-500 bg-white -left-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
          <div className="w-[85%] pr-4 md:pr-0 md:w-2/5 lg:w-1/3 bg-[#1E293B]/80 shadow-[0_4px_20px_rgb(0,0,0,0.5)] border border-slate-700 rounded-2xl pb-4 overflow-hidden group hover:border-blue-500/50 transition-colors duration-300 mb-8 order-2 md:order-3">
            <div className="p-4 font-bold text-lg bg-[#0F172A] border-b border-slate-700 text-white">
              Middle
            </div>
            <div className="p-4 text-sm text-gray-300 font-normal leading-relaxed italic">
              I work at a production company, where I learned a lot about the operational process and how e-commerce works.
            </div>
            <div className="px-4 text-purple-400 text-sm font-bold tracking-wide">
              04/2024 - Present
            </div>
            <div className="mt-3 ml-4 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold w-fit uppercase tracking-widest border border-blue-500/30">
              Snaptec
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-center h-auto w-full">
          <div className="w-[85%] pr-4 md:pr-0 md:w-2/5 lg:w-1/3 bg-[#1E293B]/80 shadow-[0_4px_20px_rgb(0,0,0,0.5)] border border-slate-700 rounded-2xl pb-4 overflow-hidden group hover:border-blue-500/50 transition-colors duration-300 mt-8 mb-8 order-2 md:order-1">
            <div className="p-4 font-bold text-lg bg-[#0F172A] border-b border-slate-700 text-white">
              Middle-
            </div>
            <div className="p-4 text-sm text-gray-300 font-normal leading-relaxed italic">
              I began my official work journey at TCOM, where I have accomplished and learned a great deal. Starting as a frontend developer, I gained insights into backend development and potentially evolved into a full-stack developer.
            </div>
            <div className="px-4 text-purple-400 text-sm font-bold tracking-wide">
              04/2022 - 03/2024
            </div>
            <div className="mt-3 mr-4 ml-auto px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold w-fit uppercase tracking-widest border border-blue-500/30">
              TCOM
            </div>
          </div>
          <div className="w-[15%] md:w-1/5 lg:w-1/6 flex md:block justify-center order-1 md:order-2">
            <div className="w-1 h-full bg-slate-700 rounded relative md:left-[50%]">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-500 bg-white -left-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/3 order-3 md:order-3"></div>
        </div>
        <div className="flex justify-start md:justify-center h-auto w-full">
          <div className="hidden md:block md:w-2/5 lg:w-1/3 order-1 md:order-1"></div>
          <div className="w-[15%] md:w-1/5 lg:w-1/6 flex md:block justify-center order-1 md:order-2">
            <div className="w-1 h-full bg-slate-700 rounded relative md:left-[50%]">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-500 bg-white -left-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
          <div className="w-[85%] pr-4 md:pr-0 md:w-2/5 lg:w-1/3 bg-[#1E293B]/80 shadow-[0_4px_20px_rgb(0,0,0,0.5)] border border-slate-700 rounded-2xl pb-4 overflow-hidden group hover:border-blue-500/50 transition-colors duration-300 mt-8 order-2 md:order-3">
            <div className="p-4 font-bold text-lg bg-[#0F172A] border-b border-slate-700 text-white">
              Internship
            </div>
            <div className="p-4 text-sm text-gray-300 font-normal leading-relaxed italic">
              In my final year of university, I interned here, where I applied my knowledge and learned some real-world project workflows.
            </div>
            <div className="px-4 text-purple-400 text-sm font-bold tracking-wide">
              01/2022 - 04/2022
            </div>
            <div className="mt-3 ml-4 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold w-fit uppercase tracking-widest border border-blue-500/30">
              EBIZWORLD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
