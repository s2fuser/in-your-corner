import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YouTube from "react-youtube";
import Contact from "../../Components/Contact/Contact";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Components/Button/Button";
import Back from "../../Assets/Images/Background1.png";
import '../../index.css';

const VideoDetailsPage = () => {
  const location = useLocation();
  const { title } = location.state;
  const { Code } = useParams();
  const [LogInEmail, getLogInEmail] = useState<string | null>("");
  const [ViewVideo, setViewVideo] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getLogInEmailLocal = () => {
    getLogInEmail(localStorage.getItem("LogInEmail"));
    newFunc(localStorage.getItem("LogInEmail"));
    // localStorage.removeItem("LogInEmail")
    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
      console.log("sinide iframwe tag");
      iframe.classList.add(
        "w-[100%]",
        "h-44",
        "lg:w-[800px]",
        "lg:h-[450px]",
        "xl:w-[900px]",
        "2xl:w-[1000px]",
        "2xl:h-[500px]",
        "3xl:w-[800px]",
        "3xl:h-[450px]",
        "md:h-[300px]"
      ); // Add Tailwind CSS classes for width and height
    }
  };

  const newFunc = (value: any) => {
    if (
      (LogInEmail != undefined && LogInEmail != null && LogInEmail != "") ||
      (value != undefined && value != null && value != "")
    ) {
      setViewVideo(true);
    } else {
      return toast.error("Please Log In to view video");
    }
  };

  const VideoRestrict = () => {
    toast.error("Please Log In to view video");
  };

  const handleVideoReady = (event: any) => {
    const player = event.target;
    player.getIframe().addEventListener("click", getLogInEmailLocal);
    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
      console.log("sinide iframwe tag");
      iframe.classList.add(
        "w-[100%]",
        "h-44",
        "lg:w-[800px]",
        "lg:h-[450px]",
        "xl:w-[900px]",
        "2xl:w-[1000px]",
        "2xl:h-[500px]",
        "3xl:w-[800px]",
        "3xl:h-[450px]",
        "md:h-[300px]"
      ); // Add Tailwind CSS classes for width and height
    }
  };

  useEffect(() => {
    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
      console.log("sinide iframwe tag");
      iframe.classList.add(
        "w-[100%]",
        "h-44",
        "lg:w-[800px]",
        "lg:h-[450px]",
        "xl:w-[900px]",
        "2xl:w-[1000px]",
        "2xl:h-[500px]",
        "3xl:w-[800px]",
        "3xl:h-[450px]",
        "md:h-[300px]"
      ); // Add Tailwind CSS classes for width and height
    }
  }, [windowWidth]);

  return (
    // <div>
    //     <div>
    //         <Header />
    //     </div>
    //     <div>
    //         <Navbar />
    //     </div>
    //     <div className="flex flex-col-reverse lg:flex-row justify-end lg:justify-center text-center font-sans h-screen lg:mt-[50px] mt-[20px] lg:px-4 gap-6 lg:gap-0 md:gap-[60px] xl:mt-[150px]">
    //         <div className="lg:w-[400px] xl:w-[560px] 2xl:text-[720px] pl-4 pr-4 lg:ml-[17px]">
    //             <h2 className="text-left text-2xl xl:text-3xl 2xl:text-4xl 2xl:mb-[20px] 3xl:text-5xl font-semibold py-4">{title}</h2>
    //             <p className="text-left text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl font-semibold lg:mb-[20px]">Description:</p>
    //             <p className="text-left xl:text-xl 2xl:text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    //         </div>
    //         <div className="lg:pl-2 lg:pl-0 flex justify-center">
    //             {/* <iframe onClick={getLogInEmailLocal} src={`https://www.youtube.com/embed/${Code}?si=bCkUnjDDE14xK6hB&amp;controls=0`} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[200px] md:h-[125px] lg:h-[350px] lg:justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>  */}

    //             {!ViewVideo ? (<div style={{ position: 'relative' }}>
    //                 <div
    //                     style={{
    //                         position: 'absolute',
    //                         top: 0,
    //                         left: 0,
    //                         width: '100%',
    //                         height: '100%',
    //                         cursor: 'pointer',
    //                     }}
    //                     onClick={getLogInEmailLocal}
    //                     />
    //                     <YouTube
    //                     videoId={Code}
    //                     opts={{
    //                         playerVars: {
    //                         autoplay: 0,
    //                         },
    //                     }}
    //                     onReady={handleVideoReady}
    //                     className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[90px] md:h-[125px] lg:h-[350px] lg:justify-center  sm:w-[300px] sm:h-[160px]"
    //                     />
    //             </div>) : (<div style={{ position: 'relative' }} className="second:w-[200px]" >
    //                     <YouTube
    //                     videoId={Code}
    //                     opts={{

    //                         playerVars: {
    //                         autoplay: 1,
    //                         },
    //                     }}
    //                     onReady={handleVideoReady}
    //                     className=""
    //                     />
    //             </div>)}
    //         </div>
    //     </div>
    //     <div>
    //         <Footer />
    //     </div>
    //     <div>
    //         <Footer2 />
    //     </div>
    // </div>

    <div>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="text-center pt-10 pb-4">
        <h2 className="text-3xl font-semibold text-center mt-[-20px] font-sans sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="px-2">
        <p className="text-red-600 text-2xl text-center text-sm font-sans lg:text-2xl md:text-2xl xl:text-2xl xl:mt-[20px] xl:text-xl sm:mt-[30px] md:mt-[30px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      {/* <div className="px-2">
                <p className="text-center text-lg text-red-900 font-semibold pb-3">We’re celebrating all God has done over the last 15 years and encouraging you to take action!</p>
            </div>
            <div className="px-2 flex justify-center">
                <h5 className="text-center text-red-900 w-[424px]">Check back here throughout the day for more interviews
                    with special guests,short films and a bunch of surprises.
                    Remember, you can go from VIEWING TO DOING.
                    <span className="font-semibold"> <br /> And today is the day to start!</span></h5>
            </div> */}
      {/* <VideoPlayer /> */}
      {/* <div className="flex justify-center py-8 px-2">
                <Link to={`/VideoDetails/${"oa920gMvLaI"}`} state={{title: "Forgotten No More"}}>
                    <div className="px-1">
                        <img src={`https://i.ytimg.com/vi/oa920gMvLaI/maxresdefault.jpg`} alt="" className="rounded-[20px] lg:w-[900px] lg:h-[450px] h-[220px] w-[500px] md:h-[260px]" />
                    </div>
                </Link>
            </div> */}

      <div className="flex justify-center py-8 px-2 lg:ml-[-170px] xl:ml-[-280px] 2xl:ml-[-350px] 3xl:ml-[-150px]">
        {/* <iframe onClick={getLogInEmailLocal} src={`https://www.youtube.com/embed/${Code}?si=bCkUnjDDE14xK6hB&amp;controls=0`} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[200px] md:h-[125px] lg:h-[350px] lg:justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>  */}

        {!ViewVideo ? (
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={getLogInEmailLocal}
            />
            <YouTube
              videoId={Code}
              opts={{
                playerVars: {
                  autoplay: 0,
                },
              }}
              onReady={handleVideoReady}
              className="rounded-[25px] md:w-[450px] lg:w-[700px] lg:ml-[90px] md:h-[225px] lg:h-[350px] lg:justify-center sm:w-[300px] sm:h-[160px]"
            />
          </div>
        ) : (
          <div style={{ position: "relative" }} className="second:w-[200px]">
            <YouTube
              videoId={Code}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              onReady={handleVideoReady}
              className="lg:ml-[200px] xl:ml-[280px] 2xl:ml-[350px] 2xl:mb-[-100px] 3xl:ml-[140px]"
            />
          </div>
        )}
      </div>

            <div className="flex justify-center px-2 pt-2 pb-8 lg:mt-[80px] xl:mt-[80px] 2xl:mt-[150px] 3xl:mt-[80px] md:mt-[50px]">
                {/* <div className="wave-background">
                    <div className="wave"></div>
                </div> */}
                <Link to="/Videos">
                    <ButtonComponent name={'View All Videos'} style="text-red-700 px-8 py-2 border border-2 border-red-700 rounded-3xl font-medium" />
                </Link>
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer/>
            </div>
            <div>
                <Footer2/>
            </div>
        </div>
    )
}

export default VideoDetailsPage;
