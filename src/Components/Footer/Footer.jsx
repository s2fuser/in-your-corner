import React from 'react'
import { Link } from 'react-router-dom'
import WhiteLogo from "../../Assets/Images/whiteLogo.png"

const Footer = () => {
    return (
        <div className='bg-red-950  w- full h-96 text-white flex justify-between font-serif sm:block sm:h-fit' >
            <div className='ml-20 font-sans sm:flex-1 sm:ml-[10px]'>
                <img className='w-[200px] h-15 pt-11 lg:mt-[-50px] lg:ml-[-45px]  sm:ml-[-35px] xl:w-[250px]' src={WhiteLogo} alt='' />
                <p className='text-sm font-sans font-sans mt-[-15px] xl:text-xl 2xl:text-2xl xl:pb-[50px]'>IN Your Corner Productions specializes in cre-<br />ating Christian themed television programs,<br />acclaimed documentaries, gospel music,and <br />ministry videos to help promote other<br />faith based non-profits. </p>
            </div>
            <div className='flex flex-col pt-11 text-sm mr-40 font-sans sm:flex-1 sm:ml-[10px]' >
                <span className='pb-8 font-sans xl:text-xl 2xl:text-2xl'>Navigation</span>
                <Link to="/">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Home</span>
                </Link>
                {/* <Link to="/stories"> */}
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Our Story</span>
                {/* </Link> */}
                <Link to="/team">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Team</span>
                </Link>
                <Link to="/contact">
                    <span className='font-sans xl:text-xl 2xl:text-2xl'>Contact us</span>
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
                <Link to="/donate">
                    <span className='font-sans xl:text-xl 2xl:text-2xl sm:mb-[20px] sm:pb-[30px]'>Donate</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer
