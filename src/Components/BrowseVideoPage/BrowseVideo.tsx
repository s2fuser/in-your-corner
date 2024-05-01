import React, { useState, useEffect, useRef } from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import VideoSlider2 from "../VideoSlider2/VideoSlider2";
import DocumentriesAndMovies from "../../Pages/Documentries&Movies/DocumentriesAndMovies";
import ProLifeSlider from "../../Pages/ProLifeVideos/ProLifeSlider";
import StoriesComponent from "../../Pages/ProLifeVideos/Stories";
import TrellesTuneComponent from "../../Pages/ProLifeVideos/TrellesTune";
import InYourCornerTvShowComponent from "../../Pages/ProLifeVideos/inYourCornerTvShows";
import useFetch from "../../hooks/useFetchHook";
import axios from "axios";
import TopicWiseSearchComponent from "../TopicSearch/TopicSearch";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import DocumentsAndMovies from '../DocumentsAndMovies/DocumentsAndMovies';
import { AiOutlineSearch } from 'react-icons/ai';
import "../../index.css";

interface ButtonProps {
  label: string;
  func?: any;
}

type SearchProp = {
  value?: string;
  getValue?: any;
};

const TopicButton: React.FC<ButtonProps> = ({ label, func }) => {
  const buttonStyle: React.CSSProperties = {
    background: "transparent",
    color: "#ffffff",
    border: "2px solid #ffffff",
    borderRadius: "25px", // Adjust the value to control the curvature
    padding: "10px 20px",
    margin: "25px", // Add space around the button
    cursor: "pointer",
    fontWeight: "bold", // Make text bold
  };

  return (
    <button
      className="raleway border-solid rounded-3xl border-2 hover:text-red-600 hover:border-white hover:bg-slate-100 bg-transparent text-white border-2 border-white rounded-[25px] px-8 py-2 m-4 cursor-pointer font-bold sm:block sm:ml-[-25px]"
      data-aos="zoom-in-up"
      onClick={func}
    >
      {label}
    </button>
  );
  // style={buttonStyle}
};

const SearchBox: React.FC<SearchProp> = ({ value, getValue }) => {
  const navigate = useNavigate();

  const searchBoxStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "25px", // Adjust the value to control the curvature
    padding: "5px 15px", // Adjust the padding to control the height
    margin: "15px 0", // Add space above and below the search box
    // width: '400px', // Maintain the earlier length
    display: "flex",
    alignItems: "center",
    width: "100%",
  };

  const inputStyle: React.CSSProperties = {
    border: "none",
    outline: "none",
    // width: '100%',
    height: "100%", // Ensure the input takes full height
  };

  // const navigateFunction = () => {
  //   navigate(`/firstPageSearch`);
  //   // /${searchValue}
  // };

  return (
    <div
      // onClick={navigateFunction}
      className="rounded-[25px] py-[5px] px-[15px] my-[15px] flex items-center bg-white lg:w-[40%] w-[100%]"
    >
      {/* style={searchBoxStyle} */}
      <input
        value={value}
        type="text"
        placeholder="Search Videos"
        className="w-[100%] h-[100%] border-none outline-none lg:w-[400px] black"
        onChange={getValue}
      />
        {/* <button onClick={navigateFunction} className='cursor-pointer'>
              <AiOutlineSearch className='text-stone-500 text-[24px] sm:ml-[-28px] md:ml-[-33px]' />
            </button> */}
    </div>
    // style={inputStyle}
  );
};

interface BrowseVideoProps {
  // Add any props you need for your component
}

