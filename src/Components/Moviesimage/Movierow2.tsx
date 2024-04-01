import React, { useEffect, useRef, useState } from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";
import AOS from "aos";
import "aos/dist/aos.css";

const Movierow2 = () => {
  return (
    <div className="">
      <div className="w-full h-120 overflow-x-hidden ">
        <h1
          className="raleway text-2xl font-semibold text-center mt-1 pt-24 font-sans sm:text-3xl md:text-3xl lg:text-3xl mt-[-45px] xl:text-3xl 2xl:text-4xl sm:mt-[-3%]"
          data-aos="zoom-in"
        >
          MOST POPULAR FILMS
        </h1>
        <div className="flex justify-between mt-4 sm:mt-[-20px] sm:mb-[20px]">
          <VideoSlider2 type="true" SlidesToShow="true"/>
        </div>
      </div>
    </div>
  );
};

export default Movierow2;
