"use client";
import Image from "next/image";
import React from "react";
import { animate } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname: string = usePathname();
  const router = useRouter();
  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const topPosition = target.offsetTop; // Get the section's position
      // Animate the scroll
      animate(window.scrollY, topPosition, {
        duration: 0.2, // Duration of the scroll in seconds

        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    }
  };

  // * Adding Links into array
  const links: { name: string; id: string }[] = [
    { name: "about us", id: "hero" },
    { name: "our project", id: "projects" },
    { name: "services", id: "services" },
    { name: "contact", id: "footer" },
  ];
  return (
    <nav className="w-full  bg-white flex justify-between py-5 rounded-b-[40px] px-14 items-center ">
      <div
        className="logo cursor-pointer "
        onClick={() =>
          pathname == "/" ? handleScroll("hero") : router.push("/")
        }
      >
        <Image alt="nav-logo" width={160} height={30} src={"/svgs/logo.svg"} />
      </div>
      <ul className="flex gap-6 items-center ">
        {links.map((link, index) => {
          return (
            <li
              onClick={() => handleScroll(link.id)}
              className="px-6 py-2 bg-secondary text-[12px] font-semibold rounded-[10px] cursor-pointer  "
              key={index}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
      <div className="contact-btn text-white bg-primary px-9 text-base tracking-wide   py-2.5 rounded-xl font-bold ">
        discuss the project
      </div>
    </nav>
  );
};

export default Navbar;
