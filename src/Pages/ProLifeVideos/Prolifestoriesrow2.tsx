import React from 'react'
import VideoSlider2 from '../../Components/VideoSlider2/VideoSlider2'

const Prolifestoriesrow2 = () => {
  return (
    <div>
      <div className='w-full h-120 overflow-x-hidden'>
                <h1 className=' text-4xl font-semibold text-center mt-8 pb-4 sm:text-3xl'>
                    STORIES
                </h1>
               <div className='flex justify-between mt-4 sm:mt-[-20px] sm:mb-[20px]'>
                    <VideoSlider2 type="true"/>
               </div>
            </div>
    </div>
  )
}

export default Prolifestoriesrow2
