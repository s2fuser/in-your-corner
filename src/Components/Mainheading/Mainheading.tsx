import React from 'react'
import BackgroundImage from '../../Assets/Images/Background2.png'

const Mainheading = () => {
    return (
        <div className='bg-red-100 w- full h-80 font-sans sm:pl-[3px] sm:pr-[3px]'>
            {/* <img src={BackgroundImage} alt="" className="mt-[-100px] h-[400px] w-[100%] sm:h-[240px]" /> */}
            <h1 className=' text-4xl font-semibold text-center mt-1 pt-11 font-sans sm:text-2xl'>
               WELCOME TO OUR VIDEO LIBARY
            </h1>
            
            <h3 className='text-red-600 text-2xl text-center pt-6 font-sans sm:text-lg'>
                A free streaming library of over 150 films <br/> featuring the real stories of real people who met the real Jesus.
            </h3>
            <h1 className='text-4xl font-semibold text-center pt-24 font-sans sm:text-3xl sm:mt-[-3%]' >
                FEATURED FILMS
            </h1>
           
        </div>
    )
}

export default Mainheading
