import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useShowModal } from '../providers/ShowModalProvider';
import { useAppProvider } from '../providers/AppProvider';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {

    const { setIsShow } = useShowModal();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    useEffect(() => {

        const handleScrolling = () => {
            setIsMenuOpen(false)
        }

        window.addEventListener("scroll", handleScrolling);

        return () => {
            window.removeEventListener("scroll", handleScrolling)
        }

    }, [])

    return <>
        <nav className='my-5 flex-between max-sm:hidden'>
            <img
                onClick={() => navigate("/")}
                className='cursor-pointer'
                src={assets.logo} draggable={false} />
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
        <div className='relative z-30 md:hidden'>
            <div
                onClick={() => setIsMenuOpen(false)}
                className={`fixed top-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)] ${isMenuOpen ? "left-0" : "-left-[100%]"}`} />
            <div className='fixed left-0 top-0 py-2 w-[100%] flex-between px-3 backdrop-blur-md'>
                <img
                    onClick={() => navigate("/")}
                    className='cursor-pointer w-[100px]'
                    src={assets.logo} draggable={false} />
                <div className='gap-2 flex-items'>
                    <CiSearch className='w-[25px] h-[20px] font-bold cursor-pointer' />
                    <div
                        onClick={() => navigate("/delivery")}
                        className='relative'>
                        <span className='absolute -top-1 -right-1 w-[10px] h-[10px] bg-main_color rounded-full flex-center text-[10px] text-white'> {counterNotification} </span>
                        <RiShoppingBag3Fill className='w-[20px] h-[20px] font-bold cursor-pointer' />
                    </div>
                    <GiHamburgerMenu
                        onClick={() => setIsMenuOpen(true)}
                        className='font-bold cursor-pointer text-main_color' />
                </div>
            </div>
            <nav className={`fixed w-[50%] bg-orange-300 z-[200] top-0 bottom-0 right-0 p-4 ${isMenuOpen ? "left-0" : "-left-[100%]"} duration-300 transition-all`}>
                <FaTimes
                    onClick={() => setIsMenuOpen(false)}
                    className='absolute font-bold text-main_color top-3 right-3 text-[18px] z-50' />
                <img
                    onClick={() => navigate("/")}
                    className='cursor-pointer w-[100px]'
                    src={assets.logo} draggable={false} />
                <div className='h-full gap-2 mt-8 font-semibold flex-column'>
                    {
                        navLinks.map(({ id, name, link }) => {
                            return <NavLink
                                onClick={() => setIsMenuOpen(false)}
                                className="font-bold text-white text-[18px]"
                                key={id} to={link}> {name} </NavLink>
                        })
                    }
                </div>
                {/* <div className='gap-4 flex-items'>
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
                </div> */}
            </nav>
        </div>
        <Outlet />
    </>
}

export default NavBar