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
    type?: string,
    VideoType?: string
}

type SizeProp2 = {
    type2?: string
}

const VideoSlider2: React.FC<SizeProp> = ({ type, VideoType }) => {
    return (
        <div className="flex justify-center m-auto overflow-x-hidden mt-[20px]">
            { 
                VideoType == "ProLifeVideos" ? (<ProlifeVideosSlider type2 = {type == "true" ? "true" : "false"} />) : ((VideoType == "Stories" ? (<StoriesSlider type2 = {type == "true" ? "true" : "false"} />) : ( (VideoType == "TrellesTune" ? <TrellesTuneSlider type2 = {type == "true" ? "true" : "false"} /> : <SliderComponent2 type2 = {type == "true" ? "true" : "false"} /> ) ) ) )
            }
        </div>
    );
};


export default VideoSlider2;

export const SliderComponent2: React.FC<SizeProp2> = ({ type2 }) => {

    const [slidesToShow, setSlidesToShow] = useState(3);
    const [AllVideosResponse, setAllVideosResponse] = useState<any>([]);

    useEffect(() => {
        const handleResize = () => {
            // Update slidesToShow based on screen size
            // if (window.innerWidth <= 1024) {
            //     setSlidesToShow(1);
            // } else {
                setSlidesToShow(3);
            // }
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
        <Slider {...((type2 == "true" ? settingsForBrowseVideos : settings))} slidesToShow={slidesToShow} className="w-[100%] flex justify-center overflow-x-hidden">

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

            <Link to={`/VideoDetails/${"ooBN3O9G6fA"}`} state={{title: "Country Stages to Gospel Hymns"}}>
                <div className="px-1">

                    <img src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"Z3SJJ7v8RdU"}`} state={{title: "Fight the Good Fight Documentary"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>

            <Link to={`/VideoDetails/${"sZ0cOfq8JzM"}`} state={{title: "Hope Dealer aka Hope Lives in Hohenwald"}}>
                <div className="px-1">

                    <img src={`https://i.ytimg.com/vi/sZ0cOfq8JzM/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
        </Slider>
    );
};

export const ProlifeVideosSlider: React.FC<SizeProp2> = ({ type2 }) => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            // Update slidesToShow based on screen size
            // if (window.innerWidth <= 1024) {
            //     setSlidesToShow(1);
            // } else {
                setSlidesToShow(3);
            // }
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
        <Slider {...((type2 == "true" ? settingsForBrowseVideos : settings))} slidesToShow={slidesToShow} className="w-[100%] flex justify-center overflow-x-hidden">

            {/* {data && data.length > 0 && data?.map((element: any, index: number) => {
                return (
                    <div key={index} className="px-1">
                        <Link to={`/VideoDetails/${element.Code}`}>
                            <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                        </Link>
                    </div>  
                )
            })} */}
            
            <Link to={`/VideoDetails/${"zeP1I8O8Q-o"}`} state={{title: "Famous Actress/Model Jennifer O'Neil"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/zeP1I8O8Q-o/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"zeP1I8O8Q-o"}`} state={{title: "Coping With Abortion, The Path to Restoration"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/zeP1I8O8Q-o/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"_VfNxJweiGE"}`} state={{title: "MlKs Niece Dr. Alveda Kings Story"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/_VfNxJweiGE/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"voqmTrExetQ"}`} state={{title: "Actress Lauren Romans Story"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/voqmTrExetQ/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"voqmTrExetQ"}`} state={{title: "Pro-Life Activist Victoria Robinson"}}>
                <div className="px-1">

                    <img src={`https://i.ytimg.com/vi/voqmTrExetQ/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>

            <Link to={`/VideoDetails/${"tBa8Ow8hPOI"}`} state={{title: "Pro-Life Defender Scott Hord"}}>
                <div className="px-1">

                    <img src={`https://i.ytimg.com/vi/tBa8Ow8hPOI/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
        </Slider>
    );
};

export const StoriesSlider: React.FC<SizeProp2> = ({ type2 }) => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            // Update slidesToShow based on screen size
            // if (window.innerWidth <= 1024) {
            //     setSlidesToShow(1);
            // } else {
                setSlidesToShow(3);
            // }
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
        <Slider {...((type2 == "true" ? settingsForBrowseVideos : settings))} slidesToShow={slidesToShow} className="w-[100%] flex justify-center overflow-x-hidden">

            {/* {data && data.length > 0 && data?.map((element: any, index: number) => {
                return (
                    <div key={index} className="px-1">
                        <Link to={`/VideoDetails/${element.Code}`}>
                            <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                        </Link>
                    </div>  
                )
            })} */}
            
            <Link to={`/VideoDetails/${"ooBN3O9G6fA"}`} state={{title: "Country Stages to Gospel Hymns (John Berry & Irlene Mandrell)"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"KqdfAh6QQCY"}`} state={{title: "Zig Ziglar Last TV Interview"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/KqdfAh6QQCY/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
        </Slider>
    );
};

export const TrellesTuneSlider: React.FC<SizeProp2> = ({ type2 }) => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            // Update slidesToShow based on screen size
            // if (window.innerWidth <= 1024) {
            //     setSlidesToShow(1);
            // } else {
                setSlidesToShow(3);
            // }
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
        <Slider {...((type2 == "true" ? settingsForBrowseVideos : settings))} slidesToShow={slidesToShow} className="w-[100%] flex justify-center overflow-x-hidden">

            {/* {data && data.length > 0 && data?.map((element: any, index: number) => {
                return (
                    <div key={index} className="px-1">
                        <Link to={`/VideoDetails/${element.Code}`}>
                            <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                        </Link>
                    </div>  
                )
            })} */}
            
            <Link to={`/VideoDetails/${"-Nli8LqX4rU"}`} state={{title: "Trelle, Nita & Benny Sing"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/-Nli8LqX4rU/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"wftl7HABS8U"}`} state={{title: "Trelle Sings Crossing Over"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/wftl7HABS8U/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
            <Link to={`/VideoDetails/${"Z3SJJ7v8RdU"}`} state={{title: "Trelle Sings, My God is Real"}}>
                <div className="px-1">
                    <img src={`https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                </div>
            </Link>
            
        </Slider>
    );
};