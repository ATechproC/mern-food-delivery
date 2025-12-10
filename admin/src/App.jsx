import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AddItem from './pages/AddItem';
import ListItem from './pages/ListItem';
import Orders from './pages/Orders';
import NavBar from './components/NavBar';
import Menu from './components/Menu';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<NavBar />} >
                <Route path='/' element={<Menu />} />
                <Route path='add-item' element={<AddItem />} />
                <Route path='list' element={<ListItem />} />
                <Route path='orders' element={<Orders />} />
            </Route>
        )
    )

    return <div className='h-[100vh] overflow-hidden'>
        <RouterProvider router={router} />
    </div>
}

export default App