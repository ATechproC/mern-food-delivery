import React from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {

    return <div className='p-4 mt-5 bg-gray-800 rounded md:px-10'>
        <div className='flex justify-between w-full gap-2 mt-10 bg-gray-800 max-sm:flex-col max-sm:gap-10'>
            <div className='flex flex-col gap-4'>
                <div className='w-[200px] h-[50px]'>
                    <img src={assets.logo} draggable={false} className='object-contain w-full h-full' />
                </div>
                <p className='text-white font-bold text-[18px] w-[500px] max-sm:hidden'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est praesentium officiis beatae aut quasi culpa sunt id iste tempore?
                </p>
                <div className='gap-3 flex-items max-sm:hidden'>
                    <div className='w-[40px] h-[40px] rounded-[10px] flex-center border-2 p-1 border-white cursor-pointer'>
                        <FaFacebookF className='text-white text-[25px] font-bold' />
                    </div>
                    <div className='w-[40px] h-[40px] rounded-[10px] flex-center border-2 p-1 border-white cursor-pointer'>
                        <FaTwitter className='text-white text-[25px] font-bold' />
                    </div>
                    <div className='w-[40px] h-[40px] rounded-[10px] flex-center border-2 p-1 border-white cursor-pointer'>
                        <FaLinkedin className='text-white text-[25px] font-bold' />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-white text-[25px] mb-2'>COMPANY</h2>
                <div className='flex flex-col gap-2 text-white'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Delivery</p>
                    <p>Privacy policy</p>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-white text-[25px] mb-2'>GIT IN TOUCH</h2>
                <span className='text-white'>choraichianass@gmail.com</span>
            </div>
            <div className='gap-3 flex-items md:hidden'>
                <div className='w-[40px] h-[40px] rounded-[10px] flex-center border-2 p-1 border-white cursor-pointer'>
                    <FaFacebookF className='text-white text-[25px] font-bold' />
                </div>
                <div className='w-[40px] h-[40px] rounded-[10px] flex-center border-2 p-1 border-white cursor-pointer'>
                    <FaTwitter className='text-white text-[25px] font-bold' />
                </div>
                <div className='w-[40px] h-[40px] rounded-[10px] flex-center border-2 p-1 border-white cursor-pointer'>
                    <FaLinkedin className='text-white text-[25px] font-bold' />
                </div>
            </div>
        </div>
        <hr className='bg-gray-400 my-5 h-[4px] w-[90%] mx-auto rounded-full' />
        <p className='text-center text-white'>Copyright 2024 © Tomato.com - All Right Reserved</p>
    </div>
}

export default Footer