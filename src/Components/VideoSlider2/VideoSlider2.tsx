import React from "react";
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

const VideoSlider2: React.FC = () => {
    return (
        <div className="flex justify-center m-auto overflow-x-hidden mt-[20px]">
            { 
                <SliderComponent2 />
            }
        </div>
    );
};


export default VideoSlider2;

export const SliderComponent2 = () => {

    const {data} = useFetch('code');

    const isSmallScreen = window.innerWidth <= 500;
    return (
        <Slider {...(isSmallScreen ? settingsForSmallScreen : settings)} className="w-[1500px] flex justify-center overflow-x-hidden">

            {data && data.length > 0 && data?.map((element: any, index: number) => {
                return (
                    <div key={index} className="px-1">
                        <Link to={`/VideoDetails/${element.Code}`}>
                            <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                        </Link>
                        {/* <iframe src={`https://www.youtube.com/embed/${element.Code}?si=bCkUnjDDE14xK6hB&amp;controls=0`} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] md:w-[250px] lg:w-[350px] md:h-[125px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>  */}
                    </div>  
                )
            })}
            
            {/* <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] md:w-[250px] md:h-[125px] lg:w-[350px] lg:h-[250px] px-2 ml-10 justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>
            </div> */}
        </Slider>
    );
};