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
        <TopOrders />
    </>
}

export default Home