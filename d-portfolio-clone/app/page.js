"use client"
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { Blinker } from "next/font/google";
import "./home.css"
import Link from "next/link";
import Hero from "@/components/Hero";
import Passion from "@/components/Passion";






const blinker7 = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight: "700",
});

const blinker4 = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight: "400",
});


const home = () => {



  return (
    <>
      <header className=" z-20 h-fit  px-16 sticky top-4 container mx-auto ">
        <Navbar />
      </header>
      <main className="text-white mt-8  mx-auto min-h-[500vh] ">
        <Hero />
        <Passion/>
      </main>
    </>
  );
};

export default home;
