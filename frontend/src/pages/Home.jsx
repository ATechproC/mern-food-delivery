import React from 'react'
import Menu from './Menu'
import Hero from '../components/Hero'
import TopOrders from '../components/TopOrders'
import ToTop from '../components/TopScroller'

const Home = () => {
    return <>
    <ToTop />
        <Hero />
        <Menu />
        {/* <hr className='bg-gray-400 my-5 h-[4px] w-[90%] mx-auto rounded-full' /> */}
        <TopOrders />
    </>
}

export default Home