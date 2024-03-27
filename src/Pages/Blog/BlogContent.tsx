import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";
import SingleBlogContent from "./SingleBlogContent";
import { useLocation, useNavigate } from "react-router-dom";

const BlogContent = () => {

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
      <div className="sm:mb-[50px]">
        <SingleBlogContent />
      </div>
      <div>
        <FooterComponent onClickToHome={handleClick} />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default BlogContent;
