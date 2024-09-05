import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="w-screen pt-14 pb-20 mt-20 flex justify-center bg-gradient-to-b from-black to-slate-900 flex-col"
    >
      <div className=" w-screen text-center">
        <div className="lg:text-6xl text-4xl my-5 font-bold">
          <span className="bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            {" "}
            Connect
          </span>{" "}
          with Us:
          <div>
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Shape{" "}
            </span>{" "}
            Your
            <div>
              Digital Journey{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Together!
              </span>
            </div>
          </div>
        </div>
        <div className="lg:text-2xl">
          Email us at : spectrumbusiness.in@gmail.com{" "}
        </div>
        <div className="lg:text-2xl">
          Want to schedule a call? : +91 6377047086{" "}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Footer;
