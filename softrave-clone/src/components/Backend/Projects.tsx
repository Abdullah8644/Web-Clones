import Link from "next/link";
import React from "react";
import MySwiper from "../FrontEnd/Swipper-Component";

const Projects = () => {
  type CardData = {
    heading: string;
    cardText: string;
    imgLink: string;
    cardBackground: string;
    darkText: boolean;
  };

  const cardData: CardData = {
    heading: "The Travel App",
    cardText:
      "Desgin the Travel Mobile app where you can plan customize your trip as per your schedule and ease. ",
    imgLink: "/imgs/cards/Travel.png",
    cardBackground: "#dbf4fc",
    darkText: true,
  };

  return (
    <>
      <section className="ui-ux bg-white rounded-p px-[30px] py-[50px] flex flex-col gap-10  ">
        <div className="flex justify-between">
          <h1 className="text-primary text-[38px] font-semibold  ">
            UI/UX design
          </h1>
          <Link
            href={"projects/ui-ux-desgin"}
            className="text-[18px] font-medium "
          >
            see all projects
          </Link>
        </div>
        <MySwiper
          heading={cardData.heading}
          cardText={cardData.cardText}
          imgLink={cardData.imgLink}
          cardBackground={cardData.cardBackground}
          darkText={cardData.darkText}
        />
      </section>
      {/* <section className="ui-ux bg-white rounded-p px-[30px] py-[50px] flex flex-col gap-10 ">
        <div className="flex justify-between">
          <h1 className="text-primary text-[38px] font-semibold  ">
            UI/UX design
          </h1>
          <Link
            href={"projects/ui-ux-desgin"}
            className="text-[18px] font-medium "
          >
            see all projects
          </Link>
        </div>
        <MySwiper
          heading={cardData.heading}
          cardText={cardData.cardText}
          imgLink={cardData.imgLink}
          cardBackground={cardData.cardBackground}
          darkText={cardData.darkText}
        />
      </section>
      <section className="ui-ux bg-white rounded-p px-[30px] py-[50px] flex flex-col gap-10 ">
        <div className="flex justify-between">
          <h1 className="text-primary text-[38px] font-semibold  ">
            UI/UX design
          </h1>
          <Link
            href={"projects/ui-ux-desgin"}
            className="text-[18px] font-medium "
          >
            see all projects
          </Link>
        </div>
        <MySwiper
          heading={cardData.heading}
          cardText={cardData.cardText}
          imgLink={cardData.imgLink}
          cardBackground={cardData.cardBackground}
          darkText={cardData.darkText}
        />
      </section> */}
     
    </>
  );
};

export default Projects;
