import React, { useState } from "react";

const Accordian = ({ question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const handleClick = () => {
    setQuestionOpen(!questionOpen);
  };
  return (
    <div className="mt-5 w-full flex flex-row ">
      <div className="w-full flex flex-col lg:pl-56">
        <div onClick={handleClick} className="w-full">
          <button className="flex justify-between w-full px-5  bg-blue-600 p-5 rounded-lg">
            <span className="text-xl  font-bold tracking-wide">{question}</span>
            <svg
              className="fill-white shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  questionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  questionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </button>
          <div
            className={`px-5 grid overflow-hidden transition-all duration-300 ease-in-out ${
              questionOpen
                ? "grid-rows-[1fr] opacity-100 mt-3"
                : "grid-rows-[0fr] opacity-0"
            } `}
          >
            <div className={` overflow-hidden text-lg `}>
              <span>{answer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
