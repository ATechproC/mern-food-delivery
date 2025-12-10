import React from 'react'
import { assets } from '../assets'
import Menu from '../components/Menu'
import { useState } from 'react'

const AddItem = () => {

    const [productDetails, setProductDetails] = useState({
        image: "",
        name: "",
        desc: "",
        category: "",
        price: ""
    })

    return <div className='flex gap-10'>
        <Menu />
        <form className='flex flex-col gap-5'>
            <div>
                <p className='text-gray-400 text-[18px]'>Upload Image</p>
                <label htmlFor='img'>
                    <img src={productDetails.image ? URL.createObjectURL(productDetails.image) : assets.upload_area} className='w-[120px]  h-[100px] mt-1 rounded' draggable={false} />
                </label>
                <input id='img' type='file' onChange={(e) => setProductDetails(prev => ({ ...prev, image: e.target.files[0] }))} hidden={true} />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='product-name' className='text-gray-400 '>Product Name </label>
                <input type='text' value={productDetails.name} onChange={(e) => setProductDetails(prev => ({ ...prev, name: e.target.value }))} id='product-name' placeholder='Type here' className='px-3 py-1 text-gray-400 border border-gray-400 rounded-[5px] outline-none w-[300px]' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='product-desc' className='text-gray-400 '>Product Description </label>
                <textarea id='product-desc' value={productDetails.desc} onChange={(e) => setProductDetails(prev => ({ ...prev, desc: e.target.value }))} placeholder='Add Product Description' className='px-3 py-1 w-[300px] h-[100px] rounded-[5px] outline-none border border-gray-400 text-gray-400' />
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='product-category' className='text-gray-400'>Product Category</label>
                    <select id='product-category' value={productDetails.category} onChange={(e) => setProductDetails(prev => ({ ...prev, category: e.target.value }))} className='px-3 py-2 border border-gray-400 rounded outline-none' >
                        <option value="category-1" > category 1 </option>
                        <option value="category-2" > category 2 </option>
                        <option value="category-3" > category 3 </option>
                    </select>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='product-price' className='text-gray-400'>Product Price</label>
                    <input id='product-price' value={productDetails.price} onChange={(e) => setProductDetails(prev => ({ ...prev, price: e.target.value }))} className='px-3 py-[5px] w-[120px] border border-gray-400 rounded outline-none' type='text' />
                </div>
            </div>
            <button type='submit' className='px-3 py-2 w-[120px] bg-black text-white font-bold rounded'>Add</button>
        </form>
    </div>
}

export default AddItem