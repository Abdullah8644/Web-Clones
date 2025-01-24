"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../styles/locomotive-scroll.css";

export default function Home() {
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

  // useEffect(() => {
  //   if (!scroll_container.current) return;
  //   const scroll = new LocomotiveScroll({
  //     el: scroll_container.current,
  //     smooth: true,
  //     multiplier: 1.5,

  //     lerp: 0.05,
  //   });
  // });

  return (
    <>
      <header className="fixed top-0 z-10  w-full px-5     ">
        <Navbar />
      </header>
      <main ref={scroll_container} id="scroll-container">
        <section
          className="min-h-dvh mx-5 bg-white mt-28 rounded-p my-20 py-32 "
          id="hero"
          ref={(el) => {
            sectionRefs.current.hero = el as HTMLDivElement;
          }}
        >
          <h1 className="text-[75px] font-semibold px-6 leading-[83px]" >We design <span className="text-primary" >apps, websites & brands.</span><br />
          We work with manufacturing, fintech <br /> and retail </h1>
        </section>
        <section
          id="about"
          ref={(el) => {
            sectionRefs.current.about = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "lightcoral" }}
        >
          <h1>Section 2</h1>
        </section>
        <section
          id="projects"
          ref={(el) => {
            sectionRefs.current.projects = el as HTMLDivElement;
          }}
          style={{ height: "100vh", background: "lightgreen" }}
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
