import React from 'react'
import { assets } from "../assets/frontend_assets/assets"

const Hero = () => {
    return <div className='md:relative max-sm:mt-10'>
        <img src={assets.header_img} draggable={false} />
        <div className='absolute left-5 bottom-10 w-[50%]'>
            <div className='flex flex-col gap-10 text-white'>
                <h1 className='text-[55px] font-bold hidden md:block'>Order your favorite food here</h1>
                <p className='text-[18px] font-bold hidden md:block'>
                    <span className='block whitespace-nowrap'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className='block whitespace-nowrap'>
                        Officia qui voluptates eveniet recusandae fuga omnis laudantium asperiores ex minima magnam.
                    </span>
                </p>
                <a href='#menu'  className='bg-white hidden md:block text-center font-semibold px-3 py-2 rounded-full text-gray-500 w-[200px] cursor-pointer'>View Menu</a>
            </div>
        </div>
    </div>
}

export default Hero