import "../components/About.css";
import springImg from "../assets/springImg.png";
import halfSpringImg from "../assets/halfSpringImg.png";
import phoneImg from "../assets/phoneImg.png";
import graphImg from "../assets/graphImg.png";
import globeImg from "../assets/globeImg.png";
import { motion } from "framer-motion";
import bottleImg from "../assets/bottleImg.png";
import { useSpring, animated } from "react-spring";
const About = () => {
  function Number({ n, f }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: f },
    });

    return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
  }
  return (
    <div id="About" className="w-full mt-20 pt-20">
      <h1 className="text-center text-5xl lg:text-7xl font-bold">
        Who we are and <br />
        <div className=" flex justify-center ">
          <span className=" bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            What we do
          </span>{" "}
          :
        </div>
      </h1>
      <div className="w-full pt-4 px-4 lg:p-16 lg:px-40 text-xl font-light">
        <div className="flex ">
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [-10, -5, 0, 5, 10, 5, 0, -5, -10],
              y: [-10, -5, 0, -5, -10, -5, 0, -5, -10],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="-z-10"
          >
            <img
              src={springImg}
              id="springImg"
              alt=""
              className="-z-10 scale-[6] lg:inline hidden "
            />
          </motion.div>
          <div className=" lg:p-5 text-center text-2xl ">
            Welcome to Kaizen, where creativity meets innovation. Founded with a
            passion for storytelling and a commitment to excellence, our agency
            specializes in bringing your vision to life through a diverse range
            of digital services. Our team of talented professionals is dedicated
            to delivering high-quality results that not only meet but exceed
            your expectations. Whether you’re a startup looking to make a mark
            or an established brand seeking to enhance your online presence, we
            are here to help you succeed. <br />
            <br />
            With a passion for perfection and a commitment to our clients, we
            are a dynamic team of professionals dedicated to providing top-notch
            services across various industries. We ensure that we cater to all
            your needs with precision and creativity. We believe in the power of
            collaboration and the impact of quality service. Our mission is to
            help businesses thrive in the digital age by offering customized
            solutions that drive growth and success. We pride ourselves on our
            transparent approach, innovative strategies, and unwavering
            dedication to our clients' goals. Partner with us, and let's embark
            on a journey of growth and excellence together.
          </div>
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [-10, -5, 0, 5, 10, 5, 0, -5, -10],
              y: [-10, -5, 0, -5, -10, -5, 0, -5, -10],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="scale-[1.1]"
          >
            <img
              src={halfSpringImg}
              id="springImg"
              alt=""
              className="scale-[5] lg:inline hidden"
            />
          </motion.div>
        </div>
        <h1 className="text-center lg:text-5xl text-4xl mt-10 font-bold">
          Empowering Digital Excellence: <br />
          <div className=" mt-4 bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Our Comprehensive Services
          </div>
        </h1>
        <div className="text-center mt-2">
          <span className="">
            We're on a mission to provide services that change the way people
            live, work and play.
          </span>
        </div>
        <div className="w-full flex justify-center flex-wrap mt-10 pb-0">
          <div className="w-full  flex flex-wrap justify-center flex-row overflow-hidden pb-0">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:mx-5  w-full p-7 pt-16 pb-0 mb-0 rounded-xl lg:w-1/4 text-center  bg-gradient-to-br from-blue-800  to-black"
            >
              <div className="text-2xl mb-5 font-bold">Website Development</div>
              <div className="text-[15px] tracking-wider mb-0">
                In today's digital age, a strong online presence is crucial. Our
                website development team builds responsive, user-friendly
                websites that not only look stunning but also perform seamlessly
                across all devices. We focus on creating websites that enhance
                user experience and drive engagement.
              </div>
              <div className="flex flex-row mt-10 w-full">
                <div className="flex flex-col w-1/2">
                  <div className="text-7xl font-bold">
                    <Number n={2} f={26} />+
                  </div>
                  <div className="text-[15px] ">YEARS OF EXPERIENCE</div>
                </div>
                <div className="flex flex-col">
                  <motion.div className="text-7xl font-bold">
                    {" "}
                    <Number n={50} f={10} />+
                  </motion.div>
                  <div>PROJECTS COMPLETED</div>
                </div>
              </div>
              <div className="">
                <img src={phoneImg} alt="" className="mb-0 mt-5 w-[400px]" />
              </div>
            </motion.div>

            <div className=" mx-0 lg:mx-5 p-7 pb-0 lg:px-7 px-0 rounded-xl w-full lg:w-1/4 text-center flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-700 w-full  to-black h-1/2 p-7 rounded-xl mb-10"
              >
                <div className="text-2xl mb-5 font-bold">Graphic Designing</div>
                <div className="text-[15px] tracking-wider mb-0">
                  Our graphic design services cover everything from branding to
                  promotional materials. With a keen eye for aesthetics and a
                  deep understanding of visual communication, we create designs
                  that not only look great but also convey your brand's message
                  effectively.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600  w-full to-black h-1/2 p-7 rounded-xl pb-0 flex flex-col "
              >
                <div className="text-2xl mb-5 font-bold">
                  Social Media Management
                </div>
                <div className="text-[15px] tracking-wider mb-0">
                  Let us take the reins of your Instagram presence and watch
                  your brand flourish. At Kaizen, we are more than just a
                  service provider; we are your creative partners. Let's work
                  together to turn your ideas into reality!
                  <div className="pb-0 mb-0">
                    <img src={graphImg} alt="" className=" mb-0" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/4 flex flex-col justify-between mt-24 lg:mx-5 px-0">
              <div className="hidden lg:block">
                <motion.div
                  initial={{ y: -200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 0 }}
                  viewport={{ once: true }}
                  className="flex w-full justify-center items-start"
                >
                  {" "}
                  <img src={bottleImg} alt="" className="w-[130px] " />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-7 lg:pt-7  rounded-xl lg:h-[500px] h-[530px] text-center flex flex-col justify-end bg-gradient-to-br from-blue-500  to-black globe-div"
              >
                <div className="">
                  <img
                    src={globeImg}
                    alt=""
                    className="lg:w-[325px] w-[300px]"
                  />
                </div>
                <div className="text-2xl mb-5 font-bold ">
                  Video Editing & Animation
                </div>
                <div className="text-[15px] tracking-wider mb-0">
                  Transform your raw footage into a compelling narrative with
                  our expert video editing services. We handle everything from
                  basic cuts to advanced post-production techniques, delivering
                  polished videos that tell your story with clarity and impact.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
