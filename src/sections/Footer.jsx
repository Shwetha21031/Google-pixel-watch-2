import React from "react";
import footerimg from "../assets/images/footer_img.webp";
import { content } from "../constants/content";
const Footer = () => {
  const h1_info = content.footer.title;
  const p_info = content.footer.subtitle;
  return (
    <div className="w-[100%] flex-center">
      <div className="relative">
        <img src={footerimg} alt="footerimg" className="w-full opacity-50" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-semibold text-[3vw] text-center">{h1_info}</h1>
          <p className="text-[28px] m-10 text-center max-md:text-[12px] max-md:m-5">
            {p_info}
          </p>
          <div className="flex-center flex-col">
            <button className="w-[200px] text-center py-[10px] bg-white mb-10 rounded-[100px] max-md:text-[12px] max-md:py-[5px] max-md:mb-4">
              Buy now
            </button>
            <button className="w-[200px] text-center py-[10px] border-2 border-black rounded-[100px] max-md:text-[12px] max-md:py-[5px] ">
              Get a consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
