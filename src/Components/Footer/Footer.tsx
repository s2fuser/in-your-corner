import React from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from "../../Assets/Images/whiteLogo.png";

const DonateURL = 'https://give.tithe.ly/?formId=9379b56b-bd7f-4cbf-b2fb-b39ff1cc093b';

type Prop = {
    onClickToHome?: any,
}

const Footer: React.FC<Prop> = ( { onClickToHome } ) => {
    return (
        <div className='bg-red-950  w- full h-96 text-white flex justify-between font-serif sm:block sm:h-fit' >
            <div className='ml-20 font-sans sm:mt-[-3px] md:mt-[-37px] lg:mt-[9px] sm:flex-1 sm:ml-[10px]'>
                <img className='w-[200px] h-15 pt-11 lg:mt-[-50px] lg:ml-[-45px]  sm:ml-[-35px] xl:w-[250px]' src={WhiteLogo} alt='' />
                <p className='text-sm font-sans font-sans mt-[-15px] xl:text-xl 2xl:text-2xl xl:pb-[50px]'>IN Your Corner Productions specializes in cre-<br />ating Christian themed television programs,<br />acclaimed documentaries, gospel music,and <br />ministry videos to help promote other<br />faith based non-profits. </p>
            </div>
            <div className='flex flex-col pt-11 text-sm mr-40 font-sans sm:flex-1 sm:ml-[10px]' >
                <span className='pb-8 font-sans xl:text-xl 2xl:text-2xl'>Navigation</span>
                {/* <Link to="/"> */}
                    <span className='font-sans xl:text-xl 2xl:text-2xl cursor-pointer' onClick={onClickToHome}>Home</span>
                {/* </Link> */}
                <Link to="/ourStory">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Our Story</span>
                </Link>
                <Link to="/team">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Team</span>
                </Link>
                <Link to="/blog">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Blogs</span>
                </Link>
                <Link to="/Videos">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Videos</span>
                </Link>
                {/* <Link to="/trellestune">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Music</span>
                </Link> */}
                {/* <Link to="/donate"> */}
                <a href={DonateURL} target="_blank" rel="noopener noreferrer">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Donate</span>
                </a>
                {/* </Link> */}
                <Link to="/contact">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Contact us</span>
                </Link>
                <Link to="/aboutUs">
                    <span className='font-sans xl:text-xl 2xl:text-2xl sm:mb-[20px] sm:pb-[30px]'>About us</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer
