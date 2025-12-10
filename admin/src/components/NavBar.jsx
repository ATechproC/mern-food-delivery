import React from 'react'
import { assets } from '../assets';
import { useNavigate, Outlet } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate("/")

    return (
        <>
            <nav className='relative w-[80%] mx-auto py-3 cursor-pointer flex-between'>
                <img
                    onClick={() => navigate("/")}
                    src={assets.logo} draggable={false} className='w-[100px]' />
                <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                    <img src={assets.profile_image} className='object-contain w-full h-full cursor-pointer' />
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar