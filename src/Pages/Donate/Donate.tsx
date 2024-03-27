import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";

const DonateComponent = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LandingPageNavigationBar />
      </div>
      <div className="raleway h-[50vh]">Coming Soon</div>
      <div>
        <Footer />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default DonateComponent;
