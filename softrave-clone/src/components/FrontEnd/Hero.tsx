"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = ({ scrollY }: { scrollY: number }) => {
  const companyes: number[] = [1, 2, 3, 4, 5, 6, 1, 2];

  return (
    <>
      <h1 className="text-[75px] font-semibold px-6 leading-[83px]">
        We design <span className="text-primary">apps, websites & brands.</span>
        <br />
        We work with manufacturing, fintech <br /> and retail{" "}
      </h1>
      <motion.ul
        animate={{
          x: scrollY * -0.5,
        }}
        transition={{ duration: 0.5 }}
        className="flex w-full h-10 items-center gap-10 my-20 mb-5  "
      >
        {companyes.map((company, index) => {
          return (
            <li key={index} className="relative w-[10%] h-full ">
              <Image
                src={`/company-logos/company-${company}.png`}
                alt={`company-${company} `}
                fill={true}
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
