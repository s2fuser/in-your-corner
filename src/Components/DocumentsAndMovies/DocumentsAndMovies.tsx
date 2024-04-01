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
  
    const { data } = useFetch("code");
  
    const isSmallScreen = window.innerWidth <= 500;
    return (
      <Slider
        {...settings}
        slidesToShow={slidesToShow}
        centerPadding={centerPadding}
        className="w-[100%] flex justify-center overflow-x-hidden"
      >
        {/* {data && data.length > 0 && data?.map((element: any, index: number) => {
                  return (
                      <div key={index} className="px-1">
                          <Link to={`/VideoDetails/${element.Code}`}>
                              <img src={`https://i.ytimg.com/vi/${element.Code}/maxresdefault.jpg`} alt="" className="rounded-[25px] sm:w-[250px] sm:ml-[58px]" />
                          </Link>
                      </div>  
                  )
              })} */}
  
        {/* <Link
          to={`/VideoDetails/${"mq1V-YQKT6k"}`}
          state={{ title: "Legends of Boxing, The Evander Holyfield Story", description:"In this exclusive interview, boxing legend Evander Holyfield opens up about his iconic matches with Mike Tyson, the role of faith in his life and career, and his enduring legacy in the world of sports. Holyfield, a former heavyweight champion, shares insightful perspectives on his storied rivalry with Tyson, reflecting on the intense battles inside and outside the ring. As a devout Christian, Holyfield also discusses the importance of faith, sharing how his beliefs have shaped his journey and sustained him through triumphs and challenges. From his early days in the sport to his enduring impact on boxing history, Holyfield offers a candid and inspiring look into the heart of a champion. Join us for a compelling conversation with one of the greatest athletes of all time." }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
            <img
              src={`https://i.ytimg.com/vi/mq1V-YQKT6k/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
          </div>
        </Link> */}
  
        {/* <Link
          to={`/VideoDetails/${"79RsQpFC-lY"}`}
          // state={{ title: "Hope Lives in Hohenwald" }}
          state={{ title: "Evander Holyfield forgives Mike Tyson", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
            <img
              // src={`https://i.ytimg.com/vi/_KPn9AHXF3I/maxresdefault.jpg`}
              src={`https://i.ytimg.com/vi/79RsQpFC-lY/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
          </div>
        </Link> */}
  
        {/* <Link
          to={`/VideoDetails/${"oa920gMvLaI"}`}
          state={{ title: "Forgotten No More", description:"In the heart of the sun-kissed Dominican Republic, where turquoise waters meet golden sands, lies a world hidden from the gleaming resorts and bustling tourist strips. Here, nestled amidst the verdant landscape, are the humble villages known as Bateys. These pockets of life, often overlooked by the casual observer, tell a story of resilience, struggle, and hope." }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
            <img
              src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
          </div>
        </Link> */}
  
        <Link
          to={`/VideoDetails/${"ooBN3O9G6fA"}`}
          state={{ title: "Country Stages to Gospel Hymns", description:"Country Stages to Gospel Hymns | John Berry & Irlene Mandrell Stories." }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100 hover:opacity-70">
            <img
              src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
            {/* <div className="youtube-icon3 text-red">
              <img src={YoutubeImage} alt="YouTube Icon" className="hover:opacity-70"/>
            </div> */}
          </div>
        </Link>
  
        {/* <Link
          to={`/VideoDetails/${"Z3SJJ7v8RdU"}`}
          state={{ title: "Fight the Good Fight Documentary", description:`Fight the Good Fight Documentary | Kerry Pharr "Join us on an inspiring journey with Kerry Pharr in our documentary, 'Fight the Good Fight.' Discover the untold stories of resilience, courage, and unwavering determination as Kerry Pharr takes us through the highs and lows of his extraordinary life. From personal struggles to triumphant victories, this documentary showcases the power of fighting for what is right.` }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
            <img
              src={`https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
          </div>
        </Link> */}
  
        <Link
          to={`/VideoDetails/${"sZ0cOfq8JzM"}`}
          state={{ title: "Hope Dealer aka Hope Lives in Hohenwald", description:`Step into the heart of Hohenwald and witness the profound story of hope through the lens of its residents. "Hope Dealer" delves into the lives of everyday people who embody hope in the midst of life's trials and triumphs. From the vibrant streets to the serene countryside, this video encapsulates the resilience and spirit of a community bound together by the power of hope. Join us on a journey of inspiration, where hope isn't just a concept but a living, breathing force that shapes the very fabric of Hohenwald. Experience the stories that illuminate the human spirit and discover why hope truly lives in every corner of this remarkable town.` }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100 hover:opacity-70">
            <img
              // src={`https://i.ytimg.com/vi/sZ0cOfq8JzM/maxresdefault.jpg`}
              src={HopeInHohenwald}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
            {/* <div className="youtube-icon3 text-red">
              <img src={YoutubeImage} alt="YouTube Icon" className="hover:opacity-70"/>
            </div> */}
          </div>
        </Link>
  
        {/* Extra Videos */}
        <Link
          to={`/VideoDetails/${"LLQbHgtaq2M"}`}
          state={{ title: "Hope Dealer aka Hope Lives in Hohenwald", description:`In this video professional boxer, Jake Thomas demonstrates how to shadow box for beginners and how to shadow box like a pro. Learning how to shadow box is pretty simple. Most beginners ask how to shadow box in front of a mirror. This is done very easily. Just stand in front of a mirror and begin shadow boxing at your reflection. This will allow you to see if you are holding your hands correctly and how fluid your movement is. It will also show you how to shadow box better and how to shadow box correctly.` }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100 hover:opacity-70">
            <img
              src={`https://i.ytimg.com/vi/LLQbHgtaq2M/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
            {/* <div className="youtube-icon3 text-red">
              <img src={YoutubeImage} alt="YouTube Icon" className="hover:opacity-70"/>
            </div> */}
          </div>
        </Link>
        <Link
          to={`/VideoDetails/${"PElqu9qFNyo"}`}
          state={{ title: "Scott Thorson joins Kerry Pharr on In Your Corner", description:`Murder, Drugs, Kickboxing and Jesus: The Scott Thorson storyFormer kickboxing champion Scott Thorson joins Kerry Pharr on In Your corner to share his amazing story.` }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100 hover:opacity-70">
            <img
              src={`https://i.ytimg.com/vi/PElqu9qFNyo/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
            {/* <div className="youtube-icon3 text-red">
              <img src={YoutubeImage} alt="YouTube Icon" className="hover:opacity-70"/>
            </div> */}
          </div>
        </Link>
        <Link
          to={`/VideoDetails/${"KCWAHYq5CWs"}`}
          state={{ title: "Scott Thorson joins Kerry Pharr on In Your Corner", description:`Manny Pacquiao is one of my favorite boxers. I've been a huge fan of his for nearly 20 years. He is an incredible boxing talent. However, he is taking a huge risk in his next fight against Keith Thurman.
          Pacquiao is not only facing a much younger fighter in Thurman who is in his natural prime but he is also facing a fight against Father Time. No fighter has ever beaten Father Time. 
          I saw Father Time beat Ray Robinson on a black and white television when I was only seven. Later I saw many of the great champions go down in defeat to this unstoppable force called age. Ray Leonard lost to Hector Camacho, Muhammad Ali lost to Larry Holmes, Holmes to Mike Tyson and on and on because they stayed in the sport far too long.
          Does Pacman have enough left in the tank to beat Keith Thurman?` }}
        >
          <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100 hover:opacity-70">
            <img
              src={`https://i.ytimg.com/vi/KCWAHYq5CWs/maxresdefault.jpg`}
              alt=""
              className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
            />
            {/* <div className="youtube-icon3 text-red">
              <img src={YoutubeImage} alt="YouTube Icon" className="hover:opacity-70"/>
            </div> */}
          </div>
        </Link>
      </Slider>
    );
};

export default SliderComponent2;