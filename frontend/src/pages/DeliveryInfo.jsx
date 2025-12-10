import React, { useState } from 'react'

const DeliveryInfo = () => {

    const [deliveryInfo, setDeliveryInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: ""
    })

    return <div>
        <div className='flex justify-between w-full my-10 max-sm:flex-column max-sm:gap-5'>
            <div className='md:w-[50%]'>
                <h2 className='text-[25px] font-bold mb-1'>Delivery Information</h2>
                <form className='flex flex-col gap-2'>
                    <div className='gap-2 flex-items'>
                        <input
                            value={deliveryInfo.firstName} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, firstName: e.target.value }))}
                            placeholder='First name' className='w-[100%] border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                        <input
                            value={deliveryInfo.lastName} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, lastName: e.target.value }))}
                            placeholder='Last name' className='w-[100%]  border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                    </div>
                    <input
                        value={deliveryInfo.email} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, email: e.target.value }))}
                        placeholder='Email address' className='w-[100%] border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                    <input
                        value={deliveryInfo.street} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, street: e.target.value }))}
                        placeholder='Street' className='w-[100%]  border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                    <div className='gap-2 flex-items'>
                        <input
                            value={deliveryInfo.city} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, city: e.target.value }))}
                            placeholder='City' className='w-[100%] border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                        <input
                            value={deliveryInfo.state} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, state: e.target.value }))}
                            placeholder='State' className='w-[100%]  border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                    </div>
                    <div className='gap-2 flex-items'>
                        <input
                            value={deliveryInfo.zipCode} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, zipCode: e.target.value }))}
                            placeholder='Zip code' className='w-[100%] border-[.8px] border-gray-500 px-3 py-1 rounded  focus:outline-main_color' />
                        <input
                            value={deliveryInfo.country} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, country: e.target.value }))}
                            placeholder='Country' className='w-[100%] border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                    </div>
                    <input
                        value={deliveryInfo.phone} onChange={(e) => setDeliveryInfo(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder='Phone' className='w-[100%]  border-[.8px] border-gray-500 px-3 py-1 rounded focus:outline-main_color' />
                </form>
            </div>
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
                    className='px-5 py-1 my-3 font-bold text-white rounded bg-main_color'>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </div>
}

export default DeliveryInfo