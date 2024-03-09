import React from 'react'

const Footer = () => {
    return (
        <div className='bg-red-950  w- full h-64 text-white flex justify-between font-serif ' >
            <div className='ml-20'>
                <img className='w-24 h-24 pt-11' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='' />
                <p className=' pt-6 text-sm'>IN Your Corner Productions specializes in cre-<br />ating Christian themed television programs,<br />acclaimed documentaries, gospel music,and <br />ministry videos to help promote other<br />faith based non-profits </p>
            </div>
            <div className='flex flex-col pt-11 text-sm mr-40' >
                <span className='pb-8'>Navigation</span>
                <span className=''>Home</span>
                <span>Our Story</span>
                <span>Team</span>
                <span>Contact us</span>
                <span>Blogs</span>
                <span>Videos</span>
                <span>Donate</span>
            </div>
        </div>
    )
}

export default Footer
