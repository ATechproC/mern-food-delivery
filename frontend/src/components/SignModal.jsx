import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useShowModal } from '../providers/ShowModalProvider'

const SignModal = () => {

    const { isShow, setIsShow } = useShowModal()

    return <>
        <div
            onClick={() => setIsShow(false)}
            className={`fixed z-20 w-[100%] h-[100%] backdrop-blur-sm ${isShow ? "block" : "hidden"}`} />
        <form className={`z-30 w-[400px] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded ${isShow ? "block" : "hidden"}`}>
            <FaTimes
                onClick={() => setIsShow(false)}
                className='absolute right-5 top-5 text-main_color text-[20px] cursor-pointer' />
            <h1 className='font-bold text-[25px] mb-3 text-main_color'>Sign Up</h1>
            <div className='flex flex-col gap-3'>
                <input placeholder='name'
                    className='input-style' />
                <input placeholder='email' type='email'
                    className='input-style' />
                <input placeholder='password' type='password'
                    className='input-style' />
                <input placeholder='password Confirmation' type='password'
                    className='input-style' />
            </div>
            <button className='bg-main_color w-full text-white font-bold py-1 rounded mt-5 mb-2'>Sign Up</button>
            <div className='flex gap-3'>
                <input type='checkBox' checked={true} className='cursor-pointer' />
                <p className='text-gray-500 '>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
        </form>
    </>
}

export default SignModal