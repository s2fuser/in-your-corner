import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetchHook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YoutubeImage from '../../Assets/Images/Youtube.png'
import HopeInHohenwald from '../../Assets/Images/HopeInHohenwald.jpg'
import { Link } from "react-router-dom";
import '../../index.css';
import axios from "axios";

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

export const settingsForSmallScreen = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: false,
};

export const settingsForBrowseVideos = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: false,
};

type SizeProp = {
  type?: string;
  VideoType?: string;
};

type SizeProp2 = {
  type2?: string;
};

export const SliderComponent2 = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [AllVideosResponse, setAllVideosResponse] = useState<any>([]);
  const [centerPadding, setCenterPadding] = useState<string | undefined>('');

  useEffect(() => {
    const handleResize = () => {
      // Update slidesToShow based on screen size
      if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
        setCenterPadding('50px');
      } else {
        setSlidesToShow(4);
        setCenterPadding(undefined);
      }
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/getMovies");
    // const response: any = await axios.get("http://localhost:8000/api/getMovies");
    console.log(response.data.data)
    setAllVideosResponse(response.data.data);
  };

  return (
    <Slider
      {...settings}
      slidesToShow={slidesToShow}
      centerPadding={centerPadding}
      className="w-[100%] flex justify-center overflow-x-hidden"
    >
      {AllVideosResponse && AllVideosResponse.length > 0 && AllVideosResponse?.map((element: any, index: number) => {
        return (
          <Link to={`/VideoDetails/${element.code}`} state={{ title: element.topics, description: element.description }}>
            <div key={index} className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
              {element.code == 'sZ0cOfq8JzM' ? <img src={HopeInHohenwald} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70 w-full h-full object-cover" /> : <img src={`https://i.ytimg.com/vi/${element.code}/maxresdefault.jpg`} alt={element.topics} className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70" />}
            </div>
          </Link>
        )
      })}
    </Slider>
  );
};

export default SliderComponent2;