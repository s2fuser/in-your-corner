import React from 'react'
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='bg-red-700 w- full h-10 text-white flex items-center justify-between'>
            <div className=' ml-14 flex items-center space-x-3'>
            <FaInstagram className="text-white" />
                <span>Follow Us On Instagram</span>
            </div>
            <div className='mr-10 flex items-center space-x-20  '>
                <div>
                    <span className='mr-16'>Our Story</span>
                </div>
                <div className="flex space-x-5">
                    <span className=''>Login</span>
                    <span className="">Signup</span>
                </div>

            </div>

        </div>
    )
}

export default Header
