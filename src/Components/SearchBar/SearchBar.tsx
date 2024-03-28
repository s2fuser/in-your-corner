import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

type Prop = {
  searchValue?: string;
  onChangeFunction?: any;
};

const SearchBarComponent: React.FC<Prop> = ( { searchValue, onChangeFunction } ) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Focus on the input field when the component mounts
        inputRef.current?.focus();
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
    //   <div className='flex justify-center itmes-center'>
    //       <input type="text" placeholder='Search' className='raleway font-semibold text-sm h-6  rounded-3xl pl-5 focus:outline-none border-transparent focus:border-gray-300 w-[90%] lg:w-[115%] lg:ml-[0px] md:w-[140%] md:ml-[-15%] h-[40px] sm:ml-[-22px]' value={searchValue} onChange={onChangeFunction} ref={inputRef} onKeyDown={handleKeyPress} />
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
          <button onClick={navigateFunction}>
              <AiOutlineSearch className='text-stone-500 text-[24px] sm:ml-[-28px] md:ml-[-33px]' />
          </button>
      </div>
    )
}

export default SearchBarComponent;
