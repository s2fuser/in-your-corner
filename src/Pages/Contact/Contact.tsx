import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiSend } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineAccessTime } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsPage = () => {
  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] =
    useState<any>();

  useEffect(() => {
    fetchData();
  });

  const history = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      history("/");
    }
  };

  const fetchData = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/code");
    setAllVideosDetails(response.data.data);
  };

  const functionToSetSearchValue = (event: any) => {
    let ValueOfSearch = event.target.value;
    setSearchValue(ValueOfSearch);
    getFilteredData();
    // navigate(`/firstPageSearch/${ValueOfSearch}`);
  };

  const getFilteredData = () => {
    let FilteredItems =
      AllVideosDetails &&
      AllVideosDetails.filter((items: any) => {
        if (SearchValue != undefined) {
          return (
            items &&
            items.genre.toLowerCase().includes(SearchValue.toLowerCase())
          );
        }
      });
    if (SearchValue == "") {
      setFilteredValuesOfAllVideos(AllVideosDetails);
    } else {
      setFilteredValuesOfAllVideos(FilteredItems);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LandingPageNavigationBar
          searchValue={SearchValue}
          onChangeFunction={functionToSetSearchValue}
          ActiveScreen="Contact"
        />
      </div>
      <div>
        <p className="font-bold text-3xl text-center px-[20px] py-[10px] animate-fade-in-bottom">
          Contact Us
        </p>
        <hr className="centered-line" />
      </div>
      <div className="raleway text-center raleway text-xl flex justify-center items-center">
        <div className="flex justify-center items-center mx-[30px] my-[30px]">
          <div>
            <div className="lg:flex lg:space-x-6">
              <div className="sm:mb-[10px]">
                <p className="font-bold text-left text-sm ">First Name*</p>
                <input
                  className="px-[10px] py-[8px] text-black text-sm border border-contactUsBorder"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <p className="font-bold text-left text-sm">Last Name*</p>

                <input
                  className="px-[10px] py-[8px] text-black text-sm border border-contactUsBorder"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <div className="mt-[30px] mb-[30px]">
                <p className="font-bold text-left text-sm">Email*</p>

                <input
                  className="px-[10px] py-[8px] w-[100%] text-black text-sm border border-contactUsBorder"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold text-sm text-left">Issue*</p>
                <textarea
                  className="px-[10px] py-[8px] w-[100%] text-black text-sm border border-contactUsBorder"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold text-sm text-left">Details*</p>

                <textarea
                  className="px-[10px] py-[8px] w-[100%] h-[100px] text-black text-sm border border-contactUsBorder"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <button className="bg-contactUsBG text-white text-sm rounded-[5px] px-[8px] py-[10px] mt-[10px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterComponent onClickToHome="Contact Us" />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default ContactUsPage;
