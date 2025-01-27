import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="heading  grid grid-cols-12 px-10 col-span-10   ">
        <h2 className="  text-[43px] col-span-5  lg:text-[75px] font-semibold ">
          About us
        </h2>
        <div className="text text-xl lg:px-10  col-span-7 font-bold    ">
          We blend our authentic passion for design with our
          <br className="hidden lg:block" />
          unwavering commitment to precision and craftsmanship.
        </div>
      </div>

      <div className="experience col-span-10 lg:col-span-4  lg:px-10   ">
        <ul className="grid grid-cols-2   justify-items-start   w-full gap-3  ">
          <li className="text-body text-lg">years in business</li>
          <li className="text-body text-lg">unique clients</li>
          <li className="w-[70%] h-[2px] bg-black"></li>
          <li className="w-[70%] h-[2px] bg-black"></li>
          <li className=" font-bold text-[56px] leading-10 ">4</li>
          <li className=" font-bold text-[56px] leading-10 ">300+</li>
        </ul>
      </div>

      <div
        className={`boxes flex  font-courier text-[14px] gap-5 col-span-10 lg:col-span-6 leading-8 w-full  px-5 lg:px-10    `}
      >
        <div className="box bg-[#eee] text-body  px-3 py-5 w-[50%] ">
          Softrave is more than a digital agency. We&apos;re a team of
          visionaries committed to redefining digital excellence.
        </div>
        <div className="box bg-[#eee] text-body  px-3 py-5 w-[50%] ">
          We believe in the transformative power of design and technology to
          elevate brands and amplify their impact.
        </div>
      </div>

      <div className="projects-text col-span-10 px-10 items-center  grid grid-cols-12  lg:flex   ">
        <h2 className="  text-[50px]  col-span-8  lg:text-[80px] font-medium lg:w-[866px] leading-snug ">
          Check out the projects which we have already
        </h2>
        <div className="logo  w-40  scale-75 h-40 relative ">
          <Image src={"/svgs/style-star.svg"} alt="styled-stars" fill={true} />
        </div>
      </div>
    </>
  );
};

export default About;
