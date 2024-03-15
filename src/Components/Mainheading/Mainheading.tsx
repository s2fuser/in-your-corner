import React from 'react'
import BackgroundImage from '../../Assets/Images/Background2.png'
import BackgroundImage3 from '../../Assets/Images/BackgrounImage3.png'

const Mainheading = () => {
    return (
        <div className='w- full h-80 font-sans sm:pl-[3px] sm:pr-[3px]'>
             {/* style={{ backgroundImage: "linear-gradient(170deg, red 35%, transparent 80%)" }} */}
            {/* <img src={BackgroundImage3} alt="" className="lg:mt-[-107px] lg:h-[300px] w-[100%] sm:h-[240px]" /> */}
            <h1 className=' text-4xl font-semibold text-center mt-1 pt-11 font-sans sm:text-2xl'>
            {/* lg:mt-[-290px] sm:mt-[-270px] */}
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
