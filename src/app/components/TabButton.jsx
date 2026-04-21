import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg border border-transparent"
    : "text-[#ADB7BE] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10";

  return (
    <button onClick={selectTab} className={`mr-4 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TabButton;
