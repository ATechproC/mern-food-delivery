import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { PiListChecksFill } from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { NavLink } from "react-router-dom"

const Menu = () => {

    return <div className='h-[100vh]'>
        <div className='h-[100%] rounded w-[200px] border-2 border-gray-400 px-3 py-4 '>
            <NavLink to="/add-item"
                className='gap-3 flex-center font-bold text-[18px] text-gray-400 mt-[5px] border-2 rounded cursor-pointer border-gray-500 text-center'>
                <IoMdAddCircleOutline className='text-[20px]' />
                <p>Add Item</p>
            </NavLink>
            <NavLink to="/list"
                className='gap-3 flex-center font-bold text-[18px] text-gray-400 mt-[5px] border-2 rounded cursor-pointer border-gray-500 text-center'>
                <PiListChecksFill className='text-[20px]' />
                <p>List Item</p>
            </NavLink>
            <NavLink to="/orders"
                className='gap-6 flex-center font-bold text-[18px] text-gray-400 mt-[5px] border-2 rounded cursor-pointer border-gray-500 text-center'>
                <MdBorderColor className='text-[20px]' />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
}

export default Menu