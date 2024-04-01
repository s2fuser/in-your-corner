import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiSend } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineAccessTime } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsPage = () => {
  const [SearchValue, setSearchValue] = useState<any>();
  const [AllVideosDetails, setAllVideosDetails] = useState<any>();
  const [filteredValuesOfVideos, setFilteredValuesOfAllVideos] = useState<any>();

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Subject, setSubject] = useState('');
  const [Details, setDetails] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchData();
  }, []);

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

  const RecaptchaChange =() => {
    console.log('recaptcha');
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   if((FirstName != null && FirstName != undefined && FirstName != '') && (LastName != null && LastName != undefined && LastName != '') && (Email != null && Email != undefined && Email != '') && (Phone != null && Phone != undefined && Phone != '') && (Subject != null && Subject != undefined && Subject != '') && (Details != null && Details != undefined && Details != '')) {
  //     SuccessToaster()
  //     console.log('Submitted');
  //     console.log('event', event);
  //     event.preventDefault();
  //     const recaptchaValue = await recaptchaRef.current.executeAsync();
  //     console.log('Form submitted with reCAPTCHA token:', recaptchaValue);
  //     console.log(FirstName)
  //     console.log(LastName)
  //     console.log(Email)
  //     console.log(Phone)
  //     console.log(Subject)
  //     console.log(Details)
  //   }
  //   else{
  //     FailureToaster()
  //   }
  // }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    
    // Validate form fields
    if (
      FirstName.trim() &&
      LastName.trim() &&
      Email.trim() &&
      Phone.trim() &&
      Subject.trim() &&
      Details.trim()
    ) {
      try {
        const recaptchaValue = await recaptchaRef.current.executeAsync();
        console.log('Form submitted with reCAPTCHA token:', recaptchaValue); 
        SuccessToaster();
        setTimeout(() => {
          history('/');
        }, 3000)
      } catch (error) {
        console.error('reCAPTCHA validation error:', error);
        FailureToaster();
      }
    } else {
      FailureToaster();
    }
  };

  const recaptchaRef = useRef<any>();

  const HandleFirstNameChange = (event: any) => {
    setFirstName(event.target.value)
  }

  const HandleLastNameChange = (event: any) => {
    setLastName(event.target.value)
  }

  const HandleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const HandlePhoneChange = (event: any) => {
    setPhone(event.target.value)
  }

  const HandleSubjectChange = (event: any) => {
    setSubject(event.target.value)
  }

  const HandleDetailsChange = (event: any) => {
    setDetails(event.target.value)
  }

  const SuccessToaster = () => {
    toast.success('Submitted Successfully');
  }

  const FailureToaster = () => {
    toast.error('Please Fill all the Fields')
  }

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
                  value={FirstName}
                  onChange={HandleFirstNameChange}
                />
              </div>
              <div>
                <p className="font-bold text-left text-sm">Last Name*</p>

                <input
                  className="px-[10px] py-[8px] text-black text-sm border border-contactUsBorder"
                  type="text"
                  placeholder=""
                  value={LastName}
                  onChange={HandleLastNameChange}
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
                  value={Email}
                  onChange={HandleEmailChange}
                />
              </div>
            </div>
            <div>
              <div className="mt-[30px] mb-[30px]">
                <p className="font-bold text-left text-sm">Phone*</p>

                <input
                  className="px-[10px] py-[8px] w-[100%] text-black text-sm border border-contactUsBorder"
                  type="number"
                  placeholder=""
                  value={Phone}
                  onChange={HandlePhoneChange}
                />
              </div>
            </div>
            <div>
              <div className="mt-[30px] mb-[30px]">
                <p className="font-bold text-sm text-left">Subject*</p>
                {/* <textarea
                  className="px-[10px] py-[8px] w-[100%] text-black text-sm border border-contactUsBorder"
                  placeholder=""
                /> */}
                <input
                  className="px-[10px] py-[8px] w-[100%] text-black text-sm border border-contactUsBorder"
                  type="text"
                  placeholder=""
                  value={Subject}
                  onChange={HandleSubjectChange}
                />
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold text-sm text-left">Details*</p>

                <textarea
                  className="px-[10px] py-[8px] w-[100%] h-[100px] text-black text-sm border border-contactUsBorder"
                  placeholder=""
                  value={Details}
                  onChange={HandleDetailsChange}
                />
              </div>
            </div>
            <div>
              {/* <div className="g-recaptcha"
                    data-sitekey="6LcwwqopAAAAAD6T-F43H4n6jy3mgFP-7kZsQvyL"
                    data-callback="onSubmit"
                    data-size="invisible">
              </div>
              <button className="bg-contactUsBG text-white text-sm rounded-[5px] px-[8px] py-[10px] mt-[10px]">
                Submit
              </button> */}
              <form onSubmit={handleSubmit}>
                {/* Form Inputs */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6LcwwqopAAAAAD6T-F43H4n6jy3mgFP-7kZsQvyL"
                  onChange={RecaptchaChange}
                />
                <button
                  type="submit"
                  className="bg-contactUsBG text-white text-sm rounded-[5px] px-[8px] py-[10px] mt-[10px]"
                >
                  Submit
                </button>
              </form>
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
