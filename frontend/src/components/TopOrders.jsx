import React, { useEffect, useState } from 'react'
import { food_list } from '../assets/frontend_assets/assets'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppProvider } from '../providers/AppProvider';

const TopOrders = () => {

    const [foodList, setFoodList] = useState(food_list);
    const { setCounterNotification } = useAppProvider();

    const handleShowCounter = (id) => {
        const newArray = [...food_list];
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i]._id === id) {
                newArray[i] = { ...newArray[i], showCounter: true };
            }
        }
        setFoodList(newArray);
    }

    const handleCounter = (id, status) => {
        const newArray = [...foodList];
        for (let i = 0; i < newArray.length; i++) {
            let value = newArray[i].counter;
            if (newArray[i]._id === id) {
                if (status === "add") {
                    value = parseInt(value) + 1;
                    newArray[i] = { ...newArray[i], counter: value }
                } else {
                    if (value > 0) {
                        value = parseInt(value) - 1;
                        newArray[i] = { ...newArray[i], counter: value }
                    }
                }
            }
        }
        setFoodList(newArray);
    }

    // const CalculateSum = () => {
    //     let counter = 0;
    //     for (let i = 0; i < foodList.length; i++) {
    //         counter += foodList[i].counter;
    //     }
    //     setCounterNotification(counter);
    // }

    // useEffect(() => {
    //     CalculateSum();
    // }, [foodList]);

    return <div>
        <h2 className='text-[50px] font-bold my-8 text-center'>Top dishes for you </h2>
        <div className='grid grid-cols-1 gap-2 text-center md:grid-cols-4'>
            {
                foodList.map(({ _id, name, image, price, description, category, showCounter, counter }) => {
                    return <div key={_id} className='bg-gray-100 md:w-[250px] flex-column gap-5 rounded-[10px] hover:-translate-y-2 duration-300 transition cursor-default mx-auto w-[300px] mt-3'>
                        <div className='relative w-full rounded-[10px] overflow-hidden cursor-pointer'>
                            <img src={image} className='object-contain w-full h-full' draggable={false} />
                            {
                                showCounter ? <div className={`absolute gap-2 px-2 py-1 bg-white flex-row-reverse rounded-full right-3 bottom-3 flex-items`}>
                                    <div className='bg-red-300  w-[20px] h-[20px] rounded-full flex-center cursor-pointer'>
                                        <FaPlus
                                            onClick={() => handleCounter(_id, "add")}
                                            size={10} color='red' />
                                    </div>
                                    <span> {counter === false ? "" : counter} </span>
                                    <div className='bg-green-300 w-[20px] h-[20px] rounded-full flex-center flex-row-reverse cursor-pointer'>
                                        <FaMinus
                                            onClick={() => handleCounter(_id, "minus")}
                                            size={10} color='green' />
                                    </div>

                                </div>
                                    : <div
                                        onClick={() => handleShowCounter(_id)}
                                        className='absolute right-3 bottom-3 w-[30px] h-[30px] rounded-full flex-center cursor-pointer bg-white'>
                                        <FaPlus size={13} />
                                    </div>
                            }
                        </div>
                        <div className='w-full gap-2 px-2 flex-between'>
                            <p className='text-center'> {name} </p>
                            <div className='gap-2 text-orange-500 flex-items'>
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStar className='w-[20px] h-[25px] font-bold' />
                                <FaStarHalfStroke className='w-[20px] h-[25px] font-bold' />
                            </div>
                        </div>
                        <p className='px-2 font-semibold text-center text-gray-400'> {description} </p>
                        <span className='text-orange-500 px-2 font-bold text-[18px] pb-5'> ${price} </span>
                    </div>
                })
            }
        </div>
    </div>
}

export default TopOrders