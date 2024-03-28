import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WhiteLogo from "../../Assets/Images/whiteLogo.png";

const DonateURL = 'https://give.tithe.ly/?formId=9379b56b-bd7f-4cbf-b2fb-b39ff1cc093b';

type Prop = {
    onClickToHome?: any,
}

const Footer: React.FC<Prop> = ({ onClickToHome }) => {

    const Navigate = useNavigate();
    const location = useLocation();

    const handleClick = (event: any) => {
        console.log(event)
        if ((location.pathname === '/' && event.currentTarget.innerText == "Home") || (location.pathname === '/ourStory' && event.currentTarget.innerText == "Our Story") || (location.pathname === '/team' && event.currentTarget.innerText == "Team") || (location.pathname === '/blog' && event.currentTarget.innerText == "Blogs") || (location.pathname === '/Videos' && event.currentTarget.innerText == "Videos") || (location.pathname === '/contact' && event.currentTarget.innerText == "Contact us") || (location.pathname === '/aboutUs' && event.currentTarget.innerText == "About us")) {
            window.scrollTo(0, 0);
        } else {
            let Value = (event.currentTarget.innerText == "Home" ? '/' : (event.currentTarget.innerText == "Our Story" ? '/ourStory' : (event.currentTarget.innerText == "Team" ? '/team' : (event.currentTarget.innerText == "Blogs" ? '/blog' : (event.currentTarget.innerText == "Videos" ? '/Videos' : (event.currentTarget.innerText == "Contact us" ? '/contact' : (event.currentTarget.innerText == "About us" ? '/aboutUs' : '/')))))))
            Navigate(Value);
        }
    };

    return (
        <div className='bg-red-950  w- full h-96 text-white flex justify-between font-serif sm:block sm:h-fit' >
            <div className='ml-20 font-sans sm:mt-[-3px] md:mt-[-37px] lg:mt-[9px] sm:flex-1 sm:ml-[10px]'>
                <img className='w-[200px] h-15 pt-11 lg:mt-[-50px] lg:ml-[-45px]  sm:ml-[-35px] xl:w-[250px]' src={WhiteLogo} alt='' />
                <p className='text-sm font-sans font-sans mt-[-15px] xl:text-xl 2xl:text-2xl xl:pb-[50px] raleway'>IN Your Corner Productions specializes in cre-<br />ating Christian themed television programs,<br />acclaimed documentaries, gospel music,and <br />ministry videos to help promote other<br />faith based non-profits. </p>
            </div>
            <div className='flex flex-col pt-11 text-sm mr-40 font-sans sm:flex-1 sm:ml-[10px]' >
                <div className='text-center pb-8 font-sans xl:text-xl 2xl:text-2xl raleway sm:ml-[-130px]'>Navigation</div>
                <div className='lg:flex lg:space-x-20'>
                    <div>
                        {/* <Link to="/"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer raleway' onClick={handleClick}>Home</div>
                        {/* </Link> */}
                        {/* <Link to="/ourStory"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer raleway' onClick={handleClick}>Our Story</div>
                        {/* </Link> */}
                        {/* <Link to="/team"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer raleway' onClick={handleClick}>Team</div>
                        {/* </Link> */}
                        {/* <Link to="/blog"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer raleway' onClick={handleClick}>Blogs</div>
                        {/* </Link> */}
                    </div>
                    <div>
                        {/* <Link to="/Videos"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer raleway' onClick={handleClick}>Videos</div>
                        {/* </Link> */}
                        {/* <Link to="/trellestune">
                    <div className='font-sans xl:text-xl 2xl:text-2xl'>Music</div>
                </Link> */}
                        {/* <Link to="/donate"> */}
                        <a href={DonateURL} target="_blank" rel="noopener noreferrer">
                            <div className='font-sans xl:text-xl 2xl:text-2xl raleway'>Donate</div>
                        </a>
                        {/* </Link> */}
                        {/* <Link to="/contact"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer raleway' onClick={handleClick}>Contact us</div>
                        {/* </Link> */}
                        {/* <Link to="/aboutUs"> */}
                        <div className='font-sans xl:text-xl 2xl:text-2xl sm:mb-[20px] sm:pb-[30px] cursor-pointer raleway' onClick={handleClick}>About us</div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
