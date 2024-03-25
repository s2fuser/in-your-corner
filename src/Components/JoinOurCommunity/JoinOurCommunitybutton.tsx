import { Console, log } from "console";
import React from "react";
import { Link } from "react-router-dom";

const JoinOurCommunityButton = () => {
    return (
        <div>
            <Link to="/JoinOurCommunity">
            <button  className='text-red-900 mt-7 mb-20 px-14 py-2.5 border border-2 border-red-900 rounded-3xl font-sans sm:text-sm xl:mt-[169px] lg:text-2xl xl:text-2xl 2xl:text-3xl lg:mt-[169px]'>
                Join Our Community
            </button>
            </Link>
        </div>
        
    )
}

export default JoinOurCommunityButton;