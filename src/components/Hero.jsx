import React from "react";
import heroImg from "../assets/heroImg2.png";
import "../components/Hero.css";
import { motion, useSpring } from "framer-motion";
import moonImg from "../assets/moonImg.png";
const Hero = () => {
  return (
    <div id="Hero" className="mt-20 w-full lg:w-full ">
      <div className="flex flex-wrap lg:flex-nowrap justify-between flex-row items-center  w-full  ">
        <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center lg:ml-12">
          <motion.div className=" text-7xl  lg:text-8xl font-bold mb-10">
            <span> Your </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Vision
            </span>
            ,
            <br />
            Our Craft
          </motion.div>
          <motion.div className=" text-center flex mb-10 lg:justify-start justify-center w-1/2">
            <div className="bg-[#0000ff] w-1 h-1 rounded-full mx-1"></div>
            <div className="bg-[#0000ff] w-1 h-1 rounded-full mx-1"></div>
            <div className="bg-[#0000ff] w-1 h-1 rounded-full mx-1"></div>
            <div className="bg-[#0000ff] w-24 h-1 rounded-full mx-1"></div>
          </motion.div>
          <motion.div className="flex justify-center lg:justify-start w-full lg:w-1/2 h-fit">
            <span className="tracking-wider lg:text-lg mb-9">
              <div> Where Video Enchantment,</div>
              <br />
              <div>Crazy Animations, Graphics and more</div>
              <br />
              Collide together for
              <span className=""> Digital Success!</span>
            </span>
          </motion.div>
          <motion.div className="flex w-1/2 flex-col">
            <a href="#Contact">
              <motion.button className=" quote-btn mt-10 mb-10 min-w-max text-lg text-white bg-gradient-to-br from-blue-700 to bg-purple-800 font-semibold py-4 px-11 rounded-full">
                <span>Get a Quote</span>
              </motion.button>
            </a>
          </motion.div>
        </div>
        <div className="flex justify-start items-center w-full   lg:w-1/2">
          <motion.div className="flex w-fit justify-center items-center heroModel  rounded-lg">
            <motion.img
              initial={{ scale: 0, y: -300, opacity: 0 }}
              whileInView={{
                scale: [0.2, 0.5, 0.75, 1],
                y: [0, 100, -100, 0],
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              src={heroImg}
              alt=""
              className=" flex w-[700px]  justify-center items-center h-auto mt-16  "
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="-z-10 w-full relative top-[-100px] hidden lg:block "
      >
        <div className="w-1/4 flex justify-center">
          <img src={moonImg} alt="" className="w-[170px]" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
