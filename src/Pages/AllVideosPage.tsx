import Header from "../Components/Header/Header";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Mainheading from "../Components/Mainheading/Mainheading";
import Movierow1 from "../Components/Moviesimage/Movierow1";
import Movierow2 from "../Components/Moviesimage/Movierow2";
import Movierow3 from "../Components/Moviesimage/Movierow3";
import BrowseVideoPage from "../Components/BrowseVideoPage/BrowseVideo";
import Footer from "../Components/Footer/Footer";
import Footer2 from "../Components/Footer2/Footer2";
import StoriesComponent from "./ProLifeVideos/Stories";
import DocumentriesAndMovies from "./Documentries&Movies/DocumentriesAndMovies";
import LandingPageNavigationBar from "../Components/LandingPageNavigation/LandingPageNavigation";
import { useLocation, useNavigate } from "react-router-dom";

const AllVideosPageComponet = () => {

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
        <div className="overflow-x-hidden">
            <Header/>
            <LandingPageNavigationBar ActiveScreen="Videos"/>
            <Mainheading/>
            <div className="">
                <Movierow1/>
            </div>
            <Movierow2/>
            <Movierow3/>
            {/* <DocumentriesAndMovies /> */}
            {/* <StoriesComponent /> */}
            <BrowseVideoPage/>
            <Footer onClickToHome={handleClick}/>
            <Footer2/>
        </div>
    )
}

export default AllVideosPageComponet