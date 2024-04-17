import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

type Prop = {
  searchValue?: string;
  onChangeFunction?: any;
};

const SearchBarComponent: React.FC<Prop> = ( { searchValue, onChangeFunction } ) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes('/firstPageSearch')) {
            inputRef.current?.focus();
        }
    }, []);

    const handleKeyPress = (event: any) => {
      if(event.key == "Enter") {
        navigateFunction()
      }
      else {
        console.log("It is not working");
        console.log(event)
      }
    }

    const navigateFunction = () => {
      navigate(`/firstPageSearch?query=${searchValue}`);
    }

    return (
        <div className="flex justify-center itmes-center input-wrapper">
            <input
                type="text"
                placeholder="Search"
                className="raleway half-bg-input text-sm h-6 rounded-xl pl-5 pr-4 focus:outline-none border-transparent focus:border-gray-300 w-full sm:w-[200%] md:w-[210%] lg:w-[250px] h-[40px] bg-black"
                value={searchValue}
                onChange={onChangeFunction}
                ref={inputRef}
                onKeyDown={handleKeyPress}
            />
            <button onClick={navigateFunction} className='cursor-pointer'>
              <AiOutlineSearch className='text-stone-500 text-[24px] sm:ml-[-28px] md:ml-[-33px]' />
            </button>
        </div>
    )
}

export default SearchBarComponent;
