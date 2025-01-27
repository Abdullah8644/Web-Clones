import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <>
      <div className="text my-16 px-5 ">
        <h2 className="font-medium leading-[65px]  lg:leading-[90px]  text-[55px]  lg:text-[80px] ">
          Tell us about your problem, and we <br /> will offer the best solution
          for it
        </h2>
        <div className="flex justify-center my-2 pr-40  ">
          <Image
            src={"/svgs/style-line.svg"}
            alt="styled-line"
            width={530}
            height={47}
          />
        </div>
      </div>
      <div className="w-full  h-[35vh]  lg:h-[55vh]  lg:min-h-[50vh] bg-primary  rounded-p flex my-10 px-10 items-center  ">
        <h4 className="text-white font-medium  text-[55px] leading-[65px]  lg:text-[80px] w-[80%] lg:leading-[90px]  ">
          We work with projects transparently and honestly
        </h4>
        <div className="relative h-[80%]  w-[20%] ">
          <Image
            src={"/imgs/daimond.png"}
            alt="diamond"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-white w-full  h-[80vh]  rounded-p flex px-[30px] ">
        <div className="text w-[80%]  flex flex-col justify-center h-[80vh] gap-10  ">
          <h3 className="font-medium  text-[50px] leading-[50px]   lg:text-[80px] lg:leading-[80px] ">
            We quickly answer work <br />
            questions
          </h3>
          <p className=" w-[90%]  lg:w-[40%] font-semibold ">
            We hold video conferences where we explain all decisions. And if
            necessary, we will record a video guide on how to use the product.
          </p>
        </div>
        <div className="logos w-[30%] h-[40%]   lg:w-[40%]  lg:h-[50%] self-center lg:mb-20  relative ">
          <Image
            src={"/imgs/social.png"}
            alt="social-logos"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
