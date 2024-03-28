import React from "react";
import Header from "../Header/Header";
import Navbar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { useState, useEffect } from "react";
import axios from "axios";
import LandingPageNavigationBar from "../LandingPageNavigation/LandingPageNavigation";
import { useNavigate, useLocation } from 'react-router-dom';

const SampleOurStory = () => {

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

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LandingPageNavigationBar searchValue={SearchValue}
            onChangeFunction={functionToSetSearchValue} />
      </div>
      <div className="raleway h-[50vh]">Coming Soon</div>
      <div>
        <Footer onClickToHome="Our Story" />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default SampleOurStory;
