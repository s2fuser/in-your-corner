import { Console, log } from "console";
import React from "react";
import { Link } from "react-router-dom";

const JoinOurCommunityButton = () => {
    return (
        <div>
            {/* <Link to="/JoinOurCommunity">  */}
            <button  className='raleway text-red-900 mt-7 mb-20 px-14 py-2.5  hover:text-white hover:border-red-900 hover:bg-red-950  border-2 border-red-900 rounded-3xl font-sans sm:text-sm xl:mt-[-23px] lg:text-2xl md:mt-[-0.75rem] xl:text-2xl 2xl:text-3xl lg:mt-[-21px] relative z-[999] sm:mt-[40px]'>
                Join Our Community
            </button>
            {/* </Link> */}
        </div>
        
    )
}

export default JoinOurCommunityButton;
