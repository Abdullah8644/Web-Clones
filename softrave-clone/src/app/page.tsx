"use client";
import Navbar from "@/components/FrontEnd/Navbar";
import { useEffect, useRef, useState } from "react";

import "../styles/locomotive-scroll.css";
import Hero from "@/components/FrontEnd/Hero";
import About from "@/components/FrontEnd/About";
import Projects from "@/components/Backend/Projects";
import Services from "@/components/FrontEnd/Services";
import Faq from "@/components/FrontEnd/Faq";
import Contact from "@/components/FrontEnd/Contact";
import Footer from "@/components/FrontEnd/Footer";
import GoUp from "@/components/FrontEnd/GoUp";

export default function Home() {
  const scroll_container = useRef<HTMLDivElement | null>(null);

  const [projectLoaded, setProjectsLoaded] = useState<boolean>();

  useEffect(() => {
    const timer = setTimeout(() => setProjectsLoaded(true), 1000); // Delay loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main
        ref={scroll_container}
        id="scroll-container"
        className="overflow-x-hidden"
      >
        <section
          className="min-h-dvh mx-5 bg-white mt-28   rounded-p  py-[7.5rem]"
          id="hero"
        >
          <Hero />
        </section>
        <GoUp />
        <section
          id="about us"
          className="h-fit grid grid-cols-10   mx-5 my-16 "
        >
          <About />
        </section>
        <section id="projects" className="min-h-dvh mx-5 flex flex-col gap-5">
          {projectLoaded && <Projects />}
        </section>
        <section
          id="services"
          className="min-h-dvh mx-5  bg-white rounded-p my-5  p-10   "
        >
          <Services />
        </section>
        <section id="faq" className="min-h-dvh pt-16 px-5  ">
          <Faq />
        </section>

      </main>
    </>
  );
}
