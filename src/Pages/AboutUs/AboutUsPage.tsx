import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import AboutUsComponent from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";

const AboutUsPage = () => {
    return  (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <AboutUsComponent />
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

export default AboutUsPage