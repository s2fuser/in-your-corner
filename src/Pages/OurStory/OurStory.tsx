import React from "react";
import StoriesComponent from "../ProLifeVideos/Stories";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";

const OurStoryComponent = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="mb-[30px]">
                <StoriesComponent />
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}

export default OurStoryComponent