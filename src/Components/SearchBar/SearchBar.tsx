import React, { useRef, useEffect } from 'react';

type Prop = {
    searchValue?: string,
    onChangeFunction?: any,
}

const SearchBarComponent: React.FC<Prop> = ( { searchValue, onChangeFunction } ) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Focus on the input field when the component mounts
        inputRef.current?.focus();
      }, []);

    return (
        // <div>
            <input type="text" placeholder='Search' className='font-semibold text-sm h-6  rounded-3xl pl-5 focus:outline-none border-transparent focus:border-gray-300 w-[80%] lg:w-[115%] lg:ml-[0px] md:w-[140%] md:ml-[-15%]' value={searchValue} onChange={onChangeFunction} ref={inputRef} />
        // </div>
    )
}

export default SearchBarComponent