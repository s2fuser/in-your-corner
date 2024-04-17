import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HopeInHohenwald from '../../Assets/Images/HopeInHohenwald.jpg'

type Prop = {
    Data: any;
}

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
};

const MostPopularFilmsComponent: React.FC<Prop> = ({ Data }) => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
          // Update slidesToShow based on screen size
          if (window.innerWidth <= 639) {
            setSlidesToShow(1);
          }
          else if(window.innerWidth <= 1024 && window.innerWidth >= 641) {
            setSlidesToShow(2);
          } 
          else {
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

    return (
        <div className="w-[100%] flex justify-center overflow-x-hidden sm:mt-[40px]">

            <Slider
                {...(settings)}
                slidesToShow={slidesToShow}
                className="w-[100%] flex justify-center overflow-x-hidden"
            >
                {Data && Data.length > 0 && Data?.map((element: any, index: number) => {
                    return (
                        <Link to={`/VideoDetails/${element.code}`} state={{ title: element.topics, description: element.description }}>
                            <div key={index} className="px-1 py-[10px] transition duration-150 ease-in-out transform hover:scale-100">
                                {element.code == 'sZ0cOfq8JzM' ? <img src={HopeInHohenwald} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[94px] hover:opacity-70 w-full h-full object-cover BoxShadox" /> : <img src={`https://i.ytimg.com/vi/${element.code}/maxresdefault.jpg`} alt={element.topics} className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70 BoxShadox" />}
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </div>
    )
}

export default MostPopularFilmsComponent;