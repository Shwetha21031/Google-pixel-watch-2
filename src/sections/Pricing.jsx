import React from "react";
import gpCreme from "../assets/images/gp_creme.png";
import gpGreen from "../assets/images/gp_green.png";
import gpBlue from "../assets/images/gp_blue.png";
const Pricing = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center">
      <h1 className="text-[4vw] font-semibold my-10 max-sm:text-[28px] text-center">
        Smart tech without overpayments
      </h1>
      <div className="flex-center max-sm:flex-col">
        <div className="flex-center flex-col w-[25%] text-[2vw] font-semibold max-sm:w-full max-sm:mt-[40px] max-sm:text-xl text-center">
          <h2 className="font-semibold">Pixel Watch 2 in White</h2>
          <img src={gpCreme} alt="gpCreme" />
        </div>
        <div className="flex-center flex-col w-[50%] text-[2.5vw] max-sm:w-full max-sm:mt-[40px] max-sm:text-xl text-center">
          <h2 className="font-semibold">
            Pixel Watch 2 in <br />
            Blue
          </h2>
          <img src={gpBlue} alt="gpBlue" />
        </div>
        <div className="flex-center flex-col w-[25%] text-[2vw] font-semibold max-sm:w-full max-sm:mt-[40px] max-sm:text-xl text-center">
          <h2 className="font-semibold">Pixel Watch 2 in Green</h2>
          <img src={gpGreen} alt="gpGreen" />
        </div>
      </div>
      <div className="flex-center flex-col">
        <h1 className="text-[3vw] font-semibold mt-[50px]">From $249.99</h1>
        <h3>or $20.83/month with 12-month financing*</h3>
        <button className="blue-btn">Buy</button>
      </div>
    </div>
  );
};

export default Pricing;
