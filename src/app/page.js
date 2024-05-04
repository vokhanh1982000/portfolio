import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Experience from './components/Experience';
import { ScrollTop } from './components/ScrollTop';
import Snow from "./components/Snow";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212]">
      <Snow />
      <Navbar />
      <div className="container mt-24 mx-auto px-6 lg:px-12: py-4">
        <HeroSection />
        <AboutSection />
        <Experience />
        <ProjectSection />
        <Contact />
      </div>
      <ScrollTop />
    </main>
  );
}
