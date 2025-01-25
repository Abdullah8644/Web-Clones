"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

type Card = {
  name: string;
};

const MySwiper = ({ name }: Card) => {
  return (
    <Swiper
      className="gap-10 flex cursor-grabbing "
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        10: {
          slidesPerView: 1,
        },
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
      slidesPerView={3}
      autoplay={{
        delay: 4000, // Delay between auto swipes (in milliseconds)
        disableOnInteraction: false, // Keep autoplay active on user interaction
      }}
      loop
    >
      <SwiperSlide className=""></SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
