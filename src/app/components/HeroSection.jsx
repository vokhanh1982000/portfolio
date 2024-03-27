import Image from "next/image";
import React from "react";
import avatar from "/public/images/avatar.jpg";
import { saveAs } from "file-saver";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownloadPDF = () => {
    // const pdfFilePath = "resume.pdf";
    // saveAs(pdfFilePath, "Vo_Minh_Khanh_resume.pdf");
  };

  const scrollToSkills = () => {
    // Lấy tham chiếu đến phần tử cần cuộn đến
    const element = document.getElementById("skills");

    // Cuộn đến phần tử
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 sm:text-left pl-0 md:pl-8 pt-4 xl:pl-16 xl:pt-16">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m
            </span>{" "}
            <TypeAnimation
              sequence={[
                "Khanh",
                1000,
                "Frontend Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "24px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl pb-3">
            Welcome to Khanh portfolio
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              onClick={scrollToSkills}
            >
              View skills
            </button>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
              onClick={handleDownloadPDF}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex items-center">
            <Image
              src={avatar}
              alt="avatar"
              className="object-contain"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
