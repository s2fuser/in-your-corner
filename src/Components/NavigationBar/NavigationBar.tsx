import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Team' },
    { id: 3, text: 'Blog' },
    { id: 4, text: 'Videos' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-slate-100 w-full p-7 flex justify-between items-center'>
      {/* Logo */}
      <div className= ''>
        <img className='w-24 lg:w-32 h-15 ' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />
      </div>
      <div className=''>
        <input className='rounded-full px-6 py-2 w-[80%] lg:w-96 focus:outline-none focus:ring focus:border-blue-300' type='text' placeholder='search' />
      </div>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex text-black font-bold space-x-4 font-sans'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='cursor-pointer'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} color='black' /> : <AiOutlineMenu size={20} color='black' />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-slate-100 ease-in-out duration-500 text-black'
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
  );
};

export default Navbar;