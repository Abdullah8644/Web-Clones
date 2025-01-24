import React, { useEffect, useRef, useState } from "react";
import { Blinker } from "next/font/google";
import { motion } from "framer-motion";

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

const Passion = () => {


  return (
    <section
      
      className="passion flex  min-h-dvh "
    >
      <div className="container grid-cols-2 grid mx-auto gap-20 items-start  min-h-dvh pr-0 pl-24 w-full  ">
        <div className="left-passion w-full flex flex-col gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col py-5 rounded-xl gap-2  bg-neutral-900 border border-white border-opacity-10 pl-5 pr-40 line-clamp-[7] "
          >
            <div className="img  bg-neutral-800 p-2 rounded-xl w-fit ">
              <img
                src="imgs/devlopment.png"
                alt="Service icon"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="w-12 contrast-[1.1] hue-rotate-[318deg] saturate-[1.4]"
                style={{ color: "transparent" }}
              />
            </div>
            <h2 className={`text-xl font-bold  ${blinker7.className} `}>
              Development of performant web applicatons
            </h2>
            <motion.p>
              After spending the last few years developing WordPress websites,
              I've recently transitioned to using React and Next.js to focus on
              building high performance web applications, with an emphasis on
              usability and accessibility.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col py-5 rounded-xl gap-2  bg-neutral-900 border border-white border-opacity-10 pl-5 pr-40 line-clamp-[7] "
          >
            <div className="img  bg-neutral-800 p-2 rounded-xl w-fit ">
              <img
                src="imgs/desgin.png"
                alt="Service icon"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="w-12 contrast-[1.1] hue-rotate-[318deg] saturate-[1.4]"
                style={{ color: "transparent" }}
              />
            </div>
            <h2 className={`text-xl font-bold  ${blinker7.className} `}>
              Website & application design
            </h2>
            <motion.p>
              During my studies, alongside web development, I discovered a
              passion for designing things. I like creating or updating designs,
              focusing mainly on modern web applications, with the goal of
              making them user-friendly and easy to use.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col py-5 rounded-xl gap-2  bg-neutral-900 border border-white border-opacity-10 pl-5 pr-40 line-clamp-[7] "
          >
            <div className="img  bg-neutral-800 p-2 rounded-xl w-fit ">
              <img
                src="imgs/ai.png"
                alt="Service icon"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="w-12 contrast-[1.1] hue-rotate-[318deg] saturate-[1.4]"
                style={{ color: "transparent" }}
              />
            </div>
            <h2 className={`text-xl font-bold  ${blinker7.className} `}>
              Building AI Engines
            </h2>
            <motion.p>
              In my last job, I was sometimes tasked with developing some AI
              engines to integrate to my client's business websites. I liked to
              make the chatbot and auto analyzer and that was working well.
              After OpenAI is released, I loved it and I updated my engines with
              AI Assistants and fine-tuning.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col py-5 rounded-xl gap-2  bg-neutral-900 border border-white border-opacity-10 pl-5 pr-40 line-clamp-[7] "
          >
            <div className="img  bg-neutral-800 p-2 rounded-xl w-fit ">
              <img
                src="imgs/devlopment.png"
                alt="Service icon"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="w-12 contrast-[1.1] hue-rotate-[318deg] saturate-[1.4]"
                style={{ color: "transparent" }}
              />
            </div>
            <h2 className={`text-xl font-bold  ${blinker7.className} `}>
              Mobile development
            </h2>
            <motion.p>
              Mobile development brings joy to users by offering all features
              accessible with a single button. I have been learning app
              development for the past three years, and I find React and React
              Native to be particularly awesome and user-friendly.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col py-5 rounded-xl gap-2  bg-neutral-900 border border-white border-opacity-10 pl-5 pr-40 line-clamp-[7] "
          >
            <div className="img  bg-neutral-800 p-2 rounded-xl w-fit ">
              <img
                src="imgs/seo.png"
                alt="Service icon"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="w-12 contrast-[1.1] hue-rotate-[318deg] saturate-[1.4]"
                style={{ color: "transparent" }}
              />
            </div>
            <h2 className={`text-xl font-bold  ${blinker7.className} `}>
              Local SEO with Google Business Profile
            </h2>
            <motion.p>
              Lately I started managing some Google Business Profiles and I'm
              really enjoying it. Keeping business information up-to-date and
              visible in local searches is helping these businesses to connect
              better with the community.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="right-passion   sticky top-[90px] w-full flex flex-col  gap-3 "
        >
          <div className="bg-orange-500 w-fit px-4 py-3   rounded-full  text-orange-950 font-bold flex gap-2 ">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="w-5"
              >
                <path
                  className="uim-tertiary3"
                  d="M19 17H5a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h14a3.003 3.003 0 0 1 3 3v8a3.003 3.003 0 0 1-3 3z"
                ></path>
                <path
                  className="uim-primary3"
                  d="M17 19h-4v-2h-2v2H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
                ></path>
              </svg>
            </div>
            <span>Passion</span>
          </div>
          <h2 className={`${blinker7.className} text-6xl font-bold   `}>
            Why the Web?
          </h2>
          <div className="text flex flex-col gap-2 pr-28 text-lg">
            <motion.p
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              About 6 years ago, I created my first website as a student
              research project for the Media Informatics module of the degree
              course of the same name. It was the first time I saw HTML and CSS
              and understood how to create a very simple website.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              The page only consisted of a single image, a heading, two
              paragraphs of text and a big background gradient all over the page
              – but however small the website was and unpleasing it looked, I
              had a blast creating it and thus found a new passion.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Now, 6 years and many websites later, I have taken the time to
              fulfill my dream of creating my own personal site, which was a
              slightly more complex task – but still as much fun as all those
              years ago.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Here is what I have learned over the years and what I am currently
              focusing on.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Passion;
