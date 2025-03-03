"use client";
import React, { useEffect, useState } from "react";
import {  motion } from "framer-motion";
import { handleScrollTo } from "./Smooth_Scroll";

const GoUp = () => {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScrollEvent = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      {scrollY > 200 ? ( // Display the button when scrolling down
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeIn",
          }}
          onClick={() => {
            handleScrollTo("hero");
          }}
          className={`fixed bottom-12 right-12 h-12 w-12 bg-white z-40 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] flex justify-center items-center rounded-full  text-3xl text-primary  hover:bg-primary p-3 hover:text-white transition-colors duration-300`}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </motion.div>
      ) : null}
    </>
  );
};

export default GoUp;
