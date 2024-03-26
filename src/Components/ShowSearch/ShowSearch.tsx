import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import LandingPageNavigationBar from "../LandingPageNavigation/LandingPageNavigation";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../index.css';

type Prop = {
    value?: any,
}

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
};

const ShowSearchComponent: React.FC<Prop> = ({  }) => {

    const { Id } = useParams();
    const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();
    const [SearchValue, setSearchValue] = useState<any>(); 
    const navigate = useNavigate();
    var FilteredData: any;
    const [Title, setTitle] = useState<any>();
    const [key, setKey] = useState(0);

    useEffect(() => {
        // setSearchValue(Id);
        // getFilteredData()
    }, []);

    const functionToSetSearchValue = (event: any) => {
        let ValueOfSearch = event.target.value;
        setSearchValue(ValueOfSearch);
        getFilteredData(ValueOfSearch)
        FilteredData = ValueOfSearch
        // navigate(`/firstPageSearch/${ValueOfSearch}`);
    }

    const handleDataChange = () => {
        // Update key to trigger re-render
        setKey(prevKey => prevKey + 1);
        // Reset animation by toggling a class
        const elements = document.querySelectorAll('.wipe-transition');
        elements.forEach(element => {
          element.classList.remove('wipe-transition');
          // Use requestAnimationFrame to trigger reflow
          window.requestAnimationFrame(() => {
            element.classList.add('wipe-transition');
          });
        });
    };

    const VideoDetails = [
        {code : 'mq1V-YQKT6k' , topics: 'Legends of Boxing, The Evander Holyfield Story', genre: 'Documentries / Movies'},
        {code : '_KPn9AHXF3I' , topics: 'Hope Lives in Hohenwald', genre: 'Documentries / Movies'},
        {code : 'oa920gMvLaI' , topics: 'Forgotten No More', genre: 'Documentries / Movies'},
        {code : 'ooBN3O9G6fA' , topics: 'Country Stages to Gospel Hymns', genre: 'Documentries / Movies'},
        {code : 'Z3SJJ7v8RdU' , topics: 'Fight the Good Fight Documentary', genre: 'Documentries / Movies'},
    
        {code : 'zeP1I8O8Q-o' , topics: `Famous Actress/Model Jennifer O'Neil`, genre: 'Pro-Life Voices'},
        {code : 'zeP1I8O8Q-o' , topics: 'Coping With Abortion, The Path to Restoration', genre: 'Pro-Life Voices'},
        {code : '_VfNxJweiGE' , topics: 'MlKs Niece Dr. Alveda Kings Story', genre: 'Pro-Life Voices'},
        {code : 'voqmTrExetQ' , topics: 'Actress Lauren Romans Story', genre: 'Pro-Life Voices'},
        {code : 'voqmTrExetQ' , topics: 'Pro-Life Activist Victoria Robinson', genre: 'Pro-Life Voices'},
        {code : 'tBa8Ow8hPOI' , topics: 'Pro-Life Defender Scott Hord', genre: 'Pro-Life Voices'},
    
        {code : 'ooBN3O9G6fA' , topics: 'Country Stages to Gospel Hymns (John Berry & Irlene Mandrell)', genre: 'Stories'},
        {code : 'KqdfAh6QQCY' , topics: 'Zig Ziglar Last TV Interview', genre: 'Stories'},
    
        {code : '-Nli8LqX4rU' , topics: 'Trelle, Nita & Benny Sing', genre: `Trelle's Tunes`},
        {code : 'wftl7HABS8U' , topics: 'Trelle Sings Crossing Over', genre: `Trelle's Tunes`},
        {code : 'rKl-jZDw2C0' , topics: 'Trelle Sings, My God is Real', genre: `Trelle's Tunes`}
    ]

    const getFilteredData = (ValueOfSearch: any) => {
        console.log(SearchValue);
        let FilteredItems = VideoDetails && VideoDetails.filter((items: any) => {
          if (ValueOfSearch != undefined) {
            return items && items.genre.toLowerCase().includes(ValueOfSearch.toLowerCase())
          }
        })
        handleDataChange()
        if (ValueOfSearch == '') {
          setFilteredValuesOfAllVideos(VideoDetails)

          const uniqueGenres = Array.from(new Set(VideoDetails.map(item => item.genre)));

          // Check if there are multiple genres
          const hasMultipleGenres = uniqueGenres.length > 1;

          // Create an array of titles based on whether there are multiple genres
          const titles = hasMultipleGenres ? ['All Videos'] : uniqueGenres;
          setTitle(titles);
        }
        else {
          setFilteredValuesOfAllVideos(FilteredItems)
          const titles = ''
          setTitle(titles);
        }
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <LandingPageNavigationBar searchValue={SearchValue} onChangeFunction={functionToSetSearchValue}/>
            </div>
            <div>
                <div className="h-screen pt-[20px]">
                    {filteredValuesOfVideos && filteredValuesOfVideos.length > 0 ? <div>
                        <div className="text-2xl xl:text-3xl 2xl:text-4xl mb-[50px] mt-[10px] text-black ml-[20px]">
                        {Title && Title.length > 0 ? 
                        <div>{Title[0]}</div> : filteredValuesOfVideos && filteredValuesOfVideos.length > 0 ? 
                        <div>{filteredValuesOfVideos[0].genre}</div> : <div></div>}
                        </div>
                            <Slider {...settings} className="w-[100%] flex justify-center overflow-x-hidden">

                                {filteredValuesOfVideos && filteredValuesOfVideos.length > 0 && filteredValuesOfVideos?.map((element: any, index: number) => {
                                    return (
                                        <div key={element.code} className="px-1 transition duration-150 ease-in-out transform hover:scale-100 wipe-transition">
                                            <Link to={`/VideoDetails/${element.code}`} state={{ title: element.topics }}>
                                                <motion.img src={`https://i.ytimg.com/vi/${element.code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]"/>
                                            </Link>
                                            {/* initial={{ rotate: -180 }} // Initial rotation
  animate={{ rotate: 0 }} // Animated rotation
  transition={{ duration: 0.5 }} key={element.code}  */}
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div> : <div className="text-center text-2xl flex justify-center items-center mt-[150px]">
                                No Record
                        </div>}
                </div>
            </div>
            <div>
                <Footer />
            </div>
            <div>
                <Footer2 />
            </div>
        </div>
    )
}

export default ShowSearchComponent;