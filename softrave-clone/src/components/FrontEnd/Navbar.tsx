"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { handleScrollTo } from "./Smooth_Scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname: string = usePathname();
  const router = useRouter();
  const handleScroll = (id: string) => {
    handleScrollTo(id);
  };

  // * Adding Links into array
  const links: { name: string; id: string }[] = [
    { name: "about us", id: "hero" },
    { name: "our project", id: "projects" },
    { name: "services", id: "services" },
    { name: "contact", id: "footer" },
  ];

  const mobileLinks: { name: string; id: string }[] = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "projects" },
    { name: "Team", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full   bg-white flex justify-between py-5 sm:rounded-b-[40px]  px-3  sm:px-14 items-center ">
      <div
        className="logo cursor-pointer "
        onClick={() =>
          pathname == "/" ? handleScroll("hero") : router.push("/")
        }
      >
        <Image alt="nav-logo" width={160} height={30} src={"/svgs/logo.svg"} />
      </div>
      <ul className="  hidden sm:flex gap-6 items-center ">
        {links.map((link, index) => {
          return (
            <li
              onClick={() => handleScroll(link.id)}
              className={`px-6 py-2 bg-secondary text-[12px] font-semibold rounded-[10px] cursor-pointer ${
                link.id == "footer" ? " hidden lg:block" : ""
              }  `}
              key={index}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
      <Link
        href={
          "https://api.whatsapp.com/send?phone=+923348177646&text=Hello,%20I%27m%20reaching%20out%20via%20Softrave.com%20to%20discuss%20a%20project."
        }
        className="contact-btn text-white bg-primary px-9 text-base tracking-wide duration-500 hover:-translate-y-1 hover:cursor-pointer   py-2.5 rounded-xl font-bold  hidden sm:inline "
      >
        discuss the project
      </Link>

      <button
        className="menu-btn  sm:hidden "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Image
          src={isOpen ? "/svgs/cross.svg" : "/svgs/ham.svg"}
          alt={isOpen ? "Close menu" : "Open menu"}
          width={30}
          height={30}
          loading="eager" // eager loading for priority
        />
      </button>
      <div
        className={`absolute top-[4.55rem] bg-white text-[#33373d] w-full transition-[height,transform] duration-300 left-0 overflow-hidden ${
          isOpen ? "h-[40vh] scale-y-100" : "h-0 scale-y-0"
        } origin-top`}
      >
        <ul
          className={`flex flex-col gap-3 px-10 py-4 transition-[opacity,transform] duration-200 ease-in-out delay-100 
    ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}    `}
        >
          {mobileLinks.map((link, index) => {
            return (
              <li onClick={() => handleScroll(link.id)} key={index}>
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
