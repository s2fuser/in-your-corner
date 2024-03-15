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

const AllVideosPageComponet = () => {
    return (
        <div className="overflow-x-hidden">
            <Header/>
            <NavigationBar/>
            <Mainheading/>
            <Movierow1/>
            <Movierow2/>
            <Movierow3/>
            <StoriesComponent />
            <BrowseVideoPage/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default AllVideosPageComponet