const BrowseVideoPage: React.FC<BrowseVideoProps> = (props) => {
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

  const navigate = useNavigate();

  const navigateFunction = () => {
    navigate(`/firstPageSearch`);
    // /${searchValue}
  };

  // const { data } = useFetch('code');
  const DocumentsTargerRef = useRef<HTMLDivElement | null>(null);
  const ProLifeVoicesTargerRef = useRef<HTMLDivElement | null>(null);
  const StoriesTargerRef = useRef<HTMLDivElement | null>(null);
  const TrellerTunesTargerRef = useRef<HTMLDivElement | null>(null);
  const InYourCornerTvShowTargerRef = useRef<HTMLDivElement | null>(null);

  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();
  const [ScreenSize, setScreenSize] = useState<any>(false);

  useEffect(() => {
    fetchData();

    if (window.innerWidth > 2000) {
      setScreenSize(true)
    }

  }, []);

  const fetchData = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/code");
    setAllVideosDetails(response.data.data);
  };

  const functionToSetSearchValue = (event: any) => {
    let ValueOfSearch = event.target.value;
    setSearchValue(ValueOfSearch);
    getFilteredData();
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

  const containerStyle: React.CSSProperties = {
    background: "linear-gradient(to right, #990000, #FF6666)",
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column", // Stack items vertically
    alignItems: "center", // Center horizontally
    // color: '#ffffff',
    minHeight: "100vh",
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "2rem", // Adjust the font size to make it bigger
    marginBottom: "20px", // Add some space between heading and buttons
    marginTop: "20px", // Add some space between heading and buttons
  };

  const subHeadingContainerStyle: React.CSSProperties = {
    textAlign: "left", // Align the subheading to the left
    // marginLeft: '100px', // Adjust the margin for additional spacing
    width: "100%", // Ensure the container takes full width
  };

  const subHeadingStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "2rem", // Adjust the font size to make it bigger
    marginBottom: "20px", // Add some space between heading and buttons
    marginTop: "20px", // Add some space between heading and buttons
  };

  // if(filteredValuesOfVideos && filteredValuesOfVideos.length > 0) {
  //   return (
  //     <div>
  //       {filteredValuesOfVideos[0].name}
  //     </div>
  //   )
  // }

  const getDetailsOfClickingButton = (event: any) => {
    // let ButtonValue = event.target.textContent;
    // let FilteredItems = AllVideosDetails && AllVideosDetails.filter((items: any) => {
    //   if(ButtonValue != undefined) {
    //     return items && items.genre.toLowerCase().includes(ButtonValue.toLowerCase())
    //   }
    // })
    // setFilteredValuesOfAllVideos(FilteredItems)

    if (
      DocumentsTargerRef.current &&
      event.target.textContent == "Documentries / Movies"
    ) {
      DocumentsTargerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (StoriesTargerRef.current && event.target.textContent == "Stories") {
      StoriesTargerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (
      TrellerTunesTargerRef.current &&
      event.target.textContent == `Trelle's Tunes`
    ) {
      TrellerTunesTargerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (
      ProLifeVoicesTargerRef.current &&
      event.target.textContent == "Pro-Life Voices"
    ) {
      ProLifeVoicesTargerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (
      InYourCornerTvShowTargerRef.current &&
      event.target.textContent == "In Your Corner TV Show"
    ) {
      InYourCornerTvShowTargerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const targetDivRef1 = useRef(null);
  const targetDivRef2 = useRef(null);
  const targetDivRef3 = useRef(null);
  const targetDivRef4 = useRef(null);
  const targetDivRef5 = useRef(null);

  const [isInCenter1, setIsInCenter1] = useState(false);
  const [isInCenter2, setIsInCenter2] = useState(false);
  const [isInCenter3, setIsInCenter3] = useState(false);
  const [isInCenter4, setIsInCenter4] = useState(false);
  const [isInCenter5, setIsInCenter5] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv1: any = targetDivRef1.current;
      if (targetDiv1) {
        const boundingRect = targetDiv1.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView && !isInCenter1) {
          setTimeout(() => {
            setIsInCenter1(true);
          }, 200);
        } else if (!isInView && isInCenter1) {
          setIsInCenter1(false); // Reset state when element goes out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter1]);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv2: any = targetDivRef2.current;
      if (targetDiv2) {
        const boundingRect = targetDiv2.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView && !isInCenter2) {
          setTimeout(() => {
            setIsInCenter2(true);
          }, 200);
        } else if (!isInView && isInCenter2) {
          setIsInCenter2(false); // Reset state when element goes out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter2]);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv3: any = targetDivRef3.current;
      if (targetDiv3) {
        const boundingRect = targetDiv3.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView && !isInCenter3) {
          setTimeout(() => {
            setIsInCenter3(true);
          }, 200);
        } else if (!isInView && isInCenter3) {
          setIsInCenter3(false); // Reset state when element goes out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter3]);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv4: any = targetDivRef4.current;
      if (targetDiv4) {
        const boundingRect = targetDiv4.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView && !isInCenter4) {
          setTimeout(() => {
            setIsInCenter4(true);
          }, 200);
        } else if (!isInView && isInCenter4) {
          setIsInCenter4(false); // Reset state when element goes out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter4]);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv5: any = targetDivRef5.current;
      if (targetDiv5) {
        const boundingRect = targetDiv5.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topOffset = boundingRect.top;
        const bottomOffset = viewportHeight - boundingRect.bottom;

        const isInView = topOffset < viewportHeight && bottomOffset < viewportHeight;

        if (isInView && !isInCenter5) {
          setTimeout(() => {
            setIsInCenter5(true);
          }, 200);
        } else if (!isInView && isInCenter5) {
          setIsInCenter5(false); // Reset state when element goes out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInCenter5]);


  return (
    <div style={containerStyle}>
      <h1
        style={headingStyle}
        className="font-bold text-white raleway "
        data-aos="fade-right"
      >
        BROWSE BY TOPIC
      </h1>
      <div className="sm:ml-[-25px]">
        <TopicButton
          label="Documentries / Movies"
          func={getDetailsOfClickingButton}
        />
        <TopicButton
          label="Pro-Life Voices"
          func={getDetailsOfClickingButton}
        />
        <TopicButton label="Stories" func={getDetailsOfClickingButton} />
        <TopicButton label="Trelle's Tunes" func={getDetailsOfClickingButton} />
        {/* <TopicButton
          label="In Your Corner TV Show"
          func={getDetailsOfClickingButton}
        /> */}
      </div>
      {/* <SearchBox value={SearchValue} getValue={functionToSetSearchValue} /> */}
      {(filteredValuesOfVideos && filteredValuesOfVideos.length == 0) ||
        filteredValuesOfVideos == undefined ||
        filteredValuesOfVideos == "" ? (
        <div style={subHeadingContainerStyle}>
          <div
            className="ml-[-50px] mr-[-50px] mt-[-50px]"
            ref={DocumentsTargerRef}
          >
            <p ref={targetDivRef1} className={`targetDiv ${isInCenter1 ? "animate raleway text-center font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white md:mb-[40px]" : "animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white text-center md:mb-[40px]"}`}
            // className="animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px] md:mb-[40px]"
            // data-aos="zoom-out-up"
            // data-aos-offset={ScreenSize == true ? "200px" : ""}
            // data-aos-anchor-placement={ScreenSize == true ? "bottom-bottom" : ""}
            >
              Documentries / Movies
            </p>
            {/* style={subHeadingStyle} */}
            {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}
            <div className="sm:mt-[30px] sm:ml-[-25px]">
              {/* <DocumentriesAndMovies title="false" /> */}
              <DocumentsAndMovies />
            </div>
          </div>
          <div
            className="ml-[-50px] mr-[-50px] mt-[-20px]"
            ref={ProLifeVoicesTargerRef}
          >
            <p ref={targetDivRef2} className={`targetDiv ${isInCenter2 ? "animate raleway text-center text font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white md:mb-[40px]" : "animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20  text-white text-center md:mb-[40px]"}`}
            // className="animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]"
            // data-aos="zoom-out-up"
            // data-aos-offset={ScreenSize == true ? "200px" : ""}
            // data-aos-anchor-placement={ScreenSize == true ? "bottom-bottom" : ""}
            >
              Pro-Life Voices
            </p>
            {/* style={subHeadingStyle} */}
            {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}

            <div className="sm:mt-[30px] sm:ml-[-25px]">
              <ProLifeSlider title="false" />
            </div>
          </div>
          <div
            className="ml-[-50px] mr-[-50px] sm:mt-[-85px] mt-[-20px]"
            ref={StoriesTargerRef}
          >
            <p ref={targetDivRef3} className={`targetDiv ${isInCenter3 ? "animate raleway text-center font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white md:mb-[40px]" : "animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20  text-white text-center  md:mb-[40px]"}`}
            // className="animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]"
            // data-aos="zoom-out-up"
            // data-aos-offset={ScreenSize == true ? "200px" : ""}
            // data-aos-anchor-placement={ScreenSize == true ? "bottom-bottom" : ""}
            >
              Stories
            </p>
            {/* style={subHeadingStyle} */}
            {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}

            <div className="sm:mt-[30px] sm:ml-[-25px]">
              <StoriesComponent title="false" />
            </div>
          </div>
          <div
            className="ml-[-50px] mr-[-50px] mt-[-20px]"
            ref={TrellerTunesTargerRef}
          >
            <p ref={targetDivRef4} className={`targetDiv ${isInCenter4 ? "animate raleway text-center font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white  md:mb-[40px]" : "animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white text-center  md:mb-[40px]"}`}
            // className="animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]"
            // data-aos="zoom-out-up"
            // data-aos-offset={ScreenSize == true ? "200px" : ""}
            // data-aos-anchor-placement={ScreenSize == true ? "bottom-bottom" : ""}
            >
              Trelle's Tunes
            </p>
            <div className="sm:mb-[40px] sm:ml-[-25px] sm:mt-[30px]">
              <TrellesTuneComponent title="false" />
            </div>
          </div>
{/* 
          <div
            className="ml-[-50px] mr-[-50px] mt-[-20px]"
            ref={InYourCornerTvShowTargerRef}
          > */}

          
            {/* <p ref={targetDivRef5} className={`targetDiv ${isInCenter5 ? "animate raleway text-center font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white  md:mb-[40px]" : "animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 text-white  text-center  md:mb-[40px]"}`} */}

{/* 
            // className="animated-element raleway font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]"
            // data-aos="zoom-out-up"
            // data-aos-offset={ScreenSize == true ? "200px" : ""}
            // data-aos-anchor-placement={ScreenSize == true ? "bottom-bottom" : ""}
            > */}
              {/* In Your Corner TV Show */}
            {/* </p> */}
            {/* <div className="sm:mb-[40px] sm:ml-[-25px] sm:mt-[30px]">
              <InYourCornerTvShowComponent title="false" />
            </div> */}
          {/* </div> */}
        </div>
      ) : (
        <div className="w-[100%] h-[600px] sm:mb-[-400px]">
          <TopicWiseSearchComponent
            genre={filteredValuesOfVideos[0].genre}
            values={filteredValuesOfVideos}
          />
        </div>
      )}
    </div>
  );
};

export default BrowseVideoPage;
