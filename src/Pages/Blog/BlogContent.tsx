import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";
import SingleBlogContent from "./SingleBlogContent";

const BlogContent = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="sm:mb-[50px]">
        <SingleBlogContent />
      </div>
      <div>
        <FooterComponent />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default BlogContent;
