import Header from "../Components/Header/Header";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Mainheading from "../Components/Mainheading/Mainheading";
import Movierow1 from "../Components/Moviesimage/Movierow1";
import Movierow2 from "../Components/Moviesimage/Movierow2";
import Movierow3 from "../Components/Moviesimage/Movierow3";
import BrowseVideoPage from "../Components/BrowseVideoPage/BrowseVideo";
import Footer from "../Components/Footer/Footer";
import Footer2 from "../Components/Footer2/Footer2";
import StoriesComponent from "./ProLifeVideos/Stories";
import DocumentriesAndMovies from "./Documentries&Movies/DocumentriesAndMovies";
import LandingPageNavigationBar from "../Components/LandingPageNavigation/LandingPageNavigation";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image2 from "../Assets/Images/image2.jpg";

const AllVideosPageComponet = () => {

    const [SearchValue, setSearchValue] = useState<any>();
    const [AllVideosDetails, setAllVideosDetails] = useState<any>();
    const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();

    const history = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // fetchData();
    }, [])

    const handleClick = () => {
        if (location.pathname === '/') {
            window.scrollTo(0, 0);
        } else {
            history('/');
        }
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
        <div className="overflow-x-hidden">
            <Header />
            <div className="BoxShadowForAllVideo">
                <LandingPageNavigationBar searchValue={SearchValue}
                    onChangeFunction={functionToSetSearchValue} ActiveScreen="Videos" />
            </div>
            <div className="relative z-[-9]">
                <Mainheading />
            </div>
            <div className="">
                <Movierow1 />
            </div>
            <Movierow2 />
            <Movierow3 />
            {/* <DocumentriesAndMovies /> */}
            {/* <StoriesComponent /> */}
            <BrowseVideoPage />
            <div className="sm:h-[400px] md:h-[600px] 2xl:h-[900px]">
                <div
                    className="inset-0 bg-black sm:h-[400px] md:h-[600px] 2xl:h-[900px]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Image2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="z-[8] text-white grid place-items-center px-2 lg:ml-[-612px] lg:pl-36 sm:pt-[100px] md:pt-[200px] 2xl:pt-[300px]">
                        <div className="text-center lg:text-left">
                            <h2 className="raleway sm:text-2xl md:text-3xl lg:text-3xl  xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-semibold md:font-bold py-2 px-2 font-sans">
                                Reach out to us today
                            </h2>
                            <p className="raleway sm:text-2xl md:text-3xl lg:text-3xl text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light font-sans px-2">
                                to fulfill all your ministry{" "}
                                <span className="raleway md:text-3xl lg:text-3xl sm:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold font-sans">
                                    video
                                </span>
                            </p>
                            <h2 className="raleway md:text-3xl lg:text-3xl sm:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl sm:font-medium font-semibold md:font-bold pt-2 font-sans px-2 ">
                                production requirements.
                            </h2>
                        </div>
                        <div className="mt-14 text-center lg:text-left lg:ml-[-180px] xl:ml-[-260px] 2xl:ml-[-378px] 3xl:ml-[-500px]">
                            <Link to="/contact">
                                <button className="raleway border border-2  hover:text-black hover:border-white hover:bg-slate-100  border-white py-2 px-10 rounded-3xl sm:text-sm lg:text-2xl text-2xl font-sans xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer onClickToHome="Videos" />
            <Footer2 />
        </div>
    )
}

export default AllVideosPageComponet