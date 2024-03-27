import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import Image2 from "../../Assets/Images/image2.jpg";
import { Link } from "react-router-dom";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";

export const image_url =
  "https://thumbs.dreamstime.com/z/microphone-professional-recording-radio-studio-equipment-blurry-background-production-talk-station-volume-video-142075121.jpg?w=992";

const Contact: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden ">
      {/* <div className="absolute "> */}
      {/* <VideoSlider prop1="false" /> */}
      <div className="mb-[-180px] ">
        <VideoSlider2 />
      </div>
      {/* </div> */}
      <div className="relative h-screen flex items-center lg:justify-start justify-center mt-[130px] z-[-9]">
        <div
          className="absolute inset-0 bg-black sm:mb-[68px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="z-20 text-white lg:pl-36">
          <div className="text-center sm:mt-[-72px] lg:text-left font-sans">
            <h2 className="md:text-5xl lg:text-5xl text-3xl font-bold py-2 font-sans">
              Reach out to us today
            </h2>
            <p className="md:text-5xl lg:text-5xl text-3xl font-light font-sans">
              to fulfill all your ministry{" "}
              <span className="md:text-5xl lg:text-5xl text-4xl font-semibold font-sans">
                video
              </span>
            </p>
            <h2 className="md:text-5xl lg:text-5xl text-3xl font-bold pt-2 font-sans">
              production requirements.
            </h2>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <Link to="/contact">
              <button className="hover:text-black hover:border-white hover:bg-slate-100 border-2 border-white py-2 px-10 rounded-3xl lg:text-2xl text-2xl font-sans">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
