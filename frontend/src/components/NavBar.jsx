import React from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useShowModal } from '../providers/ShowModalProvider';
import { useAppProvider } from '../providers/AppProvider';

const NavBar = () => {

    const { setIsShow } = useShowModal();

    const navigate = useNavigate();

    const navLinks = [
        {
            "id": 1,
            "name": "Home",
            "link": "/"
        },
        {
            "id": 2,
            "name": "Menu",
            "link": "/menu"
        },
        {
            "id": 3,
            "name": "Mobile App",
            "link": "/mobile-app"
        },
        {
            "id": 4,
            "name": "Contact Us",
            "link": "/contact"
        }
    ]

    const { counterNotification } = useAppProvider();

    return <>
        <nav className='my-5 flex-between'>
            <img src={assets.logo} draggable={false} />
            <div className='gap-5 font-semibold flex-items'>
                {
                    navLinks.map(({ id, name, link }) => {
                        return <NavLink key={id} to={link}> {name} </NavLink>
                    })
                }
            </div>
            <div className='gap-4 flex-items'>
                <CiSearch className='w-[25px] h-[25px] font-bold cursor-pointer' />
                <div
                    onClick={() => navigate("/delivery")}
                    className='relative'>
                    <span className='absolute -top-1 -right-1 w-[15px] h-[15px] bg-main_color rounded-full flex-center text-[10px] text-white'> {counterNotification} </span>
                    <RiShoppingBag3Fill className='w-[25px] h-[25px] font-bold cursor-pointer' />
                </div>
                <button
                    onClick={() => setIsShow(true)}
                    className='px-4 py-1 border border-black rounded-full'>Sign in</button>
            </div>
        </nav>
        <Outlet />
    </>
}

export default NavBar