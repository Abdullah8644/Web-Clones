"use client";
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

let locomotiveScroll: LocomotiveScroll;

const handleScrollTo = (id: string) => {
  if (locomotiveScroll) {
    locomotiveScroll.scrollTo(`#${id}`);
  } else {
    console.log("HEY");
  }
};

const Smooth_Scroll = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.04,
          easing: (t) =>
            t < 0.5
              ? 50 * t * t * t // Faster ease-in portion
              : 0.8 * Math.pow(2 * t - 2, 3) + 1,
        },
      });
    })();
  }, []);

  return <></>;
};

export default Smooth_Scroll;

export { handleScrollTo };
