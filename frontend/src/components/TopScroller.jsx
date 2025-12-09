import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const TopScroller = () => {

    const [isShow, setIsShow] = useState(false);

    const handleScrollerButton = () => {
        window.scrollTo({
            top: 0,
            behavior : 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 600) setIsShow(true);
            else setIsShow(false)
        })
    }, []);

    return isShow &&
        <div onClick={handleScrollerButton}
            className='fixed right-4 bottom-4 bg-orange-600 w-[40px] h-[40px] flex-center rounded-[10px] cursor-pointer'>
            <FaArrowUp size={20} color='#fff' />
        </div>

}

export default TopScroller