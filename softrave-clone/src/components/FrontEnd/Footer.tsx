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
      <div className="grid grid-cols-1 gap-4 lg:gap-0  lg:grid-cols-2">
        <div className=" w-full lg:w-1/2  text-white font-light leading-7 ">
          <p>
            Reach out to us via email or whatsapp. Share your tasks with us, and
            let's engage in a conversation to transform them into impactful
            digital experiences.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="  text-[30px] lg:text-[42px] font-semibold text-white  ">
            <Link href={"mailto:info@softrave.com"}>info@softrave.com</Link>
          </h3>
          <ul className=" grid grid-cols-2  sm:flex gap-3   ">
            {social_links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white bg-primary w-full text-center    lg:px-[30px]  py-[6px]  rounded-[10px]"
                >
                  <Link href={link.siteLink} target="_blank">
                    {link.siteName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="line absolute w-full h-[1px] bg-white left-0 bottom-20 opacity-10 "></div>
      <footer className="py-4 flex justify-between ">
        <span className="font-light text-white">© 2020-2025 Softrave</span>

        <div className="text-white  w-1/2 flex font-light justify-between ">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
