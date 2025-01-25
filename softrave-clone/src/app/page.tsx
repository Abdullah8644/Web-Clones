"use client";
import Navbar from "@/components/FrontEnd/Navbar";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../styles/locomotive-scroll.css";
import Hero from "@/components/FrontEnd/Hero";
import About from "@/components/FrontEnd/About";

export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);

  const scroll_container = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({
    hero: null,
    about: null,
    projects: null,
    services: null,
    faq: null,
    contact: null,
    footer: null,
  });

  const currentSectionRef = useRef<string>("");

  useEffect(() => {
    if (!scroll_container.current) return;

    const scroll = new LocomotiveScroll({
      el: scroll_container.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
    });

    const handleScroll = (s: any) => {
      if (s.scroll.y > 200) setScrollY(s.scroll.y - 350);
    };

    scroll.on("scroll", handleScroll);

    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <main
        ref={scroll_container}
        id="scroll-container"
        className="overflow-x-hidden"
      >
        <section
          className="min-h-dvh mx-5 bg-white mt-28 rounded-p  py-[7.5rem]"
          id="hero"
          ref={(el) => {
            sectionRefs.current.hero = el as HTMLDivElement;
          }}
        >
          <Hero scrollY={scrollY} />
        </section>
        <section
          id="about"
          ref={(el) => {
            sectionRefs.current.about = el as HTMLDivElement;
          }}
          className="min-h-dvh grid grid-cols-10   mx-5 my-16 "
        >
          <About />
        </section>
        <section
          id="projects"
          ref={(el) => {
            sectionRefs.current.projects = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "" }}
        >
          <h1>Section 3</h1>
        </section>
        <section
          id="services"
          ref={(el) => {
            sectionRefs.current.services = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "lightyellow" }}
        >
          <h1>Section 4</h1>
        </section>
        <section
          id="faq"
          ref={(el) => {
            sectionRefs.current.faq = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "lightpink" }}
        >
          <h1>Section 5</h1>
        </section>
        <section
          id="contact"
          ref={(el) => {
            sectionRefs.current.contact = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "lightpurple" }}
        >
          <h1>Section 6</h1>
        </section>
        <section
          id="footer"
          ref={(el) => {
            sectionRefs.current.footer = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "lightgray" }}
        >
          <h1>Section 7</h1>
        </section>
      </main>
    </>
  );
}
