import React from "react";
import { carouselContent } from "../constants/constants";
const Testimonials = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center lg:text-7xl text-6xl ">How People view us:</h1>
      <div className="">
        {carouselContent.map((content, index) => (
          <div>
            <div>stars</div>
            <div>{content.review}</div>
            <div>{content.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
