import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
};

const FeatureFilmsComponent = () => {
    return (
        <Slider {...settings}  className="w-[100%] flex justify-center overflow-x-hidden">

            {/* {data && data.length > 0 && data?.map((element: any, index: number) => {
                return (
                    <div key={index} className="px-1">
                        <Link to={`/VideoDetails/${element.Code}`}>
                            <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                        </Link>
                    </div>  
                )
            })} */}
            
            <Link to={`/VideoDetails/${"mq1V-YQKT6k"}`} state={{title: "Legends of Boxing, The Evander Holyfield Story"}}>
                <div className="px-1 xl:w-[150px] xl:h-[300px]">
                    <img src={`https://i.ytimg.com/vi/mq1V-YQKT6k/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] lg:w-[100px] lg:h-[100px] xl:h-[300px] xl:w-[100%]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"_KPn9AHXF3I"}`} state={{title: "Hope Lives in Hohenwald"}}>
                <div className="px-1 xl:w-[150px] xl:h-[300px]">
                    <img src={`https://i.ytimg.com/vi/_KPn9AHXF3I/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] lg:h-[100px] xl:h-[300px] xl:w-[100%]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"oa920gMvLaI"}`} state={{title: "Forgotten No More"}}>
                <div className="px-1 xl:w-[150px] xl:h-[300px]">
                    <img src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] lg:h-[100px] xl:h-[300px] xl:w-[100%]" />
                </div>
            </Link>

            <Link to={`/VideoDetails/${"ooBN3O9G6fA"}`} state={{title: "Country Stages to Gospel Hymns"}}>
                <div className="px-1 xl:w-[150px] xl:h-[300px]">
                    <img src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] lg:h-[100px] xl:h-[300px] xl:w-[100%]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"Z3SJJ7v8RdU"}`} state={{title: "Fight the Good Fight Documentary"}}>
                <div className="px-1 xl:w-[150px] xl:h-[300px]">
                    <img src={`https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] lg:h-[100px] xl:h-[300px] xl:w-[100%]" />
                </div>
            </Link>

            <Link to={`/VideoDetails/${"sZ0cOfq8JzM"}`} state={{title: "Hope Dealer aka Hope Lives in Hohenwald"}}>
                <div className="px-1 xl:w-[150px] xl:h-[300px]">
                    <img src={`https://i.ytimg.com/vi/sZ0cOfq8JzM/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px] lg:h-[100px] xl:h-[300px] xl:w-[100%]" />
                </div>
            </Link>
            
        </Slider>
    )
}

export default FeatureFilmsComponent