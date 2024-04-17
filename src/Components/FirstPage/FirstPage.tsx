import React, { useState, useEffect, useRef } from "react";
import { ImQuotesLeft } from "react-icons/im";
// import JoinOurCommunityButton from "../JoinOurCommunity/JoinOurCommunitybutton";
import { Link } from "react-router-dom";
import LandingPageVideosComponent from "../LandingPageVideos/LandingPageVideos";
import Footer2 from "../Footer2/Footer2";
import FooterComponent from "../Footer/Footer";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";
import Image2 from "../../Assets/Images/image2.jpg";
import Image1 from "../../Assets/Images/image1.jpg";
import Image3 from "../../Assets/Images/image3.jpg";
import Image4 from "../../Assets/Images/image4.jpg";
import LandingPageNavigationBar from "../LandingPageNavigation/LandingPageNavigation";
import QuotationImage from "../../Assets/Images/Quotation.png";
import WhiteBackgroundImage from "../../Assets/Images/Background1.png";
import JoinOurCommunityButton from "../JoinOurCommunity/JoinOurCommunitybutton";
// import Join from "../../Pages/Join our community/Join our community";
import ShowSearchComponent from "../ShowSearch/ShowSearch";
import axios from "axios";
import "../../index.css";
// import { useNavigate } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';
import YoutubeImage from '../../Assets/Images/Youtube.png'
import HopeInHohenwald from '../../Assets/Images/HopeInHohenwald.jpg'

