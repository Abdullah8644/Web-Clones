import Image from "next/image";
import React from "react";

const Services = () => {
  type Card = {
    heading: string;
    services: string[];
  }[];

  const cards: Card = [
    {
      heading: "Branding and strategy",
      services: [
        "Brand strategy",
        "Brand audit",
        "Naming",
        "Visual identity",
        "Logo design",
        "Graphic and illustrations",
      ],
    },
    {
      heading: "Website and App design",
      services: [
        "Website design",
        "UI/UX design",
        "Mobile App design",
        "Dashboard design",
        "App prototyping",
        "UX audit",
      ],
    },
    {
      heading: "Website development",
      services: [
        "WordPress development",
        "Shopify development",
        "Wix development",
        "Webflow development",
        "E-commerce store",
      ],
    },
  ];

  return (
    <>
      <div className="text flex flex-col gap-6 w-[850px]   ">
        <h2 className="text-[80px] font-medium leading-[90px] ">
          This is what we can do as cool as possible
        </h2>
        <div className="w-[50%] flex justify-end ">
          <Image
            src={"/svgs/style-line.svg"}
            alt="styled-line"
            width={323}
            height={47}
          />
        </div>
      </div>
      <div className="cards grid grid-cols-2  lg:grid-cols-3 gap-10 my-10 ">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className={`card border border-black  h-[60vh]  lg:h-[90vh] rounded-[35px]  p-[35px] flex flex-col gap-10 ${
                index == cards.length - 1?"col-span-2  lg:col-span-1 ":""
              }  `}
            >
              <h3 className="text-[34px] leading-[34px] font-bold w-[90%] ">
                {card.heading}
              </h3>
              <ul className="flex flex-col gap-3.5 justify-center min-h-[65%]  ">
                {card.services.map((service, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[#313131]  text-[20px] leading-[28px] flex flex-col gap-3.5 "
                    >
                      <span>{service}</span>
                      <div className="line h-[1px] opacity-30 bg-[#717173] w-full  "></div>
                    </li>
                  );
                })}
              </ul>

              <div className="discuss-btn mx-auto text-white px-5  tracking-[0.14rem] py-1  bg-primary text-[14px] font-medium  leading-[30px] rounded-[10px]   ">
                discuss the project
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
