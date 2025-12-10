import React from 'react';
import { assets } from "../assets/index"
import Menu from "../components/Menu"
import { FaTimes } from 'react-icons/fa'

const ListItem = () => {
    return <div className='flex gap-5'>
        <Menu />
        <div className='w-[100%] px-10'>
            <h1 className='text-[20px] font-bold'>All Food List</h1>
            <table className='w-full my-8 text-center border-2 border-gray-600'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className='w-[100px] object-contain mx-auto p-2' src={assets.food} draggable={false} />
                        </td>
                        <td>Product Name</td>
                        <td>Category Name</td>
                        <td>100$</td>
                        <td>
                            <FaTimes className='mx-auto max-sm:text-[10px]' cursor={"pointer"} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default ListItem