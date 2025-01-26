import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <>
      <div className="text my-16 px-5 ">
        <h2 className="font-medium leading-[90px] text-[80px] ">
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
      <div className="w-full h-[55vh]  min-h-[50vh] bg-primary  rounded-p flex my-10 px-10 items-center  ">
        <h4 className="text-white font-medium text-[80px] w-[80%] leading-[90px]  ">
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
        <div className="text w-[60%]  flex flex-col justify-center h-[80vh] gap-10  ">
          <h3 className="font-medium text-[80px] leading-[80px] ">
            We quickly answer work <br />
            questions
          </h3>
          <p className="w-[40%] font-semibold ">
            We hold video conferences where we explain all decisions. And if
            necessary, we will record a video guide on how to use the product.
          </p>
        </div>
        <div className="logos w-[40%]  h-[50%] self-center mb-20  relative ">
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
