import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import BlogCard from "./BlogCard";
import Footer2 from "../../Components/Footer2/Footer2";
import FooterComponent from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "What Makes Content Engaging Is Relevancy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
  ]);

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
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-10">
          {blogs.map((item, index) => (
            <BlogCard
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
      <div>
        <FooterComponent onClickToHome={handleClick} />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Blog;
