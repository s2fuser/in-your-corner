import React from "react";
import Header from "../Header/Header";
import Navbar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";

const SampleOurStory = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="h-[50vh]">Our Story Page</div>
            <div>
                <Footer />
            </div>
            <div>
                <Footer2 />
            </div>
        </div>
    )
}

export default SampleOurStory