import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Images/logo.png"

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', routeName: "/" },
    { id: 2, text: 'Team', routeName: "/team" },
    { id: 3, text: 'Blog', routeName: "/blog" },
    { id: 4, text: 'Videos', routeName: "/Videos" },
    { id: 5, text: 'Contact', routeName: "/contact" },
    { id: 6, text: 'Pro-Life Voices', routeName: "/prolifevideos" },
    { id: 7, text: 'About Us', routeName: "/aboutUs" },
  ];

  return (
    <div className='bg-slate-100 w-full p-7 flex justify-between items-center'>
      {/* Logo */}
      <div className= ''>
        <Link to="/">
          <img className='w-24 lg:w-32 h-15' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />
        </Link>
      </div>
      <div className='md:ml-[-90px] lg:ml-[0px]'>
        <input className='rounded-full px-6 py-2 w-[80%] md:w-[130%] lg:w-96 focus:outline-none focus:ring focus:border-blue-300 sm:ml-[10px]' type='text' placeholder='search' />
      </div>
      {/* Desktop Navigation */}
      <ul className='hidden lg:flex text-black font-semibold space-x-4 font-sans'>
        {navItems.map(item => (
          <Link to={item.routeName}>
            <li
              key={item.id}
              className='cursor-pointer xl:text-xl 2xl:text-2xl'
            >
              {item.text}
              {/* {item.text === 'Videos' && (
                <ul>
                  <li>
                    <Link to="/trellestune" className='cursor-pointer'>
                      Music
                    </Link>
                  </li>
                </ul>
              )} */}
            </li>
          </Link>
          
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} color='black' /> : <AiOutlineMenu size={20} color='black' />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-slate-100 ease-in-out duration-500 text-black z-[9]'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-[9]'
        }
      >
        {/* Mobile Logo */}
        <div className='py-6 pl-2'>
          <img className='w-32 h-15 ' src={Logo} alt='logo' />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.routeName}>
            <li
            key={item.id}
            className='p-4 border-b font-bold text-black rounded-xl cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          </Link>
          
        ))}
      </ul>
    </div>
  );
};

export default Navbar;