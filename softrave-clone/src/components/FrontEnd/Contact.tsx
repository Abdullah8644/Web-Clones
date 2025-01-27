"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { div } from "framer-motion/client";
import { usePathname } from "next/navigation";

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const Contact = () => {
  let isMinWidth1023: boolean;

  const [pathname, setPathname] = useState<string>();
  const [scrollY, setScrollY] = useState(0);
  const [Size, setSize] = useState(0);
  const path = usePathname();

  useEffect(() => {
    setPathname(path);
  }, [path, pathname]);

  useEffect(() => {
    isMinWidth1023 = window.matchMedia("(min-width: 1023px)").matches;

    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      let scrollThreshold;

      if (pathname == "/") {
        if (isMinWidth1023) {
          scrollThreshold = documentHeight * 0.82;
        } else {
          scrollThreshold = documentHeight * 0.8;
        }
      } else {
        scrollThreshold = documentHeight * 0.2;
      }

      if (scrollPosition > scrollThreshold) {
        setScrollY(scrollPosition - scrollThreshold);

        const sizeFactor = mapRange(
          scrollPosition - scrollThreshold,
          0,
          300,
          1,
          pathname == "/" ? 1.3 : 1.2
        );
        setSize(sizeFactor);
      } else {
        setScrollY(-250);
        setSize(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div className="bg-black">
      <div className="relative h-screen w-full flex justify-center items-center  bg-secondary rounded-b-[50px]  ">
        <motion.div
          animate={{ scale: Size == 0 ? 1 : Size }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
          className="circle absolute  z-10 w-60 h-60   bg-primary  rounded-full top-[32%] left-[40%]   text-[32px] text-white text-center font-semibold cursor-pointer  "
        >
          <motion.span
            className="w-full h-full flex justify-center items-center "
            whileHover={{
              rotateZ: 5,
              scale: 1.1,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+923348177646&text=Hello,%20I%27m%20reaching%20out%20via%20Softrave.com%20to%20discuss%20a%20project."
              }
            >
              discuss the project
            </Link>
          </motion.span>
        </motion.div>
        <motion.div
          animate={{ translateX: scrollY * -0.4 }}
          transition={{
            duration: 0.5,
          }}
          className="text font-bold  text-[50px] lg:text-[120px]  "
        >
          Connect with us
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
