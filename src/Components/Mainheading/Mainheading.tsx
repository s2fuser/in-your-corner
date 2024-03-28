// import React from "react";
// import BackgroundImage from "../../Assets/Images/Background2.png";
// import BackgroundImage3 from "../../Assets/Images/BackgrounImage3.png";

// const Mainheading = () => {
//   return (
//     <div className="w- full h-80 font-sans sm:pl-[3px] sm:pr-[3px]">
//       {/* style={{ backgroundImage: "linear-gradient(170deg, red 35%, transparent 80%)" }} */}
//       {/* <img src={BackgroundImage3} alt="" className="lg:mt-[-107px] lg:h-[300px] w-[100%] sm:h-[240px]" /> */}
//       <h1 className="text-3xl font-semibold text-center mt-1 pt-11 font-sans sm:text-2xl">
//         {/* lg:mt-[-290px] sm:mt-[-270px] */}
//         WELCOME TO OUR VIDEO LIBARY
//       </h1>
//       <h3 className="text-red-600 text-2xl text-center text-sm font-sans lg:text-2xl md:text-2xl xl:text-2xl xl:mt-[20px] xl:text-xl sm:mt-[30px] md:mt-[30px]">
//         {/* text-sm font-sans lg:text-2xl md:text-2xl xl:text-2xl xl:mt-[20px] xl:text-xl sm:mt-[30px] md:mt-[30px] */}
//         A free streaming library of over 150 films <br /> featuring the real
//         stories of real people who met the real Jesus.
//       </h3>
//       <h1 className="text-3xl font-semibold text-center mt-1 pt-24 font-sans sm:text-2xl sm:mt-[-3%]">
//         FEATURED FILMS
//       </h1>
//     </div>
//   );
// };

// export default Mainheading;

import React from "react";
import BackgroundImage3 from "../../Assets/Images/BackgrounImage3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Mainheading = () => {
  return (
    // <div className='bg-red-100 w-full h-[300px] font-sans '>

    //     <div className='relative '>
    //         <img src={BackgroundImage3} alt='' className=' lg:w-full lg:h-[280px] md:h-[280px]' />

    // <h1 className='  absolute lg:top-[15px] lg:left-[233px] lg:right-[227px] md:top-[15px] md:left-[233px] md:right-[227px] text-4xl font-semibold text-center  font-sans  '>
    //     WELCOME TO OUR VIDEO LIBARY
    // </h1>

    // <h3 className='text-red-600 text-2xl text-center absolute lg:top-[74px] lg:left-[233px] lg:right-[227px] md:top-[99px] md:left-[233px] md:right-[227px] md:w-[318px] md:h-[150px] font-sans sm:text-lg'>
    //     A free streaming library of over 150 films <br/> featuring the real stories of real people who met the real Jesus.
    // </h3>

    //     </div >
    //     <div>
    //         <h1 className=' text-4xl font-semibold text-center  font-sans lg:mt-[-20px] md:mt-[-20px] bg-black text-white' >
    //             FEATURED FILMS
    //         </h1>
    //     </div>
    // </div>

    <div className=" bg-gradient-to-r from-red-100 via-indigo-100 to-indigo-200 w-full sm:h-[339px] lg:h-[319px] font-sans mt-[7px] ">
      <div className="relative ">
        <img
          src={BackgroundImage3}
          alt=""
          className="sm:h-[130px] sm:w-full sm:overflow-x-hidden lg:h-[304px] lg:w-full lg:overflow-x-hidden mt-[-7px]"
        />
        <h1 className="raleway absolute font-semibold font-sans text-center left-0 right-0 text-4xl sm:text-center sm:left-0 sm:right-0 lg:top-[32px] top-[10px] md:top-[15px] sm:top-[18px]  md:left-0 md:right-0 md:text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl animate-fade-in-bottom">
          WELCOME TO OUR VIDEO LIBRARY
        </h1>

        <h3 className="raleway absolute text-red-600 text-xl text-center left-0 right-0 sm:text-center sm:left-0 sm:right-0 lg:top-[99px] top-[71px] sm:mt-[90px] md:left-0 md:right-0 md:text-center sm:text-lg md:text-lg lg:text-xl   xl:text-xl 2xl:text-2xl animate-fade-in-bottom">
          A free streaming library of over 150 films <br /> featuring the real
          stories of real people who met the real Jesus.
        </h3>
      </div>
      <div>
        <h1
          className="raleway lg:h-[60px] sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-center text-4xl sm:text-2xl font-sans text-slate-950 sm:mt-[172px] md:mt-[-25px] lg:mt-[-38px] xl:mt-[-40px] animate-fade-in-bottom"
          data-aos="zoom-in"
        >
          FEATURED FILMS
        </h1>
      </div>
    </div>
  );
};

export default Mainheading;
