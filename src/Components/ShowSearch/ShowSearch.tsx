import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

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

const ShowSearchComponent: React.FC<Prop> = ({ value }) => {
    return (
        <div className="h-screen pt-[150px]">
            {value && value.length > 0 ? <div>
                <div className="text-2xl xl:text-3xl 2xl:text-4xl mb-[50px] mt-[10px] text-black ml-[20px]">
                {value && value.length > 0 ? 
                <div>{value[0].genre}</div> : <div></div>}
                </div>
                <Slider {...settings} className="w-[100%] flex justify-center overflow-x-hidden">

                    {value && value.length > 0 && value?.map((element: any, index: number) => {
                        return (
                            <div key={index} className="px-1">
                                <Link to={`/VideoDetails/${element.code}`} state={{ title: element.topics }}>
                                    <img src={`https://i.ytimg.com/vi/${element.code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                                </Link>
                            </div>
                        )
                    })}
                </Slider>
            </div> : <div className="text-center text-2xl flex justify-center items-center mt-[150px]">
                    No Record
                </div>}
        </div>
    )
}

export default ShowSearchComponent;