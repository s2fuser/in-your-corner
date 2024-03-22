import React from 'react'
import VideoSlider2 from '../../Components/VideoSlider2/VideoSlider2'

type Prop = {
  title?: string
}

const StoriesComponent: React.FC<Prop> = ( { title } ) => {
  return (
    <div>
      <div className='w-full h-120 overflow-x-hidden'>
                {title == 'true' ? <h1 className=' text-4xl font-semibold text-center mt-8 pb-4 sm:text-3xl'>
                    STORIES
                </h1> : ''}
               <div className='flex justify-between mt-4 sm:mt-[-20px] sm:mb-[20px]'>
                    <VideoSlider2 type="true" VideoType="Stories"/>
               </div>
            </div>
    </div>
  )
}

export default StoriesComponent
