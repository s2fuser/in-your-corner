import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import { useLocation, useNavigate } from "react-router-dom";

const DonateComponent = () => {

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
      <div>
        <Header />
      </div>
      <div>
        <LandingPageNavigationBar />
      </div>
      <div className="raleway h-[50vh]">Coming Soon</div>
      <div>
        <Footer onClickToHome={handleClick} />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default DonateComponent;
