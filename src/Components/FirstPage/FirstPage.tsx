import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import JoinOurCommunityButton from "../JoinOurCommunity/JoinOurCommunitybutton";
import { Link } from "react-router-dom";
import LandingPageVideosComponent from "../LandingPageVideos/LandingPageVideos";
import Footer2 from "../Footer2/Footer2";
import FooterComponent from "../Footer/Footer";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";
import Image2 from '../../Assets/Images/image2.jpg';
import Image1 from '../../Assets/Images/image1.jpg';
import Image3 from '../../Assets/Images/image3.jpg';
import Image4 from '../../Assets/Images/image4.jpg'
import LandingPageNavigationBar from "../LandingPageNavigation/LandingPageNavigation";
import QuotationImage from '../../Assets/Images/Quotation.png'
import WhiteBackgroundImage from '../../Assets/Images/Background1.png'

// export const image_url =
//   "https://thumbs.dreamstime.com/z/microphone-professional-recording-radio-studio-equipment-blurry-background-production-talk-station-volume-video-142075121.jpg?w=992";


const FirstPageComponent = () => {
    return (
        <div className="relative w-full h-[100%] ">
            {/* style={{ backgroundImage: "linear-gradient(190deg, red 50%, transparent 80%)" }} */}
            {/* <div className="absolute top-0 z-[9] w-[100%]">
              <LandingPageNavigationBar />
            </div> */}
            <div className="relative w-full h-[100%] ">
              <img src={Image1} alt="" className="object-cover object-center w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent w-full h-full"></div>
              {/* lg:h-[21.9%] sm:h-[7.56%] */}
            </div>
            <div className='absolute lg:top-20 sm:top-[300px] text-white pt-32 pl-20 sm:ml-[-45px]'>
                <div className='sm:mt-[-400px]'>
                    <p className='text-white lg:text-3xl sm:text-sm font-light font-sans'>
                        featuring
                    </p>
                    <p className='text-white lg:text-3xl sm:text-sm font-medium font-sans'>
                        the testimonies of
                    </p>
                    <p className='text-white lg:text-3xl sm:text-sm font-light font-sans'>
                        men and women <span className='text-white lg:text-3xl sm:text-sm font-medium font-sans'>of faith</span> 
                    </p>
                </div>
                <div className='lg:pt-8 sm:7'>
                    <Link  to="/KnowMore">
                        <button className='border-solid rounded-3xl border-2 sm:text-sm border-white text-white pl-7 pr-7 pt-2 pb-2 font-sans'>
                            Know More
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className='relative mt-36 lg:mt-[-180px]'>
                <img src={WhiteBackgroundImage} alt="" className="mt-[-240px] h-[500px] w-[100%] sm:h-[240px]" />
                <div className="absolute lg:top-[100px] md:top-[-200px] right-auto">
                    {/* <ImQuotesLeft className='text-pink-100 h-52 w-52 sm:w-[80px] sm:h-[80px] sm:mt-[-75px]' /> */}
                    <img className="h-60 w-96 lg:ml-[-70px] sm:h-36 sm:w-56 sm:mt-[-180px] sm:ml-[-40px]" src={QuotationImage} alt="" />
                </div>
                <div className='text-center mt-[-250px] sm:mt-[-85px] sm:pt-[20px] sm:pl-[10px] sm:pr-[10px]'>
                    <p className='text-red-900 text-3xl font-medium font-sans sm:mt-[40px]'>
                        In Your Corner <span className='font-light font-sans'>Productions</span>
                    </p>
                    <p className='text-sm font-sans'>In Your Corner Productions specializes in creating Christian-themed television programs, <br />
                        acclaimed documentaries, gospel music, and ministry videos to help promote other faith-based non-profits.</p>
                </div>
            </div>
            <div className='text-center'>
                <JoinOurCommunityButton/>
            </div>
            <div className='mt-16 sm:mt-[0px]'>

                <div className="h-5/6 ">
                    <div className=" bg-pink-100 pt-40 h-5/6 sm:pt-[0px]">
                        <div className='flex justify-center py-8 px-2 sm:mb-[-20px] sm:ml-[-14%]'>
                            {/* <iframe width="720" height="365" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mt-[-300px] rounded-[20px] lg:w-[900px] lg:h-[450px] h-[220px] w-[500px] md:h-[260px]" ></iframe> */}
                            <Link to={`/VideoDetails/${"oa920gMvLaI"}`} state={{title: "Forgotten No More"}}>
                                <div className="px-1">

                                    <img src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`} alt="" className="rounded-[25px] lg:mt-[-260px] lg:w-[800px] sm:w-[250px] sm:ml-[58px] sm:mt-[-70px]" />

                                    {/* <iframe src="https://www.youtube.com/embed/oa920gMvLaI?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe> */}
                                </div>
                            </Link>
                        </div>
                        <div className='overflow-x-hidden'>
                            <VideoSlider2 />
                            {/* <VideoSlider prop1='false' /> */}
                        </div>
                        <div className="text-center mt-[100px] text-lg pb-14 sm:mt-[80px]">
                            <Link to="/Videos">
                                <button className="text-red-900 px-14 py-2.5 border border-2 border-red-900 rounded-3xl font-sans">View All Videos</button>
                            </Link>
                        </div>
                        <div className="text-center lg:pb-40 pb-20 font-sans">
                            <p className="text-red-900 text-4xl font-light mb-7 font-sans">
                                How Kerry Came to Faith in <span className="text-red-900 text-4xl font-semibold font-sans">Jesus Christ</span>
                            </p>
                            <p className='font-sans sm:pl-[10px] sm:pr-[10px] lg:w-[800px] lg:ml-[280px]'>
                                Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary films. Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a documentary highlighting champion boxers who discovered hope in Jesus Christ.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>

        <div>
          <div className="relative">
            <div className="pb-[20px] flex justify-center absolute lg:top-[-126px] top-[-60px] z-[99] lg:gap-[20px] gap-[2px] w-full">
              <div className="px-1 sm:w-[90px] sm:h-[90px] ">
                <img
                  className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                  src={Image3}
                  alt=""
                />
              </div>
              <div className="px-1  sm:w-[90px] sm:h-[90px]">
                <img
                  className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                  src={Image4}
                  alt=""
                />
              </div>
              <div className="px-1 sm:w-[90px] sm:h-[90px]">
                <img
                  className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                  src={Image3}
                  alt=""
                />
              </div>
              <div className="px-1 sm:w-[90px] sm:h-[90px]">
                <img
                  className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                  src={Image4}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:h-screen h-[70vh] flex items-center mt-[0px] z-[99]">
              <div
                className="absolute inset-0 bg-black"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="z-20 text-white lg:pl-36">
                <div className="text-center lg:text-left">
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
                  <button className="border border-2 border-white py-2 px-10 rounded-3xl lg:text-2xl text-2xl font-sans">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <FooterComponent />
      </div>
      <div className="">
        <Footer2 />
      </div>
    </div>
  );
};

export default FirstPageComponent;
