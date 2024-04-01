import React from 'react'
import VideoSlider from '../VideoSlider/VideoSlider'
import VideoSlider2 from '../VideoSlider2/VideoSlider2'
import FeatureFilmsComponent from '../FeatureFilms/FeatureFilms'

const Movierow1 = () => {
  return (
    <div className='w-full h-100 mt-1 mb-1 flex justify-between overflow-x-hidden sm:mt-[-75px]'>
        <div className='sm:mt-[80px] w-[100%]'>
            <VideoSlider2 type="true" VideoStyle="true" />
            {/* <FeatureFilmsComponent /> */}
        </div>
    </div>
  )
}

export default Movierow1
