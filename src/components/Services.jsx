import React, { useEffect, useRef } from "react";
import "../components/Services.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useInView, useAnimation, animate, delay } from "framer-motion";
import webIcon from "../assets/webIcon2.png";
import editIcon from "../assets/editIcon.png";
import gfxIcon from "../assets/gfxIcon.png";
import animateIcon from "../assets/animateIcon.png";
import socialIcon from "../assets/socialIcon.png";

const Services = () => {
  const isBig = useMediaQuery("(min-width:1024px)");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();
  const mainControls4 = useAnimation();
  const mainControls5 = useAnimation();

  const varients = (delay) => ({
    initial: { scale: 0, opacity: 0 },
    animate: { opacity: 1, scale: [0.9, 1.1, 0.95, 1.05, 0.99, 1.01, 1] },
    transition: { duration: 1, delay: delay },
  });

  useEffect(() => {
    if (isInView1) {
      mainControls1.start("animate");
    }
  }, [isInView1]);
  useEffect(() => {
    if (isInView2) {
      mainControls2.start("animate");
    }
  }, [isInView2]);
  useEffect(() => {
    if (isInView3) {
      mainControls3.start("animate");
    }
  }, [isInView3]);
  useEffect(() => {
    if (isInView4) {
      mainControls4.start("animate");
    }
  }, [isInView4]);
  useEffect(() => {
    if (isInView5) {
      mainControls5.start("animate");
    }
  }, [isInView5]);

  return (
    <div id="Services" className=" w-full mt-40 pt-20">
      <h1 className="text-center mb-4 font-bold">What we offer</h1>
      <h1 className="text-5xl lg:text-6xl text-center font-bold">
        Where{" "}
        <span className="bg-gradient-to-r  from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
          Innovation
        </span>{" "}
        <div>goes hand in hand with </div>
        <span className="bg-gradient-to-r  from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
          Creativity
        </span>
        .{" "}
      </h1>
      <div className="w-full flex flex-wrap pt-16 justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="">
            <div className="flex flex-wrap justify-center">
              <motion.div
                variants={varients()}
                initial="initial"
                animate={mainControls1}
                transition={{ delay: isBig ? 0.5 : 0 }}
                className="w-full lg:w-1/4  p-7 rounded-xl card-div  m-5 text-center"
                ref={ref1}
              >
                <div className="">
                  <div className=" mb-5 flex justify-center img-div ">
                    <img src={editIcon} alt="" className="h-24" />
                  </div>
                  <div className="font-bold text-3xl mb-3">Video Editing</div>
                  <div className=" text-lg font-light italic mb-3">
                    "Editing is where the magic happens, turning moments into
                    timeless stories."
                  </div>
                  <div className="text-neutral-400 tracking-tighter text-lg">
                    Editing is the transformative magic that breathes life into
                    raw moments, weaving them into timeless stories. Through
                    thoughtful cuts, transitions, and enhancements, they craft
                    narratives that resonate deeply with audiences, leaving a
                    lasting impact that transcends the screen. In the hands of a
                    talented editor, every frame becomes an opportunity to
                    create something truly memorable and meaningful
                  </div>
                </div>
              </motion.div>
              <motion.div
                ref={ref2}
                variants={varients()}
                initial="initial"
                animate={mainControls2}
                transition={{ delay: isBig ? 0.2 : 0 }}
                className="w-full lg:w-1/4  p-7 rounded-xl card-div  m-5 text-center"
              >
                <div className="">
                  <div className=" mb-5 flex justify-center img-div ">
                    <img src={gfxIcon} alt="" className="h-24" />
                  </div>
                  <div className="font-bold text-3xl mb-3">
                    Graphic Designing
                  </div>
                  <div className=" text-lg font-light italic mb-3">
                    "Design is intelligence made visible."
                  </div>
                  <div className="text-neutral-400 tracking-tighter text-lg">
                    Graphic design is the art of making intelligence visible
                    through visual communication. In the hands of a skilled
                    designer, every pixel and line serves a strategic purpose,
                    enhancing brand identity and storytelling. Graphic design is
                    not just about aesthetics; it's about crafting meaningful
                    experiences that resonate with audiences and leave a lasting
                    impression.
                  </div>
                </div>
              </motion.div>
              <motion.div
                ref={ref3}
                variants={varients()}
                initial="initial"
                animate={mainControls3}
                transition={{ delay: isBig ? 0.1 : 0 }}
                className="w-full lg:w-1/4  p-7 rounded-xl card-div  m-5 text-center"
              >
                <div className="">
                  <div className=" mb-5 flex justify-center img-div ">
                    <img src={animateIcon} alt="" className="h-24" />
                  </div>
                  <div className="font-bold text-3xl mb-3">Animation</div>
                  <div className=" text-lg font-light italic mb-3">
                    "Where dreams dance in the flicker of frames."
                  </div>
                  <div className="text-neutral-400 tracking-tighter text-lg">
                    Where dreams dance in the flicker of frames. Each frame,
                    meticulously crafted, tells a story that transcends reality,
                    capturing the imagination and transporting viewers to worlds
                    beyond their own. Through the magic of animation, dreams
                    come alive, dancing vividly before our eyes, leaving an
                    indelible mark on our hearts and minds.
                  </div>
                </div>
              </motion.div>
              <motion.div
                ref={ref4}
                variants={varients()}
                initial="initial"
                animate={mainControls4}
                transition={{ delay: isBig ? 0.3 : 0 }}
                className="w-full lg:w-1/4  p-7 rounded-xl card-div  m-5 text-center"
              >
                <div className="">
                  <div className=" mb-5 flex justify-center img-div ">
                    <img src={webIcon} alt="" className="h-24" />
                  </div>
                  <div className="font-bold text-3xl mb-3">Web Development</div>
                  <div className=" text-lg font-light italic mb-3">
                    "Our expertise turns ideas into interactive, user-friendly
                    websites that captivate and convert."
                  </div>
                  <div className="text-neutral-400 tracking-tighter text-lg">
                    Elevating your online presence through innovative design and
                    seamless functionality. Experience the perfect blend of
                    creativity and technology, and watch your digital dreams
                    come to life.From design to deployment, we ensure a
                    seamless, responsive experience that elevates your brand and
                    sets you apart in the digital landscape.
                  </div>
                </div>
              </motion.div>
              <motion.div
                ref={ref5}
                variants={varients()}
                initial="initial"
                animate={mainControls5}
                transition={{ delay: isBig ? 0.4 : 0 }}
                className="w-full lg:w-1/4  p-7 rounded-xl card-div  m-5 text-center"
              >
                <div className="">
                  <div className=" mb-5 flex justify-center img-div ">
                    <img src={socialIcon} alt="" className="h-24" />
                  </div>
                  <div className="font-bold text-3xl mb-3">
                    Social Media Handling
                  </div>
                  <div className=" text-lg font-light italic mb-3">
                    "Curating your digital narrative with creativity and
                    strategy."
                  </div>
                  <div className="text-neutral-400 tracking-tighter text-lg">
                    Elevate your brand's presence with compelling visuals and
                    strategic engagement. From content creation to audience
                    interaction, we handle every aspect of your Instagram
                    presence, ensuring consistent growth and engagement. Let us
                    transform your Instagram into a powerful tool for brand
                    recognition and customer loyalty
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;

// initial={{ opacity: 0, scale: 0 }}
// whileInView={{
//   opacity: 1,
//   scale: [0.9, 1.1, 0.95, 1.05, 0.99, 1.01, 1],
// }}
// viewport={{ once: true, amount: 0.001 }}
// transition={{ duration: 1, delay: Service.delay }}
