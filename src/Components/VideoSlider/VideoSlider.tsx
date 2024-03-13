import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

export const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
};

export const settingsForImage = {
    dots: false,
    // infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    centerMode: false,
};

type ChildProps = {
    prop1: string;
}

const VideoSlider: React.FC<ChildProps> = ( { prop1 } ) => {
    return (
        <div className="absolute flex justify-center m-auto overflow-x-hidden mt-[20px]">
            {
                prop1 == "true" ? (
                    <SliderComponentForImage />
                ) : (
                    <SliderImage />
                )
            }
        </div>
    );
};

export default VideoSlider;

export const SliderComponent = () => {
    return (
        <Slider {...settings} className="w-[1500px] flex justify-center overflow-x-hidden">
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe>
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe>
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe>
            </div>
        </Slider>
    );
};

export const SliderComponentForImage = () => {
    return (
        <Slider {...settingsForImage} className="w-screen flex items-center justify-center mr-[-20px] sm:mr-[30px] sm:ml-[40px]">
            <div className="px-1 ml-[45px]">
                <img className='w-48 h-48 rounded-2xl' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
            </div>
            <div className="px-1 ml-[45px]">
                <img className='w-48 h-48 rounded-2xl' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
            </div>
            <div className="px-1 ml-[45px]">
                <img className='w-48 h-48 rounded-2xl' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" /> 
            </div>
            <div className="px-1 ml-[45px]">
                <img className='w-48 h-48 rounded-2xl' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
            </div>
        </Slider>
    );
};

export const SliderImage = () => {
    return (
        <Slider {...settings} className="w-[1500px] flex justify-center overflow-x-hidden">
            <div className="px-1">
                <Link to={`/VideoDetails/${"mq1V-YQKT6k"}`} state={{title: "Hope Lives in Hohenwald"}}>
                    <img className='rounded-[25px] w-[250px] px-2' src="https://i.ytimg.com/vi/mq1V-YQKT6k/maxresdefault.jpg" alt="" />
                </Link>
            </div>
            <div className="px-1">
                <Link to={`/VideoDetails/${"_KPn9AHXF3I"}`} state={{title: "Hope Lives in Hohenwald"}}>
                    <img className='rounded-[25px] w-[250px] px-2' src="https://i.ytimg.com/vi/_KPn9AHXF3I/maxresdefault.jpg" alt="" />
                </Link>
            </div>
            <div className="px-1">
                <Link to={`/VideoDetails/${"oa920gMvLaI"}`} state={{title: "Hope Lives in Hohenwald"}}>
                    <img className='rounded-[25px] w-[250px] px-2' src="https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg" alt="" /> 
                </Link>
            </div>
            <div className="px-1">
                <Link to={`/VideoDetails/${"Z3SJJ7v8RdU"}`} state={{title: "Hope Lives in Hohenwald"}} >
                    <img className='rounded-[25px] w-[250px] px-2' src="https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg" alt="" />
                </Link>
            </div>
            <div className="px-1">
                <Link to={`/VideoDetails/${"ooBN3O9G6fA"}`} state={{title: "Hope Lives in Hohenwald"}}> 
                    <img className='rounded-[25px] w-[250px] px-2' src="https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg" alt="" /> 
                </Link>
            </div>
        </Slider>
    );
};