const FirstPageComponent = () => {
  // const navigate = useNavigate();

  const VideoDetails = [
    {
      code: "mq1V-YQKT6k",
      topics: "Legends of Boxing, The Evander Holyfield Story",
      genre: "Documentries / Movies",
    },
    {
      code: "_KPn9AHXF3I",
      topics: "Hope Lives in Hohenwald",
      genre: "Documentries / Movies",
    },
    {
      code: "oa920gMvLaI",
      topics: "Forgotten No More",
      genre: "Documentries / Movies",
    },
    {
      code: "ooBN3O9G6fA",
      topics: "Country Stages to Gospel Hymns",
      genre: "Documentries / Movies",
    },
    {
      code: "Z3SJJ7v8RdU",
      topics: "Fight the Good Fight Documentary",
      genre: "Documentries / Movies",
    },

    {
      code: "zeP1I8O8Q-o",
      topics: `Famous Actress/Model Jennifer O'Neil`,
      genre: "Pro-Life Voices",
    },
    {
      code: "zeP1I8O8Q-o",
      topics: "Coping With Abortion, The Path to Restoration",
      genre: "Pro-Life Voices",
    },
    {
      code: "_VfNxJweiGE",
      topics: "MlKs Niece Dr. Alveda Kings Story",
      genre: "Pro-Life Voices",
    },
    {
      code: "voqmTrExetQ",
      topics: "Actress Lauren Romans Story",
      genre: "Pro-Life Voices",
    },
    {
      code: "voqmTrExetQ",
      topics: "Pro-Life Activist Victoria Robinson",
      genre: "Pro-Life Voices",
    },
    {
      code: "tBa8Ow8hPOI",
      topics: "Pro-Life Defender Scott Hord",
      genre: "Pro-Life Voices",
    },

    {
      code: "ooBN3O9G6fA",
      topics: "Country Stages to Gospel Hymns (John Berry & Irlene Mandrell)",
      genre: "Stories",
    },
    {
      code: "KqdfAh6QQCY",
      topics: "Zig Ziglar Last TV Interview",
      genre: "Stories",
    },

    {
      code: "-Nli8LqX4rU",
      topics: "Trelle, Nita & Benny Sing",
      genre: `Trelle's Tunes`,
    },
    {
      code: "wftl7HABS8U",
      topics: "Trelle Sings Crossing Over",
      genre: `Trelle's Tunes`,
    },
    {
      code: "rKl-jZDw2C0",
      topics: "Trelle Sings, My God is Real",
      genre: `Trelle's Tunes`,
    },
  ];

  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();

  const containerRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;
    if (!container) return;

    const divs = container.querySelectorAll('div');

    divs.forEach((div: any) => {
      div.style.color = 'white';
      div.classList.add('animate');
    });

    setTimeout(() => {
      divs.forEach((div: any) => {
        div.classList.remove('animate');
      });
    }, 10000);
  }, []);

  useEffect(() => {
    fetchData();
    getOnlyMovies();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchData();
  }, []);

  const [AllMovies, setAllMovies] = useState<any>([]);

  const getOnlyMovies = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/getMovies");
    setAllMovies(response.data.data);
  };
  const history = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      history('/');
    }
  };

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

  const targetDivRef = useRef(null);
  const targetDivRef2 = useRef(null);
  const [isInCenter, setIsInCenter] = useState(false);
  const [isInCenter2, setIsInCenter2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv: any = targetDivRef.current;
      if (targetDiv && !isInCenter) {
        const boundingRect = targetDiv.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView) {
          setTimeout(() => {
            setIsInCenter(true);
          }, 200);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter]);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv2: any = targetDivRef2.current;
      if (targetDiv2 && !isInCenter) {
        const boundingRect = targetDiv2.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView) {
          setTimeout(() => {
            setIsInCenter2(true);
          }, 200);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter2]);

  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        firstDivRef.current &&
        secondDivRef.current &&
        !isVisible &&
        isElementInViewport(firstDivRef.current) &&
        isElementInViewport(secondDivRef.current)
      ) {
        setIsVisible(true);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  // Function to check if an element is in the viewport
  const isElementInViewport = (element: any) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div>
      <div className="relative w-full h-[100%] overflow-x-hidden">
        <div className="absolute top-0 z-[9] w-[100%]">
          <LandingPageNavigationBar
            searchValue={SearchValue}
            onChangeFunction={functionToSetSearchValue}
            ActiveScreen="Home"
          />
        </div>

        <div>
          <div className="relative w-full h-[100%] ">
            <img
              src={Image1}
              alt=""
              className="object-cover object-center w-full lg:h-full h-[350px] lg:h-[350px] md:h-[482px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent w-full h-full"></div>
          </div>
          <div ref={containerRef} className="absolute lg:top-[25rem] sm:top-[300px] text-white pt-32 pl-20 sm:ml-[-45px] 2xl:ml-[70px] xl:mt-[-1px] 3xl:mt-[180px] xl:ml-[30px] 2xl:mt-[40px] 3xl:ml-[120px]">
            <div className=" sm:mt-[-310px] md:mt-[-329px] lg:mt-[150px] xl:mt-[150px]">
              <p className=" raleway text-white lg:text-3xl mt-230 sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans md:mt-[-442px]">
                featuring
              </p>
              <p className=" raleway text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-sans">
                the testimonies of
              </p>
              <p className="raleway text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans">
                men and women{" "}
                <span className="raleway text-white lg:text-3xl sm:text-sm xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-sans">
                  of faith
                </span>
              </p>
            </div>
            <div className="lg:pt-8 sm:7 pt-[16px]">
              {/* <Link to="/know"> */}
              <Link to="/Videos">
                <button className=" raleway border-solid rounded-3xl border-2  hover:text-black hover:border-white hover:bg-slate-100 sm:text-sm lg:text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl border-white text-white pl-7 pr-7 pt-2 pb-2 font-sans">
                  Learn More
                </button>
              </Link>
              {/* </Link> */}

            </div>
          </div>
          <div className="relative mt-[-6rem] md:bottom-[6.5rem] lg:mt-[-200px]">
            <img
              src={WhiteBackgroundImage}
              alt=""
              className=" lg:h-[500px]  h-[500px]  md:h-[493px]  w-[100%] sm:h-[240px] lg:mt-[67px] "
            />
            <div className="absolute md:mt-[-85px] md:top-[175px] right-auto md:ml-[-9%] lg:ml-[0px] ">
              <img
                className="h-60 md:h-[13rem] md:w-[20rem] w-96  lg:h-60 lg:w-96 lg:ml-[-70px] sm:h-[6rem] sm:w-[13rem] sm:mt-[-194px] sm:ml-[-40px] "
                src={QuotationImage}
                alt=""
              />
            </div>
            {/* <div ref={targetDivRef} className={`targetDiv ${isInCenter ? "animate text-center md:mt-[-193px] lg:mt-[-250px] sm:mt-[-85px] sm:pt-[20px] sm:pl-[10px] sm:pr-[10px]" : "text-center md:mt-[-193px] lg:mt-[-250px] sm:mt-[-85px] sm:pt-[20px] sm:pl-[10px] sm:pr-[10px]"}`}> */}
            <div data-aos="zoom-in-up" className="text-center md:mt-[-193px] lg:mt-[-250px] sm:mt-[-85px] sm:pt-[20px] sm:pl-[10px] sm:pr-[10px]">
              <p className="raleway text-red-900 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-[0px] xl:text-4xl mt-[-60px] 2xl:text-5xl mt-[-60px] font-medium font-sans sm:mt-[-32px]">
                In Your Corner{" "}
                <span className="raleway font-light font-sans ">
                  Productions
                </span>
              </p>
              <p className="raleway  font-sans   sm:text-lg  lg:text-xl mb-[-25px] md:text-lg xl:text-xl xl:mt-[20px] 2xl:text-2xl sm:mt-[30px] md:mt-[30px]">
                In Your Corner Productions specializes in creating
                Christian-themed television programs, <br />
                acclaimed documentaries, gospel music, and ministry videos to
                help promote other faith-based non-profits.
              </p>
            </div>
            {/* </div> */}
          </div>
          {/* <div ref={targetDivRef} className={`targetDiv ${isInCenter ? "animate text-center" : "text-center"}`}> */}
          <div data-aos="zoom-in-up" className="text-center">
            <Link to="/Videos">
              <JoinOurCommunityButton />
            </Link>
          </div>
          {/* </div> */}

          <div className="mt-16 sm:mt-[0px]">
            <div className="h-5/6 ">
              <div className=" bg-pink-100 pt-40 h-5/6 sm:pt-[0px]">
                <div className="flex justify-center py-8 px-2 sm:mb-[-20px] sm:ml-[-14%] hover:opacity-70">
                  <Link
                    to={`/VideoDetails/${"sZ0cOfq8JzM"}`}
                    state={{ title: "Hope Dealer aka Hope Lives in Hohenwald", description: `Step into the heart of Hohenwald and witness the profound story of hope through the lens of its residents. "Hope Dealer" delves into the lives of everyday people who embody hope in the midst of life's trials and triumphs. From the vibrant streets to the serene countryside, this video encapsulates the resilience and spirit of a community bound together by the power of hope. Join us on a journey of inspiration, where hope isn't just a concept but a living, breathing force that shapes the very fabric of Hohenwald. Experience the stories that illuminate the human spirit and discover why hope truly lives in every corner of this remarkable town.` }}
                  >
                    <div className="px-1 relative">
                      <img
                        // src={`https://i.ytimg.com/vi/sZ0cOfq8JzM/maxresdefault.jpg`}
                        src={HopeInHohenwald}
                        alt=""
                        className="rounded-[25px] md:mt-[-260px] lg:mt-[-295px] lg:w-[800px] sm:w-[250px] sm:ml-[58px] sm:mt-[-70px] hover:opacity-70"
                      />
                      <div className="youtube-icon2">
                        {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
                        {/* You can replace this with your YouTube icon */}
                        <img src={YoutubeImage} alt="YouTube Icon" className="hover:opacity-70 wi" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-[100%]">
                  <VideoSlider2 type="true" YoutubeLogo="true" Data={AllMovies} />
                </div>
                <div data-aos="zoom-in-up" className="text-center mt-[100px] text-lg pb-14 sm:mt-[80px]">
                  <Link to="/Videos">
                    <button className="raleway mt-[-10px] text-red-900 hover:text-white hover:bg-red-950 hover:border-red-900 px-14 py-2.5 border border-2 border-red-900 rounded-3xl font-sans xl:text-2xl lg:text-2xl sm:text-sm 2xl:text-3xl" data-aos="flip-left">
                      View All Videos
                    </button>
                  </Link>
                </div>
                {/* <div ref={targetDivRef2} className={`targetDiv ${isInCenter2 ? "animate text-center lg:pb-40 pb-20 font-sans" : "text-center lg:pb-40 pb-20 font-sans"}`}> */}
                <div className="text-center lg:pb-40 pb-20 font-sans">
                  <p data-aos="zoom-in-up" className="raleway text-red-900 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-light mb-7 font-sans xl:text-4xl 2xl:text-5xl">
                    How Kerry Came to Faith in{" "}
                    <span className="raleway text-red-900 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold font-sans xl:text-4xl 2xl:text-5xl">
                      Jesus Christ
                    </span>
                  </p>
                  <iframe
                    width="560"
                    height="315"
                    className="mx-auto my-5 sm:w-[300px] sm:h-[200px] sm:mb-[70px] 2xl:w-[800px] 2xl:h-[500px]"
                    src="https://www.youtube.com/embed/RZduf4KA6Bs?si=kOiyhfRRo36O0geQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    data-aos="zoom-in"
                  ></iframe>
                  <p data-aos="zoom-in-up" data-aos-once="true" className="raleway font-sans sm:mx-4 sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
                    Beyond the weekly TV show, Kerry Pharr expanded his ministry
                    impact by creating compelling documentary films. <br />{" "}
                    Among them are the award-winning “Hope Lives in Hohenwald”
                    and “Fight the Good Fight,” a documentary highlighting
                    champion boxers who discovered hope in Jesus Christ.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="pb-[20px] flex justify-center absolute lg:top-[-126px] top-[-60px] z-[8] lg:gap-[20px] gap-[2px] w-full">
                  <div className="px-1 sm:w-[90px] sm:h-[90px]">
                    <img
                      className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                      src={Image3}
                      alt=""
                      data-aos="zoom-in-right"
                    />
                  </div>
                  <div className="px-1  sm:w-[90px] sm:h-[90px]">
                    <img
                      className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                      src={Image4}
                      alt=""
                      data-aos="zoom-in-right"
                    />
                  </div>
                  <div className="px-1 sm:w-[90px] sm:h-[90px]">
                    <img
                      className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                      src={Image3}
                      alt=""
                      data-aos="zoom-in-left"
                    />
                  </div>
                  <div className="px-1 sm:w-[90px] sm:h-[90px]">
                    <img
                      className="w-48 h-48 rounded-2xl sm:w-[70px] sm:h-[90px]"
                      src={Image4}
                      alt=""
                      data-aos="zoom-in-left"
                    />
                  </div>
                </div>

                <div className=" h-[52vh] sm:h-[42vh] md:h-[70vh] lg:h-[65vh] xl:h-[70vh] 2xl:h-[80vh] 3xl:h-[80vh] flex items-center justify-center   mt-[0px] z-[99]">
                  <div
                    className="absolute inset-0 bg-black"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="z-[8] text-white grid place-items-center px-2 md:mt-[86px] lg:ml-[-612px] lg:pl-36">
                    <div ref={firstDivRef} className={`animated-div ${isVisible && "animate-left-to-right text-center lg:text-left"}`}>
                      <h2 className="raleway sm:text-2xl md:text-3xl lg:text-3xl  xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-semibold md:font-bold py-2 px-2 font-sans">
                        Reach out to us today
                      </h2>
                      <p className="raleway sm:text-2xl md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans px-2">
                        to fulfill all your ministry{" "}
                        <span className="raleway md:text-3xl lg:text-3xl sm:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold font-sans">
                          video
                        </span>
                      </p>
                      <h2 className="raleway md:text-3xl lg:text-3xl sm:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold md:font-bold pt-2 font-sans px-2 ">
                        production requirements.
                      </h2>
                    </div>
                    <div ref={secondDivRef} className={`animated-div ${isVisible && "animate-left-to-right mt-14 text-center lg:text-left lg:ml-[-180px] xl:ml-[-260px] 2xl:ml-[-378px] 3xl:ml-[-500px]"}`}>
                      <Link to="/contact">
                        <button className="raleway border border-2  hover:text-black hover:border-white hover:bg-slate-100  border-white py-2 px-10 rounded-3xl sm:text-sm lg:text-2xl text-2xl font-sans xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <FooterComponent onClickToHome="Home" />
        </div>
        <div className="">
          <Footer2 />
        </div>
      </div>
    </div>
  );
};

export default FirstPageComponent;
