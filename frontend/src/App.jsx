import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MobileApp from "./pages/MobileApp";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import SignModal from './components/SignModal';
import Delivery from './pages/Delivery';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='mobile-app' element={<MobileApp />} />
          <Route path='contact' element={<Contact />} />
          <Route path='delivery' element={<Delivery />} />
        </Route>
      </Route>
    )
  )
  return <>
    <SignModal />
    <div className='md:w-[80%] mx-auto overflow-hidden'>
      <RouterProvider router={router} />
    </div>
    <Footer />
  </>
}

export default App