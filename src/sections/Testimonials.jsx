import React, { useState } from "react";
import { content } from "../constants/content";
import BlueBlob from "../components/BlueBlob";
const Testimonials = () => {
  const testimonials = content.testimonials;
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <div className="relative mt-[100px] flex-center flex-col">
      <div className="relative w-[80%]">
        <h1 className="text-center font-semibold text-[4vw]">
          Customer Reviews
        </h1>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="bg-[#CDE6F9] p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg transition-all duration-500">
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 italic leading-relaxed">
            "{testimonials[current].review}"
          </p>
          <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">
            {testimonials[current].username}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            {testimonials[current].user_type}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full shadow hover:bg-gray-100 w-[50px] h-[50px]"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full shadow hover:bg-gray-100 w-[50px] h-[50px]"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
                index === current ? "bg-[#2D3032]" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
