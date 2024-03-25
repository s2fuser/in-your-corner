import React, { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
// import JoinOurCommunityButton from "../JoinOurCommunity/JoinOurCommunitybutton";
import { Link } from "react-router-dom";
import LandingPageVideosComponent from "../LandingPageVideos/LandingPageVideos";
import Footer2 from "../Footer2/Footer2";
import FooterComponent from "../Footer/Footer";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";
import Image2 from '../../Assets/Images/image2.jpg';
import Image1 from '../../Assets/Images/image1.jpg';
import Image3 from '../../Assets/Images/image3.jpg';
import Image4 from '../../Assets/Images/image4.jpg';
import LandingPageNavigationBar from "../LandingPageNavigation/LandingPageNavigation";
import QuotationImage from '../../Assets/Images/Quotation.png';
import WhiteBackgroundImage from '../../Assets/Images/Background1.png';
import JoinOurCommunityButton from "../JoinOurCommunity/JoinOurCommunitybutton";
// import Join from "../../Pages/Join our community/Join our community";
import ShowSearchComponent from "../ShowSearch/ShowSearch";
import axios from "axios";
import '../../index.css';


const FirstPageComponent = () => {

  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();

  useEffect(() => {
    fetchData();
  })

  const fetchData = async () => {
    const response: any = await axios.get('https://inc.s2ftech.in/api/code');
    setAllVideosDetails(response.data.data);
  }

  const functionToSetSearchValue = (event: any) => {
    let ValueOfSearch = event.target.value;
    setSearchValue(ValueOfSearch);
    getFilteredData()
  }

  const getFilteredData = () => {
    let FilteredItems = AllVideosDetails && AllVideosDetails.filter((items: any) => {
      if (SearchValue != undefined) {
        return items && items.genre.toLowerCase().includes(SearchValue.toLowerCase())
      }
    })
    if (SearchValue == '') {
      setFilteredValuesOfAllVideos(AllVideosDetails)
    }
    else {
      setFilteredValuesOfAllVideos(FilteredItems)
    }
  }

  return (
    <div>
      <div className="relative w-full h-[100%]">
        {/* style={{ backgroundImage: "linear-gradient(190deg, red 50%, transparent 80%)" }} */}
        <div className="absolute top-0 z-[9] w-[100%]">
          <LandingPageNavigationBar searchValue={SearchValue} onChangeFunction={functionToSetSearchValue} />
        </div>

        { (SearchValue == undefined || SearchValue == '') ? <div>
          <div className="relative w-full h-[100%] ">
            <img src={Image1} alt="" className="object-cover object-center w-full lg:h-full h-[350px] md:h-[350px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent w-full h-full"></div>
            {/* lg:h-[21.9%] sm:h-[7.56%] */}
          </div>
          <div className='absolute lg:top-[25rem] sm:top-[300px] text-white pt-32 pl-20 sm:ml-[-45px] 2xl:ml-[70px] xl:mt-[-1px] 3xl:mt-[180px] xl:ml-[30px] 2xl:mt-[40px] 3xl:ml-[120px]'>
            <div className='sm:mt-[-310px] md:mt-[-329px]'>
              <p className='animate-fade-in-out-wave-colors text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans'>
                featuring
              </p>
              <p className='animate-fade-in-out-wave-colors text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-sans'>
                the testimonies of
              </p>
              <p className='animate-fade-in-out-wave-colors text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans'>
                men and women <span className='animate-fade-in-out-wave-colors text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-sans'>of faith</span>
              </p>
            </div>
            <div className='lg:pt-8 sm:7 pt-[16px]'>
              {/* <Link  to="/Know"> */}
              <Link to="/know">

                <button className='border-solid rounded-3xl border-2  hover:text-red-800 hover:border-red-700 sm:text-sm lg:text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl border-white text-white pl-7 pr-7 pt-2 pb-2 font-sans'>
                  Know More
                </button>
              </Link>

              {/* </Link> */}

            </div>




          </div>
          <div className='relative mt-36 lg:mt-[-180px]'>
            <img src={WhiteBackgroundImage} alt="" className="mt-[-284px] h-[500px] w-[100%] sm:h-[240px] " />
            <div className="absolute md:mt-[-85px] md:top-[175px] right-auto md:ml-[-9%] lg:ml-[0px] ">
              {/* <ImQuotesLeft className='text-pink-100 h-52 w-52 sm:w-[80px] sm:h-[80px] sm:mt-[-75px]' /> */}
              <img className="h-60 w-96 lg:ml-[-70px] sm:h-36 sm:w-56 sm:mt-[-180px] sm:ml-[-40px] " src={QuotationImage} alt="" />
            </div>
            <div className='text-center md:mt-[-145px] lg:mt-[-250px] sm:mt-[-85px] sm:pt-[20px] sm:pl-[10px] sm:pr-[10px]'>
              <p className='text-red-900 text-3xl xl:text-4xl 2xl:text-5xl font-medium font-sans sm:mt-[40px]'>
                In Your Corner <span className='font-light font-sans'>Productions</span>
              </p>
              <p className='text-sm font-sans xl:text-xl xl:mt-[20px] xl:text-xl sm:mt-[30px] md:mt-[30px]'>In Your Corner Productions specializes in creating Christian-themed television programs, <br />
                acclaimed documentaries, gospel music, and ministry videos to help promote other faith-based non-profits.</p>
            </div>
          </div>
          <div className='text-center'>
            <JoinOurCommunityButton />
          </div>


          <div className='mt-16 sm:mt-[0px]'>

            <div className="h-5/6 ">
              <div className=" bg-pink-100 pt-40 h-5/6 sm:pt-[0px]">
                <div className='flex justify-center py-8 px-2 sm:mb-[-20px] sm:ml-[-14%]'>
                  {/* <iframe width="720" height="365" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mt-[-300px] rounded-[20px] lg:w-[900px] lg:h-[450px] h-[220px] w-[500px] md:h-[260px]" ></iframe> */}
                  <Link to={`/VideoDetails/${"oa920gMvLaI"}`} state={{ title: "Forgotten No More" }}>
                    <div className="px-1">

                      <img src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`} alt="" className="rounded-[25px] md:mt-[-260px] lg:mt-[-295px] lg:w-[800px] sm:w-[250px] sm:ml-[58px] sm:mt-[-70px]" />

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
                    <button className="text-red-900 px-14 py-2.5 border border-2 border-red-900 rounded-3xl font-sans xl:text-2xl lg:text-2xl sm:text-sm 2xl:text-3xl">View All Videos</button>
                  </Link>
                </div>
                <div className="text-center lg:pb-40 pb-20 font-sans">
                  <p className="text-red-900 text-3xl font-light mb-7 font-sans xl:text-4xl 2xl:text-5xl">
                    How Kerry Came to Faith in <span className="text-red-900 text-3xl xl:text-4xl 2xl:text-5xl font-semibold font-sans">Jesus Christ</span>
                  </p>
                  <p className='font-sans xl:text-2xl 2xl:text-3xl'>
                    {/* sm:pl-[10px] sm:pr-[10px] lg:w-[800px] lg:ml-[280px] xl:ml-[780px] */}
                    Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary films. <br /> Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a documentary highlighting champion boxers who discovered hope in Jesus Christ.
                  </p>
                </div>
              </div>


            </div>

            <div>
              <div className="relative">
                <div className="pb-[20px] flex justify-center absolute lg:top-[-126px] top-[-60px] z-[8] lg:gap-[20px] gap-[2px] w-full">
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
                <div className="lg:h-screen h-[70vh] lg:h-[65vh] xl:h-[70vh] 2xl:h-[80vh] 3xl:h-[80vh] flex items-center mt-[0px] z-[99]">
                  <div
                    className="absolute inset-0 bg-black"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="z-[8] text-white grid place-items-center px-2 lg:pl-36">
                    <div className="text-center lg:text-left">
                      <h2 className="md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold py-2 px-2 font-sans">
                        Reach out to us today
                      </h2>
                      <p className="md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans px-2">
                        to fulfill all your ministry{" "}
                        <span className="md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-sans">
                          video
                        </span>
                      </p>
                      <h2 className="md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold pt-2 font-sans px-2 ">
                        production requirements.
                      </h2>
                    </div>
                    <div className="mt-14 text-center lg:text-left lg:ml-[-180px] xl:ml-[-260px] 2xl:ml-[-378px] 3xl:ml-[-500px]">
                      <Link to="/contact">
                        <button className="border border-2 border-white py-2 px-10 rounded-3xl sm:text-sm lg:text-2xl text-2xl font-sans xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : <div>
        <ShowSearchComponent value={filteredValuesOfVideos} />
        </div>}

        <div className="">
          <FooterComponent />
        </div>
        <div className="">
          <Footer2 />
        </div>
      </div>
    </div>
  );
};

export default FirstPageComponent;
