import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";

const Movierow2 = () => {

  window.addEventListener("scroll", function () {
    var element: any = document.getElementById("popularFilms");
    var position = element.getBoundingClientRect();

    // If the element is in the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.add("animate-fade-in-bottom");
    } else {
      element.classList.remove("animate-fade-in-bottom");
    }
  });

  return (
    <div className="">
      <div className="w-full h-120 overflow-x-hidden">
        <h1 className="raleway text-2xl font-semibold text-center mt-1 pt-24 font-sans sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl sm:mt-[-3%]" id="popularFilms">
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
