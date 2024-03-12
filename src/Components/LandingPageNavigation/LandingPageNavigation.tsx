import React, { useState } from 'react'
import SearchBarComponent from '../SearchBar/SearchBar';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const LandingPageNavigationBar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Team' },
    { id: 3, text: 'Blog' },
    { id: 4, text: 'Videos' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-slate-100 w-full p-7 flex items-center justify-between '>
      <div className= ''>
        <img className='w-24 lg:w-32 h-15 ' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />

      </div>
      <div className='hidden md:flex lg:flex gap-x-7 mr-3 ml-3 font-sans ml-[200px]'>
        <span>Home</span>
        <span>Team</span>
        <span>Blogs</span>
        {/* <span>Videos</span> */}
        <span>Contact</span>
      </div>
      <div className='lg:flex-1 sm:ml-[15px]'>
        <SearchBarComponent/>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} color='black' /> : <AiOutlineMenu size={20} color='black' />}
      </div>

      <ul
        className={
          nav
            ? 'fixed z-[9] md:hidden left-0 top-0 w-[35%] h-full bg-slate-100 ease-in-out duration-500 text-black'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className='py-6 pl-2'>
          <img className='w-32 h-15 ' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b font-bold text-black rounded-xl cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default LandingPageNavigationBar
