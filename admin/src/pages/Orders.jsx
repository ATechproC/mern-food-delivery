import React from 'react'
import { assets } from '../assets/index'
import Menu from '../components/Menu'
import { useState } from 'react'

const MyOrders = () => {

    const [orderState, setOrderState] = useState("")

    return <div className='flex gap-5 w-[100%]'>
        <Menu />
        <div className='w-full px-10 my-10'>
            <h2 className='text-[25px] font-bold mb-1'>My Orders</h2>
            <div className='p-3 my-5 border-2 border-black flex-between'>
                <img src={assets.parcel_icon} draggable={false} />
                <p>Greek salad x 2, Peri Peri Rolls x 3</p>
                <span>$65.00</span>
                <span>Items 2</span>
                <p>• Food Processing</p>
                <select
                    className='w-[120px] border border-gray-400 px-4 py-1 rounded cursor-pointer'
                    value={orderState} onChange={(e) => setOrderState(e.target.value)} >
                    <option value="state-1"> State 1</option>
                    <option value="state-2"> State 2</option>
                    <option value="state-3"> State 3</option>
                </select>
            </div>
        </div>
    </div>
}

export default MyOrders