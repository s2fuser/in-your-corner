import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

type Prop = {
    genre: string,
    values: any,
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

const TopicWiseSearchComponent: React.FC<Prop> = ( { genre, values } ) => {
    return (
        <div>
            <div className="text-2xl xl:text-3xl 2xl:text-4xl mb-[50px] mt-[30px] text-white">
                {genre}
            </div>
            <Slider {...settings} className="w-[100%] flex justify-center overflow-x-hidden">

                {values && values.length > 0 && values?.map((element: any, index: number) => {
                    return (
                        <div key={index} className="px-1">
                            <Link to={`/VideoDetails/${element.code}`} state={{title: element.topics}}>
                                <img src={`https://i.ytimg.com/vi/${element.code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                            </Link>
                        </div>  
                    )
                })}
            </Slider>
        </div>
    )
}

export default TopicWiseSearchComponent