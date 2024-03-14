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
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import ProLifeVideos from "./Pages/ProLifeVideos/ProLifeVideos";

export const Routes1 = () => {
    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<LandingPageComponet />} />
                <Route path="/KnowMore" element={<Story />} />
                <Route path="/Videos" element={<AllVideosPageComponet />} />
                <Route path="/VideoDetails/:Code" element={<VideoDetailsPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogContent />} />
                <Route path="/LogIn" element={<LogInPage />} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/prolifevideos" element={<ProLifeVideos />} />
            </Routes>
        </Router>
    )
}