import React, { useEffect, useState } from 'react'
import VideoSlider2 from '../../Components/VideoSlider2/VideoSlider2'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

type Prop = {
  title?: string
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

const StoriesComponent: React.FC<Prop> = ({ title }) => {

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [Stories, setStories] = useState<any>([]);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const fetchData = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/getStories");
    setStories(response.data.data);
  };

  useEffect(() => {
    fetchData()
    const handleResize = () => {
      // Update slidesToShow based on screen size
      if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if ((Stories.length >= slidesToShow) || window.innerWidth <= 1024) {
      setAutoplayEnabled(true);
    } else {
      setAutoplayEnabled(false);
    }
  }, [Stories, slidesToShow]);

  return (
    <div>
      <div className='w-full h-120 overflow-x-hidden'>
        {title == 'true' ? <h1 className=' text-4xl font-semibold text-center mt-8 pb-4 sm:text-3xl'>
          STORIES
        </h1> : ''}
        <div className='flex justify-between mt-4 sm:mb-[20px]'>
          {/* <VideoSlider2 type="true" VideoType="Stories"/> */}
          <Slider
            {...(settings)}
            slidesToShow={slidesToShow}
            autoplay={(Stories.length >= slidesToShow) || window.innerWidth <= 1024 ? true : false}
            className="w-[100%] flex justify-center overflow-x-hidden"
          >
            {Stories && Stories.length > 0 && Stories?.map((element: any, index: number) => {
              return (
                <Link to={`/VideoDetails/${element.code}`} state={{ title: element.topics, description: element.description }}>
                  <div key={index} className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
                    <img src={`https://i.ytimg.com/vi/${element.code}/maxresdefault.jpg`} alt={element.topics} className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70" />
                  </div>
                </Link>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default StoriesComponent
