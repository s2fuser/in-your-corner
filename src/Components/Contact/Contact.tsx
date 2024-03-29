import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import Image2 from '../../Assets/Images/image2.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";

export const image_url = 'https://thumbs.dreamstime.com/z/microphone-professional-recording-radio-studio-equipment-blurry-background-production-talk-station-volume-video-142075121.jpg?w=992';

const Contact: React.FC = () => {

  const history = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname.includes('/VideoDetails')) {
      window.scrollTo(0, 0);
    } else {
      history('/');
    }
  };

  return (
   
    <div className="overflow-x-hidden">
      
      <div className=" relative z-50" onClick={handleClick}> {/* Increase z-index to make sure it's above the background */}
        <VideoSlider2 />
      </div>

     

      <div className="sm:pt-[134px] sm:pb-[86px] md:py-[180px] lg:py-[200px] xl:py-[230px]">
       
         <div
          className="absolute z-[49] w-full sm:min-h-[300px] sm:mt-[-184px] md:min-h-[450px] md:mt-[-262px] lg:min-h-[462px] lg:mt-[-262px]  xl:min-h-[571px] xl:mt-[-341px]  bg-fixed bg-black sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
         <div className="absolute z-[8]   text-white sm:text-center lg:ml-[-438px]" data-aos="fade-right">
          <div className="sm:mt-[3rem] md:mt-8 lg:mt-8 xl:mt-[99px] ">
            <h2 className="raleway sm:text-2xl md:text-3xl lg:text-3xl  xl:text-5xl 2xl:text-5xl 3xl:text-6xl sm:font-semibold md:font-bold py-2  font-sans">
              Reach out to us today
            </h2>
            <p className="raleway sm:text-2xl md:text-3xl lg:text-3xl text-3xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl font-light font-sans ">
              to fulfill all your ministry{" "}
              <span className="raleway sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold font-sans">
                video
              </span>
            </p>
            <h2 className="raleway sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold md:font-bold pt-2 font-sans  ">
              production requirements.
            </h2>
          </div>
          <div className="mt-14 ">
            <Link to="/contact">
              <button className="raleway border-2  hover:text-black hover:border-white hover:bg-slate-100  border-white py-2 px-10 rounded-3xl sm:text-sm lg:text-2xl text-2xl font-sans xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;