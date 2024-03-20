"use client"
import { useEffect, useState } from 'react'
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import { UpCircleFilled, UpCircleOutlined } from '@ant-design/icons';

export default function Home() {

  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  console.log(showScrollTopButton)

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Contact />
      </div>
      {showScrollTopButton && <div className='fixed bottom-3 right-3 text-white'><UpCircleOutlined onClick={scrollTop} className='cursor-pointer text-[40px]' /></div>}
    </main>
  );
}
