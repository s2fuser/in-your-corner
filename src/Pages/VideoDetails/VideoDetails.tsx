import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YouTube from 'react-youtube';

const VideoDetailsPage = () => {

    const location = useLocation();
    const { title } = location.state;
    const { Code } = useParams(); 
    const [LogInEmail, getLogInEmail] = useState<string | null>('');
    const [ViewVideo, setViewVideo] = useState<boolean>(false);

    const getLogInEmailLocal = () => {
        getLogInEmail(localStorage.getItem("LogInEmail")) 
        newFunc(localStorage.getItem("LogInEmail"))
        // localStorage.removeItem("LogInEmail")
    }

    const newFunc = (value: any) => {
        if((LogInEmail != undefined && LogInEmail != null && LogInEmail != '') || (value != undefined && value != null && value != '')) {
            setViewVideo(true)
        }
        else {
            return  toast.error('Please Log In to view video')
        }
    }

    const VideoRestrict = () => {
        toast.error('Please Log In to view video')
    }

    const handleVideoReady = (event: any) => {
        const player = event.target;
        player.getIframe().addEventListener('click', getLogInEmailLocal);
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-end lg:justify-center text-center font-sans h-screen lg:mt-[50px] mt-[20px] lg:px-4 gap-6 lg:gap-0">
                <div className="lg:w-[400px] pl-4 pr-4 lg:ml-[-35px]">
                    <h2 className="text-left text-2xl font-semibold py-2">{title}</h2>
                    <p className="text-left text-2xl font-semibold">Description:</p>
                    <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="pl-2 lg:pl-0">
                    {/* <iframe onClick={getLogInEmailLocal} src={`https://www.youtube.com/embed/${Code}?si=bCkUnjDDE14xK6hB&amp;controls=0`} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[200px] md:h-[125px] lg:h-[350px] lg:justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe>  */}

                    {!ViewVideo ? (<div style={{ position: 'relative', width: '640px', height: '360px' }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                cursor: 'pointer',
                            }}
                            onClick={getLogInEmailLocal}
                            />
                            <YouTube
                            videoId={Code}
                            opts={{
                                height: '390',
                                width: '640',
                                playerVars: {
                                autoplay: 0,
                                },
                            }}
                            onReady={handleVideoReady}
                            className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[90px] md:h-[125px] lg:h-[350px] lg:justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"
                            />
                    </div>) : (<div style={{ position: 'relative', width: '640px', height: '360px' }} >
                            <YouTube
                            videoId={Code}
                            opts={{
                                height: '390',
                                width: '640',
                                playerVars: {
                                autoplay: 1,
                                },
                            }}
                            onReady={handleVideoReady}
                            className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[90px] md:h-[125px] lg:h-[350px] lg:justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"
                            />
                    </div>)}
                </div>
            </div>
            <div>
                <Footer />
            </div>
            <div>
                <Footer2 />
            </div>
        </div>
    )
}

export default VideoDetailsPage