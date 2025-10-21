import React, { useState } from "react";
import { content } from "../constants/content";

const FrequentQuestions = () => {
  const faqs = content.faqs;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#EAF4FD] min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#A4CCF4] rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-[#D8EBFB] transition-colors"
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  } text-[#2563EB] text-2xl`}
                >
                  +
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                } text-gray-600 bg-[#F7FBFF]`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
