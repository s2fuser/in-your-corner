import React from 'react'
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='bg-red-700 w- full h-10 text-white flex items-center justify-between'>
            <div className=' ml-14 flex items-center space-x-3'>
            <FaInstagram className="text-white font-sans" />
                <span>Follow Us On Instagram</span>
            </div>
            <div className='mr-10 flex items-center space-x-20 font-sans '>
                <div>
                    <span className='mr-16 font-sans'>Our Story</span>
                </div>
                <div className="flex space-x-5 font-sans">
                    <span className='font-sans'>Login</span>
                    <span className="font-sans">Signup</span>
                </div>

            </div>

        </div>
    )
}

export default Header
