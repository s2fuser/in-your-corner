import React from "react";
import EmailComponent from "../../Components/Email/EmailComponent";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";

const RegisterPage = () => {
    const [Email, setEmail] = useState('');

    const SubmittingRegister = () => {
        console.log(Email)
    }

    return (
        <div>
            <Header />
            <LandingPageNavigationBar />
            <div className="mt-[80px] mb-[50px]">
                <EmailComponent Email={Email} setEmail={setEmail} />
            </div>
            <div className="text-center mb-[40px]">
                <button className="border border-solid border-red-900 border-2 pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-[25px] text-red-900 text-lg" onClick={SubmittingRegister}>
                    Register
                </button>
            </div>
            <div className="text-center">
                <p className="mb-[20px] text-2xl">Already a member?</p>
                <Link to="/LogIn">
                    <button className="mb-[50px] border border-solid border-red-900 border-2 pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-[25px] text-red-900">
                        LOG IN HERE
                    </button>
                </Link>
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}

export default RegisterPage