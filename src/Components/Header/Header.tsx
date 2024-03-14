import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-red-700 w- full h-14 lg:h-10 text-white lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between'>
            <div className='md:ml-14 lg:ml-14 flex items-center justify-center'>
                <FaInstagram className="text-white font-sans" />
                <p>Follow Us On Instagram</p>
            </div>
            <div className='lg:mr-10 md:mr-10 flex items-center justify-center space-x-20 font-sans '>
                <div>
                    <Link to="/stories">
                        <span className='lg:mr-16 md:mr-16 font-sans'>Our Story</span>
                    </Link>
                </div>
                <div className="flex space-x-5 font-sans">
                    <Link to="/Register">
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
