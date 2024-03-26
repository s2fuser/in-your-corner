import React from "react";
import Header from "../../Components/Header/Header";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import ProLifeSlider from "./ProLifeSlider";
import StoriesComponent from "./Stories";
import TrellesTuneComponent from "./TrellesTune";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";




const ProLifeVideos = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <LandingPageNavigationBar />
            </div>
            <div>
                <ProLifeSlider />
                {/* <div>
                    <StoriesComponent />
                </div>
                <div>
                    <TrellesTuneComponent />
                </div> */}
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

export default ProLifeVideos