import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";

const ContactUsPage = () => {
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
        <FooterComponent />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default ContactUsPage;
