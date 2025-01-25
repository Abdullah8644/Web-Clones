import Image from "next/image";
import React from "react";

const Navbar = () => {
  // * Adding Links into array
  const links: string[] = ["about us", "our project", "services", "contact"];
  return (
    <nav className="w-full  bg-white flex justify-between py-5 rounded-b-[40px] px-14 items-center ">
      <div className="logo">
        <Image alt="nav-logo" width={160} height={30} src={"/svgs/logo.svg"} />
      </div>
      <ul className="flex gap-6 items-center ">
        {links.map((link, index) => {
          return (
            <li
              className="px-6 py-2 bg-secondary text-[12px] font-semibold rounded-[10px]"
              key={index}
            >
              {link}
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
