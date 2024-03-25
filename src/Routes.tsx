import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageComponet from "./Pages/LandingPage";
import AllVideosPageComponet from "./Pages/AllVideosPage";
import Story from "./Pages/Story/Story";
import VideoDetailsPage from "./Pages/VideoDetails/VideoDetails";
import Blog from "./Pages/Blog/Blog";
import BlogContent from "./Pages/Blog/BlogContent";
import LogInPage from "./Pages/LogIn/LogIn";
import RegisterPage from "./Pages/Register/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUsPage from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import ProLifeVideos from "./Pages/ProLifeVideos/ProLifeVideos";
import OurStoryComponent from "./Pages/OurStory/OurStory";
import ProLifeSlider from "./Pages/ProLifeVideos/ProLifeSlider";
import TrellesTuneComponent from "./Pages/ProLifeVideos/TrellesTune";
import DonateComponent from "./Pages/Donate/Donate";
import MusicComponent from "./Pages/Music/Music";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import Know from "./Pages/Knowmore/Knowmore";
// import Joincommunity from "./Pages/Join our community/join our community";
import JoinOurCommunityButton from "./Components/JoinOurCommunity/JoinOurCommunitybutton";
// import Join from "./Pages/Join our community/Join our community";
import JoinOurCommunityPage from "./Pages/Join our community/Join our community";
import SampleOurStory from "./Components/SampleStory/SampleStory";

export const Routes1 = () => {
    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<LandingPageComponet />} />
                <Route path="/KnowMore" element={<Story />} />
                <Route path="/Know" element={<Know />} />
                <Route path="/JoinOurCommunity" element={<JoinOurCommunityPage/>} />
                <Route path="/Videos" element={<AllVideosPageComponet />} />
                <Route path="/VideoDetails/:Code" element={<VideoDetailsPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogContent />} />
                <Route path="/LogIn" element={<LogInPage />} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/team" element={<Team />} />
                <Route path="/prolifevideos" element={<ProLifeVideos />} />
                {/* <Route path="/prolifevideos" element={<ProLifeSlider />} /> */}
                <Route path="/stories" element={<OurStoryComponent />} />
                {/* <Route path="/trellestune" element={<TrellesTuneComponent />} />
                 */}
                <Route path="/trellestune" element={<MusicComponent />} />
                <Route path="/donate" element={<DonateComponent />} />
                <Route path="/aboutUs" element={<AboutUsPage />} />
                <Route path="/ourStory" element={<SampleOurStory />} />
            </Routes>
        </Router>
    )
}