import React, { useState, useEffect, useRef  } from 'react';
import VideoSlider from '../VideoSlider/VideoSlider';
import VideoSlider2 from '../VideoSlider2/VideoSlider2';
import DocumentriesAndMovies from '../../Pages/Documentries&Movies/DocumentriesAndMovies';
import ProLifeSlider from '../../Pages/ProLifeVideos/ProLifeSlider';
import StoriesComponent from '../../Pages/ProLifeVideos/Stories';
import TrellesTuneComponent from '../../Pages/ProLifeVideos/TrellesTune';
import InYourCornerTvShowComponent from '../../Pages/ProLifeVideos/inYourCornerTvShows';
import useFetch from '../../hooks/useFetchHook';
import axios from 'axios';
import TopicWiseSearchComponent from '../TopicSearch/TopicSearch';
import { useNavigate } from 'react-router-dom';

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

  return <button className='border-solid rounded-3xl border-2 hover:text-red-600 hover:border-white hover:bg-slate-100 bg-transparent text-white border-2 border-white rounded-[25px] px-8 py-2 m-4 cursor-pointer font-bold sm:block sm:ml-[-25px]' onClick={func} >{label}</button>;
  // style={buttonStyle}
};


const SearchBox: React.FC<SearchProp> = ( { value, getValue } ) => {

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

  const navigateFunction = () => {
    navigate(`/firstPageSearch`);
    // /${searchValue}
  }

  return (
    <div onClick={navigateFunction} className="rounded-[25px] py-[5px] px-[15px] my-[15px] flex items-center bg-white lg:w-[40%] w-[100%]">
      {/* style={searchBoxStyle} */}
      <input
        value={value}
        type="text"
        placeholder="Search"
        className="w-[100%] h-[100%] border-none outline-none lg:w-[400px] black"
        onChange={getValue}
      />
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

    {code : '-Nli8LqX4rU' , topics: 'Trelle, Nita & Benny Sing', genre: `Trelle's Tunes`},
    {code : 'wftl7HABS8U' , topics: 'Trelle Sings Crossing Over', genre: `Trelle's Tunes`},
    {code : 'rKl-jZDw2C0' , topics: 'Trelle Sings, My God is Real', genre: `Trelle's Tunes`}


  ]

  const navigate = useNavigate();

  const navigateFunction = () => {
    navigate(`/firstPageSearch`);
    // /${searchValue}
  }

  // const { data } = useFetch('code');
  const DocumentsTargerRef = useRef<HTMLDivElement | null>(null);
  const ProLifeVoicesTargerRef = useRef<HTMLDivElement | null>(null);
  const StoriesTargerRef = useRef<HTMLDivElement | null>(null);
  const TrellerTunesTargerRef = useRef<HTMLDivElement | null>(null);
  const InYourCornerTvShowTargerRef = useRef<HTMLDivElement | null>(null);

  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] =
    useState<any>();

  useEffect(() => {
    fetchData();
  });

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
      InYourCornerTvShowTargerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle} className="font-bold text-white">
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
        <TopicButton label="In Your Corner TV Show" func={getDetailsOfClickingButton} />
      </div>
        <SearchBox value={SearchValue} getValue={functionToSetSearchValue} />
      {(filteredValuesOfVideos && filteredValuesOfVideos.length == 0) || (filteredValuesOfVideos == undefined || filteredValuesOfVideos == '') ? (<div style={subHeadingContainerStyle}>
        <div className='ml-[-50px] mr-[-50px] mt-[-50px]' ref={DocumentsTargerRef}>
          <p className=' font-bold text-2xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]'>Documentries / Movies</p>
          {/* style={subHeadingStyle} */}
          {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}
            <div className="sm:mt-[30px] sm:ml-[-25px]">
              <DocumentriesAndMovies title="false" />
            </div>
          </div>
          <div
            className="ml-[-50px] mr-[-50px] mt-[-50px]"
            ref={ProLifeVoicesTargerRef}
          >
            <p className="font-bold text-2xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]">
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
            className="ml-[-50px] mr-[-50px] sm:mt-[-85px] mt-[-50px]"
            ref={StoriesTargerRef}
          >
            <p className="font-bold text-2xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]">
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
            className="ml-[-50px] mr-[-50px] mt-[-50px]"
            ref={TrellerTunesTargerRef}
          >
            <p className="font-bold text-2xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]">
              Trelle's Tunes
            </p>
            <div className="sm:mb-[40px] sm:ml-[-25px] sm:mt-[30px]">
              <TrellesTuneComponent title="false" />
            </div>
          </div>

          <div
            className="ml-[-50px] mr-[-50px] mt-[-50px]"
            ref={InYourCornerTvShowTargerRef}
          >
            <p className="font-bold text-2xl mt-20 pl-8 text-white sm:ml-[10px] lg:ml-[30px]">
              In Your Corner TV Show
            </p>
            <div className="sm:mb-[40px] sm:ml-[-25px] sm:mt-[30px]">
              <InYourCornerTvShowComponent title="false" />
            </div>
          </div>
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
