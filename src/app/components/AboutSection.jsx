"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import aboutMeImage from "/public/images/about.jpg"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJs, NextJs, NestJs, NodeJs, JavaSript, TypeScript</li>
        <li>HTML5, CSS3, SCSS, TailwindCSS</li>
        <li>Antd, MUI</li>
        <li>React query, Redux</li>
        <li>RESTful api, mysql, mongoDB</li>
        <li>Socket</li>
        <li>GIT, Docker, Microservice</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul list-disc pl-2>
        <li>
          Ho Chi Minh City University of Foreign Languages and Information
          Technology (HUFLIT)
        </li>
        <li>Major: SOFTWARE ENGINEERING</li>
        <li>Level - Good (GPA: 7.6/10)</li>
      </ul>
    ),
  },
];

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
        <Image src={aboutMeImage} alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base md:text-lg">
            My name is Khanh, I&apos;m web developer and i have 2,5 years of
            experience with 2,5 years FrontEnd and 1,5 years BackEnd. I have
            experience working with JavaScript, TypeScript, ReactJs, NextJs,
            NestJs, NodeJs, HTML5, CSS3, SCSS, TailwindCSS, RESTful api, GIT,
            ... I enjoy playing soccer, listening to music, and I aspire to
            work in a fun and friendly environment. I am seeking a place where I
            can contribute fully and work long-term.
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
