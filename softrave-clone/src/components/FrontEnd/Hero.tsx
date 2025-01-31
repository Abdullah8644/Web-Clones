"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const isMinWidth640 = useRef<boolean>(false);
  useEffect(() => {
    isMinWidth640.current = window.matchMedia("(min-width: 1023px)").matches;
  }, []);

  let companyes: number[];
  companyes = [1, 2, 3];

  if (isMinWidth640.current) {
    companyes = [1, 2, 3, 4, 5, 6, 1, 2];
  } else {
    companyes = [1, 2, 3];
  }
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && window.screenY < 500)
        setScrollY(window.scrollY - 200);
      else setScrollY(0 - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h1
        className={
          " text-[27px] sm:text-[43px] leading-[30px] sm:leading-[50px]  lg:text-[75px] font-semibold px-6 lg:leading-[83px]"
        }
      >
        We design{" "}
        <span className="text-primary">apps, websites & brands. </span>
        <br className=" hidden sm:block " />
        We work with manufacturing, fintech <br /> and retail{" "}
      </h1>
      <motion.ul
        animate={{
          x: -scrollY * 0.2,
        }}
        transition={{ duration: 0.4 }}
        className="flex w-full h-10 items-center gap-10 my-20 mb-5  "
      >
        {companyes.map((company, index) => {
          return (
            <li key={index} className="relative w-1/2  sm:w-[10%] h-full ">
              <Image
                src={`/company-logos/company-${company}.png`}
                alt={`company-${company} `}
                fill={true}
                priority
                loading="eager"
                className="object-contain"
              />
            </li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default Hero;
