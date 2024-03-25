import React, { useState } from 'react'
import SearchBarComponent from '../SearchBar/SearchBar';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Prop = {
  searchValue?: string,
  onChangeFunction?: any,
}

const LandingPageNavigationBar: React.FC<Prop> = ( { searchValue, onChangeFunction } ) => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', routeName: "/" },
    { id: 2, text: 'Team', routeName: "/team" },
    { id: 3, text: 'Blog', routeName: "/blog" },
    { id: 4, text: 'Videos', routeName: "/Videos" },
    { id: 5, text: 'Contact', routeName: "/contact" },
    { id: 6, text: 'About Us', routeName: "/stories" },
    // { id: 7, text: 'Pro-Life Voices', routeName: "/prolifevideos" },
    { id: 7, text: 'Music', routeName: "/trellestune" },
  ];

  return (
    <div className='bg-slate-100 w-full p-7 flex items-center justify-between' style={{ backgroundColor: 'rgba(159, 159, 207, 0.65)'}}>
      <div className= ''>
        <Link to="/">
          <img className='w-24 lg:w-32 h-15' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />
        </Link>
      </div>
      <div className='hidden lg:flex gap-x-7 mr-3 md:ml-[25px] md:mr-[186px] font-sans ml-[85px] xl:ml-[130px]'>
        <Link to="/">
          <span className='hover:opacity-50 hover:text-2xl hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer'>Home</span>
        </Link>
        <Link to="/team">
          <span className='hover:opacity-50 hover:text-2xl hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer'>Team</span>
        </Link>
        <Link to="/blog">
          <span className='hover:opacity-50 hover:text-2xl hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer'>Blogs</span>
        </Link>
        {/* <span>Videos</span> */}
        <Link to="/contact">
          <span className='hover:opacity-50 hover:text-2xl hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer'>Contact</span>
        </Link>
        <Link to="/aboutUs">
          <span className='hover:opacity-50 hover:text-2xl hover:text-white font-semibold xl:text-xl 2xl:text-2xl cursor-pointer'>About Us</span>
        </Link>
        <Link to="/Videos">
          <span className=' hover:opacity-50 hover:text-2xl hover:text-white  font-semibold xl:text-xl 2xl:text-2xl cursor-pointer'>Videos</span>
        </Link>
        {/* <Link to="/trellestune">
          <span>Music</span>
        </Link> */}
      </div>
      <div className='lg:flex-1 sm:ml-[15px] md:ml-[-50px] '>
        <SearchBarComponent searchValue={searchValue} onChangeFunction={onChangeFunction} />
      </div>

      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} color='black' /> : <AiOutlineMenu size={20} color='black' />}
      </div>

      <ul
        className={
          nav
            ? 'fixed z-[9] lg:hidden left-0 top-0 w-[35%] h-full bg-slate-100 ease-in-out duration-500 text-black z-[9]'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-[9]'
        }
      >
        {/* Mobile Logo */}
        <div className='py-6 pl-2'>
          <img className='w-32 h-15 ' src='https://inyourcorner.info/wp-content/uploads/2023/04/cropped-new-300x127-1.png' alt='logo' />
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
  )
}

export default LandingPageNavigationBar
