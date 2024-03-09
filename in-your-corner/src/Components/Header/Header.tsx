import React from 'react'

const Header = () => {
    return (
        <div className='bg-red-700 w- full h-10 text-white  flex items-center justify-between'>
            <div className=' ml-14 flex items-center space-x-3'>
                <img src="https://www.svgrepo.com/show/424911/instagram-logo-facebook-2.svg"
                    alt="insta logo" className='w-5 h-5'></img>
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
