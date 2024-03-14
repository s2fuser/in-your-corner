import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useFetch from "../../hooks/useFetchHook";
import { Link } from "react-router-dom";

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
    type?: string
}

type SizeProp2 = {
    type2?: string
}

const VideoSlider2: React.FC<SizeProp> = ({ type }) => {
    return (
        <div className="flex justify-center m-auto overflow-x-hidden mt-[20px]">
            { 
                <SliderComponent2 type2 = {type == "true" ? "true" : "false"} />
            }
        </div>
    );
};


export default VideoSlider2;

export const SliderComponent2: React.FC<SizeProp2> = ({ type2 }) => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            // Update slidesToShow based on screen size
            if (window.innerWidth <= 1024) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const {data} = useFetch('code');

    const isSmallScreen = window.innerWidth <= 500;
    return (
        <Slider {...((type2 == "true" ? settingsForBrowseVideos : settings))} slidesToShow={slidesToShow} className="w-[1500px] flex justify-center overflow-x-hidden">

            {/* {data && data.length > 0 && data?.map((element: any, index: number) => {
                return (
                    <div key={index} className="px-1">
                        <Link to={`/VideoDetails/${element.Code}`}>
                            <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                        </Link>
                    </div>  
                )
            })} */}
            
            <Link to={`/VideoDetails/${"mq1V-YQKT6k"}`} state={{title: "Hope Lives in Hohenwald"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/mq1V-YQKT6k/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"_KPn9AHXF3I"}`} state={{title: "Hope Lives in Hohenwald"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/_KPn9AHXF3I/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"oa920gMvLaI"}`} state={{title: "Forgotten No More"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"Z3SJJ7v8RdU"}`} state={{title: "Hope Lives in Hohenwald"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"ooBN3O9G6fA"}`} state={{title: "Hope Lives in Hohenwald"}}>
                <div className="px-1">

                    <img src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
        </Slider>
    );
};