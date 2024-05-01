import React from "react";
import BackgroundImage3 from "../../Assets/Images/BackgrounImage3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Mainheading = () => {
  return (
    <div className=" bg-gradient-to-r from-red-200 from-8% via-stone-200 via-30% to-stone-100 to-90% w-full sm:h-[350px] lg:h-[370px] font-sans mt-[7px] ">
      <div className="relative">
        <img
          src={BackgroundImage3}
          alt=""
          className="sm:h-[180px] sm:w-full sm:overflow-x-hidden lg:h-[304px] lg:w-full lg:overflow-x-hidden mt-[-7px]"
        />
        {/* <div className="absolute inset-0 bg-white opacity-25"></div> */}
        
        <h1 className="raleway absolute font-semibold font-sans text-center left-0 right-0 text-4xl sm:text-center sm:left-0 sm:right-0 lg:top-[32px] top-[10px] md:top-[15px] sm:top-[18px]  md:left-0 md:right-0 md:text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl animate-fade-in-bottom lg:pt-[40px] sm:pt-[30px]">
          WELCOME TO OUR VIDEO LIBRARY
        </h1>

        <h3 className="raleway absolute font-bold text-red-800 text-xl text-center left-0 right-0 sm:text-center sm:left-0 sm:right-0 lg:top-[99px] top-[71px] sm:mt-[110px] md:left-0 md:right-0 md:text-center sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl animate-fade-in-bottom mt-[20px]">
          A free streaming library  <br /> featuring the real
          stories of real people who met the real Jesus.
        </h3>
      </div>
      <div className="lg:mt-[40px]">
        <h1
          className="raleway lg:h-[60px] sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-center text-4xl sm:text-2xl font-sans text-slate-950 sm:mt-[130px] md:mt-[-25px] lg:mt-[-38px] xl:mt-[-40px] animate-fade-in-bottom"
          data-aos="zoom-in"
        >
          FEATURED SHORTS
        </h1>
      </div>
    </div>
  );
};

export default Mainheading;
