import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import Image2 from '../../Assets/Images/image2.jpg';
import { Link } from "react-router-dom";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";

export const image_url = 'https://thumbs.dreamstime.com/z/microphone-professional-recording-radio-studio-equipment-blurry-background-production-talk-station-volume-video-142075121.jpg?w=992';

const Contact: React.FC = () => {
    return (
        // <div className="relative overflow-x-hidden mt-[200px]">
        //     {/* <div className="background3"></div> */}
        //     {/* <div className="absolute "> */}
        //         {/* <VideoSlider prop1="false" /> */}
        //         <div className="mb-[-180px]">
        //             <VideoSlider2 />
        //         </div>
        //     {/* </div> */}
        //     <div className="relative h-screen flex items-center lg:justify-start justify-center mt-[130px] z-[-9]">
        //         <div className="absolute inset-0 bg-black sm:mb-[68px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                
        //         <div className="z-20 text-white lg:pl-36">
        //             <div className="text-center sm:mt-[-72px] lg:text-left font-sans">
        //                 <h2 className='md:text-5xl lg:text-5xl text-3xl font-bold py-2 font-sans'>Reach out to us today</h2>
        //                 <p className='md:text-5xl lg:text-5xl text-3xl font-light font-sans'>to fulfill all your ministry <span className='md:text-5xl lg:text-5xl text-4xl font-semibold font-sans'>video</span></p>
        //                 <h2 className='md:text-5xl lg:text-5xl text-3xl font-bold pt-2 font-sans'>production requirements.</h2>
        //             </div>
        //             <div className="mt-14 text-center lg:text-left">
        //                 <Link to="/contact">
        //                     <button className="hover:text-black hover:border-white hover:bg-slate-100 border-2 border-white py-2 px-10 rounded-3xl lg:text-2xl text-2xl font-sans" >Contact Us</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="relatives">
             {/* mt-[200px]   */}
        <div className=" relative z-50"> {/* Increase z-index to make sure it's above the background */}
            <VideoSlider2 />
        </div>
    
        <div className="h-[52vh] sm:h-[42vh] md:h-[70vh] lg:h-[65vh] xl:h-[70vh] 2xl:h-[80vh] 3xl:h-[80vh] flex items-center justify-center mt-0 z-[49]">
            <div
                className="absolute md:top-[1024px] lg:top-[1115px] left-0 w-full h-full sm:top-[924px] sm:mt-[-73px] sm:h-[59%] sm:w-[100%] md:h-[81%] lg:h-[83%]  xl:h-[92%] bg-black"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
             <div className="z-[8] text-white grid place-items-center px-2 md:mt-[86px] lg:mt-[-4px] lg:ml-[-612px] lg:pl-36">
                    <div className="text-center lg:text-left sm:mt-[-74px] md:mt-[-80px] lg:[108px] ">
                      <h2 className="sm:text-2xl md:text-3xl lg:text-3xl  xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-semibold md:font-bold py-2 px-2 font-sans">
                        Reach out to us today
                      </h2>
                      <p className="sm:text-2xl md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans px-2">
                        to fulfill all your ministry{" "}
                        <span className="md:text-3xl lg:text-3xl sm:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold font-sans">
                          video
                        </span>
                      </p>
                      <h2 className="md:text-3xl lg:text-3xl sm:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold md:font-bold pt-2 font-sans px-2 ">
                        production requirements.
                      </h2>
                    </div>
                    <div className="mt-14 text-center lg:text-left lg:ml-[-180px] xl:ml-[-260px] 2xl:ml-[-378px] 3xl:ml-[-500px]">
                      <Link to="/contact">
                        <button className="border border-2 sm:mt-[1.5rem] hover:text-black hover:border-white hover:bg-slate-100  border-white py-2 px-10 rounded-3xl sm:text-sm lg:text-2xl text-2xl font-sans xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
    
            {/* Your content */}
        </div>
    </div>
    );
};

export default Contact;