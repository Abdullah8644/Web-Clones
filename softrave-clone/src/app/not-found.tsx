import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <section className="not-found min-h-screen bg-black flex justify-center items-center flex-col gap-6">
      <div className="text-[180px] text-transparent  font-bold leading-[150px]  ">
        404
      </div>
      <div className="text text-white  text-[48px]  ">Did you get lost?</div>
      <p className="font-light   text-[#c6c9d8]">
        The page you were looking for could not be found.
      </p>
      <Link
        href={"/"}
        className="go-home px-[40px] py-[15px] bg-[#3549ff] rounded-[6px] text-white hover:bg-transparent hover:text-[#3549ff] border-2 border-primary hover:-translate-y-1  transition-all duration-500  "
      >
        Back to HomePage
      </Link>
    </section>
  );
};

export default notfound;
