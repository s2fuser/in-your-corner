import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DonateURL = 'https://give.tithe.ly/?formId=9379b56b-bd7f-4cbf-b2fb-b39ff1cc093b';

const Header = () => {
    return (
        <div className='bg-red-700 w- full h-14 lg:h-10 text-white lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between'>
            <div className='md:ml-14 lg:ml-14 flex items-center justify-center'>
                <FaInstagram className="text-white font-sans" />
                <p>Follow Us On Instagram</p>
            </div>
            <div className='lg:mr-10 md:mr-10 flex items-center justify-center font-sans gap-6 lg:gap-6'>
                <div className='flex items-center gap-6 lg:gap-6'>
                    <Link to="/ourStory">
                        <p className='font-sans'>Our Story</p>
                    </Link>
                    {/* <Link to="/donate"> */}
                    <a href={DonateURL} target="_blank" rel="noopener noreferrer">
                        <p className='font-sans'>Give</p>
                    </a>
                    {/* </Link> */}
                </div>
                <div className="flex space-x-5 font-sans">
                    <Link to="/LogIn">
                        <span className='font-sans'>Login</span>
                    </Link>
                    <Link to="/Register">
                        <span className="font-sans">Signup</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
