import React from "react";
import EmailComponent from "../../Components/Email/EmailComponent";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";

const LogInPage = () => {
    const [Email, setEmail] = useState('');
    const navigate = useNavigate();

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
            <LandingPageNavigationBar searchValue={SearchValue}
            onChangeFunction={functionToSetSearchValue} />
            <div className="mt-[50px]">
                <EmailComponent Email={Email} setEmail={setEmail} />
            </div>
            <div className="text-center mt-[50px]">
                <button className="mb-[50px] border border-solid border-red-900 border-2 pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-[25px] text-red-900" onClick={handlesubmit}>
                    Log In
                </button>
            </div>
            <Footer onClickToHome={handleClick} />
            <Footer2 />
        </div>
    )
}

export default LogInPage