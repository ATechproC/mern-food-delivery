import React from 'react'
import { food_list } from '../assets/frontend_assets/assets'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";


const TopOrders = () => {
    return <div>
        <h2 className='text-[50px] font-bold my-8 text-center'>Top dishes for you </h2>
        <div className='grid grid-cols-4 gap-2'>
            {
                food_list.map(({ _id, name, image, price, description, category }) => {
                    return <div key={_id} className='bg-gray-100 w-[250px] flex-column gap-5 rounded-[10px] hover:-translate-y-2 duration-300 transition cursor-default'>
                        <div className='w-full rounded-[10px] overflow-hidden cursor-pointer'>
                            <img src={image} className='w-full h-full object-contain' draggable={false} />
                        </div>
                        <div className='flex-between gap-2 w-full px-2'>
                            <p className='text-center'> {name} </p>
                            <div className='flex-items gap-2 text-orange-500'>
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStarHalfStroke className='w-[20px] h-[25px] font-bold' />
                            </div>
                        </div>
                        <p className='text-gray-400 px-2 text-center font-semibold'> {description} </p>
                        <span className='text-orange-500 px-2 font-bold text-[18px] pb-5'> ${price} </span>
                    </div>
                })
            }
        </div>
    </div>
}

export default TopOrders