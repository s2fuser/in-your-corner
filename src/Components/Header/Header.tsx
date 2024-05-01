import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const DonateURL =
  "https://give.tithe.ly/?formId=9379b56b-bd7f-4cbf-b2fb-b39ff1cc093b";

const Header = () => {
  return (
    <div className="bg-red-700 w- full h-14 lg:h-10 text-white lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
      <div className="md:ml-14 lg:ml-14 flex items-center justify-center">
        {/* <FaInstagram className="text-white font-sans " /> */}
        {/* <a href="https://www.facebook.com/boxncoach/" target="_blank" className="flex items-center justify-center"> */}
        <a href="https://www.facebook.com/KerryWPharr/" target="_blank" className="flex items-center justify-center">
          <FaFacebook className="text-white font-sans mr-[5px]"/>
          <p className="raleway">Follow Us On Facebook</p>
        </a>
        {/* </a> */}
      </div>
      <div className="lg:mr-10 md:mr-10 flex items-center justify-center font-sans gap-6 lg:gap-6">
        <div className="flex items-center gap-6 lg:gap-6">
          {/* <Link to="/ourStory"> */}
            {/* <p className="raleway hover:opacity-50 hover:text-white font-semibold text-base xl:text-lg 2xl:text-xl cursor-pointer">
              Our Story
            </p> */}
          {/* </Link> */}
          {/* <Link to="/donate"> */}
          {/* <a href={DonateURL} target="_blank" rel="noopener noreferrer">
            <p
              className="raleway hover:opacity-50 hover:text-white font-semibold text-base xl:text-lg 2xl:text-xl cursor-pointer
"
            >
              Give
            </p>
          </a> */}
          {/* </Link> */}
        </div>
        {/* <div className="flex space-x-5 font-sans">
          <Link to="/LogIn">
            <span
              className="raleway hover:opacity-50 hover:text-white font-semibold text-base xl:text-lg 2xl:text-xl cursor-pointer
"
            >
              Login
            </span>
          </Link>
          <Link to="/Register">
            <span
              className="raleway hover:opacity-50 hover:text-white font-semibold text-base xl:text-lg 2xl:text-xl cursor-pointer
"
            >
              Signup
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
