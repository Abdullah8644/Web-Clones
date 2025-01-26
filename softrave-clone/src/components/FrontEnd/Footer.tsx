import Link from "next/link";
import React from "react";

const Footer = () => {
  type SocialLinks = { siteName: string; siteLink: string }[];

  const social_links: SocialLinks = [
    {
      siteName: "whatsapp",
      siteLink:
        "https://api.whatsapp.com/send?phone=+923348177646&text=Hello,%20I%27m%20reaching%20out%20via%20Softrave.com%20to%20discuss%20a%20project.",
    },
    {
      siteName: "linkedin",
      siteLink: "https://www.linkedin.com/company/softrave/",
    },
    {
      siteName: "facebook",
      siteLink: "https://www.facebook.com/softrave",
    },
    {
      siteName: "whatsapp",
      siteLink:
        "https://api.whatsapp.com/send?phone=+923348177646&text=Hello,%20I%27m%20reaching%20out%20via%20Softrave.com%20to%20discuss%20a%20project.",
    },
  ];

  return (
    <>
      <div className="row-span-7 flex justify-start items-center">
        <p className="font-light text-white w-1/2   leading-7 ">
          Reach out to us via email or whatsapp. Share your tasks with us, and
          let's engage in a conversation to transform them into impactful
          digital experiences.
        </p>
      </div>
      <div className=" text-white row-span-7 flex flex-col justify-center items-start  ">
        <h4 className="email font-semibold text-[42px] leading-[100px] ">
          info@softrave.com
        </h4>
        <ul className="flex w-full gap-4 justify-between">
          {social_links.map((link, index) => {
            return (
              <li
                key={index}
                className="px-[30px]  font-semibold py-[5px] bg-primary  rounded-[10px]"
              >
                <Link href={link.siteLink}>{link.siteName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full col-span-2 border-t font-light  border-t-white border-opacity-20 flex justify-between text-white items-end    ">
        <span>© 2020-2025 Softrave</span>
        <div className="flex items-center w-1/2 pr-60  justify-between" >
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
