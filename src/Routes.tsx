import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageComponet from "./Pages/LandingPage";
import AllVideosPageComponet from "./Pages/AllVideosPage";
import Story from "./Pages/Story/Story";
import VideoDetailsPage from "./Pages/VideoDetails/VideoDetails";
import Blog from "./Pages/Blog/Blog";
import BlogContent from "./Pages/Blog/BlogContent";

export const Routes1 = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPageComponet />} />
                <Route path="/KnowMore" element={<Story />} />
                <Route path="/Videos" element={<AllVideosPageComponet />} />
                <Route path="/VideoDetails/:Code" element={<VideoDetailsPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogContent />} />
            </Routes>
        </Router>
    )
}