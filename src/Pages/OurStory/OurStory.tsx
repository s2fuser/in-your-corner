import React from "react";
import StoriesComponent from "../ProLifeVideos/Stories";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import AboutUsComponent from "../../Components/AboutUs/AboutUs";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import { useLocation, useNavigate } from "react-router-dom";

const OurStoryComponent = () => {

    const history = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/') {
        window.scrollTo(0, 0);
        } else {
        history('/');
        }
    };

    return (
        <div>
            <Header />
            <LandingPageNavigationBar />
            <div className="mb-[30px]">
                <StoriesComponent />
            </div>
            {/* <div>
                <AboutUsComponent />
            </div> */}
            <Footer onClickToHome={handleClick} />
            <Footer2 />
        </div>
    )
}

export default OurStoryComponent