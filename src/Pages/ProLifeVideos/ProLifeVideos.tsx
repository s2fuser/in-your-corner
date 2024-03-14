import React from "react";
import Header from "../../Components/Header/Header";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import ProlifevideoComponents from "./ProlifevideoComponents";
import Prolifestoriesrow2 from "./Prolifestoriesrow2";
import Prolifetunesrow3 from "./Prolifetunesrow3";




const ProLifeVideos = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <NavigationBar />
            </div>
            <div>
                <ProlifevideoComponents />
                <div>
                    <Prolifestoriesrow2 />
                </div>
                <div>
                    <Prolifetunesrow3 />
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

export default ProLifeVideos