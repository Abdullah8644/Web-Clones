import React from "react";
import { Courier_Prime } from "next/font/google";
import Image from "next/image";

const courier = Courier_Prime({
  weight: "400",
});

const About = () => {
  return (
    <>
      <div className="heading  flex flex-col gap-12 justify-start items-start px-10 col-span-4    ">
        <h2 className="text-[75px] font-semibold ">About us</h2>
        <ul className="grid grid-cols-2  justify-between  w-full gap-3  ">
          <li className="text-body text-lg">years in business</li>
          <li className="text-body text-lg">unique clients</li>
          <li className="w-[70%] h-[2px] bg-black"></li>
          <li className="w-[70%] h-[2px] bg-black"></li>
          <li className=" font-bold text-[56px] leading-10 ">4</li>
          <li className=" font-bold text-[56px] leading-10 ">300+</li>
        </ul>
      </div>
      <div className="text  col-span-6 flex flex-col justify-start py-5   gap-24">
        <div className="text text-xl  font-bold  ">
          We blend our authentic passion for design with our
          <br />
          unwavering commitment to precision and craftsmanship.
        </div>
        <div
          className={`boxes flex gap-10 font-courier text-[14px] leading-8   `}
        >
          <div className="box bg-[#eee] text-body  px-3 py-5 w-[40%] ">
            Softrave is more than a digital agency. We're a team of visionaries
            committed to redefining digital excellence.
          </div>
          <div className="box bg-[#eee] text-body  px-3 py-5 w-[40%] ">
            We believe in the transformative power of design and technology to
            elevate brands and amplify their impact.
          </div>
        </div>
      </div>
      <div className="projects-text col-span-10 flex    ">
        <h2 className="text-[80px] font-medium w-[866px] leading-snug ">
          Check out the projects which we have already
        </h2>
        <div className="logo  w-40 h-40 relative ">
          <Image src={"/svgs/style-star.svg"} alt="styled-stars" fill={true}   />
        </div>
      </div>
    </>
  );
};

export default About;
