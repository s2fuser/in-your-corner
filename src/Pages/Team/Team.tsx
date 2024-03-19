import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import FooterComponent from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavigationBar/NavigationBar";

const Team = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="h-[50vh]">Team Page</div>
      <div>
        <FooterComponent />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Team;
