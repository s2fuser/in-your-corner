import React from "react";
import EmailComponent from "../../Components/Email/EmailComponent";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import axios from "axios";

const RegisterPage = () => {
    const [Email, setEmail] = useState('');

    const [SearchValue, setSearchValue] = useState<any>();
    const [AllVideosDetails, setAllVideosDetails] = useState<any>();
    const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();
  
    useEffect(() => {
      fetchData();
    });

    const history = useNavigate();
    const location = useLocation();

    const handleClick = () => {
      if (location.pathname === '/') {
        window.scrollTo(0, 0);
      } else {
        history('/');
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

    const SubmittingRegister = () => {
        console.log(Email)
    }

    return (
        <div>
            <Header />
            <LandingPageNavigationBar searchValue={SearchValue}
            onChangeFunction={functionToSetSearchValue} />
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
            <Footer onClickToHome={handleClick} />
            <Footer2 />
        </div>
    )
}

export default RegisterPage