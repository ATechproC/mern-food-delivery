import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Delivery = () => {

    const navigate = useNavigate();

    const [promoCode, setPromoCode] = useState("");

    return <div className='my-8'>
        <table className='w-full my-8 text-center border-2 border-gray-600'>
            <thead className='font-bold'>
                <tr>
                    <td className='max-sm:text-[10px]'>Plate</td>
                    <td className='max-sm:text-[10px]'>Title</td>
                    <td className='max-sm:text-[10px]'>Price</td>
                    <td className='max-sm:text-[10px]'>Quantity</td>
                    <td className='max-sm:text-[10px]'>Total</td>
                    <td className='max-sm:text-[10px]'>Remove</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img className='w-[100px] object-contain mx-auto p-2' src={assets.food_1} draggable={false} />
                    </td>
                    <td>food 1</td>
                    <td>70$</td>
                    <td>10</td>
                    <td>700$</td>
                    <td>
                        <FaTimes className='mx-auto max-sm:text-[10px]' cursor={"pointer"} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <img className='w-[100px] object-contain mx-auto p-2' src={assets.food_1} draggable={false} />
                    </td>
                    <td>food 1</td>
                    <td>70$</td>
                    <td>10</td>
                    <td>700$</td>
                    <td>
                        <FaTimes className='mx-auto  max-sm:text-[10px]' cursor={"pointer"} />
                    </td>
                </tr>
            </tbody>
        </table>
        <div className='flex justify-between w-full max-sm:gap-5 max-sm:flex-column'>
            <div className='md:w-[400px] w-full'>
                <h2 className='text-[25px] font-bold mb-1'>Cart Totals</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex-between'>
                        <p>SubTotal</p>
                        <span>100$</span>
                    </div>
                    <hr className='h-[1px] w-4/5 bg-gray-500 mx-auto rounded-full font-bold' />
                    <div className='flex-between'>
                        <p>Delivery fee</p>
                        <span>10$</span>
                    </div>
                    <hr className='h-[1px] w-4/5 bg-gray-500 mx-auto rounded-full font-bold' />
                    <div className='flex-between'>
                        <p>Total</p>
                        <span>110$</span>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/delivery-info")}
                    className='px-5 py-1 my-3 font-bold text-white rounded bg-main_color whitespace-nowrap'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='mt-5'>
                <p className='text-gray-500'>If you have a promo code. Enter it here</p>
                <div className='gap-4 mt-2 flex-items max-sm:flex-column'>
                    <input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} type='text' className='bg-gray-200 input-style md:w-[400px] max-sm:w-[300px]' />
                    <button
                        className='px-5 py-1 font-bold text-white bg-black rounded'>Submit</button>
                </div>
            </div>
        </div>
    </div>
}

export default Delivery