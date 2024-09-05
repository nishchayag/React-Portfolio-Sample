import React from "react";
import { carouselContent } from "../constants/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import personImg from "../assets/personImg.png";
import "../components/Carousel.css";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      <h1 className="text-center lg:text-7xl text-6xl ">How people view us</h1>
      <div className="mt-10 lg:w-3/4 w-full px-1">
        <Slider {...settings}>
          {carouselContent.map((content, index) => (
            <div className="lg:h-80  lg:px-20 p-5 w-3/4 ">
              <div className="flex flex-col items-center justify-center h-full card ">
                <div className="text-xl text-yellow-300">
                  {" "}
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <div className="text-xl font-bold mt-5">{content.review}</div>
                <div className="flex flex-row justify-center items-center gap-4 mt-5">
                  <img
                    src={personImg}
                    alt=""
                    className="w-[80px] rounded-full"
                  />
                  <div className="font-bold">{content.name}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
