"use client";
import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

const GoUp = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const topPosition = target.offsetTop; // Get the section's position
      // Animate the scroll
      animate(window.scrollY, topPosition, {
        duration: 0.5,
        ease: "easeInOut",
        onUpdate: (value) => {
          const v2=value-100
          window.scrollTo(0, v2);
        },
      });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrollY(window.scrollY);
      console.log(window.screenY); // You might want to use scrollY instead of screenY here.
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
            duration:0.5,
            delay:0.1,
            ease:"easeIn"
          }}
          onClick={() => {
            handleScroll("hero");
          }}
          className={`fixed bottom-12 right-12 h-12 w-12 bg-white z-40 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] flex justify-center items-center rounded-full  text-3xl  hover:bg-primary p-3 hover:text-white transition-colors duration-300`}
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
