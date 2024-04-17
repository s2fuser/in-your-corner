import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YouTube from "react-youtube";
import Contact from "../../Components/Contact/Contact";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Components/Button/Button";
import Back from "../../Assets/Images/Background1.png";
import "../../index.css";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import BackgroundImage3 from "../../Assets/Images/BackgrounImage3.png";
import axios from "axios";

const VideoDetailsPage = () => {
  const location = useLocation();
  const { title } = location.state;
  const { description } = location.state;
  const { Code } = useParams();
  const [LogInEmail, getLogInEmail] = useState<string | null>("");
  const [ViewVideo, setViewVideo] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const history = useNavigate();

  // const handleClick = () => {
  //   if (location.pathname === '/') {
  //     window.scrollTo(0, 0);
  //   } else {
  //     history('/');
  //   }
  // };

  const fetchData = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/code");
    setAllVideosDetails(response.data.data);
  };

  const functionToSetSearchValue = (event: any) => {
    let ValueOfSearch = event.target.value;
    setSearchValue(ValueOfSearch);
    getFilteredData();
    // navigate(`/firstPageSearch/${ValueOfSearch}`);
  };

  const getFilteredData = () => {
    let FilteredItems =
      AllVideosDetails &&
      AllVideosDetails.filter((items: any) => {
        if (SearchValue != undefined) {
          return (
            items &&
            items.genre.toLowerCase().includes(SearchValue.toLowerCase())
          );
        }
      });
    if (SearchValue == "") {
      setFilteredValuesOfAllVideos(AllVideosDetails);
    } else {
      setFilteredValuesOfAllVideos(FilteredItems);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getLogInEmailLocal = () => {
    getLogInEmail(localStorage.getItem("LogInEmail"));
    newFunc(localStorage.getItem("LogInEmail"));
    // localStorage.removeItem("LogInEmail")
    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
      console.log("sinide iframwe tag");
      iframe.classList.add(
        "w-[100%]",
        "h-44",
        "lg:w-[800px]",
        "lg:h-[450px]",
        "xl:w-[900px]",
        "2xl:w-[1000px]",
        "2xl:h-[500px]",
        "3xl:w-[800px]",
        "3xl:h-[450px]",
        "md:h-[300px]"
      ); // Add Tailwind CSS classes for width and height
    }
  };

  const newFunc = (value: any) => {
    // if (
    //   (LogInEmail != undefined && LogInEmail != null && LogInEmail != "") ||
    //   (value != undefined && value != null && value != "")
    // ) {
    setViewVideo(true);
    // } else {
    //   return toast.error("Please Log In to view video");
    // }
  };

  const VideoRestrict = () => {
    toast.error("Please Log In to view video");
  };

  const handleVideoReady = (event: any) => {
    const player = event.target;
    player.getIframe().addEventListener("click", getLogInEmailLocal);
    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
      console.log("sinide iframwe tag");
      iframe.classList.add(
        "w-[100%]",
        "h-44",
        "lg:w-[800px]",
        "lg:h-[450px]",
        "xl:w-[900px]",
        "2xl:w-[1000px]",
        "2xl:h-[500px]",
        "3xl:w-[800px]",
        "3xl:h-[450px]",
        "md:h-[300px]"
      ); // Add Tailwind CSS classes for width and height
    }
  };

  useEffect(() => {
    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
      console.log("sinide iframwe tag");
      iframe.classList.add(
        "w-[100%]",
        "h-44",
        "lg:w-[800px]",
        "lg:h-[450px]",
        "xl:w-[900px]",
        "2xl:w-[1000px]",
        "2xl:h-[500px]",
        "3xl:w-[800px]",
        "3xl:h-[450px]",
        "md:h-[300px]"
      ); // Add Tailwind CSS classes for width and height
    }
  }, [windowWidth]);

  return (


    <div className="overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div>
        <LandingPageNavigationBar searchValue={SearchValue}
          onChangeFunction={functionToSetSearchValue} />
      </div>
      <div className="text-center pt-10 pb-4">

        {/* <h2 className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium font-sans">{title}</h2> */}
        {/* <h2 className="text-3xl font-semibold text-center mt-[-20px] font-sans sm:text-2xl">
          {title}
        </h2> */}
        <h2 className="raleway font-bold sm:px-[20px] sm:text-lg md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl " data-aos="zoom-in">
          {title}
        </h2>
      </div>

      <div className="px-3 flex justify-center items-center">
        <p className="xl:w-[90%] 2xl:w-[70%] 3xl:w-[70%] 4xl:w-[60%] text-center raleway text-red-800 font-bold text-center font-sans sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl xl:mt-[20px] xl:text-xl sm:mt-[30px] md:mt-[30px]" data-aos="zoom-in">
          {description}
        </p>
      </div>




      <div className="relative sm:py-[135px] md:py-[175px] lg:py-[300px] xl:py-[275px] ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center">

          <svg className="w-full sm:min-h-[382px] md:min-h-[612px] lg:min-h-[1012px] xl:min-h-[863px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#E8EAF6" />
                <stop offset="50%" stop-color="#E8EAF6" />
                <stop offset="100%" stop-color="#FECDD3" />
              </linearGradient>
            </defs>
            <path fill="url(#gradient)" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          {/* Video and Button Container */}
          <div className="flex flex-col items-center justify-center  h-full">
            <div className="flex justify-center py-8 px-2 sm:mt-[-771px] md:mt-[-1206px] md:mb-[10px] lg:mt-[-1973px]  xl:mt-[-1756px] lg:ml-[-170px] xl:ml-[-280px] 2xl:ml-[-350px] 3xl:ml-[-180px]">
              {!ViewVideo ? (
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    // onClick={getLogInEmailLocal}
                  />
                  <YouTube
                    videoId={Code}
                    opts={{
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
                    onReady={handleVideoReady}
                    className="rounded-[25px] md:w-[450px] lg:w-[700px] lg:ml-[90px] md:h-[225px] lg:h-[350px] lg:justify-center sm:w-[300px] sm:h-[160px] lg:mt-[50px] 2xl:mt-[100px]"
                  />
                </div>
              ) : (
                <div style={{ position: "relative" }} className="second:w-[200px]">
                  <YouTube
                    videoId={Code}
                    opts={{
                      playerVars: {
                        autoplay: 1,
                      },
                    }}
                    onReady={handleVideoReady}
                    className="lg:ml-[200px] xl:ml-[280px] 2xl:ml-[350px] 2xl:mb-[-100px] 3xl:ml-[200px] lg:mt-[25px] lg:mb-[-100px] 2xl:mt-[50px] 2xl:mb-[-198px] 3xl:mt-[150px] 3xl:mb-[-100px]"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-center items-center sm:mt-[14px] md:mt-[50px] lg:mt-[97px] xl:mt-[73px]  2xl:mt-[150px] 3xl:mt-[80px]" data-aos="flip-left">
              <Link to="/Videos">
                <ButtonComponent name={'View All Videos'} style="raleway text-red-700 px-8 py-2 lg:mt-[4px] xl:mt-[24px] hover:text-white hover:bg-red-950 hover:border-red-900 border border-2 border-red-700 rounded-3xl font-medium 2xl:text-2xl 2xl:px-[50px] 2xl:py-[15px] 2xl:rounded-[50px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-200 sm:pt-[44px] sm:mt-[-39px] md:pt-[26px] 2xl:mt-[53px] z-[9]">

        <Contact />
      </div>

      <div className="  ">

        <Footer onClickToHome="Video Details" />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  )
}

export default VideoDetailsPage;
