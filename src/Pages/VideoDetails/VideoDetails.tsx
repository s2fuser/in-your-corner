import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";

const VideoDetailsPage = () => {

    const { Code } = useParams(); 

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="flex text-center font-sans h-screen mt-[50px]">
                <div className="w-[400px]">
                    <p className="text-left text-2xl font-semibold">Description:</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${Code}?si=bCkUnjDDE14xK6hB&amp;controls=0`} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] md:w-[250px] lg:w-[700px] lg:ml-[200px] md:h-[125px] lg:h-[350px] justify-center sm:ml-[30px] sm:w-[300px] sm:h-[160px]"></iframe> 
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