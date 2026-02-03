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
        <li>Frameworks: React.js, Next.js, Shopify Liquid</li>
        <li>Languages: JavaScript, TypeScript</li>
        <li>Styling: HTML5, CSS3, Tailwind, SCSS/SASS</li>
        <li>State Management: Redux, React Query, Zustand</li>
        <li>UI library: Antd, MUI, bootstrap</li>
        <li>APIs: GraphQL, RESTful, Apollo Client</li>
        <li>Backend: NestJS, NodeJS</li>
        <li>Databases: MongoDB, MySQL, Redis</li>
        <li>Tools: Git, Github, Sourcetree, Jira</li>
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
        <Image src={aboutMeImage} alt="" width={500} height={500} className="rounded-xl" />
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
          <div className="mt-8 h-[200px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
