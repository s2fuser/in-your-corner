import React from "react";
import TrellesTuneComponent from "../ProLifeVideos/TrellesTune";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import { useLocation, useNavigate } from "react-router-dom";

const MusicComponent = () => {

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
            <div>
                <LandingPageNavigationBar />
            </div>
            <div className="mb-[30px]">
                <TrellesTuneComponent />
            </div>
            <Footer onClickToHome="Trelles Tunes" />
            <Footer2 />
        </div>
    )
}

export default MusicComponent