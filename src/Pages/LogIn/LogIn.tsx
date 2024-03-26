import React from "react";
import EmailComponent from "../../Components/Email/EmailComponent";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";

const LogInPage = () => {
    const [Email, setEmail] = useState('');
    const navigate = useNavigate();

    const handlesubmit = async () => {
        localStorage.setItem("LogInEmail", Email);
        SuccessToaster();
        navigate('/')
        // try {
        //     const response = await axios.post('http://localhost:8000/login', {Email: Email});
        //     console.log(response)
        //     SuccessToaster()
        // } catch (error) {
        //     console.log(error);
        //     FailureToaster();
        // }
    }

    const SuccessToaster = () => {
        toast.success('Log In Success')
    }

    const FailureToaster = () => {
        toast.error('Log In Failed')
    }

    return (
        <div>
            <Header />
            <LandingPageNavigationBar />
            <div className="mt-[50px]">
                <EmailComponent Email={Email} setEmail={setEmail} />
            </div>
            <div className="text-center mt-[50px]">
                <button className="mb-[50px] border border-solid border-red-900 border-2 pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-[25px] text-red-900" onClick={handlesubmit}>
                    Log In
                </button>
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}

export default LogInPage