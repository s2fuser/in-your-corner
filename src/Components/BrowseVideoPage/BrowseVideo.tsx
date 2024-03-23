import React, { useState, useEffect } from 'react';
import VideoSlider from '../VideoSlider/VideoSlider';
import VideoSlider2 from '../VideoSlider2/VideoSlider2';
import DocumentriesAndMovies from '../../Pages/Documentries&Movies/DocumentriesAndMovies';
import ProLifeSlider from '../../Pages/ProLifeVideos/ProLifeSlider';
import StoriesComponent from '../../Pages/ProLifeVideos/Stories';
import TrellesTuneComponent from '../../Pages/ProLifeVideos/TrellesTune';
import useFetch from '../../hooks/useFetchHook';
import axios from 'axios';
import TopicWiseSearchComponent from '../TopicSearch/TopicSearch';

interface ButtonProps {
  label: string,
  func?: any,
}

type SearchProp = {
  value?: string,
  getValue?: any,
}

const TopicButton: React.FC<ButtonProps> = ({ label, func }) => {
  const buttonStyle: React.CSSProperties = {
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '25px', // Adjust the value to control the curvature
    padding: '10px 20px',
    margin: '25px', // Add space around the button
    cursor: 'pointer',
    fontWeight: 'bold', // Make text bold
  };

  return <button className='bg-transparent text-white border-2 border-white rounded-[25px] px-8 py-2 m-4 cursor-pointer font-bold sm:block sm:ml-[-25px]' onClick={func} >{label}</button>;
  // style={buttonStyle}
};


const SearchBox: React.FC<SearchProp> = ( { value, getValue } ) => {
  const searchBoxStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '25px', // Adjust the value to control the curvature
    padding: '5px 15px', // Adjust the padding to control the height
    margin: '15px 0', // Add space above and below the search box
    // width: '400px', // Maintain the earlier length
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  };

  const inputStyle: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    // width: '100%',
    height: '100%', // Ensure the input takes full height
  };

  return (
    <div className="rounded-[25px] py-[5px] px-[15px] my-[15px] flex items-center bg-white lg:w-[40%] w-[100%]">
      {/* style={searchBoxStyle} */}
      <input value={value} type="text" placeholder="Search" className='w-[100%] h-[100%] border-none outline-none lg:w-[400px] black' onChange={getValue} />
    </div>
    // style={inputStyle}
  );
};

interface BrowseVideoProps {
  // Add any props you need for your component
}

const BrowseVideoPage: React.FC<BrowseVideoProps> = (props) => {

  // const { data } = useFetch('code');

  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();

  useEffect(() => {
    fetchData();
  })

  const fetchData = async() => {
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
      if(SearchValue != undefined) {
        return items && items.genre.toLowerCase().includes(SearchValue.toLowerCase())
      }
    })
    if(SearchValue == '') {
      setFilteredValuesOfAllVideos(AllVideosDetails)
    }
    else {
      setFilteredValuesOfAllVideos(FilteredItems)
    }
  }

  const containerStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, #990000, #FF6666)',
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center horizontally
    // color: '#ffffff',
    minHeight: '100vh',
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '2rem', // Adjust the font size to make it bigger
    marginBottom: '20px', // Add some space between heading and buttons
    marginTop: '20px', // Add some space between heading and buttons
  };

  const subHeadingContainerStyle: React.CSSProperties = {
    textAlign: 'left', // Align the subheading to the left
    marginLeft: '100px', // Adjust the margin for additional spacing
    width: '100%', // Ensure the container takes full width
  };

  const subHeadingStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '2rem', // Adjust the font size to make it bigger
    marginBottom: '20px', // Add some space between heading and buttons
    marginTop: '20px', // Add some space between heading and buttons
  };

  // if(filteredValuesOfVideos && filteredValuesOfVideos.length > 0) {
  //   return (
  //     <div>
  //       {filteredValuesOfVideos[0].name}
  //     </div>
  //   )
  // }

  const getDetailsOfClickingButton = (event: any) => {
    let ButtonValue = event.target.textContent;
    let FilteredItems = AllVideosDetails && AllVideosDetails.filter((items: any) => {
      if(ButtonValue != undefined) {
        return items && items.genre.toLowerCase().includes(ButtonValue.toLowerCase())
      }
    })
    setFilteredValuesOfAllVideos(FilteredItems)

  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle} className='font-bold text-white'>BROWSE BY TOPIC</h1>
      <div className='sm:ml-[-25px]'>
        <TopicButton label="Documentries / Movies" func={getDetailsOfClickingButton} />
        <TopicButton label="Pro-Life Voices" func={getDetailsOfClickingButton} />
        <TopicButton label="Stories" func={getDetailsOfClickingButton} />
        <TopicButton label="Trelle's Tunes" func={getDetailsOfClickingButton} />
        <TopicButton label="In Your Corner TV Show" />
      </div>
      <SearchBox value={SearchValue} getValue={functionToSetSearchValue} />
      {(filteredValuesOfVideos && filteredValuesOfVideos.length == 0) || filteredValuesOfVideos == undefined ? <div style={subHeadingContainerStyle}>
        <div className='ml-[-50px]'>
          <p className=' font-bold text-2xl mt-20 pl-8 text-white sm:ml-[-25px]'>Documentries / Movies</p>
          {/* style={subHeadingStyle} */}
          {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}
          <div className='sm:mt-[30px] sm:ml-[-25px]'>
            <DocumentriesAndMovies title='false' />
          </div>
        </div>
        <div className='ml-[-50px]'>
          <p className='font-bold text-2xl mt-20 pl-8 text-white sm:ml-[-25px]'>Pro-Life Voices</p>
          {/* style={subHeadingStyle} */}
          {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}

          <div className='sm:mt-[30px] sm:ml-[-25px]'>
            <ProLifeSlider title="false" />
          </div>
        </div>
        <div className='ml-[-50px] sm:mt-[-50px]'>
          <p className='font-bold text-2xl mt-20 pl-8 text-white sm:ml-[-25px]'>Stories</p>
          {/* style={subHeadingStyle} */}
          {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}

          <div className='sm:mt-[30px] sm:ml-[-25px]'>
            <StoriesComponent title="false" />
          </div>
        </div>
        <div className='ml-[-50px]'>
          <p className='font-bold text-2xl mt-20 pl-8 text-white sm:ml-[-25px]'>Trelle's Tunes</p>
          {/* style={subHeadingStyle} */}
          {/* <div className='flex justify-between mt-4 ml-0 overflow-x-hidden sm:mt-[-45px] sm:mb-[-20px] sm:ml-[-20px]'>
            <VideoSlider2 type="true" />
          </div> */}

          <div className='sm:mb-[40px] sm:ml-[-25px] sm:mt-[30px]'>
            <TrellesTuneComponent title="false" />
          </div>
        </div>
        {/*        
        <h1 style={subHeadingStyle}>ADDICTION</h1>
        <h1 style={subHeadingStyle}>ANGER & FORGIVENESS</h1>
        <h1 style={subHeadingStyle}>ANXIETY & DEPRESSION</h1>
        <h1 style={subHeadingStyle}>CANCER</h1> */}
      </div> : <div className='w-[100%] h-[600px] sm:mb-[-400px]'>
        <TopicWiseSearchComponent genre={filteredValuesOfVideos[0].genre} values={filteredValuesOfVideos} />
      </div>}
    </div>
  );
};

export default BrowseVideoPage;