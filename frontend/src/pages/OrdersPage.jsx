import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const MyOrders = () => {
    return <div className='my-10'>
        <h2 className='text-[25px] font-bold mb-1'>My Orders</h2>
        <div className='p-3 my-5 border-2 border-black flex-between'>
            <img src={assets.bag_icon} draggable={false} />
            <p>Greek salad x 2, Peri Peri Rolls x 3</p>
            <span>$65.00</span>
            <span>Items 2</span>
            <p>• Food Processing</p>
            <p>Track Order</p>
        </div>
    </div>
}

export default MyOrders