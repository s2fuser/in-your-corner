import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ContactUsPage = () => {

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
      <div className="h-[50vh]">Coming Soon</div>
      <div>
        <FooterComponent onClickToHome={handleClick} />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default ContactUsPage;
