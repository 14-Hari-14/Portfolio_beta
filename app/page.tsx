import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/Hero";
import About from "@/components/Skills";
import Projects from "@/components/Projects";
import { FloatingDockVertical } from "@/components/ui/floating-dock";
import { FaHome, FaQuestionCircle, FaFileAlt, FaPhone } from 'react-icons/fa';


// Import the video file correctly

import { TracingBeam } from "@/components/ui/tracing-beam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main className="relative bg-blue-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 bg-grid-white/[0.09] dark:bg-grid-black/[0.2] " id="home">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            { name: "01.Home", link: "#home", icons: <FaHome /> },
            { name: "02.Skills", link: "#skills", icons: <FaQuestionCircle /> },
            { name: "03.Contact Me", link: "#contact", icons: <FaPhone /> },
            { name: "04.CV", link: "https://drive.google.com/file/d/1rP7N03t6iM60X-a5-AdDnKOXN4HNByDK/view?usp=sharing", target: "_blank", icons: <FaFileAlt /> },
          ]}
        />
        <TracingBeam>
        <Hero />
        <About />
        <Projects />
        </TracingBeam>
      </div>
    </main>
    <div className="relative bg-blue-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-grid-white/[0.09] dark:bg-grid-black/[0.2] ">
      <Contact />
      <Footer />
      <FloatingDockVertical />
    </div>
    </>
  );
}
