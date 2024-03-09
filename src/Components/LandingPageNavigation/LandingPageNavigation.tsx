import React from 'react'
import SearchBarComponent from '../SearchBar/SearchBar'

const LandingPageNavigationBar = () => {
  return (
    <div className='bg-slate-100 w- full p-7 flex items-center justify-between '>
      <div className= ''>
        <img className='w-32 h-15 ' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />

      </div>
      <div className='flex gap-x-7 mr-3 ml-3 font-sans ml-[200px]'>
        <span>Home</span>
        <span>Team</span>
        <span>Blogs</span>
        {/* <span>Videos</span> */}
        <span>Contact</span>
      </div>
      <div className='flex-1'>
        {/* <input type='text' placeholder='search' /> */}
        <SearchBarComponent/>
      </div>
    </div>
  )
}

export default LandingPageNavigationBar
