import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-red-950  w- full h-64 text-white flex justify-between font-serif sm:block sm:h-auto' >
            <div className='ml-20 font-sans sm:flex-1 sm:ml-[10px]'>
                <img className='w-32 h-15 pt-11' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='' />
                <p className='pt-6 text-sm font-sans font-sans'>IN Your Corner Productions specializes in cre-<br />ating Christian themed television programs,<br />acclaimed documentaries, gospel music,and <br />ministry videos to help promote other<br />faith based non-profits </p>
            </div>
            <div className='flex flex-col pt-11 text-sm mr-40 font-sans sm:flex-1 sm:ml-[10px]' >
                <span className='pb-8 font-sans'>Navigation</span>
                <span className='font-sans'>Home</span>
                <span className='font-sans'>Our Story</span>
                <span className='font-sans'>Team</span>
                <span className='font-sans'>Contact us</span>
                <span className='font-sans'>Blogs</span>
                <span className='font-sans'>Videos</span>
                <span className='font-sans sm:mb-[20px]'>Donate</span>
            </div>
        </div>
    )
}

export default Footer
