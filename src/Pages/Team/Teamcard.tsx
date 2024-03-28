import React from 'react'
import blog from "../../Assets/blogimages/blog1.jpg"
type Teamcardtype = {
    name: string;
    position: string;
    index: number;
}
const Teamcard = ({ name, position, index }: Teamcardtype) => {
    return (
        <div className="">
           
            <div key={index} className=" text-white mb-4">
                <div>
                    <img
                        src={blog}
                        alt="photo"
                        className='rounded-full  h-[13rem] w-[13rem]'
                        data-aos="flip-up"
                    />
                </div>
                <div className="p-4"  data-aos="zoom-in">
                    <h2 className="text-black text-center text-2xl font-bold mb-2 ">{name}</h2>
                    <p className="text-gray-400 text-base text-center">{position}</p>
                    {/* <p className='text-xl text-black text-center'>Katerina Ivanovna had just begun, as she always did at every free moment, walking to and fro in her little room from window to stove and back again, with her arms folded across her chest, talking to herself and coughing.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Teamcard
