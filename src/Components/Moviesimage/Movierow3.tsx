import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";
import AOS from "aos";
import "aos/dist/aos.css";

const Movierow3 = () => {
  return (
    <div>
      <div className="w-full h-100 mb-8 overflow-x-hidden sm:mt-[-45px]">
        <h1
          className="raleway text-2xl font-semibold text-center mt-1 pt-24 font-sans sm:text-3xl md:text-3xl lg:text-3xl mt-[-45px] xl:text-3xl 2xl:text-4xl sm:mt-[-3%]"
          data-aos="zoom-in"
        >
          COLLECTION
        </h1>
        <div className="flex justify-between mt-4 sm:mt-[-20px]">
          <VideoSlider2 type="true" />
        </div>
      </div>
    </div>
  );
};

export default Movierow3;
