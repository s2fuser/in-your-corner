import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageComponet from "./Pages/LandingPage";
import AllVideosPageComponet from "./Pages/AllVideosPage";
import Story from "./Pages/Story/Story";
import VideoDetailsPage from "./Pages/VideoDetails/VideoDetails";
import LogInPage from "./Pages/LogIn/LogIn";
import RegisterPage from "./Pages/Register/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Routes1 = () => {
    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<LandingPageComponet />} />
                <Route path="/KnowMore" element={<Story />} />
                <Route path="/Videos" element={<AllVideosPageComponet />} />
                <Route path="/VideoDetails/:code" element={<VideoDetailsPage />} />
                <Route path="/LogIn" element={<LogInPage />} />
                <Route path="/Register" element={<RegisterPage />} />
            </Routes>
        </Router>
    )
}