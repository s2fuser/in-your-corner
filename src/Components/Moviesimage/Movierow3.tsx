import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";

const Movierow3 = () => {
  return (
    <div>
      <div className="w-full h-100 mb-8 overflow-x-hidden sm:mt-[-45px]">
        <h1 className=" text-3xl font-semibold text-center mt-1 pt-24 font-sans sm:text-2xl sm:mt-[-3%] ">
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
