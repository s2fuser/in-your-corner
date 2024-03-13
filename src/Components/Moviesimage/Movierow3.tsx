import React from 'react'
import VideoSlider from '../VideoSlider/VideoSlider'
import VideoSlider2 from '../VideoSlider2/VideoSlider2'

const Movierow3 = () => {
  return (
    <div>
            <div className='w-full h-100 mb-8 overflow-x-hidden sm:mt-[-45px]'>
                <h1 className=' text-4xl font-semibold text-center mt-8 pb-4 sm:text-3xl '>
                    COLLECTION
                </h1>
               <div className='flex justify-between mt-4 sm:mt-[-20px]'>
                    <VideoSlider2 type="true"/>
               </div>
            </div>
        </div>
  )
}

export default Movierow3
