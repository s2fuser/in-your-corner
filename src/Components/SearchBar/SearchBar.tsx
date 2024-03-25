import React from 'react';

type Prop = {
    searchValue?: string,
    onChangeFunction?: any,
}

const SearchBarComponent: React.FC<Prop> = ( { searchValue, onChangeFunction } ) => {
    return (
        // <div>
            <input type="text" placeholder='Search' className='font-semibold text-sm h-6  rounded-3xl pl-5 focus:outline-none border-transparent focus:border-gray-300 w-[80%] lg:w-[100%] lg:ml-[0px] md:w-[140%] md:ml-[-15%]' value={searchValue} onChange={onChangeFunction} />
        // </div>
    )
}

export default SearchBarComponent