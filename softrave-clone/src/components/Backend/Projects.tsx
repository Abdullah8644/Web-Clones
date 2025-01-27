import Link from "next/link";
import React from "react";
import MySwiper from "../FrontEnd/Swipper-Component";

const Projects = () => {
  type CardsData = {
    heading: string;
    cardText: string;
    imgLink: string;
    cardBackground: string;
    darkText: boolean;
  }[];

  type SectionsData = {
    cards: CardsData;
    section_heading: string;
    section_id: string;
  }[];

  const sections: SectionsData = [
    {
      section_heading: "UI/UX design",
      section_id: "ui-ux",
      cards: [
        {
          heading: "Seluna App",
          cardText:
            "Design the Seluna Mobile app where you can chat with an AI agent to discuss your feelings.",
          imgLink: "seluna",
          cardBackground: "#1C0E32",
          darkText: false,
        },
        {
          heading: "The Fly Menu",
          cardText:
            "Fly Menu: Order your favorite meals quickly and effortlessly. Delicious food, just a tap away!",
          imgLink: "fly",
          cardBackground: "#FF9201",
          darkText: true,
        },

        {
          heading: "The Travel App",
          cardText:
            "Design the Travel Mobile app where you can plan customize your trip as per your schedule and ease.",
          imgLink: "travel",
          cardBackground: "#DBF4FC",
          darkText: true,
        },
        {
          heading: "Morning Mind",
          cardText:
            "Designed the Morning mind Mobile app where you Wake up to a personalized experience with our relaxation alarm and meditation app.",
          imgLink: "morning",
          cardBackground: "#7CBD9C",
          darkText: false,
        },
      ],
    },
    {
      section_heading: "Website development",
      section_id: "web-dev",
      cards: [
        {
          heading: "Bragbot",
          cardText:
            "BragBot is a SMS bot you message your accomplishments. When it’s time for your performance review",
          imgLink: "bragbot",
          cardBackground: "#3D316F",
          darkText: false,
        },
        {
          heading: "Sportify Official",
          cardText:
            "Design the Sportify Official website to run an online clothing store which focus mainly on gym wear.",
          imgLink: "sportify",
          cardBackground: "#257DC5",
          darkText: false,
        },

        {
          heading: "Kusch",
          cardText:
            "Making unique Hospitality concepts come to life. We offer you the full package creative ideas and visions.",
          imgLink: "kusch",
          cardBackground: "#1E3C34",
          darkText: false,
        },
        {
          heading: "YT Transcript",
          cardText:
            "Design the YT Transcript website where you can add url of any YouTube video and read the transcript od the video.",
          imgLink: "yt",
          cardBackground: "#FB0D1D",
          darkText: false,
        },
      ],
    },
    {
      section_heading: "Branding",
      section_id: "branding",
      cards: [
        {
          heading: "Cleaner Go",
          cardText:
            'Branding for a startup named "Cleaner Go" which provides sanitary services.',
          imgLink: "cleaner",
          cardBackground: "#87DFFF",
          darkText: true,
        },
        {
          heading: "Hawasana",
          cardText:
            'Design complete branding for "HawaSana" an Arabic restaurant. Started with the logo and design of all merchandise and ended with the Restaurant Menu design.',
          imgLink: "hawa",
          cardBackground: "#FFDD05",
          darkText: true,
        },

        {
          heading: "Chicken Scratch",
          cardText:
            "Design Branding for Chicken Scratch, It's a startup where you will get all content about the Birds, Write and publish.",
          imgLink: "chicken",
          cardBackground: "#F5BB47",
          darkText: true,
        },
        {
          heading: "Derma-Bliss",
          cardText:
            'Design Complete branding for the brand name "Derma-Bliss" related to the beauty and cosmetic industry.',
          imgLink: "derma",
          cardBackground: "#1F2024",
          darkText: false,
        },
      ],
    },
  ];

  return (
    <>
      {sections.map((section) => {
        return (
          <section
            key={section.section_id}
            className="ui-ux bg-white rounded-p px-[30px] py-[50px] flex flex-col gap-10  "
          >
            <div className="flex justify-between">
              <h3 className="text-primary text-[38px] font-semibold  ">
                {section.section_heading}
              </h3>
              <Link
                href={"projects/ui-ux-desgin"}
                className="text-[18px] font-medium "
              >
                see all projects
              </Link>
            </div>

            <MySwiper key={section.section_id} cards={section.cards} />
          </section>
        );
      })}
    </>
  );
};

export default Projects;
