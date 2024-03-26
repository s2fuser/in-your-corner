import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";

const Movierow2 = () => {
  return (
    <div className="">
      <div className="w-full h-120 overflow-x-hidden">
        <h1 className=" text-3xl font-semibold text-center mt-1 pt-24 font-sans sm:text-2xl sm:mt-[-3%]">
          MOST POPULAR FILMS
        </h1>
        <div className="flex justify-between mt-4 sm:mt-[-20px] sm:mb-[20px]">
          <VideoSlider2 type="true" />
        </div>
      </div>
    </div>
  );
};

export default Movierow2;
