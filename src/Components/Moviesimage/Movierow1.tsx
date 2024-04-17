import React, { useEffect, useState } from 'react'
import VideoSlider from '../VideoSlider/VideoSlider'
import VideoSlider2 from '../VideoSlider2/VideoSlider2'
import FeatureFilmsComponent from '../FeatureFilms/FeatureFilms'
import axios from 'axios'

const Movierow1 = () => {

  const [Shorts, setShorts] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response: any = await axios.get("https://inc.s2ftech.in/api/getShorts");
    setShorts(response.data.data);
  };

  return (
    <div className='w-full h-100 mt-1 mb-1 flex justify-between overflow-x-hidden sm:mt-[-75px]'>
        <div className='sm:mt-[80px] w-[100%]'>
            <VideoSlider2 type="true" VideoStyle="true" Data={Shorts} />
            {/* <FeatureFilmsComponent /> */}
        </div>
    </div>
  )
}

export default Movierow1
