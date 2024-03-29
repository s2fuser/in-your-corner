import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  type?: string;
  VideoType?: string;
};

type SizeProp2 = {
  type2?: string;
};

const VideoSlider2: React.FC<SizeProp> = ({ type, VideoType }) => {
  return (
    <div className="flex justify-center m-auto overflow-x-hidden mt-[20px]">
      {VideoType == "ProLifeVideos" ? (
        <ProlifeVideosSlider type2={type == "true" ? "true" : "false"} />
      ) : VideoType == "Stories" ? (
        <StoriesSlider type2={type == "true" ? "true" : "false"} />
      ) : VideoType == "TrellesTune" ? (
        <TrellesTuneSlider type2={type == "true" ? "true" : "false"} />
      ) : VideoType == "InYourCornerTvShow" ? (<InYourCornerTvShow type2={type == "true" ? "true" : "false"} />) : (
        <SliderComponent2 type2={type == "true" ? "true" : "false"} />
      )}
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
      if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
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
      {...(type2 == "true" ? settingsForBrowseVideos : settings)}
      slidesToShow={slidesToShow}
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

      <Link
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
      </Link>

      <Link
        to={`/VideoDetails/${"ooBN3O9G6fA"}`}
        state={{ title: "Country Stages to Gospel Hymns", description:"Country Stages to Gospel Hymns | John Berry & Irlene Mandrell Stories." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
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
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/sZ0cOfq8JzM/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      {/* This one is an extra video */}
      <Link
        to={`/VideoDetails/${"I9RqB3yMfMc"}`}
        state={{ title: "Exorcism in America Teaser", description:`Demons are evil, unclean, vicious spirits (do not have a body) who seek to possess the bodies of men and women. Demonic oppression and possession are real. 

        The New Testament tells us some of the signs of demon possession The demons can speak through their victims, they can demonstrate new abilities, show different personalities, and exhibit suicidal tendencies. 
        
        The main thing to understand is that demon-possessed people are controlled by this demonic presence. Though the symptoms may look like mere psychological dysfunction, in actuality, the problem is demon possession. These wicked Spirits can be cast out in Christ’s name. 
        
        16 Once when we were going to the place of prayer, we were met by a female slave who had a spirit by which she predicted the future. She earned a great deal of money for her owners by fortune-telling. 17 She followed Paul and the rest of us, shouting, “These men are servants of the Most High God, who are telling you the way to be saved.” 18 She kept this up for many days. Finally, Paul became so annoyed that he turned around and said to the spirit, “In the name of Jesus Christ I command you to come out of her!” At that moment the spirit left her. (Acts 16:18 NIV)` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/I9RqB3yMfMc/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
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
      if (window.innerWidth <= 1024) {
          setSlidesToShow(2);
      } else {
      setSlidesToShow(3);
      }
    };

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
      {...(type2 == "true" ? settingsForBrowseVideos : settings)}
      slidesToShow={slidesToShow}
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

      <Link
        to={`/VideoDetails/${"zeP1I8O8Q-o"}`}
        state={{ title: "Famous Actress/Model Jennifer O'Neil", description:`In 1988, O'Neill became a born-again Christian and, inspired by her feelings of regret over having an abortion at age 22, became active in the anti-abortion movement. She has since authored several books, including a memoir, Surviving Myself (1999), in which she detailed her career, marriages, experiences with anxiety and postpartum depression, and her religious faith. O'Neill founded the Hope & Healing at Hillenglade foundation in Nashville, Tennessee, an equine therapy foundation that specializes in treating war veterans suffering from post-traumatic stress disorder.` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/zeP1I8O8Q-o/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        to={`/VideoDetails/${"zeP1I8O8Q-o"}`}
        state={{ title: "Coping With Abortion, The Path to Restoration", description:`In 1988, O'Neill became a born-again Christian and, inspired by her feelings of regret over having an abortion at age 22, became active in the anti-abortion movement. She has since authored several books, including a memoir, Surviving Myself (1999), in which she detailed her career, marriages, experiences with anxiety and postpartum depression, and her religious faith. O'Neill founded the Hope & Healing at Hillenglade foundation in Nashville, Tennessee, an equine therapy foundation that specializes in treating war veterans suffering from post-traumatic stress disorder.` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/zeP1I8O8Q-o/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        // to={`/VideoDetails/${"_VfNxJweiGE"}`}
        to={`/VideoDetails/${"aVcKhRFeNQg"}`}
        // state={{ title: "MlKs Niece Dr. Alveda Kings Story" }}
        state={{ title: "Don't Let Grief Kill You", description:`Nothing in life can prepare us for the death of a loved one. Whether death results from a sudden accident or a sustained illness, it always catches us off-guard. Death is so deeply personal and stunningly final; that nothing can emotionally prepare us for its arrival. With every death, there is a loss. And with every loss, there will be grief.

        Grief doesn’t come and go in an orderly, confined timeframe. When we think the pangs of anguish have stolen their last breath, another wave sweeps in, and we are forced to revisit the memories, the pain, and the fear. Sometimes we try to resist the demands of grieving. We long to avoid this fierce yet holy pilgrimage.
        
        Culture tells us to move past this process quickly. Take a few days, weeks perhaps, to grieve, but don’t stay there too long. Grieving can make those around us uncomfortable. Friends sometimes don’t know what to do with our pain. Loved ones struggle to find adequate words to comfort our aching wounds.
        
        Yet grief, as painful a season as it is, is a necessary part of our healing. To run from grief is to run from the very thing that can quell the pain of our loss. Our grief has a purpose if we come to God and use Bible verses and prayer for healing. Grieving is the process God uses to bring us to a place of wholeness.
        
        Grieving can be the most difficult time for people. Trying to balance the feelings of pain and loss from now on with your everyday life. Give yourself space and time, be honest with your emotions, don't grieve alone, and don't lose hope. This collection of Bible verses allows us to turn to scripture for ease and comfort as we overcome grief.
        
        Top Bible Verses about Grief to Comfort You
        Matthew 5:4 - Blessed are those who mourn, for they shall be comforted.
        
        Revelation 21:4 - He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.”
        
        Psalm 147:3 - He heals the brokenhearted and binds up their wounds.
        
        1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.
        
        Psalm 34:18 - The Lord is near to the brokenhearted and saves the crushed in spirit.
        
        Matthew 11:28-30 - Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            // src={`https://i.ytimg.com/vi/_VfNxJweiGE/maxresdefault.jpg`}
            src={`https://i.ytimg.com/vi/aVcKhRFeNQg/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        // to={`/VideoDetails/${"voqmTrExetQ"}`}
        to={`/VideoDetails/${"pwd_uqdqxc0"}`}
        // state={{ title: "Actress Lauren Romans Story" }}
        state={{ title: "How Do I Know If I'm Going To Heaven?", description:`This video will explain to you what the Bible says about spending eternity in heaven!` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            // src={`https://i.ytimg.com/vi/voqmTrExetQ/maxresdefault.jpg`}
            src={`https://i.ytimg.com/vi/pwd_uqdqxc0/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>
      
      <Link
        // to={`/VideoDetails/${"voqmTrExetQ"}`}
        to={`/VideoDetails/${"p00CtTVAUOI"}`}
        // state={{ title: "Pro-Life Activist Victoria Robinson" }}
        state={{ title: "Raising Holyfield: The Night Evander Dethroned Tyson", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            // src={`https://i.ytimg.com/vi/voqmTrExetQ/maxresdefault.jpg`}
            src={`https://i.ytimg.com/vi/p00CtTVAUOI/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        to={`/VideoDetails/${"tBa8Ow8hPOI"}`}
        state={{ title: "Pro-Life Defender Scott Hord", description:`Scott Hord tells how God led him to begin rescuing children in front of the abortion clinics in Nashville, TN. Over the last ten years, Scott has helped rescue hundreds of children from the abortion mills all over middle America.` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/tBa8Ow8hPOI/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
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
      if (window.innerWidth <= 1024) {
          setSlidesToShow(2);
      } else {
      setSlidesToShow(3);
      }
    };

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
      {...(type2 == "true" ? settingsForBrowseVideos : settings)}
      slidesToShow={slidesToShow}
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

      <Link
        to={`/VideoDetails/${"ooBN3O9G6fA"}`}
        state={{
          title:
            "Country Stages to Gospel Hymns (John Berry & Irlene Mandrell)", description:`Country Stages to Gospel Hymns | John Berry & Irlene Mandrell Stories.`
        }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        to={`/VideoDetails/${"KqdfAh6QQCY"}`}
        state={{ title: "Zig Ziglar Last TV Interview", description:`The renowned motivational speaker  Zig Ziglar was born prematurely in Coffee County, Alabama, to John Silas Ziglar and Lila Wescott Ziglar. He was the tenth of 12 children, and the youngest boy. 

        In 1931, when Ziglar was five years old, his father (John Ziglar) took a management position at a Mississippi farm, and his family moved to Yazoo City, Mississippi, where he spent most of his early childhood. The next year, his father died of a stroke, and his younger sister died two days later.
        
        Ziglar met his wife, Jean, in 1944, in Jackson, Mississippi. He was 17 and she was 16; they married in late 1946. They had four children: Suzan, Tom, Cindy, and Julie.
        
        Commitment to Christianity took place on Independence Weekend 1972. "I claim July 4th as my "born again day."
        
        Ziglar, a Baptist, integrated Christianity into his motivational work. He was also a Republican who endorsed former Governor of Arkansas Mike Huckabee for his party's presidential nomination in 2008.` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/KqdfAh6QQCY/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
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
      if (window.innerWidth <= 1024) {
          setSlidesToShow(2);
      } else {
      setSlidesToShow(3);
      }
    };

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
      {...(type2 == "true" ? settingsForBrowseVideos : settings)}
      slidesToShow={slidesToShow}
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

      <Link
        to={`/VideoDetails/${"-Nli8LqX4rU"}`}
        state={{ title: "Trelle, Nita & Benny Sing", description:"Trelle and her siblings Benny and Nita sing Peace in The Valley." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/-Nli8LqX4rU/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        to={`/VideoDetails/${"wftl7HABS8U"}`}
        state={{ title: "Trelle Sings Crossing Over", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/wftl7HABS8U/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      {/* <Link
        to={`/VideoDetails/${"Z3SJJ7v8RdU"}`}
        state={{ title: "Trelle Sings, My God is Real", description:`Did you know that Heaven sings and God speaks?  Here's the proof in a song that came straight from there. Take a listen and give it a 'like'.` }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/Z3SJJ7v8RdU/maxresdefault.jpg`}
            alt=""
            className="rounded-[25px] sm:w-[250px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link> */}
    </Slider>
  );
};

export const InYourCornerTvShow: React.FC<SizeProp2> = ({ type2 }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Update slidesToShow based on screen size
      if (window.innerWidth <= 1024) {
          setSlidesToShow(2);
      } else {
      setSlidesToShow(3);
      }
    };

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
      {...(type2 == "true" ? settingsForBrowseVideos : settings)}
      slidesToShow={slidesToShow}
      className="w-[100%] flex justify-center overflow-x-hidden"
    >

      {/* <Link
        to={`/VideoDetails/${"mq1V-YQKT6k"}`}
        state={{ title: "Legends of Boxing, The Evander Holyfield Story", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/mq1V-YQKT6k/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link> */}

      <Link
        to={`/VideoDetails/${"_KPn9AHXF3I"}`}
        state={{ title: "Hope Lives in Hohenwald", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/_KPn9AHXF3I/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        to={`/VideoDetails/${"oa920gMvLaI"}`}
        state={{ title: "Forgotten No More", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      <Link
        to={`/VideoDetails/${"ooBN3O9G6fA"}`}
        state={{ title: "Country Stages to Gospel Hymns", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/ooBN3O9G6fA/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

      {/* <Link
        to={`/VideoDetails/${"Z3SJJ7v8RdU"}`}
        state={{ title: "Fight the Good Fight Documentary", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
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
        state={{ title: "Hope Dealer aka Hope Lives in Hohenwald", description:"In this video Evander Holyfield talks to Kerry Pharr about forgiving Mike Tyson after Tyson bit part of his ear off." }}
      >
        <div className="px-1 transition duration-150 ease-in-out transform hover:scale-100">
          <img
            src={`https://i.ytimg.com/vi/sZ0cOfq8JzM/maxresdefault.jpg`}
            alt=""
            className="rounded-[20px] sm:w-[200px] sm:ml-[58px] hover:opacity-70"
          />
        </div>
      </Link>

    </Slider>
  );
};