import React from 'react'
import Teamcard from './Teamcard'

const Teamcontent = () => {
    let content = [{
        name: "walter",
        position: "chief executive officer"
    },
    {
        name: "Sarah Jhonson",
        position: "Product Manager"
    },
    {
        name: "William Anderson",
        position: "CTO"
    },
  ]
    return (
        <div>
            
            <div className="text-center py-[30px]">
                <h2 className='font-bold text-4xl font-sans mb-2'>Team</h2>
                <p className='text-xl'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            
           {/* <div className='  grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-3 px-10 py-10'> */}
            <div className=' sm:flex sm:flex-col sm:items-center  md:flex md:flex-col  md:items-center lg:flex lg:flex-row lg:justify-around  gap-4  '>
                {
                    content.map((item, index) => (
                        <Teamcard name={item.name}
                            position={item.position}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default Teamcontent
