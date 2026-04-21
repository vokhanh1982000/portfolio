"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import aboutMeImage from "/public/images/about.jpg";
import { TAB_DATA } from "../../data/portfolio";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative flex justify-center items-center w-fit mx-auto md:mx-0 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative rounded-3xl border border-white/20 bg-[#121212]/50 p-2 shadow-2xl backdrop-blur-md transform transition-transform duration-500 group-hover:scale-[1.02]">
            <Image src={aboutMeImage} alt="Hình ảnh chân dung tác giả" width={500} height={500} className="rounded-2xl object-cover" />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base md:text-lg">
            Experienced Front-end Developer with 4+ years of expertise in building responsive web applications and SaaS products. Proven track record in React.js, Next.js, and Shopify development. Strong background in both front-end architecture and full-stack development, with 1.5 years of back-end experience. Passionate about creating user-friendly interfaces and optimizing application performance.
          </p>
          <div className="flex flex-row justify-start mt-8" id="skills">
            {TAB_DATA.map((t, index) => (
              <TabButton
                key={index}
                selectTab={() => {
                  handleTabChange(t.id);
                }}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8 min-h-[250px] w-full bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-sm">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
