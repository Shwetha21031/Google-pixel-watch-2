import React from "react";
import Imagefive from "../assets/images/gp_img_girl_run.jpg";
import Imagetwo from "../assets/images/gp_img_girl.jpg";
import Imagethree from "../assets/images/gp_img_run.jpg";
import Imageone from "../assets/images/gp_img_girl_pink.webp";
import Imagefour from "../assets/images/gp_img_another_girl.webp";
import { content } from "../constants/content";
import gp_creme from "../assets/images/gp_creme.png";
import gp_black from "../assets/images/gp-black-right.PNG";
import BlueBlob from "../components/BlueBlob";
import gpone from "../assets/images/mid-sec-1.jpg";
import gptwo from "../assets/images/mid-sec-2.jpg";
import gpthree from "../assets/images/mid-sec-3.jpg";
import twogp from "../assets/images/gp_2.png";
import threegp from "../assets/images/gp_3.png";
import gpmulti from "../assets/images/gp-multiple.jpg";

const About = () => {
  const section_2 = content.section_2;
  const section_3 = content.section_3;
  const section_5 = content.section_5;
  return (
    <div id="#about-watch" className="overflow-hidden">
      {/* grid images */}
      <div className="mt-[50px] w-full flex justify-center">
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2 w-[80%] items-stretch">
          <img
            src={Imagethree}
            alt="img-1"
            className="w-full max-sm:aspect-square rounded-lg"
          />
          <img
            src={Imagefive}
            alt="img-2"
            className="w-full max-sm:aspect-square rounded-lg"
          />
          <img
            src={Imageone}
            alt="img-3"
            className="w-full max-sm:aspect-[4/3] rounded-lg col-span-2 sm:col-span-2"
          />
          <img
            src={Imagefour}
            alt="img-4"
            className="w-full max-sm:aspect-[4/3] rounded-lg col-span-2 sm:col-span-2"
          />
          <img
            src={Imagetwo}
            alt="img-5"
            className="w-full max-sm:aspect-[4/3] rounded-lg col-span-2 sm:col-span-2"
          />
        </div>
      </div>

      <div className="w-full bg-[#A4CCF4]/30 my-[50px] h-[40vh] flex items-center px-[50px]">
        <h1 className="font-semibold text-[5vh] max-sm:text-[28px] text-center xl:px-[200px] xl:text-[7vh]">
          {section_2}
        </h1>
      </div>

      {/* indicator and analytics */}
      <div className="mt-[150px]">
        <div className="relative m-[30px] lg:mr-[150px] lg:ml-[200px] md:ml-[70px]">
          <h1 className="absolute big-font font-semibold text-[13vw] z-0 -left-[100px] -top-[50px] md:-left-[50px] max-sm:left-0 max-sm:-top-20">
            indicator
          </h1>
          <BlueBlob
            top="top-[0px] max-sm:-top-20"
            left="left-[-100px] max-sm:-left-[50px]"
            width="w-[150px]"
            height="h-[150px]"
            opacity="opacity-70"
            blur="blur-2xl"
          />
          <div className="flex items-center justify-between max-sm:flex-col">
            <div className="w-[50%] max-sm:w-[80%]">
              <h2 className="font-semibold text-[5vh] max-sm:text-[28px]">
                {section_3.indicator.title}
              </h2>
              <p className="text-[3vh] max-sm:text-[18px]">
                {section_3.indicator.subtitle}
              </p>
            </div>
            <div>
              <img src={gp_creme} alt="sec3 indicator img " className="z-9" />
            </div>
          </div>
        </div>

        <div className="mt-[150px]">
          <div className="relative m-[30px] lg:ml-[150px] lg:mr-[200px] md:mr-[70px]">
            <div className="flex items-center justify-between max-md:flex-col-reverse">
              <img src={gp_black} alt="sec3 analytics img" />
              <div className="w-[50%] max-sm:w-[80%]">
                <h2 className="font-semibold text-[5vh] max-sm:text-[28px] text-right">
                  {section_3.analytics.title}
                </h2>
                <p className="text-[3vh] max-sm:text-[18px] text-right mb-10">
                  {section_3.analytics.subtitle}
                </p>
              </div>
            </div>

            <h1 className="absolute big-font font-semibold text-[13vw] z-0 -right-14 -top-[70px] max-md:-right-150 max-sm:right-0 max-sm:-top-20">
              analytics
            </h1>
            <BlueBlob
              right="-right-[100px] max-md:-right-6"
              top="top-[-50px] max-sm:-top-[50px]"
              width="w-[150px]"
              height="h-[150px]"
              opacity="opacity-70"
              blur="blur-2xl"
            />
          </div>
        </div>
      </div>

      {/* three images */}
      <div className="flex justify-center p-[50px]">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <img src={gpone} alt="gpone" className="rounded-lg border " />
          <img src={gptwo} alt="gptwo" className="rounded-lg border" />
          <img src={gpthree} alt="gpthree" className="rounded-lg border" />
        </div>
      </div>

      {/* 2 watches */}
      <div className="relative w-full bg-lightBlue/30">
        <h1 className="absolute text-[4vh] font-semibold top-8 left-8">
          Easy access to Google <br />
          Voice Assistant
        </h1>
        <h1 className="absolute text-[4vh] font-semibold text-right right-8 bottom-8">
          Integration with your <br />
          Google profiles
        </h1>
        <div className="flex items-center justify-center">
          <h1 className="text-[8vw] text-lightBlue font-bold">Google</h1>
          <img src={twogp} alt="twogp" className="" />
          <h1 className="text-[8vw] text-lightBlue font-bold">Pixel</h1>
        </div>
      </div>

      {/* fast and easy */}
      <div className="flex w-full p-10 max-md:flex-col items-center justify-center">
        <div className="m-[20px]  flex justify-center flex-col h-[500px] max-md:h-[200px]  max-md:items-center">
          <h1 className="text-[4vw] font-semibold  ">{section_5.title}</h1>
          <p className="w-[70%] mb-[30px] mt-4 max-md:text-center">
            {section_5.subtitle}
          </p>
          <button className="blue-btn w-[50%] -ml-[10px]">
            Get a consultation
          </button>
        </div>
        <div className="relative flex items-center justify-center  w-1/2 max-md:w-full p-16">
          <img src={threegp} alt="" className="w-full z-9" />
          <BlueBlob
            top="top-0"
            left="left-0"
            width="w-full"
            height="h-full"
            opacity="opacity-70"
            blur="blur-3xl"
          />
        </div>
      </div>

      {/* img */}
      <div className="w-full px-[40px] max-md:px-[20px]">
        <img src={gpmulti} alt="multiple watches rounded" className="w-full " />
      </div>
    </div>
  );
};

export default About;
