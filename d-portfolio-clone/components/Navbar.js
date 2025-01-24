"use client"
import React, { useRef } from "react";
import { Blinker } from "next/font/google";
import "./Navbar.css";
import Link from "next/link";

const blinker7 = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight: "700",

});

const Navbar = () => {

  const spanRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !spanRefs.current.includes(el)) {
      spanRefs.current.push(el);
    }
  };

  const showAfter = (index) => {
    if (spanRefs.current[index]) {
      spanRefs.current[index].style.setProperty('--after-opacity', '1');
    }
  };
  const hideAfter = (index) => {
    if (spanRefs.current[index]) {
      spanRefs.current[index].style.setProperty('--after-opacity', '0');
    }
  };

  return (
    <nav className="bg-transparent" >
      <div
        className={`w-ful rounded-full ${blinker7.className}  bg-neutral-900 text-white flex px-1.5 font-bold   text-lg   justify-between items-center   `}
      >
        <div className="logo cursor-pointer ">
          <img src="imgs/logo.jpg" alt="logo" className="rounded-full" />
        </div>
        <ul className="flex gap-4 ">
          <li>
            <Link href="" onMouseLeave={()=>{hideAfter(0)}} onMouseEnter={()=>{showAfter(0)}} className="flex gap-2 items-center">
              <i className="block size-7 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="4"
                    r="2"
                    className="uim-tertiary"
                  ></circle>
                  <path
                    className="uim-quaternary"
                    d="M12 6a1.98 1.98 0 0 1-1-.277V8a1 1 0 0 0 2 0V5.723A1.98 1.98 0 0 1 12 6z"
                  ></path>
                  <path
                    className="uim-tertiary"
                    d="M17 22H7a3.003 3.003 0 0 1-3-3v-9a3.003 3.003 0 0 1 3-3h10a3.003 3.003 0 0 1 3 3v9a3.003 3.003 0 0 1-3 3z"
                  ></path>
                  <path
                    className="uim-primary"
                    d="M14.97 12.243 16.28 7H7.72l1.31 5.243A1 1 0 0 0 10 13h4a1 1 0 0 0 .97-.757z"
                  ></path>
                  <path
                    className="uim-quaternary"
                    d="M2 18a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zm20 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1z"
                  ></path>
                  <circle cx="9" cy="16" r="1" className="uim-primary"></circle>
                  <circle
                    cx="15"
                    cy="16"
                    r="1"
                    className="uim-primary"
                  ></circle>
                </svg>
              </i>
              <span ref={addToRefs} >AI CHAT</span>
            </Link>
          </li>
          <li>
            <Link href="" onMouseLeave={()=>{hideAfter(1)}} onMouseEnter={()=>{showAfter(1)}} className="flex gap-2 items-center">
              <i className="block size-7 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="uim-quaternary"
                    d="M8.444 3.111a2 2 0 0 0-2 2v13.556a2.222 2.222 0 0 1-2.222 2.222h14.445A3.333 3.333 0 0 0 22 17.556V5.11a2 2 0 0 0-2-2H8.444z"
                  ></path>
                  <path
                    className="uim-tertiary"
                    d="M6.444 18.667V7.556H4a2 2 0 0 0-2 2v9.333a2 2 0 0 0 2 2h.222a2.222 2.222 0 0 0 2.222-2.222z"
                  ></path>
                  <path
                    className="uim-primary"
                    d="M17 9h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2zm0 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm5 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2z"
                  ></path>
                </svg>
              </i>
              <span ref={addToRefs} >BLOG</span>
            </Link>
          </li>
          <li>
            <Link href="" onMouseLeave={()=>{hideAfter(2)}} onMouseEnter={()=>{showAfter(2)}} className="flex gap-2 items-center">
              <i className="block size-7 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="uim-tertiary"
                    d="M19 17H5a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h14a3.003 3.003 0 0 1 3 3v8a3.003 3.003 0 0 1-3 3z"
                  ></path>
                  <path
                    className="uim-primary"
                    d="M17 19h-4v-2h-2v2H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
                  ></path>
                </svg>
              </i>
              <span ref={addToRefs} >PASSION</span>
            </Link>
          </li>
          <li>
            <Link href="" onMouseLeave={()=>{hideAfter(3)}} onMouseEnter={()=>{showAfter(3)}} className="flex gap-2 items-center">
              <i className="block size-7 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    className="uim-primary"
                    d="M21 10H3A1 1 0 0 1 2 9V6A3.00328 3.00328 0 0 1 5 3H19a3.00328 3.00328 0 0 1 3 3V9A1 1 0 0 1 21 10zM14 14H10a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
                  ></path>
                  <path
                    className="uim-tertiary"
                    d="M4,10v8a3.00328,3.00328,0,0,0,3,3H17a3.00328,3.00328,0,0,0,3-3V10Zm10,4H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
                  ></path>
                </svg>
              </i>
              <span ref={addToRefs} >PROJECTS</span>
            </Link>
          </li>
          <li>
            <Link href="" onMouseLeave={()=>{hideAfter(4)}} onMouseEnter={()=>{showAfter(4)}} className="flex gap-2 items-center">
              <i className="block size-7 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="uim-primary"
                    d="m6.002 20.001.002 1a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .997-1.003l-.002-.995h-2z"
                  ></path>
                  <path className="uim-primary" d="M14 2.001h2v18h-2z"></path>
                  <path
                    className="uim-tertiary"
                    d="M17 2.001h-1v18h-2v-18H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a3.003 3.003 0 0 0 3-3v-12a3.003 3.003 0 0 0-3-3z"
                  ></path>
                </svg>
              </i>
              <span ref={addToRefs} >EXPERIENCE</span>
            </Link>
          </li>
        </ul>
        <div className="contact">
          <Link
            href=""
            className="gap-4  flex bg-blue-500 px-5 py-3 rounded-full ring-2 ring-blue-300  hover:bg-blue-400 "
          >
            <i className=" block size-7 flex-shrink-0  ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  className="uim-tertiary"
                  d="M12 21H4a1 1 0 0 1-.707-1.707l1.675-1.675A9 9 0 1 1 12 21Z"
                ></path>
                <path
                  className="uim-primary2  "
                  d="M15.92 10.76a.997.997 0 0 1-.707-.293l-1.92-1.92a1 1 0 0 1 1.414-1.414l1.213 1.213 3.373-3.373a1 1 0 0 1 1.414 1.414l-4.08 4.08a.997.997 0 0 1-.707.293Z"
                ></path>
              </svg>
            </i>
            <span  >CONTACT</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
