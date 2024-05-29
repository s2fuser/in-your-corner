import React, { useEffect, useState } from "react";
import SearchBarComponent from "../SearchBar/SearchBar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import WhiteLogo from '../../Assets/Images/whiteLogo.png';
import mainlogo from "../../Assets/Images/logo.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import '../../index.css';

type Prop = {
  searchValue?: string;
  onChangeFunction?: any;
  ActiveScreen?: any;
  opacity?:any;
};

const LandingPageNavigationBar: React.FC<Prop> = ({
  searchValue,
  onChangeFunction,
  ActiveScreen,
  opacity
}) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const navigateFunction = () => {
    navigate(`/firstPageSearch?query=${searchValue}`);
    // /${searchValue}
  };

  const navItems = [
    { id: 1, text: 'Home', routeName: "/" },
    // { id: 2, text: 'Team', routeName: "/team" },
    // { id: 3, text: 'Blog', routeName: "/blog" },
    // { id: 2, text: 'Videos', routeName: "/Videos" },
    { id: 2, text: 'About Us', routeName: "/aboutUs" },
    { id: 3, text: 'Contact', routeName: "/contact" },

    // { id: 7, text: 'Pro-Life Voices', routeName: "/prolifevideos" },
    // { id: 7, text: 'Music', routeName: "/trellestune" },
  ];

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const element = document.getElementById("menu");
      if (element && window.innerWidth > 768) {
        AOS.init();
      }
    });
  }, []);

  return (
    // <div
    //   className="bg-slate-100 w-full p-7 flex items-center md:justify-between lg:justify-around "
    //   style={{ backgroundColor: "rgba(159, 159, 207, 0.65)" }} data-aos={window.innerWidth > 768 ? "zoom-in" : ""} id="menu"
    // >
    <div
    className="bg-slate-100 w-full p-7 flex items-center md:justify-between lg:justify-around "
    style={{
      backgroundColor: opacity == true ? "rgba(159, 159, 207, 0.4)" : "rgba(159, 159, 207, 0.95)"
    }} data-aos={window.innerWidth > 768 ? "zoom-in" : ""} id="menu"
  >
  
      <div className="">
        <Link to="/">
          <img
            className="w-[110px] lg:w-[140px] h-15"
            // src="https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png"
            src={mainlogo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="grid grid-cols-4 hidden lg:flex gap-x-7 mr-3 md:ml-[25px] md:mr-[186px] font-sans ml-[85px] xl:ml-[230px]">
        <Link to="/">
          <span className={ActiveScreen == "Home" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50 hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            Home
          </span>
        </Link>
        {/* <Link to="/team">
          <span className={ActiveScreen == "Team" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50 hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            Team
          </span>
        </Link>
        <Link to="/blog">
          <span className={ActiveScreen == "Blogs" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50 hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            Blogs
          </span>
        </Link> */}
        {/* <span>Videos</span> */}

        {/* <Link to="/Videos">
          <span className={ActiveScreen == "Videos" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50 hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            Videos
          </span>
        </Link> */}
        <Link to="/aboutUs">
          <span className={ActiveScreen == "AboutUs" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50 hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            About Us
          </span>
        </Link>

        <Link to="/contact">
          <span className={ActiveScreen == "Contact" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50  hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            Contact
          </span>
        </Link>
        <Link to={"https://give.tithe.ly/?formId=9379b56b-bd7f-4cbf-b2fb-b39ff1cc093b"}>
          <span className={ActiveScreen == "support" ? "raleway opacity-50 text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer" : "raleway hover:opacity-50 hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer"}>
            Support
          </span>
        </Link>

        {/* <Link to="/trellestune">
          <span>Music</span>
        </Link> */}
      </div>
      <div className="flex justify-center items-center sm:ml-[15px] md:ml-[-50px] ">
        <div>
          {/* onClick={navigateFunction} */}
          <SearchBarComponent
            searchValue={searchValue}
            onChangeFunction={onChangeFunction}
          />
        </div>
        {/* <div className='sm:ml-[-30px] md:ml-[60px] lg:ml-[10px] text-white' onClick={navigateFunction}>
          <IoSearch />
        </div> */}
      </div>

      {/* <div onClick={handleNav} className={ nav ? `block lg:hidden sm:ml-[22px] z-[999] ${nav ? ' fixed top-[90px] right-[20px]' : 'static sm:ml-[13px] '}` : `block lg:hidden sm:ml-[22px] z-[999]`}> */}
      <div onClick={handleNav} className="block lg:hidden sm:ml-[22px] z-[999]">
        {nav ? (
          <AiOutlineClose size={30} color="white" />
        ) : (
          <AiOutlineMenu size={30} color="black" />
        )}
      </div>

      <ul
        className={
          nav
            ? "fixed z-[9] lg:hidden left-0 top-0 w-[100%] h-full bg-black ease-in-out duration-500 text-black bg-opacity-80"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-[9]"
        }
      >
        {/* Mobile Logo */}
        <div className="py-6 pl-2">
          <img
            className="w-44 h-36 ml-[-21px] mt-[6px]"
            // src="https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png"
            src={WhiteLogo}
            alt="logo"
          />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.routeName}>
            <li
              key={item.id}
              // className="raleway p-4 font-bold text-center text-white rounded-xl cursor-pointer text-2xl animate-left-to-right"
              className={`raleway p-4 font-bold text-center text-white rounded-xl cursor-pointer text-2xl ${nav ? 'animate-left-to-right' : ''
                }`}
            >
              {item.text}
            </li>
          </Link>


        ))}
        <Link to={"https://give.tithe.ly/?formId=9379b56b-bd7f-4cbf-b2fb-b39ff1cc093b"}>
          <li className={`raleway p-4 font-bold text-center text-white rounded-xl cursor-pointer text-2xl ${nav ? 'animate-left-to-right' : ''
            }`}>
            Support
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LandingPageNavigationBar;
