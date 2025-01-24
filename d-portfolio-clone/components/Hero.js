import React from 'react'
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import "./Hero.css"
import { Blinker } from "next/font/google";



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



const Hero = () => {

    const elementRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false); // Tracks if user scrolled once
    const [rotation, setRotation] = useState(0); // Tracks 


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Rotate only if the user has scrolled once before
            if (hasScrolled) {
                setRotation((scrollY / 5) % 250); // Rotate based on scrollY (mod to keep within 360)
            } else {
                setHasScrolled(true); // Mark as scrolled for the first time
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrolled]);

    return (
        <section className="hero flex items-center overflow-x-clip min-h-dvh  ">
            <div className="container grid-cols-2 grid items-center gap-20 pb-36 mx-auto min-h-dvh pr-0 pl-24 w-full ">
                <div className="left  flex flex-col gap-6     ">
                    <h1 className={`${blinker7.className} text-6xl w-1/2  `} >Dajour
                        Walker</h1>
                    <p className="" >Welcome to my website! I'm a 24-year-old tech enthusiast from Toledo, US, where I discovered my passion for web development. On this site, I'm thrilled to share my experience, insights and favorite projects with you.
                    </p>
                    <p>Take a look at my blog for articles about things I learned and might help you out. If you're interested in working together or just want to chat, feel free to contact me.</p>
                    <div className={`buttons flex gap-5  ${blinker7.className} text-white text-lg items-center `}>
                        <Link href={"/"} className="flex gap-3 transition-colors  bg-blue-500 p-5 hover:bg-blue-400 py-3    shadow-blue-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]  text-neutral-100 hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.0)] hover:shadow-blue-300  rounded-full " >
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="size-7"><circle cx="12" cy="4" r="2" className="uim-tertiary2"></circle><path className="uim-quaternary" d="M12 6a1.98 1.98 0 0 1-1-.277V8a1 1 0 0 0 2 0V5.723A1.98 1.98 0 0 1 12 6z"></path><path className="uim-tertiary2" d="M17 22H7a3.003 3.003 0 0 1-3-3v-9a3.003 3.003 0 0 1 3-3h10a3.003 3.003 0 0 1 3 3v9a3.003 3.003 0 0 1-3 3z"></path><path className="uim-primary2" d="M14.97 12.243 16.28 7H7.72l1.31 5.243A1 1 0 0 0 10 13h4a1 1 0 0 0 .97-.757z"></path><path className="uim-quaternary" d="M2 18a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zm20 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1z"></path><circle cx="9" cy="16" r="1" className="uim-primary2"></circle><circle cx="15" cy="16" r="1" className="uim-primary2"></circle></svg>
                            <span>
                                Ai Chat
                            </span>
                        </Link>
                        <Link href={"/"} className="flex gap-3 transition-colors  bg-[#ff8118] p-5 hover:bg-orange-400 py-3    shadow-orange-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]  text-orange-950 hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.0)] hover:shadow-orange-300  rounded-full " >
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="size-7"><path className="uim-quaternary2" d="M8.444 3.111a2 2 0 0 0-2 2v13.556a2.222 2.222 0 0 1-2.222 2.222h14.445A3.333 3.333 0 0 0 22 17.556V5.11a2 2 0 0 0-2-2H8.444z"></path><path className="uim-tertiary3" d="M6.444 18.667V7.556H4a2 2 0 0 0-2 2v9.333a2 2 0 0 0 2 2h.222a2.222 2.222 0 0 0 2.222-2.222z"></path><path className="uim-primary3" d="M17 9h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2zm0 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm5 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2z"></path></svg>
                            <span>Blog</span></Link>
                        <Link href={"/"} className="flex gap-3 transition-colors  bg-transparent border-2  p-5 py-3 border-opacity-10 hover:bg-neutral-800 border-white   text-neutral-100  rounded-full " >
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="size-7"><path className="uim-primary" d="m6.002 20.001.002 1a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .997-1.003l-.002-.995h-2z"></path><path className="uim-primary" d="M14 2.001h2v18h-2z"></path><path className="uim-tertiary" d="M17 2.001h-1v18h-2v-18H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a3.003 3.003 0 0 0 3-3v-12a3.003 3.003 0 0 0-3-3z"></path></svg>
                            <span>Resume</span></Link>
                    </div>
                </div>

                <div className="relative ">
                    {/* Gradient Blur Background */}
                    <div

                        ref={elementRef}
                        className="absolute -inset-16  gradient-blur  -top-32 -z-10 aspect-square rounded-full bg-gradient-to-tl from-blue-400   to-orange-300    opacity-50 blur-3xl"
                        style={{
                            transform: `rotate(${rotation}deg)`, // Apply dynamic rotation
                            transition: "transform 0.5s ease-out", // Smooth rotation
                        }}
                    ></div>

                    {/* Main Header Illustration */}
                    <div className="relative w-full flex justify-center items-center pt-52 ">
                        <img

                            alt="Header illustration"
                            fetchPriority="high"
                            width="100"
                            height="100"
                            src="imgs/person-desk.jpg"
                            decoding="async"
                            className="duration-700  zoom-in "
                        />
                    </div>

                    {/* Decorative Bubble Images */}
                    <img
                        alt="Bubble Gym"
                        loading="lazy"
                        width="1"
                        height="1"

                        decoding="async"
                        className="absolute -top-[18%] right-[25%]   zoom-in-2 "
                        src="svgs/bubble-gym.svg"
                    />

                    <img
                        alt="Bubble Rope"
                        loading="lazy"
                        width="137"
                        height="137"
                        decoding="async"
                        className="absolute -top-[4%] right-2 w-1/5 delay-150 zoom-in-2 -z-10 duration-500 "
                        src="svgs/bubble-rope.svg"
                    />

                    <img
                        alt="Bubble Piano"
                        loading="lazy"
                        width="139"
                        height="136"
                        decoding="async"
                        className="absolute -top-[16%] left-[18%] w-1/5 delay-300 zoom-in-2 duration-500 "
                        src="/svgs/person-piano.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
