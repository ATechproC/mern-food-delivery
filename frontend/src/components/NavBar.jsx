import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useShowModal } from '../providers/ShowModalProvider';

const NavBar = () => {

    const { setIsShow } = useShowModal();

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

    return <>
        <nav className='flex-between my-5'>
            <img src={assets.logo} draggable={false} />
            <div className='flex-items gap-5 font-semibold'>
                {
                    navLinks.map(({ id, name, link }) => {
                        return <NavLink key={id} to={link}> {name} </NavLink>
                    })
                }
            </div>
            <div className='flex-items gap-4'>
                <CiSearch className='w-[25px] h-[25px] font-bold cursor-pointer' />
                <RiShoppingBag3Fill className='w-[25px] h-[25px] font-bold cursor-pointer' />
                <button
                onClick={() => setIsShow(true)}
                    className='px-4 py-1 border border-black rounded-full'>Sign in</button>
            </div>
        </nav>
        <Outlet />
    </>
}

export default NavBar