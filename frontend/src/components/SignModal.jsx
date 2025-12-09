import React, { useEffect, useState } from 'react'
import { FaSmile, FaTimes } from 'react-icons/fa'
import { useShowModal } from '../providers/ShowModalProvider'

const SignModal = () => {

    const { isShow, setIsShow } = useShowModal();

    const [loginState, setLoginState] = useState("signup");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 0)
                setIsShow(false)
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])

    useEffect(() => {
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setIsChecked("");
    }, [loginState, isShow])

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return <>
        <div
            onClick={() => setIsShow(false)}
            className={`fixed z-20 w-[100%] h-[100%] backdrop-blur-sm ${isShow ? "open-model" : "close-model"}`} />
        <form
            onSubmit={onSubmitHandler}
            className={`z-30 w-[400px] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded ${isShow ? "open-model" : "close-model"}`}>
            <FaTimes
                onClick={() => setIsShow(false)}
                className='absolute right-5 top-3 text-main_color text-[20px] cursor-pointer' />
            <h1 className='font-bold text-[25px] mb-3 text-main_color'> {loginState === "signup" ? "Sing Up" : "Login"}</h1>
            <div className='flex flex-col gap-3'>
                {loginState === "name" && <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' className='input-style' />}
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type='email'
                    className='input-style' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type='password'
                    className='input-style' />
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder='password Confirmation' type='password'
                    className='input-style' />
            </div>
            <button type='submit' className='w-full py-1 mt-5 mb-2 font-bold text-white rounded bg-main_color'>{loginState === "signup" ? "Sing Up" : "Login"}</button>
            <div className='flex gap-3'>
                <input type='checkBox' onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} className='cursor-pointer' />
                <p className='text-sm text-gray-500'>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            <p className='mt-2 text-gray-500'> {loginState === "signup" ? "Already have an account" : "Don't you have an account"}  ? <span
                onClick={() => setLoginState(prev => prev === "signup" ? "login" : "signup")}
                className='cursor-pointer text-main_color'> {loginState === "signup" ? "Login here" : "Create an account"}</span></p>
        </form>
    </>
}

export default SignModal