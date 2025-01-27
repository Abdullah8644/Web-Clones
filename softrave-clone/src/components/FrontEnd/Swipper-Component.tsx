"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

type CardProps = {
  heading: string;
  cardText: string;
  imgLink: string;
  cardBackground: string;
  darkText: boolean;
};

type Props = {
  cards: CardProps[];
};

const MySwiper = ({ cards }: Props) => {
  return (
    <Swiper
      className=" h-[60vh]  lg:h-[80vh] w-full z-10  selection:cursor-pointer "
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: ".custom-prev-button",
        nextEl: ".custom-next-button",
      }}
      pagination={{ clickable: true, el: null }}
      breakpoints={{
        640: {
          // When the screen width is >= 640px
          slidesPerView: 1,
        },
        1020: {
          // When the screen width is >= 768px
          slidesPerView: 2,
        },
        1300: {
          // When the screen width is >= 1024px
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 10000, // Delay between auto swipes (in milliseconds)
        disableOnInteraction: false, // Keep autoplay active on user interaction
      }}
      loop
    >
      {cards.map((card, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="card  rounded-[30px] lg:rounded-xl h-full w-full px-4 py-6 flex flex-col gap-6 justify-between   "
              style={{
                backgroundColor: card.cardBackground,
                color: card.darkText ? "black" : "white",
              }}
            >
              <div className="flex flex-col gap-5 h-[40%]  ">
                <span className="text-[22px] font-bold">{card.heading}</span>
                <p className="text-lg">{card.cardText}</p>
              </div>
              <div className="w-full h-[60%]  relative ">
                <Image
                  loading="lazy"
                  src={`/imgs/cardimgs/${card.imgLink}.png`}
                  alt={card.heading}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            ;
          </SwiperSlide>
        );
      })}

      <div className="   text-4xl font-mono right-[1%]  text-white z-40  cursor-pointer   custom-next-button absolute top-[40%]  ">
        &gt;
      </div>
      <div className="   text-4xl font-mono left-[1%]  text-white z-40  cursor-pointer   custom-prev-button absolute top-[40%]  ">
        &lt;
      </div>
    </Swiper>
  );
};

export default MySwiper;
