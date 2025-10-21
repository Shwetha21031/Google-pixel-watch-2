import React from "react";
import Blue_watch from "../assets/images/gp_blue.png";
import { content } from "../constants/content";
import BlueBlob from "../components/BlueBlob";

const Hero = () => {
  const paragraph_content = content.hero_p;
  return (
    <div>
      <div className="relative w-full flex flex-col justify-center items-center">
        <h1 className="absolute text-[25vw] font-bold text-center select-none pointer-events-none z-0 mt-[-250px] big-font md:mt[-300px]">
          WATCH
        </h1>
        <div className="relative flex justify-center items-center w-[65%]">
          <BlueBlob
            top="top-[50px]"
            left="left-[0px]"
            width="w-[150px]"
            height="h-[150px]"
            opacity="opacity-90"
            blur="blur-2xl"
          />

          <h1 className="absolute top-10 left-10 text-[10vw] max-sm:text-[15vw]  max-sm:-left-10 font-semibold z-1">
            Pixel
          </h1>
          <img
            src={Blue_watch}
            alt="blue watch"
            className="w-[50vw] mt-[50px] max-w-[500px] max-sm:my-[60px] blue-watch z-2"
          />

          <BlueBlob
            right="right-[-10px]"
            bottom="bottom-[10px]"
            width="w-[150px]"
            height="h-[150px]"
            opacity="opacity-90"
            blur="blur-2xl"
          />
          <h1 className="absolute bottom-0 -right-[50px] text-[10vw] max-sm:text-[12vw] font-semibold z-3 max-sm:bottom-10">
            Watch 2
          </h1>
        </div>
        <p className="w-[65%] text-center text-[18px] lg:text-[30px]  font-semibold mb-20px mt-[50px] ">
          {paragraph_content}
        </p>
        <div className="my-10">
          <button className="blue-btn max-sm:text-[10px]">
            Get a consultation
          </button>
          <button className="hallow-btn max-sm:text-[10px]">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
