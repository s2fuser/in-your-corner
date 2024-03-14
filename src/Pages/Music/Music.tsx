import React from "react";
import TrellesTuneComponent from "../ProLifeVideos/TrellesTune";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";

const MusicComponent = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="mb-[30px]">
                <TrellesTuneComponent />
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}

export default MusicComponent