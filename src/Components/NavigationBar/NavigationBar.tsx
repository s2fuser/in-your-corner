import React from 'react'

const NavigationBar = () => {
  return (
    <div className='bg-slate-100 w- full p-7 flex items-center justify-between '>
      <div className= ''>
        <img className='w-32 h-15 ' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />

      </div>
      <div className=''>
        <input className='rounded-full px-6 py-2 w-96 focus:outline-none focus:ring focus:border-blue-300' type='text' placeholder='search' />
      </div>
      <div className='space-x-3 font-sans font-bold'>
        <span>Home</span>
        <span>Team</span>
        <span>Blogs</span>
        <span>Videos</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
// w-96 border rounded-lg px-32 py-2
export default NavigationBar
