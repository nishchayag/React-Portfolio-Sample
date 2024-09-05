import React from "react";
import Accordian from "./Accordian";
import accordianImg from "../assets/accordianImg.png";
import moonImg from "../assets/moonImg.png";

const Faq = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-full flex justify-center ">
        <div className="w-fit flex justify-center flex-col ">
          <div className="text-6xl lg:text-8xl mb-5 text-center bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            <h1 className="font-bold">FAQs</h1>
          </div>
          <div className="my-5 text-center text-2xl">
            Find quick answers to common questions in our FAQ section.
          </div>
          <div className=" mb-5 text-center text-2xl">
            Simplify your decision-making process and get the information you
            need.
          </div>
          <div className="text-center text-2xl">
            For personalized assistance, contact our friendly team anytime. Your
            satisfaction is our priority.
          </div>
        </div>
      </div>
      <div className="text-center mt-20 mb-10">
        <span className="text-7xl font-bold bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
          How can we help:
        </span>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="w-full lg:w-1/2">
          <Accordian
            question="What Services do you offer?"
            answer="We provide Web Development, Video Editing, Graphic Designing and Social Media Management! Check our services page for more info."
          />
          <Accordian
            question="How experienced is your Team?"
            answer="Our team has over 5+ years of experience, with experience in all the industries "
          />
          <Accordian
            question="Can you handle projects of any size?"
            answer="Yes, we cater to projects of all sizes, from small business websites to large-scale enterprise applications."
          />
          <Accordian
            question="How do I get a quote for my project?"
            answer="You can request a quote reaching out to us directly via email or phone"
          />
          <Accordian
            question="Do you offer ongoing support after project completion?"
            answer="Yes, we provide ongoing support and maintenance services to ensure your digital assets run smoothly."
          />
          <Accordian
            question="How long does it typically take to complete a project?"
            answer="The timeline varies based on the project's scope and complexity. We will provide a detailed estimate during the initial consultation."
          />
          <Accordian
            question="Is my data secure with you?"
            answer="Yes, we take data security seriously and implement robust measures to protect your information."
          />
        </div>
        <div className=" flex flex-wrap justify-center items-center lg:p-16 mt-10">
          <div>
            <img src={accordianImg} alt="" className="w-[600px]" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="w-full flex justify-end px-32 relative top-[200px]">
          <img src={moonImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
